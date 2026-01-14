import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr3, FedexMatrixAdjAr3Relations} from '../models';

export class FedexMatrixAdjAr3Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr3,
  typeof FedexMatrixAdjAr3.prototype.id,
  FedexMatrixAdjAr3Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr3, dataSource);
  }
}
