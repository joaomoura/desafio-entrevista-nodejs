import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../../users/users.service';
import { Repository } from 'typeorm';
import User from '../../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
 
describe('AuthenticationService', () => {
  const authenticationService = new AuthenticationService(
    new UsersService(
      new Repository<User>()
    ),
    new JwtService({
      secretOrPrivateKey: 'Secret key'
    }),
    new ConfigService()
  );
  describe('Ao criar um cookie', () => {
    it('Deve retornar uma string', () => {
      const userId = 1;
      expect(
        typeof authenticationService.getCookieWithJwtToken(userId)
      ).toEqual('string')
    })
  })
});