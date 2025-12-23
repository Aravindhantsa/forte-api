import {ApplicationConfig} from '@loopback/core';
import {ForteApiApplication} from './application';

export async function migrate() {
  const config: ApplicationConfig = {};
  const app = new ForteApiApplication(config);

  await app.boot();

  //  migrate ONLY fortesmcdb
  await app.migrateSchema({
    existingSchema: 'alter',
    datasources: ['fortesmcdb'],
  });

  console.log('\n fortesmcdb migration completed successfully.\n');
  process.exit(0);
}

migrate().catch(err => {
  console.error('Cannot migrate fortesmcdb schema:', err);
  process.exit(1);
});
