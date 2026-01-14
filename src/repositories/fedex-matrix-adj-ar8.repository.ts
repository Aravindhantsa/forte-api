import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr8, FedexMatrixAdjAr8Relations} from '../models';

export class FedexMatrixAdjAr8Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr8,
  typeof FedexMatrixAdjAr8.prototype.id,
  FedexMatrixAdjAr8Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr8, dataSource);
  }
}
