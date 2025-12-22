import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb3 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb3>) {
    super(data);
  }
}

export interface FedexMatrixRb3Relations {
  // describe navigational properties here
}

export type FedexMatrixRb3WithRelations = FedexMatrixRb3 & FedexMatrixRb3Relations;
