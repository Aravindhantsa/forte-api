import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr2, FedexMatrixAdjAr2Relations} from '../models';

export class FedexMatrixAdjAr2Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr2,
  typeof FedexMatrixAdjAr2.prototype.id,
  FedexMatrixAdjAr2Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr2, dataSource);
  }
}
