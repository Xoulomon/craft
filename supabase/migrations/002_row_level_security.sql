-- Enable Row Level Security on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE deployments ENABLE ROW LEVEL SECURITY;
ALTER TABLE deployment_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE customization_drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE deployment_analytics ENABLE ROW LEVEL SECURITY;
-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles FOR
SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR
UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR
INSERT WITH CHECK (auth.uid() = id);
-- Deployments policies
CREATE POLICY "Users can view own deployments" ON deployments FOR
SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own deployments" ON deployments FOR
INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own deployments" ON deployments FOR
UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own deployments" ON deployments FOR DELETE USING (auth.uid() = user_id);
-- Deployment logs policies
CREATE POLICY "Users can view logs for own deployments" ON deployment_logs FOR
SELECT USING (
        deployment_id IN (
            SELECT id
            FROM deployments
            WHERE user_id = auth.uid()
        )
    );
CREATE POLICY "System can insert deployment logs" ON deployment_logs FOR
INSERT WITH CHECK (true);
-- Customization drafts policies
CREATE POLICY "Users can view own drafts" ON customization_drafts FOR
SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own drafts" ON customization_drafts FOR
INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own drafts" ON customization_drafts FOR
UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own drafts" ON customization_drafts FOR DELETE USING (auth.uid() = user_id);
-- Deployment analytics policies
CREATE POLICY "Users can view analytics for own deployments" ON deployment_analytics FOR
SELECT USING (
        deployment_id IN (
            SELECT id
            FROM deployments
            WHERE user_id = auth.uid()
        )
    );
CREATE POLICY "System can insert analytics" ON deployment_analytics FOR
INSERT WITH CHECK (true);
-- Templates are publicly readable (no RLS needed, but enable for consistency)
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active templates" ON templates FOR
SELECT USING (is_active = true);
CREATE POLICY "Service role can manage templates" ON templates FOR ALL USING (auth.jwt()->>'role' = 'service_role');