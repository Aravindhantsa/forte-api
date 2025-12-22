import {belongsTo, model, property} from '@loopback/repository';
import {AdminUsers} from './admin-users.model';
import {BaseEntity} from './base-entity.model';
import {CompanyDetails} from './company-details.model';
import {ForteUser} from './forte-user.model';

@model()
export class ExternalCustomersDetail extends BaseEntity {
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
  customerName: string;

  @property({
    type: 'string',
  })
  companyName?: string;

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
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  zip?: string;

  @property({
    type: 'string',
  })
  contactNumber?: string;

  @property({
    type: 'string',
  })
  ratingNotes?: string;

  @property({
    type: 'string',
  })
  userType?: string;

  @property({
    type: 'string',
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'string',
  })
  createdBy?: string;

  @belongsTo(() => AdminUsers, {name: 'adminUsers'})
  salesRepId: number;

  @belongsTo(() => CompanyDetails, {name: 'companyDetails'})
  companyId: number;

  @belongsTo(() => ForteUser)
  forteUserId: number;

  constructor(data?: Partial<ExternalCustomersDetail>) {
    super(data);
  }
}

export interface ExternalCustomersDetailRelations {
  // describe navigational properties here
}

export type ExternalCustomersDetailWithRelations = ExternalCustomersDetail & ExternalCustomersDetailRelations;
