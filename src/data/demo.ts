/* ============================================
   DEMO-DATEN
   Werden verwendet wenn Sanity nicht verbunden ist.
   Ersetze diese durch echte Sanity-Abfragen wenn
   das CMS konfiguriert ist.
   ============================================ */

export const demoFeatures = [
  { title: 'Schnell & zuverlässig', description: 'Unsere Lösung wurde für Performance optimiert — spürbar bei jedem Klick.', icon: 'lightning' },
  { title: 'Sicher & DSGVO-konform', description: 'Alle Daten werden verschlüsselt und ausschließlich in Deutschland gespeichert.', icon: 'shield-check' },
  { title: 'Persönlicher Support', description: 'Bei Fragen erreichen Sie uns direkt — kein Callcenter, echte Ansprechpartner.', icon: 'chat-circle' },
  { title: 'Einfache Bedienung', description: 'Intuitive Oberfläche die ohne Schulung funktioniert. Sofort produktiv.', icon: 'cursor-click' },
  { title: 'Flexible Anpassung', description: 'Passt sich Ihren Anforderungen an — nicht umgekehrt.', icon: 'sliders' },
  { title: 'Transparente Preise', description: 'Keine versteckten Kosten. Sie zahlen nur was Sie nutzen.', icon: 'receipt' },
];

export const demoAbout = {
  heading: 'Seit 2010 an Ihrer Seite',
  text: 'Was als kleine Idee begann, ist heute ein Team aus 15 Experten die für eine Sache brennen: Ihnen den besten Service zu bieten. Wir glauben dass gute Arbeit auf Vertrauen, Transparenz und echtem Interesse am Kunden basiert.',
  highlights: [
    { label: 'Gegründet', value: '2010' },
    { label: 'Mitarbeiter', value: '15' },
    { label: 'Projekte', value: '500+' },
  ],
};

export const demoServices = [
  {
    _id: '1',
    title: 'Leistung 1',
    description: 'Beschreibung der ersten Leistung. Hier kommt ein kurzer Text der erklärt was angeboten wird.',
    icon: 'star',
  },
  {
    _id: '2',
    title: 'Leistung 2',
    description: 'Beschreibung der zweiten Leistung. Jede Karte kann individuell angepasst werden.',
    icon: 'lightning',
  },
  {
    _id: '3',
    title: 'Leistung 3',
    description: 'Beschreibung der dritten Leistung. Icons und Bilder werden über Sanity gepflegt.',
    icon: 'shield-check',
  },
];

export const demoTeam = [
  {
    _id: '1',
    name: 'Dr. Anna Muster',
    role: 'Gründerin & Leitung',
    bio: 'Kurze Biografie die im CMS gepflegt wird.',
  },
  {
    _id: '2',
    name: 'Max Beispiel',
    role: 'Mitarbeiter',
    bio: 'Kurze Biografie die im CMS gepflegt wird.',
  },
];

export const demoBlogPosts = [
  {
    _id: '1',
    title: 'Erster Blogbeitrag',
    slug: { current: 'erster-blogbeitrag' },
    excerpt: 'Dies ist eine Vorschau des Blogbeitrags die auf der Übersichtsseite angezeigt wird.',
    publishedAt: '2025-01-15',
    author: 'Dr. Anna Muster',
  },
  {
    _id: '2',
    title: 'Zweiter Blogbeitrag',
    slug: { current: 'zweiter-blogbeitrag' },
    excerpt: 'Noch eine Vorschau. Blogposts werden komplett über Sanity verwaltet.',
    publishedAt: '2025-02-01',
    author: 'Dr. Anna Muster',
  },
];

export const demoOpeningHours = [
  { _id: '1', day: 'Montag',     dayOrder: 1, from: '08:00', to: '18:00', closed: false },
  { _id: '2', day: 'Dienstag',   dayOrder: 2, from: '08:00', to: '18:00', closed: false },
  { _id: '3', day: 'Mittwoch',   dayOrder: 3, from: '08:00', to: '18:00', closed: false },
  { _id: '4', day: 'Donnerstag', dayOrder: 4, from: '08:00', to: '18:00', closed: false },
  { _id: '5', day: 'Freitag',    dayOrder: 5, from: '08:00', to: '14:00', closed: false },
  { _id: '6', day: 'Samstag',    dayOrder: 6, from: '',      to: '',      closed: true },
  { _id: '7', day: 'Sonntag',    dayOrder: 7, from: '',      to: '',      closed: true },
];

