import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb4, FedexMatrixRb4Relations} from '../models';

export class FedexMatrixRb4Repository extends DefaultCrudRepository<
  FedexMatrixRb4,
  typeof FedexMatrixRb4.prototype.id,
  FedexMatrixRb4Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb4, dataSource);
  }
}
