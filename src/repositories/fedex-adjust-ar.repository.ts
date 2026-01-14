import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexAdjustAr, FedexAdjustArRelations} from '../models';

export class FedexAdjustArRepository extends DefaultCrudRepository<
  FedexAdjustAr,
  typeof FedexAdjustAr.prototype.id,
  FedexAdjustArRelations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexAdjustAr, dataSource);
  }
}
