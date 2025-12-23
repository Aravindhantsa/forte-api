import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexAdditionalRate, FedexAdditionalRateRelations} from '../models';

export class FedexAdditionalRateRepository extends DefaultCrudRepository<
  FedexAdditionalRate,
  typeof FedexAdditionalRate.prototype.id,
  FedexAdditionalRateRelations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexAdditionalRate, dataSource);
  }
}
