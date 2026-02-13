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
  ExternalCustomersDetail,
  QuoteDetails,
} from '../models';
import {ExternalCustomersDetailRepository} from '../repositories';

export class ExternalCustomersDetailQuoteDetailsController {
  constructor(
    @repository(ExternalCustomersDetailRepository) protected externalCustomersDetailRepository: ExternalCustomersDetailRepository,
  ) { }

  @get('/external-customers-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'Array of ExternalCustomersDetail has many QuoteDetails',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(QuoteDetails)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<QuoteDetails>,
  ): Promise<QuoteDetails[]> {
    return this.externalCustomersDetailRepository.quoteDetails(id).find(filter);
  }

  @post('/external-customers-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'ExternalCustomersDetail model instance',
        content: {'application/json': {schema: getModelSchemaRef(QuoteDetails)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ExternalCustomersDetail.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {
            title: 'NewQuoteDetailsInExternalCustomersDetail',
            exclude: ['id'],
            optional: ['customerId']
          }),
        },
      },
    }) quoteDetails: Omit<QuoteDetails, 'id'>,
  ): Promise<QuoteDetails> {
    return this.externalCustomersDetailRepository.quoteDetails(id).create(quoteDetails);
  }

  @patch('/external-customers-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'ExternalCustomersDetail.QuoteDetails PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {partial: true}),
        },
      },
    })
    quoteDetails: Partial<QuoteDetails>,
    @param.query.object('where', getWhereSchemaFor(QuoteDetails)) where?: Where<QuoteDetails>,
  ): Promise<Count> {
    return this.externalCustomersDetailRepository.quoteDetails(id).patch(quoteDetails, where);
  }

  @del('/external-customers-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'ExternalCustomersDetail.QuoteDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(QuoteDetails)) where?: Where<QuoteDetails>,
  ): Promise<Count> {
    return this.externalCustomersDetailRepository.quoteDetails(id).delete(where);
  }
}
