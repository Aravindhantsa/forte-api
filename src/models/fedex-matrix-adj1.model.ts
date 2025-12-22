import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexMatrixAdj1 extends Entity {
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


  constructor(data?: Partial<FedexMatrixAdj1>) {
    super(data);
  }
}

export interface FedexMatrixAdj1Relations {
  // describe navigational properties here
}

export type FedexMatrixAdj1WithRelations = FedexMatrixAdj1 & FedexMatrixAdj1Relations;
