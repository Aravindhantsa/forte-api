import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb1 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb1>) {
    super(data);
  }
}

export interface FedexMatrixRb1Relations {
  // describe navigational properties here
}

export type FedexMatrixRb1WithRelations = FedexMatrixRb1 & FedexMatrixRb1Relations;
