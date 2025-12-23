import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb7, FedexMatrixRb7Relations} from '../models';

export class FedexMatrixRb7Repository extends DefaultCrudRepository<
  FedexMatrixRb7,
  typeof FedexMatrixRb7.prototype.id,
  FedexMatrixRb7Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb7, dataSource);
  }
}
