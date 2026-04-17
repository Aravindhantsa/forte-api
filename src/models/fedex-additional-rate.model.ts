import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexadditionalrate'
    }
  }
})
export class FedexAdditionalRate extends Entity {
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
  zip: string;

  @property({
    type: 'string',
  })
  originTier?: string;

  @property({
    type: 'string',
  })
  destinationTier?: string;

  @property({
    type: 'string',
    required: true,
  })
  originRate: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationRate: string;


  constructor(data?: Partial<FedexAdditionalRate>) {
    super(data);
  }
}

export interface FedexAdditionalRateRelations {
  // describe navigational properties here
}

export type FedexAdditionalRateWithRelations = FedexAdditionalRate & FedexAdditionalRateRelations;
