import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';
import { merge } from 'webpack-merge';
import { sentryWebpackPlugin } from '@sentry/webpack-plugin';

module.exports = composePlugins(
  withNx(),
  withReact(),
  async (config, { options, context }) => {
    const federatedModules = await withModuleFederation(baseConfig);

    return merge(federatedModules(config, { options, context }), {
      devtool: 'source-map',
      plugins: [
        sentryWebpackPlugin({
          _experiments: {
            moduleMetadata: ({ release }) => ({
              dsn: 'footer-dsn',
              release,
            }),
          },
        }),
      ],
    });
  }
);
