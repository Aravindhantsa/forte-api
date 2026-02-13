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
  CompanyDetails,
} from '../models';
import {QuoteDetailsRepository} from '../repositories';

export class QuoteDetailsCompanyDetailsController {
  constructor(
    @repository(QuoteDetailsRepository)
    public quoteDetailsRepository: QuoteDetailsRepository,
  ) { }

  @get('/quote-details/{id}/company-details', {
    responses: {
      '200': {
        description: 'CompanyDetails belonging to QuoteDetails',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CompanyDetails),
          },
        },
      },
    },
  })
  async getCompanyDetails(
    @param.path.number('id') id: typeof QuoteDetails.prototype.id,
  ): Promise<CompanyDetails> {
    return this.quoteDetailsRepository.company(id);
  }
}
