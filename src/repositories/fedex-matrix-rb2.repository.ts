import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb2, FedexMatrixRb2Relations} from '../models';

export class FedexMatrixRb2Repository extends DefaultCrudRepository<
  FedexMatrixRb2,
  typeof FedexMatrixRb2.prototype.id,
  FedexMatrixRb2Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb2, dataSource);
  }
}
