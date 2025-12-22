import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexRate, FedexRateRelations} from '../models';

export class FedexRateRepository extends DefaultCrudRepository<
  FedexRate,
  typeof FedexRate.prototype.id,
  FedexRateRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexRate, dataSource);
  }
}
