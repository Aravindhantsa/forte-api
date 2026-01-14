import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr0, FedexMatrixAdjAr0Relations} from '../models';

export class FedexMatrixAdjAr0Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr0,
  typeof FedexMatrixAdjAr0.prototype.id,
  FedexMatrixAdjAr0Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr0, dataSource);
  }
}
