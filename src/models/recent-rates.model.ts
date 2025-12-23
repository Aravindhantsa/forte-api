import {model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';

@model()
export class RecentRates extends BaseEntity {
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
  carrier: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
  })
  fuelsurcharge?: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: 0,
      maximum: 100,
    },
    mysql: {
      dataType: 'decimal',
      precision: 5,
      scale: 2,
    },
  })
  discount: number;

  @property({
    type: 'number',
    required: true,
  })
  amc: number;

  @property({
    type: 'array',
    itemType: 'object',
    mysql: {dataType: 'json'},
  })
  accessorials?: object[];

  @property({
    type: 'string',
  })
  costPlus?: string;

  @property({
    type: 'string',
  })
  caCharge?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;


  constructor(data?: Partial<RecentRates>) {
    super(data);
  }
}

export interface RecentRatesRelations {
  // describe navigational properties here
}

export type RecentRatesWithRelations = RecentRates & RecentRatesRelations;
