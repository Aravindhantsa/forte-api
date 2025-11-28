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
  CompanyDetails,
} from '../models';
import {AdminUsersRepository} from '../repositories';

export class AdminUsersCompanyDetailsController {
  constructor(
    @repository(AdminUsersRepository) protected adminUsersRepository: AdminUsersRepository,
  ) { }

  @get('/admin-users/{id}/company-details', {
    responses: {
      '200': {
        description: 'Array of AdminUsers has many CompanyDetails',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CompanyDetails)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<CompanyDetails>,
  ): Promise<CompanyDetails[]> {
    return this.adminUsersRepository.companyDetails(id).find(filter);
  }

  @post('/admin-users/{id}/company-details', {
    responses: {
      '200': {
        description: 'AdminUsers model instance',
        content: {'application/json': {schema: getModelSchemaRef(CompanyDetails)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AdminUsers.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDetails, {
            title: 'NewCompanyDetailsInAdminUsers',
            exclude: ['id'],
            optional: ['salesRepId']
          }),
        },
      },
    }) companyDetails: Omit<CompanyDetails, 'id'>,
  ): Promise<CompanyDetails> {
    return this.adminUsersRepository.companyDetails(id).create(companyDetails);
  }

  @patch('/admin-users/{id}/company-details', {
    responses: {
      '200': {
        description: 'AdminUsers.CompanyDetails PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDetails, {partial: true}),
        },
      },
    })
    companyDetails: Partial<CompanyDetails>,
    @param.query.object('where', getWhereSchemaFor(CompanyDetails)) where?: Where<CompanyDetails>,
  ): Promise<Count> {
    return this.adminUsersRepository.companyDetails(id).patch(companyDetails, where);
  }

  @del('/admin-users/{id}/company-details', {
    responses: {
      '200': {
        description: 'AdminUsers.CompanyDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(CompanyDetails)) where?: Where<CompanyDetails>,
  ): Promise<Count> {
    return this.adminUsersRepository.companyDetails(id).delete(where);
  }
}
