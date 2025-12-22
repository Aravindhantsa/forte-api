import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj8, FedexMatrixAdj8Relations} from '../models';

export class FedexMatrixAdj8Repository extends DefaultCrudRepository<
  FedexMatrixAdj8,
  typeof FedexMatrixAdj8.prototype.id,
  FedexMatrixAdj8Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj8, dataSource);
  }
}
