import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb9, FedexMatrixRb9Relations} from '../models';

export class FedexMatrixRb9Repository extends DefaultCrudRepository<
  FedexMatrixRb9,
  typeof FedexMatrixRb9.prototype.id,
  FedexMatrixRb9Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb9, dataSource);
  }
}
