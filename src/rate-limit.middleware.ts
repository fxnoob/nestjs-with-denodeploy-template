import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import * as geoip from 'geoip-lite';

@Injectable()
export class CountryBlockMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const featureFlags = await this.configService.get('FEATURE_FLAGS');
    const { rateLimit } = featureFlags
    if (rateLimit.countryBased.isEnabled) {
      const blockedCountries = rateLimit.countryBased.blockedCountries || []
      const clientIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || '127.0.0.1';
      const geoData = geoip.lookup(clientIp);
      const country = geoData?.country || 'UNKNOWN';

      if (blockedCountries.includes(country)) {
        res.status(403).json({
          error: 'Access denied',
          message: 'Requests from your country are blocked.',
        });
        return;
      }
    }

    next();
  }
}
