import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';
import {CompanyDetails} from './company-details.model';
import {ExternalCustomersDetail} from './external-customers-detail.model';
import {ForteUser} from './forte-user.model';
import {QuoteDetails} from './quote-details.model';

@model({
  settings: {
    mysql: {
      table: 'adminusers'
    }
  }
})
export class AdminUsers extends BaseEntity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  salesRepRefId?: string;

  @property({
    type: 'string',
    required: true,
  })
  salesRepName: string;

  @property({
    type: 'string',
  })
  mobileNumber?: string;

  @property({
    type: 'string',
    required: true,
  })
  username?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  userType: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'number',
  })
  invalidLoginAttempt?: number;

  @belongsTo(() => ForteUser)
  forteUserId: number;

  @hasMany(() => CompanyDetails, {keyTo: 'salesRepId'})
  companyDetails: CompanyDetails[];

  @hasMany(() => ExternalCustomersDetail, {keyTo: 'salesRepId'})
  externalCustomersDetails: ExternalCustomersDetail[];

  @hasMany(() => QuoteDetails, {keyTo: 'salesRepId'})
  quoteDetails: QuoteDetails[];

  constructor(data?: Partial<AdminUsers>) {
    super(data);
  }
}

export interface AdminUsersRelations {
  // describe navigational properties here
}

export type AdminUsersWithRelations = AdminUsers & AdminUsersRelations;
