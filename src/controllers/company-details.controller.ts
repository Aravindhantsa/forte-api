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
import {CompanyDetails} from '../models';
import {CompanyDetailsRepository} from '../repositories';

export class CompanyDetailsController {
  constructor(
    @repository(CompanyDetailsRepository)
    public companyDetailsRepository : CompanyDetailsRepository,
  ) {}

  @post('/company-details')
  @response(200, {
    description: 'CompanyDetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(CompanyDetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDetails, {
            title: 'NewCompanyDetails',
            exclude: ['id'],
          }),
        },
      },
    })
    companyDetails: Omit<CompanyDetails, 'id'>,
  ): Promise<CompanyDetails> {
    return this.companyDetailsRepository.create(companyDetails);
  }

  @get('/company-details/count')
  @response(200, {
    description: 'CompanyDetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CompanyDetails) where?: Where<CompanyDetails>,
  ): Promise<Count> {
    return this.companyDetailsRepository.count(where);
  }

  @get('/company-details')
  @response(200, {
    description: 'Array of CompanyDetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CompanyDetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CompanyDetails) filter?: Filter<CompanyDetails>,
  ): Promise<CompanyDetails[]> {
    return this.companyDetailsRepository.find(filter);
  }

  @patch('/company-details')
  @response(200, {
    description: 'CompanyDetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDetails, {partial: true}),
        },
      },
    })
    companyDetails: CompanyDetails,
    @param.where(CompanyDetails) where?: Where<CompanyDetails>,
  ): Promise<Count> {
    return this.companyDetailsRepository.updateAll(companyDetails, where);
  }

  @get('/company-details/{id}')
  @response(200, {
    description: 'CompanyDetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CompanyDetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CompanyDetails, {exclude: 'where'}) filter?: FilterExcludingWhere<CompanyDetails>
  ): Promise<CompanyDetails> {
    return this.companyDetailsRepository.findById(id, filter);
  }

  @patch('/company-details/{id}')
  @response(204, {
    description: 'CompanyDetails PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDetails, {partial: true}),
        },
      },
    })
    companyDetails: CompanyDetails,
  ): Promise<void> {
    await this.companyDetailsRepository.updateById(id, companyDetails);
  }

  @put('/company-details/{id}')
  @response(204, {
    description: 'CompanyDetails PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() companyDetails: CompanyDetails,
  ): Promise<void> {
    await this.companyDetailsRepository.replaceById(id, companyDetails);
  }

  @del('/company-details/{id}')
  @response(204, {
    description: 'CompanyDetails DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.companyDetailsRepository.deleteById(id);
  }
}
