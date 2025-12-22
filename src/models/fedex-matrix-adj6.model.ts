import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdj6 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj6>) {
    super(data);
  }
}

export interface FedexMatrixAdj6Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj6WithRelations = FedexMatrixAdj6 & FedexMatrixAdj6Relations;
