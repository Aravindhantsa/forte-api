import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj3, FedexMatrixAdj3Relations} from '../models';

export class FedexMatrixAdj3Repository extends DefaultCrudRepository<
  FedexMatrixAdj3,
  typeof FedexMatrixAdj3.prototype.id,
  FedexMatrixAdj3Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj3, dataSource);
  }
}
