import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexmatrixrbar5'
    }
  }
})
export class FedexMatrixRbAr5 extends Entity {
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


  constructor(data?: Partial<FedexMatrixRbAr5>) {
    super(data);
  }
}

export interface FedexMatrixRbAr5Relations {
  // describe navigational properties here
}

export type FedexMatrixRbAr5WithRelations = FedexMatrixRbAr5 & FedexMatrixRbAr5Relations;
