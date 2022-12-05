import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };
};
