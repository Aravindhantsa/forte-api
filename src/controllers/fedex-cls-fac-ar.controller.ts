import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {FedexClsFacAr} from '../models';
import {FedexClsFacArRepository} from '../repositories';

export class FedexClsFacArController {
  constructor(
    @repository(FedexClsFacArRepository)
    public fedexClsFacArRepository : FedexClsFacArRepository,
  ) {}

  @post('/fedex-cls-fac-ars')
  @response(200, {
    description: 'FedexClsFacAr model instance',
    content: {'application/json': {schema: getModelSchemaRef(FedexClsFacAr)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFacAr, {
            title: 'NewFedexClsFacAr',
            exclude: ['id'],
          }),
        },
      },
    })
    fedexClsFacAr: Omit<FedexClsFacAr, 'id'>,
  ): Promise<FedexClsFacAr> {
    return this.fedexClsFacArRepository.create(fedexClsFacAr);
  }

  @get('/fedex-cls-fac-ars/count')
  @response(200, {
    description: 'FedexClsFacAr model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FedexClsFacAr) where?: Where<FedexClsFacAr>,
  ): Promise<Count> {
    return this.fedexClsFacArRepository.count(where);
  }

  @get('/fedex-cls-fac-ars')
  @response(200, {
    description: 'Array of FedexClsFacAr model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FedexClsFacAr, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FedexClsFacAr) filter?: Filter<FedexClsFacAr>,
  ): Promise<FedexClsFacAr[]> {
    return this.fedexClsFacArRepository.find(filter);
  }

  @patch('/fedex-cls-fac-ars')
  @response(200, {
    description: 'FedexClsFacAr PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFacAr, {partial: true}),
        },
      },
    })
    fedexClsFacAr: FedexClsFacAr,
    @param.where(FedexClsFacAr) where?: Where<FedexClsFacAr>,
  ): Promise<Count> {
    return this.fedexClsFacArRepository.updateAll(fedexClsFacAr, where);
  }

  @get('/fedex-cls-fac-ars/{id}')
  @response(200, {
    description: 'FedexClsFacAr model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FedexClsFacAr, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FedexClsFacAr, {exclude: 'where'}) filter?: FilterExcludingWhere<FedexClsFacAr>
  ): Promise<FedexClsFacAr> {
    return this.fedexClsFacArRepository.findById(id, filter);
  }

  @patch('/fedex-cls-fac-ars/{id}')
  @response(204, {
    description: 'FedexClsFacAr PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFacAr, {partial: true}),
        },
      },
    })
    fedexClsFacAr: FedexClsFacAr,
  ): Promise<void> {
    await this.fedexClsFacArRepository.updateById(id, fedexClsFacAr);
  }

  @put('/fedex-cls-fac-ars/{id}')
  @response(204, {
    description: 'FedexClsFacAr PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fedexClsFacAr: FedexClsFacAr,
  ): Promise<void> {
    await this.fedexClsFacArRepository.replaceById(id, fedexClsFacAr);
  }

  @del('/fedex-cls-fac-ars/{id}')
  @response(204, {
    description: 'FedexClsFacAr DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fedexClsFacArRepository.deleteById(id);
  }
}
