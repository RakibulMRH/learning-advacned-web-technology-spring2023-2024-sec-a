import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenBlacklistService {
  private readonly blacklist = new Set<string>();

  blacklistToken(token: string) {
    this.blacklist.add(token);
    console.log(`Token blacklisted: ${token}`);
  }

  isBlacklisted(token: string): boolean {
    const isBlacklisted = this.blacklist.has(token);
    console.log(`Is token blacklisted? ${isBlacklisted}`);
    return isBlacklisted;
  }
}