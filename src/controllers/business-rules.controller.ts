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
import {BusinessRules} from '../models';
import {BusinessRulesRepository} from '../repositories';

export class BusinessRulesController {
  constructor(
    @repository(BusinessRulesRepository)
    public businessRulesRepository: BusinessRulesRepository,
  ) { }


  @post('/business-rules/createBusinessRules')
  async createBusinessRules(@requestBody() businessRules: Omit<BusinessRules, 'id'>) {
    if (!businessRules.direction || !businessRules.carrier || !businessRules.category || !businessRules.discount || !businessRules.amc || !businessRules.companyId) {
      throw new HttpErrors.BadRequest('Missing fields');
    }
    const businessRulesCreated = await this.businessRulesRepository.create(businessRules);
    return businessRulesCreated;
  }

  @post('/business-rules/createBusinessRulesArray')
  async createBusinessRulesArray(@requestBody() businessRules: Omit<BusinessRules, 'id'>[],) {
    if (!businessRules.length) {
      throw new HttpErrors.BadRequest('Business rules array is empty');
    }
    for (const rule of businessRules) {
      if (!rule.direction || !rule.carrier || !rule.category || rule.discount === undefined || rule.amc === undefined || !rule.companyId) {
        throw new HttpErrors.BadRequest('Missing fields in one of the rules');
      }
    }
    return await this.businessRulesRepository.createAll(businessRules);
  }

  @post('/business-rules')
  @response(200, {
    description: 'BusinessRules model instance',
    content: {'application/json': {schema: getModelSchemaRef(BusinessRules)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessRules, {
            title: 'NewBusinessRules',
            exclude: ['id'],
          }),
        },
      },
    })
    businessRules: Omit<BusinessRules, 'id'>,
  ): Promise<BusinessRules> {
    return this.businessRulesRepository.create(businessRules);
  }

  @get('/business-rules/count')
  @response(200, {
    description: 'BusinessRules model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BusinessRules) where?: Where<BusinessRules>,
  ): Promise<Count> {
    return this.businessRulesRepository.count(where);
  }

  @get('/business-rules')
  @response(200, {
    description: 'Array of BusinessRules model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BusinessRules, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BusinessRules) filter?: Filter<BusinessRules>,
  ): Promise<BusinessRules[]> {
    return this.businessRulesRepository.find(filter);
  }

  @patch('/business-rules')
  @response(200, {
    description: 'BusinessRules PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessRules, {partial: true}),
        },
      },
    })
    businessRules: BusinessRules,
    @param.where(BusinessRules) where?: Where<BusinessRules>,
  ): Promise<Count> {
    return this.businessRulesRepository.updateAll(businessRules, where);
  }

  @get('/business-rules/{id}')
  @response(200, {
    description: 'BusinessRules model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BusinessRules, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BusinessRules, {exclude: 'where'}) filter?: FilterExcludingWhere<BusinessRules>
  ): Promise<BusinessRules> {
    return this.businessRulesRepository.findById(id, filter);
  }

  @patch('/business-rules/{id}')
  @response(204, {
    description: 'BusinessRules PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessRules, {partial: true}),
        },
      },
    })
    businessRules: BusinessRules,
  ): Promise<void> {
    await this.businessRulesRepository.updateById(id, businessRules);
  }

  @put('/business-rules/{id}')
  @response(204, {
    description: 'BusinessRules PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() businessRules: BusinessRules,
  ): Promise<void> {
    await this.businessRulesRepository.replaceById(id, businessRules);
  }

  @del('/business-rules/{id}')
  @response(204, {
    description: 'BusinessRules DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.businessRulesRepository.deleteById(id);
  }
}
