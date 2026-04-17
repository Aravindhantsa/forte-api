import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexzipbasear'
    }
  }
})
export class FedexZipBaseAr extends Entity {
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
  zipCode: string;

  @property({
    type: 'string',
    required: true,
  })
  originBaseZipCode: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationBaseZipCode: string;

  @property({
    type: 'string',
    required: true,
  })
  originRBNOAddOn: string;

  @property({
    type: 'string',
    required: true,
  })
  originAdjScale: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationRBNOAddOn: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationAdjScale: string;


  constructor(data?: Partial<FedexZipBaseAr>) {
    super(data);
  }
}

export interface FedexZipBaseArRelations {
  // describe navigational properties here
}

export type FedexZipBaseArWithRelations = FedexZipBaseAr & FedexZipBaseArRelations;
