import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr7, FedexMatrixAdjAr7Relations} from '../models';

export class FedexMatrixAdjAr7Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr7,
  typeof FedexMatrixAdjAr7.prototype.id,
  FedexMatrixAdjAr7Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr7, dataSource);
  }
}
