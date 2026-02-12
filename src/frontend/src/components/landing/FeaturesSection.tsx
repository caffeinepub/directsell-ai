import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, MessageSquare, TrendingUp, Users, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Personalization',
      description: 'Generate unique, tailored messages for each prospect based on their industry, role, and pain points.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Identify and reach the right decision-makers with messages that resonate with their specific needs.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Ready',
      description: 'Create optimized messages for email, LinkedIn, cold calls, and any outreach channel you use.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Optimized',
      description: 'Every message is crafted to maximize engagement and drive prospects toward your desired action.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate dozens of personalized messages in seconds, not hours. Scale your outreach effortlessly.'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Learn what messaging resonates best with different customer segments to refine your approach.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features for Modern Sales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create compelling outreach that converts prospects into customers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
