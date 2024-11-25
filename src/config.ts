import { getSiteURL } from '@/lib/get-site-url';
import { LogLevel } from '@/lib/logger';
import { FeeAmount } from '@uniswap/v3-sdk'

export interface Config {
  site: { name: string; description: string; themeColor: string; url: string };
  logLevel: keyof typeof LogLevel;
}

export const config: Config = {
  site: { name: 'Devias Kit', description: '', themeColor: '#090a0b', url: getSiteURL() },
  logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ?? LogLevel.ALL,
};
export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    arb: string
    local: string
    mainnet: string
  }
  tokens: {
    poolFee: number
  }
}


export const SwapConfig: ExampleConfig = {
  rpc: {
    arb: 'https://arb1.arbitrum.io/rpc',
    local: 'http://127.0.0.1:8545/',
    mainnet:
      'https://mainnet.chainnodes.org/72ae682a-b3a9-4fea-8c42-60d08228ea26',
  },
  tokens: {
    poolFee: FeeAmount.MEDIUM,
  },
}

