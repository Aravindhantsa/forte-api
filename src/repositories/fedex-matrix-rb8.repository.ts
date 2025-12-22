import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb8, FedexMatrixRb8Relations} from '../models';

export class FedexMatrixRb8Repository extends DefaultCrudRepository<
  FedexMatrixRb8,
  typeof FedexMatrixRb8.prototype.id,
  FedexMatrixRb8Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb8, dataSource);
  }
}
