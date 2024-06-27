import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'footer',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
