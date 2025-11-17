import {AuthenticationStrategy} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {JWTService} from '../services/jwt-service.service';


export class JWTAuthenticationStrategy implements AuthenticationStrategy {
  name = 'jwt';


  constructor(@inject('services.JWTService') public jwtService: JWTService) { }


  async authenticate(request: Request): Promise<UserProfile | undefined> {
    const token = this.extractCredentials(request);
    const userProfile = await this.jwtService.verifyToken(token);
    // ensure securityId present
    return userProfile;
  }


  extractCredentials(request: Request): string {
    if (!request.headers || !request.headers.authorization) {
      throw new HttpErrors.Unauthorized('Authorization header not found.');
    }
    const authHeaderValue = request.headers.authorization as string;
    if (!authHeaderValue.startsWith('Bearer ')) {
      throw new HttpErrors.Unauthorized('Authorization header is not of type Bearer.');
    }
    const parts = authHeaderValue.split(' ');
    if (parts.length !== 2) throw new HttpErrors.Unauthorized('Invalid Authorization header.');
    const token = parts[1];
    return token;
  }
}
