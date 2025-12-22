import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexClsFac, FedexClsFacRelations} from '../models';

export class FedexClsFacRepository extends DefaultCrudRepository<
  FedexClsFac,
  typeof FedexClsFac.prototype.id,
  FedexClsFacRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexClsFac, dataSource);
  }
}
