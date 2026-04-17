import {Entity, property} from '@loopback/repository';

export abstract class BaseEntity extends Entity {

  @property({
    type: 'date',
    required: false,
    defaultFn: 'now',
    jsonSchema: {readOnly: true},
  })
  created: Date;

  @property({
    type: 'date',
    required: false,
    defaultFn: 'now',
    jsonSchema: {readOnly: true},
  })
  lastUpdated: Date;
}
