import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  BusinessRules,
  CompanyDetails,
} from '../models';
import {BusinessRulesRepository} from '../repositories';

export class BusinessRulesCompanyDetailsController {
  constructor(
    @repository(BusinessRulesRepository)
    public businessRulesRepository: BusinessRulesRepository,
  ) { }

  @get('/business-rules/{id}/company-details', {
    responses: {
      '200': {
        description: 'CompanyDetails belonging to BusinessRules',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CompanyDetails),
          },
        },
      },
    },
  })
  async getCompanyDetails(
    @param.path.number('id') id: typeof BusinessRules.prototype.id,
  ): Promise<CompanyDetails> {
    return this.businessRulesRepository.companyDetails(id);
  }
}
