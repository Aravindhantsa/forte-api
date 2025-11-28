import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {FortedbDataSource} from '../datasources';
import {BusinessRules, BusinessRulesRelations, CompanyDetails} from '../models';
import {CompanyDetailsRepository} from './company-details.repository';

export class BusinessRulesRepository extends DefaultCrudRepository<
  BusinessRules,
  typeof BusinessRules.prototype.id,
  BusinessRulesRelations
> {

  public readonly companyDetails: BelongsToAccessor<CompanyDetails, typeof BusinessRules.prototype.id>;

  constructor(
    @inject('datasources.fortedb') dataSource: FortedbDataSource, @repository.getter('CompanyDetailsRepository') protected companyDetailsRepositoryGetter: Getter<CompanyDetailsRepository>,
  ) {
    super(BusinessRules, dataSource);
    this.companyDetails = this.createBelongsToAccessorFor('companyDetails', companyDetailsRepositoryGetter,);
    this.registerInclusionResolver('companyDetails', this.companyDetails.inclusionResolver);
  }
}
