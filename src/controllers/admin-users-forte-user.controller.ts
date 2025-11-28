import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  AdminUsers,
  ForteUser,
} from '../models';
import {AdminUsersRepository} from '../repositories';

export class AdminUsersForteUserController {
  constructor(
    @repository(AdminUsersRepository)
    public adminUsersRepository: AdminUsersRepository,
  ) { }

  @get('/admin-users/{id}/forte-user', {
    responses: {
      '200': {
        description: 'ForteUser belonging to AdminUsers',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ForteUser),
          },
        },
      },
    },
  })
  async getForteUser(
    @param.path.number('id') id: typeof AdminUsers.prototype.id,
  ): Promise<ForteUser> {
    return this.adminUsersRepository.forteUser(id);
  }
}
