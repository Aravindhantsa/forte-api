import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {AdminUsers, AdminUsersRelations, ForteUser, CompanyDetails, ExternalCustomersDetail, QuoteDetails} from '../models';
import {ForteUserRepository} from './forte-user.repository';
import {CompanyDetailsRepository} from './company-details.repository';
import {ExternalCustomersDetailRepository} from './external-customers-detail.repository';
import {QuoteDetailsRepository} from './quote-details.repository';

export class AdminUsersRepository extends DefaultCrudRepository<
  AdminUsers,
  typeof AdminUsers.prototype.id,
  AdminUsersRelations
> {

  public readonly forteUser: BelongsToAccessor<ForteUser, typeof AdminUsers.prototype.id>;

  public readonly companyDetails: HasManyRepositoryFactory<CompanyDetails, typeof AdminUsers.prototype.id>;

  public readonly externalCustomersDetails: HasManyRepositoryFactory<ExternalCustomersDetail, typeof AdminUsers.prototype.id>;

  public readonly quoteDetails: HasManyRepositoryFactory<QuoteDetails, typeof AdminUsers.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('ForteUserRepository') protected forteUserRepositoryGetter: Getter<ForteUserRepository>, @repository.getter('CompanyDetailsRepository') protected companyDetailsRepositoryGetter: Getter<CompanyDetailsRepository>, @repository.getter('ExternalCustomersDetailRepository') protected externalCustomersDetailRepositoryGetter: Getter<ExternalCustomersDetailRepository>, @repository.getter('QuoteDetailsRepository') protected quoteDetailsRepositoryGetter: Getter<QuoteDetailsRepository>,
  ) {
    super(AdminUsers, dataSource);
    this.quoteDetails = this.createHasManyRepositoryFactoryFor('quoteDetails', quoteDetailsRepositoryGetter,);
    this.registerInclusionResolver('quoteDetails', this.quoteDetails.inclusionResolver);
    this.externalCustomersDetails = this.createHasManyRepositoryFactoryFor('externalCustomersDetails', externalCustomersDetailRepositoryGetter,);
    this.registerInclusionResolver('externalCustomersDetails', this.externalCustomersDetails.inclusionResolver);
    this.companyDetails = this.createHasManyRepositoryFactoryFor('companyDetails', companyDetailsRepositoryGetter,);
    this.registerInclusionResolver('companyDetails', this.companyDetails.inclusionResolver);
    this.forteUser = this.createBelongsToAccessorFor('forteUser', forteUserRepositoryGetter,);
    this.registerInclusionResolver('forteUser', this.forteUser.inclusionResolver);
  }
}
