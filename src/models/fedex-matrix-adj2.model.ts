import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadj2'
    }
  }
})
export class FedexMatrixAdj2 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj2>) {
    super(data);
  }
}

export interface FedexMatrixAdj2Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj2WithRelations = FedexMatrixAdj2 & FedexMatrixAdj2Relations;
