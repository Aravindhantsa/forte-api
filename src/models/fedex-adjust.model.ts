import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexAdjust extends Entity {
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
  mcAdj50lb: string;

  @property({
    type: 'string',
    required: true,
    mysql: {
      dataType: 'TEXT',
    },
  })
  rtAdj: string;


  constructor(data?: Partial<FedexAdjust>) {
    super(data);
  }
}

export interface FedexAdjustRelations {
  // describe navigational properties here
}

export type FedexAdjustWithRelations = FedexAdjust & FedexAdjustRelations;
