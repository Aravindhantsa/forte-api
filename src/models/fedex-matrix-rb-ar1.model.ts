import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr1 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr1>) {
    super(data);
  }
}

export interface FedexMatrixRbAr1Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr1WithRelations = FedexMatrixRbAr1 & FedexMatrixRbAr1Relations;
