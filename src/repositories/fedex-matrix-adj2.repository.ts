import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj2, FedexMatrixAdj2Relations} from '../models';

export class FedexMatrixAdj2Repository extends DefaultCrudRepository<
  FedexMatrixAdj2,
  typeof FedexMatrixAdj2.prototype.id,
  FedexMatrixAdj2Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj2, dataSource);
  }
}
