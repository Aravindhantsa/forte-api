import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdj5 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj5>) {
    super(data);
  }
}

export interface FedexMatrixAdj5Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj5WithRelations = FedexMatrixAdj5 & FedexMatrixAdj5Relations;
