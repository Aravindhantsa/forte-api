import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr8 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr8>) {
    super(data);
  }
}

export interface FedexMatrixRbAr8Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr8WithRelations = FedexMatrixRbAr8 & FedexMatrixRbAr8Relations;
