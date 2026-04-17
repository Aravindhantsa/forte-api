import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'fedexadjustar'
    }
  }
})
export class FedexAdjustAr extends Entity {
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
  adjustmentTableNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  adjustmentType: string;

  @property({
    type: 'string',
    required: true,
  })
  mcAdj300lb: string;

  @property({
    type: 'string',
    required: true,
  })
  mcAdj400lb: string;

  @property({
    type: 'string',
    required: true,
  })
  mcAdj500lb: string;

  @property({
    type: 'string',
    required: true,
  })
  mcAdj501lb: string;

  @property({
    type: 'string',
    required: true,
    mysql: {
      dataType: 'TEXT',
    },
  })
  rtAdj: string;


  constructor(data?: Partial<FedexAdjustAr>) {
    super(data);
  }
}

export interface FedexAdjustArRelations {
  // describe navigational properties here
}

export type FedexAdjustArWithRelations = FedexAdjustAr & FedexAdjustArRelations;
