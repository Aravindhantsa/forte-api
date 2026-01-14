import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdjAr3 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr3>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr3Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr3WithRelations = FedexMatrixAdjAr3 & FedexMatrixAdjAr3Relations;
