import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {PeakSurcharge, PeakSurchargeRelations} from '../models';

export class PeakSurchargeRepository extends DefaultCrudRepository<
  PeakSurcharge,
  typeof PeakSurcharge.prototype.id,
  PeakSurchargeRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(PeakSurcharge, dataSource);
  }
}
