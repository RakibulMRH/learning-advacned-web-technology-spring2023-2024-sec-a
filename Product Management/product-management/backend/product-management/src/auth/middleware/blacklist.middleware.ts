import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenBlacklistService } from '../utils/token-blacklist.service';
@Injectable()
export class BlacklistMiddleware implements NestMiddleware {
  constructor(private tokenBlacklistService: TokenBlacklistService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.auth;

  if (this.tokenBlacklistService.isBlacklisted(token)) { 
        return res.status(401).send('This token has been blacklisted');
    }

    next();
  }
}