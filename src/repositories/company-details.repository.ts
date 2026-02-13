import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {CompanyDetails, CompanyDetailsRelations, AdminUsers, ExternalCustomersDetail, BusinessRules, QuoteDetails} from '../models';
import {AdminUsersRepository} from './admin-users.repository';
import {ExternalCustomersDetailRepository} from './external-customers-detail.repository';
import {BusinessRulesRepository} from './business-rules.repository';
import {QuoteDetailsRepository} from './quote-details.repository';

export class CompanyDetailsRepository extends DefaultCrudRepository<
  CompanyDetails,
  typeof CompanyDetails.prototype.id,
  CompanyDetailsRelations
> {

  public readonly adminUsers: BelongsToAccessor<AdminUsers, typeof CompanyDetails.prototype.id>;

  public readonly externalCustomersDetails: HasManyRepositoryFactory<ExternalCustomersDetail, typeof CompanyDetails.prototype.id>;

  public readonly businessRules: HasManyRepositoryFactory<BusinessRules, typeof CompanyDetails.prototype.id>;

  public readonly quoteDetails: HasManyRepositoryFactory<QuoteDetails, typeof CompanyDetails.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('AdminUsersRepository') protected adminUsersRepositoryGetter: Getter<AdminUsersRepository>, @repository.getter('ExternalCustomersDetailRepository') protected externalCustomersDetailRepositoryGetter: Getter<ExternalCustomersDetailRepository>, @repository.getter('BusinessRulesRepository') protected businessRulesRepositoryGetter: Getter<BusinessRulesRepository>, @repository.getter('QuoteDetailsRepository') protected quoteDetailsRepositoryGetter: Getter<QuoteDetailsRepository>,
  ) {
    super(CompanyDetails, dataSource);
    this.quoteDetails = this.createHasManyRepositoryFactoryFor('quoteDetails', quoteDetailsRepositoryGetter,);
    this.registerInclusionResolver('quoteDetails', this.quoteDetails.inclusionResolver);
    this.businessRules = this.createHasManyRepositoryFactoryFor('businessRules', businessRulesRepositoryGetter,);
    this.registerInclusionResolver('businessRules', this.businessRules.inclusionResolver);
    this.externalCustomersDetails = this.createHasManyRepositoryFactoryFor('externalCustomersDetails', externalCustomersDetailRepositoryGetter,);
    this.registerInclusionResolver('externalCustomersDetails', this.externalCustomersDetails.inclusionResolver);
    this.adminUsers = this.createBelongsToAccessorFor('adminUsers', adminUsersRepositoryGetter,);
    this.registerInclusionResolver('adminUsers', this.adminUsers.inclusionResolver);
  }
}
