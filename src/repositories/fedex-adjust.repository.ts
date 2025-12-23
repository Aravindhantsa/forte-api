import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexAdjust, FedexAdjustRelations} from '../models';

export class FedexAdjustRepository extends DefaultCrudRepository<
  FedexAdjust,
  typeof FedexAdjust.prototype.id,
  FedexAdjustRelations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexAdjust, dataSource);
  }
}
