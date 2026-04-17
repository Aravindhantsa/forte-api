import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadjar1'
    }
  }
})
export class FedexMatrixAdjAr1 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdjAr1>) {
    super(data);
  }
}

export interface FedexMatrixAdjAr1Relations {
  // describe navigational properties here
}

export type FedexMatrixAdjAr1WithRelations = FedexMatrixAdjAr1 & FedexMatrixAdjAr1Relations;
