interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs?: FAQItem[];
  heading?: string;
  subheading?: string;
}

export default function FaqAccordion({
  faqs = [],
  heading = 'Häufige Fragen',
  subheading = 'Antworten auf die wichtigsten Fragen',
}: FaqAccordionProps) {
  return (
    <section id="faq" className="section-alt">
      <div className="container-narrow">
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3" data-animate="fade-up">
          {faqs.map((faq) => (
            <details key={faq._id} className="group bg-card rounded-xl border border-border overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-medium text-foreground hover:text-primary transition-colors">
                <span className="pr-4">{faq.question}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-foreground/50 group-open:rotate-180 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-foreground/60 leading-relaxed border-t border-border/50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
