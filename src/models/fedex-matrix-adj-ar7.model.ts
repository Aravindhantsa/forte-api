import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdjAr7 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr7>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr7Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr7WithRelations = FedexMatrixAdjAr7 & FedexMatrixAdjAr7Relations;
