import { StellarAsset, AssetPair } from './stellar';

export interface CustomizationConfig {
    branding: BrandingConfig;
    features: FeatureConfig;
    stellar: StellarConfig;
}

export interface BrandingConfig {
    appName: string;
    logoUrl?: string;
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
}

export interface FeatureConfig {
    enableCharts: boolean;
    enableTransactionHistory: boolean;
    enableAnalytics: boolean;
    enableNotifications: boolean;
}

export interface StellarConfig {
    network: 'mainnet' | 'testnet';
    horizonUrl: string;
    sorobanRpcUrl?: string;
    assetPairs?: AssetPair[];
    contractAddresses?: Record<string, string>;
}

export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
}

export interface ValidationError {
    field: string;
    message: string;
    code: string;
}
