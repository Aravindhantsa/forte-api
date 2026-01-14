import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr8, FedexMatrixRbAr8Relations} from '../models';

export class FedexMatrixRbAr8Repository extends DefaultCrudRepository<
  FedexMatrixRbAr8,
  typeof FedexMatrixRbAr8.prototype.id,
  FedexMatrixRbAr8Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr8, dataSource);
  }
}
