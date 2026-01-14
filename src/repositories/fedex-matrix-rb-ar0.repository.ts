import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr0, FedexMatrixRbAr0Relations} from '../models';

export class FedexMatrixRbAr0Repository extends DefaultCrudRepository<
  FedexMatrixRbAr0,
  typeof FedexMatrixRbAr0.prototype.id,
  FedexMatrixRbAr0Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr0, dataSource);
  }
}
