import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj0, FedexMatrixAdj0Relations} from '../models';

export class FedexMatrixAdj0Repository extends DefaultCrudRepository<
  FedexMatrixAdj0,
  typeof FedexMatrixAdj0.prototype.id,
  FedexMatrixAdj0Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj0, dataSource);
  }
}
