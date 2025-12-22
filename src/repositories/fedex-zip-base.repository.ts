import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexZipBase, FedexZipBaseRelations} from '../models';

export class FedexZipBaseRepository extends DefaultCrudRepository<
  FedexZipBase,
  typeof FedexZipBase.prototype.id,
  FedexZipBaseRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexZipBase, dataSource);
  }
}
