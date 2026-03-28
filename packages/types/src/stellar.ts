export type StellarAssetType = 'native' | 'credit_alphanum4' | 'credit_alphanum12';

export interface StellarAsset {
    code: string;
    issuer: string;
    type: StellarAssetType;
}

export interface AssetPair {
    base: StellarAsset;
    counter: StellarAsset;
}

export interface StellarNetworkConfig {
    network: 'mainnet' | 'testnet';
    horizonUrl: string;
    networkPassphrase: string;
    sorobanRpcUrl?: string;
}

export interface MockTransaction {
    id: string;
    type: string;
    amount: string;
    asset: StellarAsset;
    timestamp: Date;
}

export interface StellarMockData {
    accountBalance: string;
    recentTransactions: MockTransaction[];
    assetPrices: Record<string, number>;
}
