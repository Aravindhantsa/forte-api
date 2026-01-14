import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexRateAr, FedexRateArRelations} from '../models';

export class FedexRateArRepository extends DefaultCrudRepository<
  FedexRateAr,
  typeof FedexRateAr.prototype.id,
  FedexRateArRelations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexRateAr, dataSource);
  }
}
