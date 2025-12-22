import {belongsTo, model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';
import {CompanyDetails} from './company-details.model';
@model()
export class BusinessRules extends BaseEntity {
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
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: 0,
      maximum: 100,
    },
    mysql: {
      dataType: 'decimal',
      precision: 5,
      scale: 2,
    },
  })
  discount: number;

  @property({
    type: 'number',
    required: true,
  })
  amc: number;

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
