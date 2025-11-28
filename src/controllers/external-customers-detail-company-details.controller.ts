import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ExternalCustomersDetail,
  CompanyDetails,
} from '../models';
import {ExternalCustomersDetailRepository} from '../repositories';

export class ExternalCustomersDetailCompanyDetailsController {
  constructor(
    @repository(ExternalCustomersDetailRepository)
    public externalCustomersDetailRepository: ExternalCustomersDetailRepository,
  ) { }

  @get('/external-customers-details/{id}/company-details', {
    responses: {
      '200': {
        description: 'CompanyDetails belonging to ExternalCustomersDetail',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CompanyDetails),
          },
        },
      },
    },
  })
  async getCompanyDetails(
    @param.path.number('id') id: typeof ExternalCustomersDetail.prototype.id,
  ): Promise<CompanyDetails> {
    return this.externalCustomersDetailRepository.companyDetails(id);
  }
}
