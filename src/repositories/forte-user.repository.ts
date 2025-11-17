import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {ForteUser, ForteUserRelations} from '../models';

export class ForteUserRepository extends DefaultCrudRepository<
  ForteUser,
  typeof ForteUser.prototype.id,
  ForteUserRelations
> {
  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource,
  ) {
    super(ForteUser, dataSource);
  }
}
