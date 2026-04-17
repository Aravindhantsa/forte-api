import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar0'
    }
  }
})
export class FedexMatrixAdjAr0 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr0>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr0Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr0WithRelations = FedexMatrixAdjAr0 & FedexMatrixAdjAr0Relations;
