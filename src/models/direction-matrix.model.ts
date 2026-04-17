import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'directionmatrix'
    }
  }
})
export class DirectionMatrix extends Entity {
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
  originState: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationState: string;

  @property({
    type: 'string',
    required: true,
  })
  direction: string;


  constructor(data?: Partial<DirectionMatrix>) {
    super(data);
  }
}

export interface DirectionMatrixRelations {
  // describe navigational properties here
}

export type DirectionMatrixWithRelations = DirectionMatrix & DirectionMatrixRelations;
