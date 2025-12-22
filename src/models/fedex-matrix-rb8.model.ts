import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb8 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb8>) {
    super(data);
  }
}

export interface FedexMatrixRb8Relations {
  // describe navigational properties here
}

export type FedexMatrixRb8WithRelations = FedexMatrixRb8 & FedexMatrixRb8Relations;
