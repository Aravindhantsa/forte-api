import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {AdminUsers} from './admin-users.model';
import {ExternalCustomersDetail} from './external-customers-detail.model';
import {BusinessRules} from './business-rules.model';

@model()
export class CompanyDetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  refId?: string;

  @property({
    type: 'string',
    required: true,
  })
  companyName: string;

  @property({
    type: 'string',
  })
  fedexCompanyName?: string;

  @property({
    type: 'string',
  })
  fedexPriorityAccountNumber?: string;

  @property({
    type: 'string',
  })
  fedexEconomyAccountNumber?: string;

  @property({
    type: 'string',
    required: true,
  })
  address1: string;

  @property({
    type: 'string',
  })
  address2?: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'string',
    required: true,
  })
  zip: string;

  @property({
    type: 'string',
  })
  ratingNotes?: string;

  @property({
    type: 'boolean',
  })
  costPlus?: boolean;

  @property({
    type: 'array',
    itemType: 'object',
  })
  costPlusFactor?: object[];

  @property({
    type: 'boolean',
  })
  specificPricing?: boolean;

  @property({
    type: 'array',
    itemType: 'string',
  })
  specificPricingList?: string[];

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'boolean',
  })
  bolUpload?: boolean;

  @property({
    type: 'boolean',
  })
  deliveryUpload?: boolean;

  @property({
    type: 'boolean',
  })
  inviceUpload?: boolean;

  @property({
    type: 'boolean',
  })
  weightUpload?: boolean;

  @property({
    type: 'string',
  })
  byOrder?: string;

  @property({
    type: 'date',
    required: true,
  })
  created: string;

  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @belongsTo(() => AdminUsers, {name: 'adminUsers'})
  salesRepId: number;

  @hasMany(() => ExternalCustomersDetail, {keyTo: 'companyId'})
  externalCustomersDetails: ExternalCustomersDetail[];

  @hasMany(() => BusinessRules, {keyTo: 'companyId'})
  businessRules: BusinessRules[];

  constructor(data?: Partial<CompanyDetails>) {
    super(data);
  }
}

export interface CompanyDetailsRelations {
  // describe navigational properties here
}

export type CompanyDetailsWithRelations = CompanyDetails & CompanyDetailsRelations;
