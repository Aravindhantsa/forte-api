import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj4, FedexMatrixAdj4Relations} from '../models';

export class FedexMatrixAdj4Repository extends DefaultCrudRepository<
  FedexMatrixAdj4,
  typeof FedexMatrixAdj4.prototype.id,
  FedexMatrixAdj4Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj4, dataSource);
  }
}
