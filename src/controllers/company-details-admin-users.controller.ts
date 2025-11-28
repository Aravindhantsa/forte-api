import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  CompanyDetails,
  AdminUsers,
} from '../models';
import {CompanyDetailsRepository} from '../repositories';

export class CompanyDetailsAdminUsersController {
  constructor(
    @repository(CompanyDetailsRepository)
    public companyDetailsRepository: CompanyDetailsRepository,
  ) { }

  @get('/company-details/{id}/admin-users', {
    responses: {
      '200': {
        description: 'AdminUsers belonging to CompanyDetails',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AdminUsers),
          },
        },
      },
    },
  })
  async getAdminUsers(
    @param.path.number('id') id: typeof CompanyDetails.prototype.id,
  ): Promise<AdminUsers> {
    return this.companyDetailsRepository.adminUsers(id);
  }
}
