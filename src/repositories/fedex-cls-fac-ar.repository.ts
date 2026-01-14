import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexClsFacAr, FedexClsFacArRelations} from '../models';

export class FedexClsFacArRepository extends DefaultCrudRepository<
  FedexClsFacAr,
  typeof FedexClsFacAr.prototype.id,
  FedexClsFacArRelations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexClsFacAr, dataSource);
  }
}
