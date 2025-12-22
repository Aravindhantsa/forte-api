import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj5, FedexMatrixAdj5Relations} from '../models';

export class FedexMatrixAdj5Repository extends DefaultCrudRepository<
  FedexMatrixAdj5,
  typeof FedexMatrixAdj5.prototype.id,
  FedexMatrixAdj5Relations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj5, dataSource);
  }
}
