import { SubscriptionTier } from './user';

export interface CheckoutSession {
    sessionId: string;
    url: string;
}

export interface SubscriptionStatus {
    tier: SubscriptionTier;
    status: 'active' | 'canceled' | 'past_due' | 'unpaid';
    currentPeriodEnd: Date;
    cancelAtPeriodEnd: boolean;
}

export interface StripeEvent {
    id: string;
    type: string;
    data: {
        object: unknown;
    };
}

export interface Payment {
    id: string;
    userId: string;
    amount: number;
    currency: string;
    status: 'succeeded' | 'pending' | 'failed';
    description?: string;
    createdAt: Date;
}
