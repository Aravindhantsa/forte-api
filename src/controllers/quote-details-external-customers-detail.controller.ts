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
  ExternalCustomersDetail,
} from '../models';
import {QuoteDetailsRepository} from '../repositories';

export class QuoteDetailsExternalCustomersDetailController {
  constructor(
    @repository(QuoteDetailsRepository)
    public quoteDetailsRepository: QuoteDetailsRepository,
  ) { }

  @get('/quote-details/{id}/external-customers-detail', {
    responses: {
      '200': {
        description: 'ExternalCustomersDetail belonging to QuoteDetails',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ExternalCustomersDetail),
          },
        },
      },
    },
  })
  async getExternalCustomersDetail(
    @param.path.number('id') id: typeof QuoteDetails.prototype.id,
  ): Promise<ExternalCustomersDetail> {
    return this.quoteDetailsRepository.customer(id);
  }
}
