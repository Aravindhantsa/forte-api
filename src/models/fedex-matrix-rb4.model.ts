import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrb4'
    }
  }
})
export class FedexMatrixRb4 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb4>) {
    super(data);
  }
}

export interface FedexMatrixRb4Relations {
  // describe navigational properties here
}

export type FedexMatrixRb4WithRelations = FedexMatrixRb4 & FedexMatrixRb4Relations;
