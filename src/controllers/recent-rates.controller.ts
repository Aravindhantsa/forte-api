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
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {RecentRates} from '../models';
import {RecentRatesRepository} from '../repositories';

export class RecentRatesController {
  constructor(
    @repository(RecentRatesRepository)
    public recentRatesRepository: RecentRatesRepository,
  ) { }


  @post('/recent-rates')
  @response(200, {
    description: 'RecentRates model instance',
    content: {'application/json': {schema: getModelSchemaRef(RecentRates)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecentRates, {
            title: 'NewRecentRates',
            exclude: ['id'],
          }),
        },
      },
    })
    recentRates: Omit<RecentRates, 'id'>,
  ): Promise<RecentRates> {
    return this.recentRatesRepository.create(recentRates);
  }

  @get('/recent-rates/count')
  @response(200, {
    description: 'RecentRates model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RecentRates) where?: Where<RecentRates>,
  ): Promise<Count> {
    return this.recentRatesRepository.count(where);
  }

  @get('/recent-rates')
  @response(200, {
    description: 'Array of RecentRates model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RecentRates, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RecentRates) filter?: Filter<RecentRates>,
  ): Promise<RecentRates[]> {
    return this.recentRatesRepository.find(filter);
  }

  @patch('/recent-rates')
  @response(200, {
    description: 'RecentRates PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecentRates, {partial: true}),
        },
      },
    })
    recentRates: RecentRates,
    @param.where(RecentRates) where?: Where<RecentRates>,
  ): Promise<Count> {
    return this.recentRatesRepository.updateAll(recentRates, where);
  }

  @get('/recent-rates/{id}')
  @response(200, {
    description: 'RecentRates model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RecentRates, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RecentRates, {exclude: 'where'}) filter?: FilterExcludingWhere<RecentRates>
  ): Promise<RecentRates> {
    return this.recentRatesRepository.findById(id, filter);
  }

  @patch('/recent-rates/{id}')
  @response(204, {
    description: 'RecentRates PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecentRates, {partial: true}),
        },
      },
    })
    recentRates: RecentRates,
  ): Promise<void> {
    await this.recentRatesRepository.updateById(id, recentRates);
  }

  @put('/recent-rates/{id}')
  @response(204, {
    description: 'RecentRates PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recentRates: RecentRates,
  ): Promise<void> {
    await this.recentRatesRepository.replaceById(id, recentRates);
  }

  @del('/recent-rates/{id}')
  @response(204, {
    description: 'RecentRates DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recentRatesRepository.deleteById(id);
  }
}
