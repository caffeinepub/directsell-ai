import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname);
    }
    return 'directsell-ai';
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/directsellai-wordmark.dim_1200x300.png"
              alt="DirectSell.AI"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              AI-powered customer outreach that converts prospects into customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <p className="text-sm text-muted-foreground">
              Ready to transform your customer outreach? Start generating personalized messages today.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DirectSell.AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
