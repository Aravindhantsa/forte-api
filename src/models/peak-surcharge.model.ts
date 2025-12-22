import {Entity, model, property} from '@loopback/repository';

@model()
export class PeakSurcharge extends Entity {
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
  zip: string;

  @property({
    type: 'string',
  })
  serviceCenterCode: string;

  @property({
    type: 'string',
  })
  serviceCenterName?: string;

  @property({
    type: 'string',
  })
  serviceCenterState?: string;

  @property({
    type: 'string',
  })
  surchargeTier?: string;

  @property({
    type: 'string',
    required: true,
  })
  surchargeAmount: string;


  constructor(data?: Partial<PeakSurcharge>) {
    super(data);
  }
}

export interface PeakSurchargeRelations {
  // describe navigational properties here
}

export type PeakSurchargeWithRelations = PeakSurcharge & PeakSurchargeRelations;
