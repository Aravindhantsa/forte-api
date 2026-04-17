import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar5'
    }
  }
})
export class FedexMatrixAdjAr5 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr5>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr5Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr5WithRelations = FedexMatrixAdjAr5 & FedexMatrixAdjAr5Relations;
