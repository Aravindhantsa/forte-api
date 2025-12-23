import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb5, FedexMatrixRb5Relations} from '../models';

export class FedexMatrixRb5Repository extends DefaultCrudRepository<
  FedexMatrixRb5,
  typeof FedexMatrixRb5.prototype.id,
  FedexMatrixRb5Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb5, dataSource);
  }
}
