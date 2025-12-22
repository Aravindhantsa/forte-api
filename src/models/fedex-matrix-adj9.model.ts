import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdj9 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj9>) {
    super(data);
  }
}

export interface FedexMatrixAdj9Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj9WithRelations = FedexMatrixAdj9 & FedexMatrixAdj9Relations;