export const demoFAQs = [
  {
    _id: '1',
    question: 'Wie kann ich einen Termin vereinbaren?',
    answer: 'Rufen Sie uns an oder nutzen Sie das Kontaktformular auf dieser Seite.',
  },
  {
    _id: '2',
    question: 'Wo finde ich Sie?',
    answer: 'Unsere Adresse und eine Anfahrtskarte finden Sie im Kontaktbereich.',
  },
  {
    _id: '3',
    question: 'Welche Leistungen bieten Sie an?',
    answer: 'Eine Übersicht unserer Leistungen finden Sie weiter oben auf dieser Seite.',
  },
];

export const demoTestimonials = [
  {
    _id: '1',
    name: 'Maria S.',
    role: 'Kundin',
    quote: 'Hervorragender Service und sehr kompetente Beratung. Kann ich nur weiterempfehlen!',
    rating: 5,
  },
  {
    _id: '2',
    name: 'Thomas K.',
    role: 'Kunde',
    quote: 'Professionell, freundlich und immer erreichbar. Vielen Dank!',
    rating: 5,
  },
];

export const demoPricing = [
  {
    _id: '1',
    name: 'Basis',
    price: '49',
    period: 'pro Monat',
    features: ['Grundleistung', 'E-Mail-Support', 'Monatliches Reporting'],
    highlighted: false,
    ctaText: 'Auswählen',
  },
  {
    _id: '2',
    name: 'Premium',
    price: '99',
    period: 'pro Monat',
    features: ['Alle Basis-Leistungen', 'Telefon-Support', 'Wöchentliches Reporting', 'Persönlicher Ansprechpartner'],
    highlighted: true,
    ctaText: 'Beliebteste Wahl',
  },
  {
    _id: '3',
    name: 'Enterprise',
    price: 'Auf Anfrage',
    period: '',
    features: ['Alle Premium-Leistungen', '24/7 Support', 'Individuelles SLA', 'Dediziertes Team'],
    highlighted: false,
    ctaText: 'Kontakt aufnehmen',
  },
];

export const demoStats = [
  { _id: '1', value: '500', label: 'Zufriedene Kunden', suffix: '+' },
  { _id: '2', value: '15', label: 'Jahre Erfahrung', suffix: '' },
  { _id: '3', value: '98', label: 'Zufriedenheit', suffix: '%' },
  { _id: '4', value: '24', label: 'Erreichbarkeit', suffix: '/7' },
];

export const demoGallery = [
  { _id: '1', alt: 'Projekt 1', caption: 'Unser erstes Referenzprojekt' },
  { _id: '2', alt: 'Projekt 2', caption: 'Modernes Design-Konzept' },
  { _id: '3', alt: 'Projekt 3', caption: 'Individuelle Umsetzung' },
  { _id: '4', alt: 'Projekt 4', caption: 'Detail-Aufnahme' },
  { _id: '5', alt: 'Projekt 5', caption: 'Ergebnis nach Fertigstellung' },
  { _id: '6', alt: 'Projekt 6', caption: 'Kundenprojekt Highlight' },
];

export const demoPartners = [
  { _id: '1', name: 'Partner A' },
  { _id: '2', name: 'Partner B' },
  { _id: '3', name: 'Partner C' },
  { _id: '4', name: 'Partner D' },
  { _id: '5', name: 'Partner E' },
];

export const demoProcess = [
  { _id: '1', title: 'Erstgespräch', description: 'Wir lernen Sie und Ihre Anforderungen kennen.', icon: 'chat-circle' },
  { _id: '2', title: 'Konzeption', description: 'Gemeinsam entwickeln wir die passende Strategie.', icon: 'lightbulb' },
  { _id: '3', title: 'Umsetzung', description: 'Wir setzen das Projekt professionell um.', icon: 'code' },
  { _id: '4', title: 'Betreuung', description: 'Auch nach Abschluss stehen wir Ihnen zur Seite.', icon: 'handshake' },
];
