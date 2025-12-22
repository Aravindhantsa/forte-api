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
import {FedexClsFac} from '../models';
import {FedexClsFacRepository} from '../repositories';

export class FedexClsFacController {
  constructor(
    @repository(FedexClsFacRepository)
    public fedexClsFacRepository : FedexClsFacRepository,
  ) {}

  @post('/fedex-cls-facs')
  @response(200, {
    description: 'FedexClsFac model instance',
    content: {'application/json': {schema: getModelSchemaRef(FedexClsFac)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFac, {
            title: 'NewFedexClsFac',
            exclude: ['id'],
          }),
        },
      },
    })
    fedexClsFac: Omit<FedexClsFac, 'id'>,
  ): Promise<FedexClsFac> {
    return this.fedexClsFacRepository.create(fedexClsFac);
  }

  @get('/fedex-cls-facs/count')
  @response(200, {
    description: 'FedexClsFac model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FedexClsFac) where?: Where<FedexClsFac>,
  ): Promise<Count> {
    return this.fedexClsFacRepository.count(where);
  }

  @get('/fedex-cls-facs')
  @response(200, {
    description: 'Array of FedexClsFac model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FedexClsFac, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FedexClsFac) filter?: Filter<FedexClsFac>,
  ): Promise<FedexClsFac[]> {
    return this.fedexClsFacRepository.find(filter);
  }

  @patch('/fedex-cls-facs')
  @response(200, {
    description: 'FedexClsFac PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFac, {partial: true}),
        },
      },
    })
    fedexClsFac: FedexClsFac,
    @param.where(FedexClsFac) where?: Where<FedexClsFac>,
  ): Promise<Count> {
    return this.fedexClsFacRepository.updateAll(fedexClsFac, where);
  }

  @get('/fedex-cls-facs/{id}')
  @response(200, {
    description: 'FedexClsFac model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FedexClsFac, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FedexClsFac, {exclude: 'where'}) filter?: FilterExcludingWhere<FedexClsFac>
  ): Promise<FedexClsFac> {
    return this.fedexClsFacRepository.findById(id, filter);
  }

  @patch('/fedex-cls-facs/{id}')
  @response(204, {
    description: 'FedexClsFac PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFac, {partial: true}),
        },
      },
    })
    fedexClsFac: FedexClsFac,
  ): Promise<void> {
    await this.fedexClsFacRepository.updateById(id, fedexClsFac);
  }

  @put('/fedex-cls-facs/{id}')
  @response(204, {
    description: 'FedexClsFac PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fedexClsFac: FedexClsFac,
  ): Promise<void> {
    await this.fedexClsFacRepository.replaceById(id, fedexClsFac);
  }

  @del('/fedex-cls-facs/{id}')
  @response(204, {
    description: 'FedexClsFac DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fedexClsFacRepository.deleteById(id);
  }
}
