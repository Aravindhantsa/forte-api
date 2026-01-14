import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr7, FedexMatrixRbAr7Relations} from '../models';

export class FedexMatrixRbAr7Repository extends DefaultCrudRepository<
  FedexMatrixRbAr7,
  typeof FedexMatrixRbAr7.prototype.id,
  FedexMatrixRbAr7Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr7, dataSource);
  }
}
