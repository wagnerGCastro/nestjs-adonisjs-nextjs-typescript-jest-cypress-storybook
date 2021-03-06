import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { API_JWT_SECRET_KEY } from 'src/config/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: API_JWT_SECRET_KEY,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
