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
  AdminUsers,
  QuoteDetails,
} from '../models';
import {AdminUsersRepository} from '../repositories';

export class AdminUsersQuoteDetailsController {
  constructor(
    @repository(AdminUsersRepository) protected adminUsersRepository: AdminUsersRepository,
  ) { }

  @get('/admin-users/{id}/quote-details', {
    responses: {
      '200': {
        description: 'Array of AdminUsers has many QuoteDetails',
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
    return this.adminUsersRepository.quoteDetails(id).find(filter);
  }

  @post('/admin-users/{id}/quote-details', {
    responses: {
      '200': {
        description: 'AdminUsers model instance',
        content: {'application/json': {schema: getModelSchemaRef(QuoteDetails)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AdminUsers.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuoteDetails, {
            title: 'NewQuoteDetailsInAdminUsers',
            exclude: ['id'],
            optional: ['salesRepId']
          }),
        },
      },
    }) quoteDetails: Omit<QuoteDetails, 'id'>,
  ): Promise<QuoteDetails> {
    return this.adminUsersRepository.quoteDetails(id).create(quoteDetails);
  }

  @patch('/admin-users/{id}/quote-details', {
    responses: {
      '200': {
        description: 'AdminUsers.QuoteDetails PATCH success count',
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
    return this.adminUsersRepository.quoteDetails(id).patch(quoteDetails, where);
  }

  @del('/admin-users/{id}/quote-details', {
    responses: {
      '200': {
        description: 'AdminUsers.QuoteDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(QuoteDetails)) where?: Where<QuoteDetails>,
  ): Promise<Count> {
    return this.adminUsersRepository.quoteDetails(id).delete(where);
  }
}
