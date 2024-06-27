import * as Sentry from '@sentry/react';

export default {
  init: () => {
    Sentry.init({
      dsn: 'footer-dsn',
      tracesSampleRate: 1.0,
      sampleRate: 1.0,
      beforeSend: (event) => {
        console.log('footer error captured by sentry', event);
        return event;
      },
    });
  },
};
