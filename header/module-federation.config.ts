import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'header',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
