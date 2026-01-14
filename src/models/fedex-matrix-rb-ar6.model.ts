import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr6 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr6>) {
    super(data);
  }
}

export interface FedexMatrixRbAr6Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr6WithRelations = FedexMatrixRbAr6 & FedexMatrixRbAr6Relations;
