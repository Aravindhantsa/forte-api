import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr2, FedexMatrixRbAr2Relations} from '../models';

export class FedexMatrixRbAr2Repository extends DefaultCrudRepository<
  FedexMatrixRbAr2,
  typeof FedexMatrixRbAr2.prototype.id,
  FedexMatrixRbAr2Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr2, dataSource);
  }
}
