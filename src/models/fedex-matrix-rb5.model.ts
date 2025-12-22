import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRb5 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRb5>) {
    super(data);
  }
}

export interface FedexMatrixRb5Relations {
  // describe navigational properties here
}

export type FedexMatrixRb5WithRelations = FedexMatrixRb5 & FedexMatrixRb5Relations;
