import * as Sentry from '@sentry/react';

export default {
  init: () => {
    Sentry.init({
      dsn: 'product-dsn',
      tracesSampleRate: 1.0, //  Capture 100% of the transactions
      sampleRate: 1.0,
      beforeSend: (event) => {
        console.log('product error capturing by sentry');

        return event;
      },
    });
  },
};
