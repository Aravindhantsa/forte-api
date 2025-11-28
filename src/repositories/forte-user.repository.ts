import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {ForteUser, ForteUserRelations, AdminUsers, ExternalCustomersDetail} from '../models';
import {AdminUsersRepository} from './admin-users.repository';
import {ExternalCustomersDetailRepository} from './external-customers-detail.repository';

export class ForteUserRepository extends DefaultCrudRepository<
  ForteUser,
  typeof ForteUser.prototype.id,
  ForteUserRelations
> {

  public readonly adminUsers: HasOneRepositoryFactory<AdminUsers, typeof ForteUser.prototype.id>;

  public readonly externalCustomersDetail: HasOneRepositoryFactory<ExternalCustomersDetail, typeof ForteUser.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('AdminUsersRepository') protected adminUsersRepositoryGetter: Getter<AdminUsersRepository>, @repository.getter('ExternalCustomersDetailRepository') protected externalCustomersDetailRepositoryGetter: Getter<ExternalCustomersDetailRepository>,
  ) {
    super(ForteUser, dataSource);
    this.externalCustomersDetail = this.createHasOneRepositoryFactoryFor('externalCustomersDetail', externalCustomersDetailRepositoryGetter);
    this.registerInclusionResolver('externalCustomersDetail', this.externalCustomersDetail.inclusionResolver);
    this.adminUsers = this.createHasOneRepositoryFactoryFor('adminUsers', adminUsersRepositoryGetter);
    this.registerInclusionResolver('adminUsers', this.adminUsers.inclusionResolver);
  }
}
