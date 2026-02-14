import { CustomizationConfig } from './customization';

export type DeploymentStatusType =
    | 'pending'
    | 'generating'
    | 'creating_repo'
    | 'pushing_code'
    | 'deploying'
    | 'completed'
    | 'failed';

export interface Deployment {
    id: string;
    userId: string;
    templateId: string;
    name: string;
    customizationConfig: CustomizationConfig;
    repositoryUrl?: string;
    vercelProjectId?: string;
    vercelDeploymentId?: string;
    deploymentUrl?: string;
    customDomain?: string;
    status: DeploymentStatusType;
    errorMessage?: string;
    createdAt: Date;
    updatedAt: Date;
    deployedAt?: Date;
}

export type DeploymentStatus =
    | { stage: 'generating'; progress: number }
    | { stage: 'creating_repo'; progress: number }
    | { stage: 'pushing_code'; progress: number }
    | { stage: 'deploying_vercel'; progress: number }
    | { stage: 'completed'; url: string }
    | { stage: 'failed'; error: string };

export interface DeploymentLog {
    id: string;
    deploymentId: string;
    stage: string;
    message: string;
    level: 'info' | 'warn' | 'error';
    metadata?: Record<string, unknown>;
    createdAt: Date;
}

export interface DeploymentRequest {
    userId: string;
    templateId: string;
    customization: CustomizationConfig;
    repositoryName: string;
}

export interface DeploymentResult {
    deploymentId: string;
    repositoryUrl: string;
    vercelUrl: string;
    status: DeploymentStatus;
}

export interface GeneratedFile {
    path: string;
    content: string;
    type: 'code' | 'config' | 'asset';
}

export interface GenerationError {
    file: string;
    line?: number;
    message: string;
    severity: 'error' | 'warning';
}

export interface GenerationResult {
    success: boolean;
    generatedFiles: GeneratedFile[];
    errors: GenerationError[];
}

export interface GenerationRequest {
    templateId: string;
    customization: CustomizationConfig;
    outputPath: string;
}
