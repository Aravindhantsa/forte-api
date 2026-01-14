import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr9, FedexMatrixAdjAr9Relations} from '../models';

export class FedexMatrixAdjAr9Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr9,
  typeof FedexMatrixAdjAr9.prototype.id,
  FedexMatrixAdjAr9Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr9, dataSource);
  }
}
