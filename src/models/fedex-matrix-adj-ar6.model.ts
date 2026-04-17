import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar6'
    }
  }
})
export class FedexMatrixAdjAr6 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr6>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr6Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr6WithRelations = FedexMatrixAdjAr6 & FedexMatrixAdjAr6Relations;
