import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdjAr8 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr8>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr8Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr8WithRelations = FedexMatrixAdjAr8 & FedexMatrixAdjAr8Relations;
