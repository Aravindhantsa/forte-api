import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import * as bcrypt from 'bcryptjs';
import {ForteUser} from '../models';
import {AdminUsersRepository, ForteUserRepository} from '../repositories';
import {JWTService} from '../services/jwt-service.service';

export class ForteUserController {
  constructor(
    @repository(ForteUserRepository)
    public forteUserRepository: ForteUserRepository,
    @repository(AdminUsersRepository)
    public adminUsersRepository: AdminUsersRepository,
    @inject('services.JWTService') public jwtService: JWTService,
  ) { }

  @post('/signup')
  async signup(@requestBody() forteUser: Omit<ForteUser, 'id'> & {salesRepRefId?: string, salesRepName: string}) {
    if (!forteUser.email || !forteUser.password || !forteUser.userType || !forteUser.username) {
      throw new HttpErrors.BadRequest('Missing fields');
    }
    const emailExisting = await this.forteUserRepository.findOne({where: {email: forteUser.email}});
    if (emailExisting) throw new HttpErrors.BadRequest('Email exists');
    const usernameExisting = await this.forteUserRepository.findOne({where: {username: forteUser.username}});
    if (usernameExisting) throw new HttpErrors.BadRequest('Username exists');
    const {salesRepRefId, salesRepName, ...forteUserData} = forteUser;
    forteUserData.password = await bcrypt.hash(forteUser.password!, 10);
    forteUserData.name = salesRepName;
    // forteUser.password = await bcrypt.hash(forteUser.password!, 10);
    // forteUser.name = forteUser.salesRepName;
    const forteUserCreated = await this.forteUserRepository.create(forteUserData);
    let adminUserObject = {
      salesRepRefId: salesRepRefId,
      salesRepName: salesRepName,
      mobileNumber: forteUser.mobileNumber,
      username: forteUser.mobileNumber,
      email: forteUser.email,
      userType: forteUser.userType,
      status: 'active',
      created: Date(),
      forteUserId: forteUserCreated.id,
    }
    const adminUserCreated = await this.adminUsersRepository.create(adminUserObject);
    //(forteUserCreated as any).password = undefined;
    return adminUserCreated;
  }

  @post('/login')
  async login(@requestBody() credentials: {email: string; password: string}) {
    if (!credentials.email || !credentials.password) throw new HttpErrors.BadRequest('Missing credentials');
    const user = await this.forteUserRepository.findOne({where: {email: credentials.email}});
    if (!user) throw new HttpErrors.Unauthorized('Invalid credentials');
    const matched = await bcrypt.compare(credentials.password, user.password);
    if (!matched) throw new HttpErrors.Unauthorized('Invalid credentials');

    const userProfile = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.userType,
    } as any;

    const token = await this.jwtService.generateToken(userProfile);
    userProfile.token = token;
    return userProfile;
  }



  @post('/forte-users')
  @response(200, {
    description: 'ForteUser model instance',
    content: {'application/json': {schema: getModelSchemaRef(ForteUser)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ForteUser, {
            title: 'NewForteUser',
            exclude: ['id'],
          }),
        },
      },
    })
    forteUser: Omit<ForteUser, 'id'>,
  ): Promise<ForteUser> {
    return this.forteUserRepository.create(forteUser);
  }

  @get('/forte-users/count')
  @response(200, {
    description: 'ForteUser model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ForteUser) where?: Where<ForteUser>,
  ): Promise<Count> {
    return this.forteUserRepository.count(where);
  }

  @get('/forte-users')
  @response(200, {
    description: 'Array of ForteUser model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ForteUser, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ForteUser) filter?: Filter<ForteUser>,
  ): Promise<ForteUser[]> {
    return this.forteUserRepository.find(filter);
  }

  @patch('/forte-users')
  @response(200, {
    description: 'ForteUser PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ForteUser, {partial: true}),
        },
      },
    })
    forteUser: ForteUser,
    @param.where(ForteUser) where?: Where<ForteUser>,
  ): Promise<Count> {
    return this.forteUserRepository.updateAll(forteUser, where);
  }

  @get('/forte-users/{id}')
  @response(200, {
    description: 'ForteUser model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ForteUser, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ForteUser, {exclude: 'where'}) filter?: FilterExcludingWhere<ForteUser>
  ): Promise<ForteUser> {
    return this.forteUserRepository.findById(id, filter);
  }

  @patch('/forte-users/{id}')
  @response(204, {
    description: 'ForteUser PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ForteUser, {partial: true}),
        },
      },
    })
    forteUser: ForteUser,
  ): Promise<void> {
    await this.forteUserRepository.updateById(id, forteUser);
  }

  @put('/forte-users/{id}')
  @response(204, {
    description: 'ForteUser PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() forteUser: ForteUser,
  ): Promise<void> {
    await this.forteUserRepository.replaceById(id, forteUser);
  }

  @del('/forte-users/{id}')
  @response(204, {
    description: 'ForteUser DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.forteUserRepository.deleteById(id);
  }
}
