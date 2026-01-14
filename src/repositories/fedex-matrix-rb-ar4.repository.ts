import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr4, FedexMatrixRbAr4Relations} from '../models';

export class FedexMatrixRbAr4Repository extends DefaultCrudRepository<
  FedexMatrixRbAr4,
  typeof FedexMatrixRbAr4.prototype.id,
  FedexMatrixRbAr4Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr4, dataSource);
  }
}
