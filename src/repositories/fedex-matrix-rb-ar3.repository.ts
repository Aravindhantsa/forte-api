import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr3, FedexMatrixRbAr3Relations} from '../models';

export class FedexMatrixRbAr3Repository extends DefaultCrudRepository<
  FedexMatrixRbAr3,
  typeof FedexMatrixRbAr3.prototype.id,
  FedexMatrixRbAr3Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr3, dataSource);
  }
}
