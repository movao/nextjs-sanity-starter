import { siteConfig } from '@/config';
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, social, navigation } = siteConfig;

  return (
    <footer className="bg-foreground text-background/60">
      <div className="container-narrow py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Firmeninfo */}
          <div className="lg:col-span-2">
            <a href="/" className="font-heading text-xl text-background">
              {siteConfig.name}
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-md">
              {siteConfig.tagline}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {social.instagram && (
                <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener"
                   className="hover:text-background transition-colors" aria-label="Instagram">
                  <InstagramLogo size={20} weight="regular" />
                </a>
              )}
              {social.facebook && (
                <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener"
                   className="hover:text-background transition-colors" aria-label="Facebook">
                  <FacebookLogo size={20} weight="regular" />
                </a>
              )}
              {social.linkedin && (
                <a href={`https://linkedin.com/company/${social.linkedin}`} target="_blank" rel="noopener"
                   className="hover:text-background transition-colors" aria-label="LinkedIn">
                  <LinkedinLogo size={20} weight="regular" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-background font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={`/${item.href}`} className="text-sm hover:text-background transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-background font-medium mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                {contact.address.street}<br />
                {contact.address.zip} {contact.address.city}
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-background transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-background transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-background transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-background transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
