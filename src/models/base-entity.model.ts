import {Entity, property} from '@loopback/repository';

export abstract class BaseEntity extends Entity {

  @property({
    type: 'date',
    required: true,
    jsonSchema: {readOnly: true},
  })
  created: Date;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {readOnly: true},
  })
  lastUpdated: Date;
}
