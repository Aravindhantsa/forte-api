import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb10, FedexMatrixRb10Relations} from '../models';

export class FedexMatrixRb10Repository extends DefaultCrudRepository<
  FedexMatrixRb10,
  typeof FedexMatrixRb10.prototype.id,
  FedexMatrixRb10Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb10, dataSource);
  }
}
