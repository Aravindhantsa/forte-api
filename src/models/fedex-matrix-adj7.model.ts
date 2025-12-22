import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdj7 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj7>) {
    super(data);
  }
}

export interface FedexMatrixAdj7Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj7WithRelations = FedexMatrixAdj7 & FedexMatrixAdj7Relations;
