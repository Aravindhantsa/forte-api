import {ApplicationConfig} from '@loopback/core';
import {ForteApiApplication} from './application';

export async function migrate() {
  const config: ApplicationConfig = {};
  const app = new ForteApiApplication(config);

  await app.boot();
  await app.migrateSchema({existingSchema: 'alter'}); // <— ✅ use this

  console.log('\n✅ Migration completed successfully.\n');
  process.exit(0);
}

migrate().catch(err => {
  console.error('Cannot migrate database schema:', err);
  process.exit(1);
});
