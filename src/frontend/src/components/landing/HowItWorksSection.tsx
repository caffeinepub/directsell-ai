import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function HowItWorksSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Define Your Target Audience',
      description: 'Tell DirectSell.AI who your ideal customers are—their industry, pain points, and goals.'
    },
    {
      number: '02',
      title: 'Input Your Value Proposition',
      description: 'Share what makes your product or service unique and how it solves customer problems.'
    },
    {
      number: '03',
      title: 'Generate Personalized Messages',
      description: 'Our AI creates tailored outreach messages optimized for engagement and conversion.'
    },
    {
      number: '04',
      title: 'Refine and Customize',
      description: 'Review AI suggestions, make adjustments, and add your personal touch to each message.'
    },
    {
      number: '05',
      title: 'Launch Your Outreach',
      description: 'Copy your messages and reach out via email, LinkedIn, or your preferred channel.'
    }
  ];

  const examplePrompts = [
    {
      title: 'Cold Email for SaaS Product',
      prompt: `Generate a cold email for a project management SaaS targeting startup founders. Highlight how our tool saves 10+ hours per week on team coordination. Keep it under 100 words, friendly tone, and include a clear CTA for a free trial.`
    },
    {
      title: 'LinkedIn Connection Message',
      prompt: `Create a LinkedIn connection request message for marketing directors at e-commerce companies. Mention our AI-powered analytics platform that increased conversion rates by 35% for similar businesses. Keep it professional and concise (under 300 characters).`
    },
    {
      title: 'Follow-up Message',
      prompt: `Write a follow-up email for prospects who viewed our demo but haven't responded. Reference the specific features they showed interest in (automation and reporting). Offer to answer questions and schedule a personalized walkthrough. Warm, helpful tone.`
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five simple steps to transform your customer outreach with AI-powered messaging
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0" />
              <CardHeader>
                <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example Prompts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Example Prompts to Get Started
          </h3>
          <div className="space-y-6">
            {examplePrompts.map((example, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(example.prompt, index)}
                      className="flex-shrink-0"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check size={16} className="mr-2" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={16} className="mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-mono bg-muted/50 p-4 rounded-lg">
                    {example.prompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
