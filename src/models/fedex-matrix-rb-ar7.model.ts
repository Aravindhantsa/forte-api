import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrbar7'
    }
  }
})
export class FedexMatrixRbAr7 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr7>) {
    super(data);
  }
}

export interface FedexMatrixRbAr7Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr7WithRelations = FedexMatrixRbAr7 & FedexMatrixRbAr7Relations;
