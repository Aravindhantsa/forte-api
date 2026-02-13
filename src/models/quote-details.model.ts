import {model, property, belongsTo} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';
import {CompanyDetails} from './company-details.model';
import {AdminUsers} from './admin-users.model';
import {ExternalCustomersDetail} from './external-customers-detail.model';

@model()
export class QuoteDetails extends BaseEntity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  quoteReferenceId: string;

  @property({
    type: 'string',
    required: true,
  })
  originZip: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationZip: string;

  @property({
    type: 'string',
    required: true,
  })
  classWeight: string;

  @property({
    type: 'string',
    required: true,
  })
  carrier: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'array',
    mysql: {dataType: 'json'},
  })
  accessorials?: object[];

  @property({
    type: 'object',
    mysql: {dataType: 'json'},
  })
  cityState?: object;

  @property({
    type: 'string',
  })
  apTotalCharge?: string;

  @property({
    type: 'number',
    required: true,
  })
  arTotalCharge: number;

  @property({
    type: 'string',
  })
  webTotalCharge?: string;

  @property({
    type: 'object',
    mysql: {dataType: 'json'},
  })
  apRateDetail?: object;

  @property({
    type: 'object',
    mysql: {dataType: 'json'},
  })
  arRateDetail?: object;

  @property({
    type: 'object',
    mysql: {dataType: 'json'},
  })
  webRateDetail?: object;

  @belongsTo(() => CompanyDetails)
  companyId: number;

  @belongsTo(() => AdminUsers)
  salesRepId: number;

  @belongsTo(() => ExternalCustomersDetail)
  customerId: number;

  constructor(data?: Partial<QuoteDetails>) {
    super(data);
  }
}

export interface QuoteDetailsRelations {
  // describe navigational properties here
}

export type QuoteDetailsWithRelations = QuoteDetails & QuoteDetailsRelations;
