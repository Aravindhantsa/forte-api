import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb0 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb0>) {
    super(data);
  }
}

export interface FedexMatrixRb0Relations {
  // describe navigational properties here
}

export type FedexMatrixRb0WithRelations = FedexMatrixRb0 & FedexMatrixRb0Relations;
