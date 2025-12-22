import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb6 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb6>) {
    super(data);
  }
}

export interface FedexMatrixRb6Relations {
  // describe navigational properties here
}

export type FedexMatrixRb6WithRelations = FedexMatrixRb6 & FedexMatrixRb6Relations;
