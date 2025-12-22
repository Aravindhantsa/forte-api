import {Entity, model, property} from '@loopback/repository';

@model()
export class FedexDeliveryCharge extends Entity {
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
    required: true,
  })
  charge: string;


  constructor(data?: Partial<FedexDeliveryCharge>) {
    super(data);
  }
}

export interface FedexDeliveryChargeRelations {
  // describe navigational properties here
}

export type FedexDeliveryChargeWithRelations = FedexDeliveryCharge & FedexDeliveryChargeRelations;
