import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { paymentService } from '@/services/payment.service';

export async function GET(req: NextRequest) {
    try {
        const supabase = createClient();

        // Authenticate user
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Get subscription status
        const status = await paymentService.getSubscriptionStatus(user.id);

        return NextResponse.json(status);
    } catch (error: any) {
        console.error('Error getting subscription status:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to get subscription status' },
            { status: 500 }
        );
    }
}
