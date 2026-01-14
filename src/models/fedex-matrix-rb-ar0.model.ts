import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr0 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr0>) {
    super(data);
  }
}

export interface FedexMatrixRbAr0Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr0WithRelations = FedexMatrixRbAr0 & FedexMatrixRbAr0Relations;
