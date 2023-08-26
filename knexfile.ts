import Path from 'path';
import Hoek from '@hapi/hoek';
import Manifest from './server/manifest';
import Plugin from './lib/plugins/@hapipal.schwifty'

const plugin = Manifest.get('/register/plugins', process.env)
  ?.find((plugin: any) => plugin.plugin === '@hapipal/schwifty');

if (!plugin) {
  throw new Error('Plugin not found');
}

const options = plugin.options as { knex: any };

module.exports = Hoek.applyToDefaults(
  {
    migrations: {
      directory: Path.relative(process.cwd(), Plugin.options.migrationsDir)
    }
  },
  options.knex
);
