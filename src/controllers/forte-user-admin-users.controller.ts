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
  ForteUser,
  AdminUsers,
} from '../models';
import {ForteUserRepository} from '../repositories';

export class ForteUserAdminUsersController {
  constructor(
    @repository(ForteUserRepository) protected forteUserRepository: ForteUserRepository,
  ) { }

  @get('/forte-users/{id}/admin-users', {
    responses: {
      '200': {
        description: 'ForteUser has one AdminUsers',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AdminUsers),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<AdminUsers>,
  ): Promise<AdminUsers> {
    return this.forteUserRepository.adminUsers(id).get(filter);
  }

  @post('/forte-users/{id}/admin-users', {
    responses: {
      '200': {
        description: 'ForteUser model instance',
        content: {'application/json': {schema: getModelSchemaRef(AdminUsers)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ForteUser.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdminUsers, {
            title: 'NewAdminUsersInForteUser',
            exclude: ['id'],
            optional: ['forteUserId']
          }),
        },
      },
    }) adminUsers: Omit<AdminUsers, 'id'>,
  ): Promise<AdminUsers> {
    return this.forteUserRepository.adminUsers(id).create(adminUsers);
  }

  @patch('/forte-users/{id}/admin-users', {
    responses: {
      '200': {
        description: 'ForteUser.AdminUsers PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdminUsers, {partial: true}),
        },
      },
    })
    adminUsers: Partial<AdminUsers>,
    @param.query.object('where', getWhereSchemaFor(AdminUsers)) where?: Where<AdminUsers>,
  ): Promise<Count> {
    return this.forteUserRepository.adminUsers(id).patch(adminUsers, where);
  }

  @del('/forte-users/{id}/admin-users', {
    responses: {
      '200': {
        description: 'ForteUser.AdminUsers DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AdminUsers)) where?: Where<AdminUsers>,
  ): Promise<Count> {
    return this.forteUserRepository.adminUsers(id).delete(where);
  }
}
