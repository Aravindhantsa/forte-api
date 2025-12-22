import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb9 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb9>) {
    super(data);
  }
}

export interface FedexMatrixRb9Relations {
  // describe navigational properties here
}

export type FedexMatrixRb9WithRelations = FedexMatrixRb9 & FedexMatrixRb9Relations;
