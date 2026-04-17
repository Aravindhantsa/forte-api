import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrbar4'
    }
  }
})
export class FedexMatrixRbAr4 extends Entity {
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
  RateBaseNumber: string;


  constructor(data?: Partial<FedexMatrixRbAr4>) {
    super(data);
  }
}

export interface FedexMatrixRbAr4Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr4WithRelations = FedexMatrixRbAr4 & FedexMatrixRbAr4Relations;
