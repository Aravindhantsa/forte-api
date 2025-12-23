import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj6, FedexMatrixAdj6Relations} from '../models';

export class FedexMatrixAdj6Repository extends DefaultCrudRepository<
  FedexMatrixAdj6,
  typeof FedexMatrixAdj6.prototype.id,
  FedexMatrixAdj6Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj6, dataSource);
  }
}
