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
  ExternalCustomersDetail,
} from '../models';
import {ForteUserRepository} from '../repositories';

export class ForteUserExternalCustomersDetailController {
  constructor(
    @repository(ForteUserRepository) protected forteUserRepository: ForteUserRepository,
  ) { }

  @get('/forte-users/{id}/external-customers-detail', {
    responses: {
      '200': {
        description: 'ForteUser has one ExternalCustomersDetail',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ExternalCustomersDetail),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ExternalCustomersDetail>,
  ): Promise<ExternalCustomersDetail> {
    return this.forteUserRepository.externalCustomersDetail(id).get(filter);
  }

  @post('/forte-users/{id}/external-customers-detail', {
    responses: {
      '200': {
        description: 'ForteUser model instance',
        content: {'application/json': {schema: getModelSchemaRef(ExternalCustomersDetail)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ForteUser.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {
            title: 'NewExternalCustomersDetailInForteUser',
            exclude: ['id'],
            optional: ['forteUserId']
          }),
        },
      },
    }) externalCustomersDetail: Omit<ExternalCustomersDetail, 'id'>,
  ): Promise<ExternalCustomersDetail> {
    return this.forteUserRepository.externalCustomersDetail(id).create(externalCustomersDetail);
  }

  @patch('/forte-users/{id}/external-customers-detail', {
    responses: {
      '200': {
        description: 'ForteUser.ExternalCustomersDetail PATCH success count',
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
    return this.forteUserRepository.externalCustomersDetail(id).patch(externalCustomersDetail, where);
  }

  @del('/forte-users/{id}/external-customers-detail', {
    responses: {
      '200': {
        description: 'ForteUser.ExternalCustomersDetail DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ExternalCustomersDetail)) where?: Where<ExternalCustomersDetail>,
  ): Promise<Count> {
    return this.forteUserRepository.externalCustomersDetail(id).delete(where);
  }
}
