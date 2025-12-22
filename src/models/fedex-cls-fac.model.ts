import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexClsFac extends Entity {
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
  clsFacLow: string;

  @property({
    type: 'string',
    required: true,
  })
  clsFacHigh: string;

  @property({
    type: 'string',
    required: true,
  })
  class: string;

  @property({
    type: 'string',
    required: true,
  })
  l5cFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m5cFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m1mFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m2mFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m5mFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m10mFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m20mFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m30mFactor: string;

  @property({
    type: 'string',
    required: true,
  })
  m40mFactor: string;


  constructor(data?: Partial<FedexClsFac>) {
    super(data);
  }
}

export interface FedexClsFacRelations {
  // describe navigational properties here
}

export type FedexClsFacWithRelations = FedexClsFac & FedexClsFacRelations;
