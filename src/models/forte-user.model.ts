import {Entity, model, property} from '@loopback/repository';

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
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  userType: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

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


  constructor(data?: Partial<ForteUser>) {
    super(data);
  }
}

export interface ForteUserRelations {
  // describe navigational properties here
}

export type ForteUserWithRelations = ForteUser & ForteUserRelations;
