import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb0, FedexMatrixRb0Relations} from '../models';

export class FedexMatrixRb0Repository extends DefaultCrudRepository<
  FedexMatrixRb0,
  typeof FedexMatrixRb0.prototype.id,
  FedexMatrixRb0Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb0, dataSource);
  }
}
