import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {ExternalCustomersDetail, ExternalCustomersDetailRelations, AdminUsers, CompanyDetails, ForteUser, QuoteDetails} from '../models';
import {AdminUsersRepository} from './admin-users.repository';
import {CompanyDetailsRepository} from './company-details.repository';
import {ForteUserRepository} from './forte-user.repository';
import {QuoteDetailsRepository} from './quote-details.repository';

export class ExternalCustomersDetailRepository extends DefaultCrudRepository<
  ExternalCustomersDetail,
  typeof ExternalCustomersDetail.prototype.id,
  ExternalCustomersDetailRelations
> {

  public readonly adminUsers: BelongsToAccessor<AdminUsers, typeof ExternalCustomersDetail.prototype.id>;

  public readonly companyDetails: BelongsToAccessor<CompanyDetails, typeof ExternalCustomersDetail.prototype.id>;

  public readonly forteUser: BelongsToAccessor<ForteUser, typeof ExternalCustomersDetail.prototype.id>;

  public readonly quoteDetails: HasManyRepositoryFactory<QuoteDetails, typeof ExternalCustomersDetail.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('AdminUsersRepository') protected adminUsersRepositoryGetter: Getter<AdminUsersRepository>, @repository.getter('CompanyDetailsRepository') protected companyDetailsRepositoryGetter: Getter<CompanyDetailsRepository>, @repository.getter('ForteUserRepository') protected forteUserRepositoryGetter: Getter<ForteUserRepository>, @repository.getter('QuoteDetailsRepository') protected quoteDetailsRepositoryGetter: Getter<QuoteDetailsRepository>,
  ) {
    super(ExternalCustomersDetail, dataSource);
    this.quoteDetails = this.createHasManyRepositoryFactoryFor('quoteDetails', quoteDetailsRepositoryGetter,);
    this.registerInclusionResolver('quoteDetails', this.quoteDetails.inclusionResolver);
    this.forteUser = this.createBelongsToAccessorFor('forteUser', forteUserRepositoryGetter,);
    this.registerInclusionResolver('forteUser', this.forteUser.inclusionResolver);
    this.companyDetails = this.createBelongsToAccessorFor('companyDetails', companyDetailsRepositoryGetter,);
    this.registerInclusionResolver('companyDetails', this.companyDetails.inclusionResolver);
    this.adminUsers = this.createBelongsToAccessorFor('adminUsers', adminUsersRepositoryGetter,);
    this.registerInclusionResolver('adminUsers', this.adminUsers.inclusionResolver);
  }
}
