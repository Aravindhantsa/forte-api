import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrb2'
    }
  }
})
export class FedexMatrixRb2 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb2>) {
    super(data);
  }
}

export interface FedexMatrixRb2Relations {
  // describe navigational properties here
}

export type FedexMatrixRb2WithRelations = FedexMatrixRb2 & FedexMatrixRb2Relations;
