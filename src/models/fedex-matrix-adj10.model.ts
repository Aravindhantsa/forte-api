import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdj10 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj10>) {
    super(data);
  }
}

export interface FedexMatrixAdj10Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj10WithRelations = FedexMatrixAdj10 & FedexMatrixAdj10Relations;
