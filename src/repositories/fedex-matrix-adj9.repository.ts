import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj9, FedexMatrixAdj9Relations} from '../models';

export class FedexMatrixAdj9Repository extends DefaultCrudRepository<
  FedexMatrixAdj9,
  typeof FedexMatrixAdj9.prototype.id,
  FedexMatrixAdj9Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj9, dataSource);
  }
}
