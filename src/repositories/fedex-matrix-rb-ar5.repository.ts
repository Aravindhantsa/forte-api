import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr5, FedexMatrixRbAr5Relations} from '../models';

export class FedexMatrixRbAr5Repository extends DefaultCrudRepository<
  FedexMatrixRbAr5,
  typeof FedexMatrixRbAr5.prototype.id,
  FedexMatrixRbAr5Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr5, dataSource);
  }
}
