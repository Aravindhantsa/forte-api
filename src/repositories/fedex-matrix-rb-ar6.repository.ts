import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr6, FedexMatrixRbAr6Relations} from '../models';

export class FedexMatrixRbAr6Repository extends DefaultCrudRepository<
  FedexMatrixRbAr6,
  typeof FedexMatrixRbAr6.prototype.id,
  FedexMatrixRbAr6Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr6, dataSource);
  }
}
