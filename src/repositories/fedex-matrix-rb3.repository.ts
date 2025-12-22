import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb3, FedexMatrixRb3Relations} from '../models';

export class FedexMatrixRb3Repository extends DefaultCrudRepository<
  FedexMatrixRb3,
  typeof FedexMatrixRb3.prototype.id,
  FedexMatrixRb3Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb3, dataSource);
  }
}
