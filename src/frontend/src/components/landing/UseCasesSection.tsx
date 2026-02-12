import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Store, Rocket } from 'lucide-react';

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Rocket,
      title: 'Solo Founders & Startups',
      description: 'Launch your product with confidence. Generate professional outreach messages that help you land your first customers without a sales team.',
      benefits: [
        'Compete with established players',
        'Build credibility through messaging',
        'Scale outreach as you grow'
      ]
    },
    {
      icon: Store,
      title: 'Local Service Businesses',
      description: 'Connect with local customers who need your services. Create personalized messages for plumbers, contractors, consultants, and more.',
      benefits: [
        'Target local decision-makers',
        'Highlight your unique expertise',
        'Build lasting client relationships'
      ]
    },
    {
      icon: Briefcase,
      title: 'B2B Sales Teams',
      description: 'Empower your sales team with AI-generated messages that book more meetings and close more deals across industries.',
      benefits: [
        'Increase response rates',
        'Shorten sales cycles',
        'Maintain consistent messaging'
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for Every Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting out or scaling up, DirectSell.AI adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
