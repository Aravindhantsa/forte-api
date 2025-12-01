import {Entity, hasOne, model, property} from '@loopback/repository';
import {AdminUsers} from './admin-users.model';
import {ExternalCustomersDetail} from './external-customers-detail.model';

@model()
export class ForteUser extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  mobileNumber?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  userType: string;

  @property({
    type: 'string',
  })
  status: string;

  @property({
    type: 'number',
  })
  invalidLoginAttempt?: number;

  @property({
    type: 'date',
  })
  created: string;

  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @hasOne(() => AdminUsers)
  adminUsers: AdminUsers;

  @hasOne(() => ExternalCustomersDetail)
  externalCustomersDetail: ExternalCustomersDetail;

  constructor(data?: Partial<ForteUser>) {
    super(data);
  }
}

export interface ForteUserRelations {
  // describe navigational properties here
}

export type ForteUserWithRelations = ForteUser & ForteUserRelations;
