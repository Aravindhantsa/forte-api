import {BindingScope, injectable} from '@loopback/core';
import {UserProfile, securityId} from '@loopback/security';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import {promisify} from 'util';
dotenv.config();

const signAsync = promisify<
  (payload: string | Buffer | object, secretOrPrivateKey: jwt.Secret, options?: jwt.SignOptions) => string
>(jwt.sign as any);

const verifyAsync = promisify<
  (token: string, secretOrPublicKey: jwt.Secret) => object | string
>(jwt.verify as any);

@injectable({scope: BindingScope.TRANSIENT})
export class JWTService {
  private readonly jwtSecret: jwt.Secret;
  private readonly jwtExpiresIn: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET ?? 'supersecret';
    this.jwtExpiresIn = process.env.JWT_EXPIRES_IN ?? '1h';
  }

  async generateToken(userProfile: UserProfile): Promise<string> {
    const payload = {
      id: userProfile[securityId],
      email: userProfile.email,
      role: (userProfile as any).role,
    };

    return await signAsync(payload, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn as any,
    });
  }

  async verifyToken(token: string): Promise<UserProfile> {
    try {
      const decoded = (await verifyAsync(token, this.jwtSecret)) as any;
      const userProfile: UserProfile = {
        [securityId]: String(decoded.id),
        email: decoded.email,
        id: decoded.id,
        role: decoded.role,
      } as any;
      return userProfile;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
