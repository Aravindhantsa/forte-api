import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr9, FedexMatrixRbAr9Relations} from '../models';

export class FedexMatrixRbAr9Repository extends DefaultCrudRepository<
  FedexMatrixRbAr9,
  typeof FedexMatrixRbAr9.prototype.id,
  FedexMatrixRbAr9Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr9, dataSource);
  }
}
