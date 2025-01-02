import { localConfig } from './environments/local.ts';
import { prodConfig } from './environments/prod.ts';
import { Environment } from './environment.ts';

export default () => {
  const environment = Deno.env.get('NODE_ENV') || Environment.LOCAL;

  switch (environment) {
    case Environment.PROD:
      return prodConfig;
    case Environment.LOCAL:
    default:
      return localConfig;
  }
};
