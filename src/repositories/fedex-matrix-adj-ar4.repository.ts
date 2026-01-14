import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr4, FedexMatrixAdjAr4Relations} from '../models';

export class FedexMatrixAdjAr4Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr4,
  typeof FedexMatrixAdjAr4.prototype.id,
  FedexMatrixAdjAr4Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr4, dataSource);
  }
}
