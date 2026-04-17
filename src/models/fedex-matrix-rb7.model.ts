import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrb7'
    }
  }
})
export class FedexMatrixRb7 extends Entity {
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
  originBaseZipcode: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationBaseZipcode: string;

  @property({
    type: 'string',
    required: true,
  })
  RateBaseNumber: string;


  constructor(data?: Partial<FedexMatrixRb7>) {
    super(data);
  }
}

export interface FedexMatrixRb7Relations {
  // describe navigational properties here
}

export type FedexMatrixRb7WithRelations = FedexMatrixRb7 & FedexMatrixRb7Relations;
