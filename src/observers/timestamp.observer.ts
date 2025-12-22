import {lifeCycleObserver} from '@loopback/core';
import {AnyObject} from '@loopback/repository';

@lifeCycleObserver('repository')
export class TimestampObserver {

  async beforeSave(ctx: AnyObject) {
    const now = new Date();

    // CREATE
    if (ctx.isNewInstance && ctx.instance) {
      if ('created' in ctx.instance) {
        ctx.instance.created = now;
      }
      if ('lastUpdated' in ctx.instance) {
        ctx.instance.lastUpdated = now;
      }
    }

    // UPDATE
    if (!ctx.isNewInstance && ctx.data) {
      if ('lastUpdated' in ctx.data) {
        ctx.data.lastUpdated = now;
      }
    }
  }
}
