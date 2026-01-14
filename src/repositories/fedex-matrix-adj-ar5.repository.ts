import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr5, FedexMatrixAdjAr5Relations} from '../models';

export class FedexMatrixAdjAr5Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr5,
  typeof FedexMatrixAdjAr5.prototype.id,
  FedexMatrixAdjAr5Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr5, dataSource);
  }
}
