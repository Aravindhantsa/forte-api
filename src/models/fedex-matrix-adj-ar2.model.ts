import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar2'
    }
  }
})
export class FedexMatrixAdjAr2 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr2>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr2Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr2WithRelations = FedexMatrixAdjAr2 & FedexMatrixAdjAr2Relations;
