import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixadj4'
    }
  }
})
export class FedexMatrixAdj4 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj4>) {
    super(data);
  }
}

export interface FedexMatrixAdj4Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj4WithRelations = FedexMatrixAdj4 & FedexMatrixAdj4Relations;
