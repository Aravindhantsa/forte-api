import {Entity, model, property, belongsTo} from '@loopback/repository';
import {CompanyDetails} from './company-details.model';

@model()
export class BusinessRules extends Entity {
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
  direction: string;

  @property({
    type: 'string',
    required: true,
  })
  carrier: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'boolean',
  })
  specificStateFlag?: string;

  @property({
    type: 'boolean',
  })
  specificZipFlag?: string;

  @property({
    type: 'string',
  })
  specificStateFrom?: string;

  @property({
    type: 'string',
  })
  specificStateTo?: string;

  @property({
    type: 'string',
  })
  specificZipFrom?: string;

  @property({
    type: 'string',
  })
  specificZipTo?: string;

  @property({
    type: 'string',
    required: true,
  })
  discount: string;

  @property({
    type: 'string',
    required: true,
  })
  minCharge: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  accessorials?: object[];

  @property({
    type: 'string',
  })
  fakRange?: string;

  @property({
    type: 'string',
  })
  fakValue?: string;

  @property({
    type: 'string',
  })
  createdBy?: string;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @belongsTo(() => CompanyDetails, {name: 'companyDetails'})
  companyId: number;

  constructor(data?: Partial<BusinessRules>) {
    super(data);
  }
}

export interface BusinessRulesRelations {
  // describe navigational properties here
}

export type BusinessRulesWithRelations = BusinessRules & BusinessRulesRelations;
