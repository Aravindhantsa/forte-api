import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb6, FedexMatrixRb6Relations} from '../models';

export class FedexMatrixRb6Repository extends DefaultCrudRepository<
  FedexMatrixRb6,
  typeof FedexMatrixRb6.prototype.id,
  FedexMatrixRb6Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb6, dataSource);
  }
}
