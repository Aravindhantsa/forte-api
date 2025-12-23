import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {FedexMatrixAdj1, FedexMatrixAdj1Relations} from '../models';

export class FedexMatrixAdj1Repository extends DefaultCrudRepository<
  FedexMatrixAdj1,
  typeof FedexMatrixAdj1.prototype.id,
  FedexMatrixAdj1Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortedbDataSource,
  ) {
    super(FedexMatrixAdj1, dataSource);
  }
}
