import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {CompanyDetails} from './company-details.model';
import {ExternalCustomersDetail} from './external-customers-detail.model';
import {ForteUser} from './forte-user.model';

@model()
export class AdminUsers extends Entity {
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

  @property({
    type: 'date',
    required: true,
  })
  created: string;

  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @belongsTo(() => ForteUser)
  forteUserId: number;

  @hasMany(() => CompanyDetails, {keyTo: 'salesRepId'})
  companyDetails: CompanyDetails[];

  @hasMany(() => ExternalCustomersDetail, {keyTo: 'salesRepId'})
  externalCustomersDetails: ExternalCustomersDetail[];

  constructor(data?: Partial<AdminUsers>) {
    super(data);
  }
}

export interface AdminUsersRelations {
  // describe navigational properties here
}

export type AdminUsersWithRelations = AdminUsers & AdminUsersRelations;
