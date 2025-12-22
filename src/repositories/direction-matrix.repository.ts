import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {DirectionMatrix, DirectionMatrixRelations} from '../models';

export class DirectionMatrixRepository extends DefaultCrudRepository<
  DirectionMatrix,
  typeof DirectionMatrix.prototype.id,
  DirectionMatrixRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(DirectionMatrix, dataSource);
  }
}
