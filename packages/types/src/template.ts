export type TemplateCategory = 'dex' | 'lending' | 'payment' | 'asset-issuance';

export interface Template {
    id: string;
    name: string;
    description: string;
    category: TemplateCategory;
    blockchainType: 'stellar';
    baseRepositoryUrl: string;
    previewImageUrl: string;
    features: TemplateFeature[];
    customizationSchema: CustomizationSchema;
    isActive: boolean;
    createdAt: Date;
}

export interface TemplateFeature {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    configurable: boolean;
}

export interface CustomizationSchema {
    branding: BrandingOptions;
    features: FeatureToggles;
    stellar: StellarConfiguration;
}

export interface BrandingOptions {
    appName: { type: 'string'; required: true };
    logoUrl: { type: 'string'; required: false };
    primaryColor: { type: 'color'; required: true };
    secondaryColor: { type: 'color'; required: true };
    fontFamily: { type: 'string'; required: false };
}

export interface FeatureToggles {
    enableCharts: { type: 'boolean'; default: true };
    enableTransactionHistory: { type: 'boolean'; default: true };
    enableAnalytics: { type: 'boolean'; default: false };
    enableNotifications: { type: 'boolean'; default: false };
}

export interface StellarConfiguration {
    network: { type: 'enum'; values: ['mainnet', 'testnet']; required: true };
    horizonUrl: { type: 'string'; required: true };
    sorobanRpcUrl: { type: 'string'; required: false };
    assetPairs: { type: 'array'; required: false };
}

export interface TemplateFilters {
    category?: TemplateCategory;
    search?: string;
    blockchainType?: 'stellar';
}

export interface TemplateMetadata {
    id: string;
    name: string;
    version: string;
    lastUpdated: Date;
    totalDeployments: number;
}
