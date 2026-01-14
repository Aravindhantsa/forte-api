import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixRbAr9 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr9>) {
    super(data);
  }
}

export interface FedexMatrixRbAr9Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr9WithRelations = FedexMatrixRbAr9 & FedexMatrixRbAr9Relations;
