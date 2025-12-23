import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixRb1, FedexMatrixRb1Relations} from '../models';

export class FedexMatrixRb1Repository extends DefaultCrudRepository<
  FedexMatrixRb1,
  typeof FedexMatrixRb1.prototype.id,
  FedexMatrixRb1Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixRb1, dataSource);
  }
}
