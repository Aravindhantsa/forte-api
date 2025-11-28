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
  CompanyDetails,
  ExternalCustomersDetail,
} from '../models';
import {CompanyDetailsRepository} from '../repositories';

export class CompanyDetailsExternalCustomersDetailController {
  constructor(
    @repository(CompanyDetailsRepository) protected companyDetailsRepository: CompanyDetailsRepository,
  ) { }

  @get('/company-details/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'Array of CompanyDetails has many ExternalCustomersDetail',
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
    return this.companyDetailsRepository.externalCustomersDetails(id).find(filter);
  }

  @post('/company-details/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'CompanyDetails model instance',
        content: {'application/json': {schema: getModelSchemaRef(ExternalCustomersDetail)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CompanyDetails.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ExternalCustomersDetail, {
            title: 'NewExternalCustomersDetailInCompanyDetails',
            exclude: ['id'],
            optional: ['companyId']
          }),
        },
      },
    }) externalCustomersDetail: Omit<ExternalCustomersDetail, 'id'>,
  ): Promise<ExternalCustomersDetail> {
    return this.companyDetailsRepository.externalCustomersDetails(id).create(externalCustomersDetail);
  }

  @patch('/company-details/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'CompanyDetails.ExternalCustomersDetail PATCH success count',
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
    return this.companyDetailsRepository.externalCustomersDetails(id).patch(externalCustomersDetail, where);
  }

  @del('/company-details/{id}/external-customers-details', {
    responses: {
      '200': {
        description: 'CompanyDetails.ExternalCustomersDetail DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ExternalCustomersDetail)) where?: Where<ExternalCustomersDetail>,
  ): Promise<Count> {
    return this.companyDetailsRepository.externalCustomersDetails(id).delete(where);
  }
}
