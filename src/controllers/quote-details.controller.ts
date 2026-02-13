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
import {QuoteDetails} from '../models';
import {QuoteDetailsRepository} from '../repositories';

export class QuoteDetailsController {
  constructor(
    @repository(QuoteDetailsRepository)
    public quoteDetailsRepository : QuoteDetailsRepository,
  ) {}

  @post('/quote-details')
  @response(200, {
    description: 'QuoteDetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuoteDetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {
            title: 'NewQuoteDetails',
            exclude: ['id'],
          }),
        },
      },
    })
    quoteDetails: Omit<QuoteDetails, 'id'>,
  ): Promise<QuoteDetails> {
    return this.quoteDetailsRepository.create(quoteDetails);
  }

  @get('/quote-details/count')
  @response(200, {
    description: 'QuoteDetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuoteDetails) where?: Where<QuoteDetails>,
  ): Promise<Count> {
    return this.quoteDetailsRepository.count(where);
  }

  @get('/quote-details')
  @response(200, {
    description: 'Array of QuoteDetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuoteDetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuoteDetails) filter?: Filter<QuoteDetails>,
  ): Promise<QuoteDetails[]> {
    return this.quoteDetailsRepository.find(filter);
  }

  @patch('/quote-details')
  @response(200, {
    description: 'QuoteDetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {partial: true}),
        },
      },
    })
    quoteDetails: QuoteDetails,
    @param.where(QuoteDetails) where?: Where<QuoteDetails>,
  ): Promise<Count> {
    return this.quoteDetailsRepository.updateAll(quoteDetails, where);
  }

  @get('/quote-details/{id}')
  @response(200, {
    description: 'QuoteDetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuoteDetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(QuoteDetails, {exclude: 'where'}) filter?: FilterExcludingWhere<QuoteDetails>
  ): Promise<QuoteDetails> {
    return this.quoteDetailsRepository.findById(id, filter);
  }

  @patch('/quote-details/{id}')
  @response(204, {
    description: 'QuoteDetails PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {partial: true}),
        },
      },
    })
    quoteDetails: QuoteDetails,
  ): Promise<void> {
    await this.quoteDetailsRepository.updateById(id, quoteDetails);
  }

  @put('/quote-details/{id}')
  @response(204, {
    description: 'QuoteDetails PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() quoteDetails: QuoteDetails,
  ): Promise<void> {
    await this.quoteDetailsRepository.replaceById(id, quoteDetails);
  }

  @del('/quote-details/{id}')
  @response(204, {
    description: 'QuoteDetails DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.quoteDetailsRepository.deleteById(id);
  }
}
