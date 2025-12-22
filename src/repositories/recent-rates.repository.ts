import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {RecentRates, RecentRatesRelations} from '../models';

export class RecentRatesRepository extends DefaultCrudRepository<
  RecentRates,
  typeof RecentRates.prototype.id,
  RecentRatesRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(RecentRates, dataSource);
  }
}
