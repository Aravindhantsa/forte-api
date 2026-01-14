import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexZipBaseAr, FedexZipBaseArRelations} from '../models';

export class FedexZipBaseArRepository extends DefaultCrudRepository<
  FedexZipBaseAr,
  typeof FedexZipBaseAr.prototype.id,
  FedexZipBaseArRelations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexZipBaseAr, dataSource);
  }
}
