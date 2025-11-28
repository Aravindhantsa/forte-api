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
  AdminUsers,
} from '../models';
import {ExternalCustomersDetailRepository} from '../repositories';

export class ExternalCustomersDetailAdminUsersController {
  constructor(
    @repository(ExternalCustomersDetailRepository)
    public externalCustomersDetailRepository: ExternalCustomersDetailRepository,
  ) { }

  @get('/external-customers-details/{id}/admin-users', {
    responses: {
      '200': {
        description: 'AdminUsers belonging to ExternalCustomersDetail',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AdminUsers),
          },
        },
      },
    },
  })
  async getAdminUsers(
    @param.path.number('id') id: typeof ExternalCustomersDetail.prototype.id,
  ): Promise<AdminUsers> {
    return this.externalCustomersDetailRepository.adminUsers(id);
  }
}
