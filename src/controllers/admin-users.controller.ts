// Uncomment these imports to begin using these cool features!

import {authenticate} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {get} from '@loopback/rest';
import {AdminUsersRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class AdminUsersController {
  constructor(
    @repository(AdminUsersRepository)
    public adminUsersRepository: AdminUsersRepository,
  ) { }

  @authenticate('jwt')
  @get('/admin-users/salesRepList')
  async getAllUsers() {
    const users = await this.adminUsersRepository.find({where: {userType: 'salesRep'}});
    return users;
  }
}
