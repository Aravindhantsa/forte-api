import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj10, FedexMatrixAdj10Relations} from '../models';

export class FedexMatrixAdj10Repository extends DefaultCrudRepository<
  FedexMatrixAdj10,
  typeof FedexMatrixAdj10.prototype.id,
  FedexMatrixAdj10Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj10, dataSource);
  }
}
