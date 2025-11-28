import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {ExternalCustomersDetail, ExternalCustomersDetailRelations, AdminUsers, CompanyDetails, ForteUser} from '../models';
import {AdminUsersRepository} from './admin-users.repository';
import {CompanyDetailsRepository} from './company-details.repository';
import {ForteUserRepository} from './forte-user.repository';

export class ExternalCustomersDetailRepository extends DefaultCrudRepository<
  ExternalCustomersDetail,
  typeof ExternalCustomersDetail.prototype.id,
  ExternalCustomersDetailRelations
> {

  public readonly adminUsers: BelongsToAccessor<AdminUsers, typeof ExternalCustomersDetail.prototype.id>;

  public readonly companyDetails: BelongsToAccessor<CompanyDetails, typeof ExternalCustomersDetail.prototype.id>;

  public readonly forteUser: BelongsToAccessor<ForteUser, typeof ExternalCustomersDetail.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('AdminUsersRepository') protected adminUsersRepositoryGetter: Getter<AdminUsersRepository>, @repository.getter('CompanyDetailsRepository') protected companyDetailsRepositoryGetter: Getter<CompanyDetailsRepository>, @repository.getter('ForteUserRepository') protected forteUserRepositoryGetter: Getter<ForteUserRepository>,
  ) {
    super(ExternalCustomersDetail, dataSource);
    this.forteUser = this.createBelongsToAccessorFor('forteUser', forteUserRepositoryGetter,);
    this.registerInclusionResolver('forteUser', this.forteUser.inclusionResolver);
    this.companyDetails = this.createBelongsToAccessorFor('companyDetails', companyDetailsRepositoryGetter,);
    this.registerInclusionResolver('companyDetails', this.companyDetails.inclusionResolver);
    this.adminUsers = this.createBelongsToAccessorFor('adminUsers', adminUsersRepositoryGetter,);
    this.registerInclusionResolver('adminUsers', this.adminUsers.inclusionResolver);
  }
}
