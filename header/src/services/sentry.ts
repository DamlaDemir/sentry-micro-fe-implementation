import * as Sentry from '@sentry/react';

export default {
  init: () => {
    Sentry.init({
      dsn: 'header-dsn',
      tracesSampleRate: 1.0,
      sampleRate: 1.0,
      beforeSend: (event) => {
        console.log('header error captured by sentry', event);
        return event;
      },
    });
  },
};
