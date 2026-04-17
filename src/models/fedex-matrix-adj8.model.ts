import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadj8'
    }
  }
})
export class FedexMatrixAdj8 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj8>) {
    super(data);
  }
}

export interface FedexMatrixAdj8Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj8WithRelations = FedexMatrixAdj8 & FedexMatrixAdj8Relations;
