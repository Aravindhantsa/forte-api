import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdjAr4 extends Entity {
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
  adjTableNumber: string;


  constructor(data?: Partial<FedexMatrixAdjAr4>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr4Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr4WithRelations = FedexMatrixAdjAr4 & FedexMatrixAdjAr4Relations;
