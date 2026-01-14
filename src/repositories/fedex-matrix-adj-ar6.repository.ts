import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixAdjAr6, FedexMatrixAdjAr6Relations} from '../models';

export class FedexMatrixAdjAr6Repository extends DefaultCrudRepository<
  FedexMatrixAdjAr6,
  typeof FedexMatrixAdjAr6.prototype.id,
  FedexMatrixAdjAr6Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixAdjAr6, dataSource);
  }
}
