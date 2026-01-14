import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr3 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr3>) {
    super(data);
  }
}

export interface FedexMatrixRbAr3Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr3WithRelations = FedexMatrixRbAr3 & FedexMatrixRbAr3Relations;
