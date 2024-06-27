import * as Sentry from '@sentry/react';

const EXTRA_KEY = 'ROUTE_TO';

const transport = Sentry.makeMultiplexedTransport(
  Sentry.makeFetchTransport,
  (args) => {
    const event = args.getEvent();

    if (
      event &&
      event.extra &&
      EXTRA_KEY in event.extra &&
      Array.isArray(event.extra[EXTRA_KEY])
    ) {
      return event.extra[EXTRA_KEY];
    }

    return [];
  }
);

export default {
  init: () => {
    Sentry.init({
      dsn: 'fallback-dsn', //fallback
      tracesSampleRate: 1.0, //  Capture 100% of the transactions
      sampleRate: 1.0,
      transport: transport,
      integrations: [new Sentry.ModuleMetadata()],
      beforeSend: (event) => {
        console.log('host error capturing by sentry', event);

        if (event?.exception?.values?.[0].stacktrace?.frames) {
          const frames = event.exception.values[0].stacktrace.frames;

          const routeTo = frames
            .filter(
              (frame) => frame.module_metadata && frame.module_metadata.dsn
            )
            .map((v) => v.module_metadata);

          if (routeTo.length > 0) {
            const lastIndex = routeTo.length - 1;

            event.extra = {
              ...event.extra,
              [EXTRA_KEY]: [routeTo[lastIndex]],
            };
          }
        }

        return event;
      },
    });
  },
};
