import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr10, FedexMatrixRbAr10Relations} from '../models';

export class FedexMatrixRbAr10Repository extends DefaultCrudRepository<
  FedexMatrixRbAr10,
  typeof FedexMatrixRbAr10.prototype.id,
  FedexMatrixRbAr10Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr10, dataSource);
  }
}
