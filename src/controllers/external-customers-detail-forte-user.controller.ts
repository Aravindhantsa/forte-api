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
  ForteUser,
} from '../models';
import {ExternalCustomersDetailRepository} from '../repositories';

export class ExternalCustomersDetailForteUserController {
  constructor(
    @repository(ExternalCustomersDetailRepository)
    public externalCustomersDetailRepository: ExternalCustomersDetailRepository,
  ) { }

  @get('/external-customers-details/{id}/forte-user', {
    responses: {
      '200': {
        description: 'ForteUser belonging to ExternalCustomersDetail',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ForteUser),
          },
        },
      },
    },
  })
  async getForteUser(
    @param.path.number('id') id: typeof ExternalCustomersDetail.prototype.id,
  ): Promise<ForteUser> {
    return this.externalCustomersDetailRepository.forteUser(id);
  }
}
