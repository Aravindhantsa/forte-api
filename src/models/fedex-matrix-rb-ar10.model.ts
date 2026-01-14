import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr10 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr10>) {
    super(data);
  }
}

export interface FedexMatrixRbAr10Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr10WithRelations = FedexMatrixRbAr10 & FedexMatrixRbAr10Relations;
