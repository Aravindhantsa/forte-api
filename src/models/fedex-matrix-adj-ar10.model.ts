import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar10'
    }
  }
})
export class FedexMatrixAdjAr10 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr10>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr10Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr10WithRelations = FedexMatrixAdjAr10 & FedexMatrixAdjAr10Relations;
