import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb10 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb10>) {
    super(data);
  }
}

export interface FedexMatrixRb10Relations {
  // describe navigational properties here
}

export type FedexMatrixRb10WithRelations = FedexMatrixRb10 & FedexMatrixRb10Relations;
