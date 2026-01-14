import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr10, FedexMatrixAdjAr10Relations} from '../models';

export class FedexMatrixAdjAr10Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr10,
  typeof FedexMatrixAdjAr10.prototype.id,
  FedexMatrixAdjAr10Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr10, dataSource);
  }
}
