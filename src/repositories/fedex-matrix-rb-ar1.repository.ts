import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortesmcdbDataSource} from '../datasources';
import {FedexMatrixRbAr1, FedexMatrixRbAr1Relations} from '../models';

export class FedexMatrixRbAr1Repository extends DefaultCrudRepository<
  FedexMatrixRbAr1,
  typeof FedexMatrixRbAr1.prototype.id,
  FedexMatrixRbAr1Relations
> {
  constructor(
    @inject('datasources.fortesmcdb') dataSource: FortesmcdbDataSource,
  ) {
    super(FedexMatrixRbAr1, dataSource);
  }
}
