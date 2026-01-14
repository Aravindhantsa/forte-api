import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexRateAr extends Entity {
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
  rateBaseNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  clsFacTable: string;

  @property({
    type: 'string',
    required: true,
  })
  minCharge300lbs: string;

  @property({
    type: 'string',
    required: true,
  })
  minCharge400lbs: string;

  @property({
    type: 'string',
    required: true,
  })
  minCharge500lbs: string;

  @property({
    type: 'string',
    required: true,
  })
  minCharge501lbs: string;

  @property({
    type: 'string',
    required: true,
  })
  l5cRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m5cRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m1mRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m2mRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m5mRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m10mRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m20mRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m30mRate: string;

  @property({
    type: 'string',
    required: true,
  })
  m40mRate: string;


  constructor(data?: Partial<FedexRateAr>) {
    super(data);
  }
}

export interface FedexRateArRelations {
  // describe navigational properties here
}

export type FedexRateArWithRelations = FedexRateAr & FedexRateArRelations;
