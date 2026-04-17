import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrbar2'
    }
  }
})
export class FedexMatrixRbAr2 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr2>) {
    super(data);
  }
}

export interface FedexMatrixRbAr2Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr2WithRelations = FedexMatrixRbAr2 & FedexMatrixRbAr2Relations;
