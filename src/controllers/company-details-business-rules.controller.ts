import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  CompanyDetails,
  BusinessRules,
} from '../models';
import {CompanyDetailsRepository} from '../repositories';

export class CompanyDetailsBusinessRulesController {
  constructor(
    @repository(CompanyDetailsRepository) protected companyDetailsRepository: CompanyDetailsRepository,
  ) { }

  @get('/company-details/{id}/business-rules', {
    responses: {
      '200': {
        description: 'Array of CompanyDetails has many BusinessRules',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(BusinessRules)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<BusinessRules>,
  ): Promise<BusinessRules[]> {
    return this.companyDetailsRepository.businessRules(id).find(filter);
  }

  @post('/company-details/{id}/business-rules', {
    responses: {
      '200': {
        description: 'CompanyDetails model instance',
        content: {'application/json': {schema: getModelSchemaRef(BusinessRules)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CompanyDetails.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessRules, {
            title: 'NewBusinessRulesInCompanyDetails',
            exclude: ['id'],
            optional: ['companyId']
          }),
        },
      },
    }) businessRules: Omit<BusinessRules, 'id'>,
  ): Promise<BusinessRules> {
    return this.companyDetailsRepository.businessRules(id).create(businessRules);
  }

  @patch('/company-details/{id}/business-rules', {
    responses: {
      '200': {
        description: 'CompanyDetails.BusinessRules PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessRules, {partial: true}),
        },
      },
    })
    businessRules: Partial<BusinessRules>,
    @param.query.object('where', getWhereSchemaFor(BusinessRules)) where?: Where<BusinessRules>,
  ): Promise<Count> {
    return this.companyDetailsRepository.businessRules(id).patch(businessRules, where);
  }

  @del('/company-details/{id}/business-rules', {
    responses: {
      '200': {
        description: 'CompanyDetails.BusinessRules DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(BusinessRules)) where?: Where<BusinessRules>,
  ): Promise<Count> {
    return this.companyDetailsRepository.businessRules(id).delete(where);
  }
}
