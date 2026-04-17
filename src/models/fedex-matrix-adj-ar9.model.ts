import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar9'
    }
  }
})
export class FedexMatrixAdjAr9 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr9>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr9Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr9WithRelations = FedexMatrixAdjAr9 & FedexMatrixAdjAr9Relations;
