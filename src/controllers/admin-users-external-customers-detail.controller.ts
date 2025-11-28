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
  ExternalCustomersDetail,
} from '../models';
import {AdminUsersRepository} from '../repositories';

export class AdminUsersExternalCustomersDetailController {
  constructor(
    @repository(AdminUsersRepository) protected adminUsersRepository: AdminUsersRepository,
  ) { }

  @get('/admin-users/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'Array of AdminUsers has many ExternalCustomersDetail',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ExternalCustomersDetail)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ExternalCustomersDetail>,
  ): Promise<ExternalCustomersDetail[]> {
    return this.adminUsersRepository.externalCustomersDetails(id).find(filter);
  }

  @post('/admin-users/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'AdminUsers model instance',
        content: {'application/json': {schema: getModelSchemaRef(ExternalCustomersDetail)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AdminUsers.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {
            title: 'NewExternalCustomersDetailInAdminUsers',
            exclude: ['id'],
            optional: ['salesRepId']
          }),
        },
      },
    }) externalCustomersDetail: Omit<ExternalCustomersDetail, 'id'>,
  ): Promise<ExternalCustomersDetail> {
    return this.adminUsersRepository.externalCustomersDetails(id).create(externalCustomersDetail);
  }

  @patch('/admin-users/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'AdminUsers.ExternalCustomersDetail PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {partial: true}),
        },
      },
    })
    externalCustomersDetail: Partial<ExternalCustomersDetail>,
    @param.query.object('where', getWhereSchemaFor(ExternalCustomersDetail)) where?: Where<ExternalCustomersDetail>,
  ): Promise<Count> {
    return this.adminUsersRepository.externalCustomersDetails(id).patch(externalCustomersDetail, where);
  }

  @del('/admin-users/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'AdminUsers.ExternalCustomersDetail DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ExternalCustomersDetail)) where?: Where<ExternalCustomersDetail>,
  ): Promise<Count> {
    return this.adminUsersRepository.externalCustomersDetails(id).delete(where);
  }
}
