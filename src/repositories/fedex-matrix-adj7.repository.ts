import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj7, FedexMatrixAdj7Relations} from '../models';

export class FedexMatrixAdj7Repository extends DefaultCrudRepository<
  FedexMatrixAdj7,
  typeof FedexMatrixAdj7.prototype.id,
  FedexMatrixAdj7Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj7, dataSource);
  }
}
