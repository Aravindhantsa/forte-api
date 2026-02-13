import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {QuoteDetails, QuoteDetailsRelations, CompanyDetails, AdminUsers, ExternalCustomersDetail} from '../models';
import {CompanyDetailsRepository} from './company-details.repository';
import {AdminUsersRepository} from './admin-users.repository';
import {ExternalCustomersDetailRepository} from './external-customers-detail.repository';

export class QuoteDetailsRepository extends DefaultCrudRepository<
  QuoteDetails,
  typeof QuoteDetails.prototype.id,
  QuoteDetailsRelations
> {

  public readonly company: BelongsToAccessor<CompanyDetails, typeof QuoteDetails.prototype.id>;

  public readonly salesRep: BelongsToAccessor<AdminUsers, typeof QuoteDetails.prototype.id>;

  public readonly customer: BelongsToAccessor<ExternalCustomersDetail, typeof QuoteDetails.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('CompanyDetailsRepository') protected companyDetailsRepositoryGetter: Getter<CompanyDetailsRepository>, @repository.getter('AdminUsersRepository') protected adminUsersRepositoryGetter: Getter<AdminUsersRepository>, @repository.getter('ExternalCustomersDetailRepository') protected externalCustomersDetailRepositoryGetter: Getter<ExternalCustomersDetailRepository>,
  ) {
    super(QuoteDetails, dataSource);
    this.customer = this.createBelongsToAccessorFor('customer', externalCustomersDetailRepositoryGetter,);
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
    this.salesRep = this.createBelongsToAccessorFor('salesRep', adminUsersRepositoryGetter,);
    this.registerInclusionResolver('salesRep', this.salesRep.inclusionResolver);
    this.company = this.createBelongsToAccessorFor('company', companyDetailsRepositoryGetter,);
    this.registerInclusionResolver('company', this.company.inclusionResolver);
  }
}
