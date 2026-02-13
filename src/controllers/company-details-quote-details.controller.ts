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
  QuoteDetails,
} from '../models';
import {CompanyDetailsRepository} from '../repositories';

export class CompanyDetailsQuoteDetailsController {
  constructor(
    @repository(CompanyDetailsRepository) protected companyDetailsRepository: CompanyDetailsRepository,
  ) { }

  @get('/company-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'Array of CompanyDetails has many QuoteDetails',
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
    return this.companyDetailsRepository.quoteDetails(id).find(filter);
  }

  @post('/company-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'CompanyDetails model instance',
        content: {'application/json': {schema: getModelSchemaRef(QuoteDetails)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CompanyDetails.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {
            title: 'NewQuoteDetailsInCompanyDetails',
            exclude: ['id'],
            optional: ['companyId']
          }),
        },
      },
    }) quoteDetails: Omit<QuoteDetails, 'id'>,
  ): Promise<QuoteDetails> {
    return this.companyDetailsRepository.quoteDetails(id).create(quoteDetails);
  }

  @patch('/company-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'CompanyDetails.QuoteDetails PATCH success count',
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
    return this.companyDetailsRepository.quoteDetails(id).patch(quoteDetails, where);
  }

  @del('/company-details/{id}/quote-details', {
    responses: {
      '200': {
        description: 'CompanyDetails.QuoteDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(QuoteDetails)) where?: Where<QuoteDetails>,
  ): Promise<Count> {
    return this.companyDetailsRepository.quoteDetails(id).delete(where);
  }
}
