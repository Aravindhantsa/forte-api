import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr1, FedexMatrixAdjAr1Relations} from '../models';

export class FedexMatrixAdjAr1Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr1,
  typeof FedexMatrixAdjAr1.prototype.id,
  FedexMatrixAdjAr1Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr1, dataSource);
  }
}
