import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  QuoteDetails,
  AdminUsers,
} from '../models';
import {QuoteDetailsRepository} from '../repositories';

export class QuoteDetailsAdminUsersController {
  constructor(
    @repository(QuoteDetailsRepository)
    public quoteDetailsRepository: QuoteDetailsRepository,
  ) { }

  @get('/quote-details/{id}/admin-users', {
    responses: {
      '200': {
        description: 'AdminUsers belonging to QuoteDetails',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AdminUsers),
          },
        },
      },
    },
  })
  async getAdminUsers(
    @param.path.number('id') id: typeof QuoteDetails.prototype.id,
  ): Promise<AdminUsers> {
    return this.quoteDetailsRepository.salesRep(id);
  }
}
