import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexDeliveryCharge, FedexDeliveryChargeRelations} from '../models';

export class FedexDeliveryChargeRepository extends DefaultCrudRepository<
  FedexDeliveryCharge,
  typeof FedexDeliveryCharge.prototype.id,
  FedexDeliveryChargeRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexDeliveryCharge, dataSource);
  }
}
