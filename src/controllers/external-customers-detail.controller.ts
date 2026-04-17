import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import * as bcrypt from 'bcryptjs';
import {ExternalCustomersDetail, ForteUser} from '../models';
import {ExternalCustomersDetailRepository, ForteUserRepository} from '../repositories';

export class ExternalCustomersDetailController {
  constructor(
    @repository(ExternalCustomersDetailRepository)
    public externalCustomersDetailRepository: ExternalCustomersDetailRepository,
    @repository(ForteUserRepository)
    public forteUserRepository: ForteUserRepository,
  ) { }

  @post('/external-customers-details/createExternalCustomer')
  async createExternalCustomer(@requestBody() externalCustomersDetail: Omit<ExternalCustomersDetail, 'id'> & {password: string}) {
    if (!externalCustomersDetail.email || !externalCustomersDetail.username || !externalCustomersDetail.password || !externalCustomersDetail.companyId || !externalCustomersDetail.salesRepId) {
      throw new HttpErrors.BadRequest('Missing fields');
    }
    const emailExisting = await this.forteUserRepository.findOne({where: {email: externalCustomersDetail.email}});
    if (emailExisting) throw new HttpErrors.BadRequest('Email exists');
    const usernameExisting = await this.forteUserRepository.findOne({where: {username: externalCustomersDetail.username}});
    if (usernameExisting) throw new HttpErrors.BadRequest('Username exists');
    const externalEmailExisting = await this.externalCustomersDetailRepository.findOne({where: {email: externalCustomersDetail.email}});
    if (externalEmailExisting) throw new HttpErrors.BadRequest('Email exists');
    const externalUsernameExisting = await this.externalCustomersDetailRepository.findOne({where: {username: externalCustomersDetail.username}});
    if (externalUsernameExisting) throw new HttpErrors.BadRequest('Username exists');
    const allowedUserTypes = ['web', 'non-web'];
    if (!allowedUserTypes.includes(externalCustomersDetail.userType as any)) {
      throw new HttpErrors.BadRequest('Invalid userType. Allowed values are: web, non-web');
    }
    const {password, ...externalCustomerData} = externalCustomersDetail;
    const forteUserObject: Partial<ForteUser> = {
      name: externalCustomerData.customerName,
      username: externalCustomerData.username,
      email: externalCustomerData.email,
      password: await bcrypt.hash(password!, 10),
      status: 'active',
      userType: externalCustomerData.userType,
    };
    const forteUserCreated = await this.forteUserRepository.create(forteUserObject);
    externalCustomerData.status = 'active';
    externalCustomerData.forteUserId = Number(forteUserCreated.id);
    const externalCustomerCreated = await this.externalCustomersDetailRepository.create(externalCustomerData);
    return externalCustomerCreated;
  }

  @post('/external-customers-details')
  @response(200, {
    description: 'ExternalCustomersDetail model instance',
    content: {'application/json': {schema: getModelSchemaRef(ExternalCustomersDetail)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {
            title: 'NewExternalCustomersDetail',
            exclude: ['id'],
          }),
        },
      },
    })
    externalCustomersDetail: Omit<ExternalCustomersDetail, 'id'>,
  ): Promise<ExternalCustomersDetail> {
    return this.externalCustomersDetailRepository.create(externalCustomersDetail);
  }

  @get('/external-customers-details/count')
  @response(200, {
    description: 'ExternalCustomersDetail model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ExternalCustomersDetail) where?: Where<ExternalCustomersDetail>,
  ): Promise<Count> {
    return this.externalCustomersDetailRepository.count(where);
  }

  @get('/external-customers-details')
  @response(200, {
    description: 'Array of ExternalCustomersDetail model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ExternalCustomersDetail, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ExternalCustomersDetail) filter?: Filter<ExternalCustomersDetail>,
  ): Promise<ExternalCustomersDetail[]> {
    return this.externalCustomersDetailRepository.find(filter);
  }

  @patch('/external-customers-details')
  @response(200, {
    description: 'ExternalCustomersDetail PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {partial: true}),
        },
      },
    })
    externalCustomersDetail: ExternalCustomersDetail,
    @param.where(ExternalCustomersDetail) where?: Where<ExternalCustomersDetail>,
  ): Promise<Count> {
    return this.externalCustomersDetailRepository.updateAll(externalCustomersDetail, where);
  }

  @get('/external-customers-details/{id}')
  @response(200, {
    description: 'ExternalCustomersDetail model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ExternalCustomersDetail, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ExternalCustomersDetail, {exclude: 'where'}) filter?: FilterExcludingWhere<ExternalCustomersDetail>
  ): Promise<ExternalCustomersDetail> {
    return this.externalCustomersDetailRepository.findById(id, filter);
  }

  @patch('/external-customers-details/{id}')
  @response(204, {
    description: 'ExternalCustomersDetail PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {partial: true}),
        },
      },
    })
    externalCustomersDetail: ExternalCustomersDetail,
  ): Promise<void> {
    await this.externalCustomersDetailRepository.updateById(id, externalCustomersDetail);
  }

  @put('/external-customers-details/{id}')
  @response(204, {
    description: 'ExternalCustomersDetail PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() externalCustomersDetail: ExternalCustomersDetail,
  ): Promise<void> {
    await this.externalCustomersDetailRepository.replaceById(id, externalCustomersDetail);
  }

  @del('/external-customers-details/{id}')
  @response(204, {
    description: 'ExternalCustomersDetail DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.externalCustomersDetailRepository.deleteById(id);
  }
}
