import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadj0'
    }
  }
})
export class FedexMatrixAdj0 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj0>) {
    super(data);
  }
}

export interface FedexMatrixAdj0Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj0WithRelations = FedexMatrixAdj0 & FedexMatrixAdj0Relations;
