import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadj3'
    }
  }
})
export class FedexMatrixAdj3 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj3>) {
    super(data);
  }
}

export interface FedexMatrixAdj3Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj3WithRelations = FedexMatrixAdj3 & FedexMatrixAdj3Relations;
