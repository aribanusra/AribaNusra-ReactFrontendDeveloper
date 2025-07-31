import { useState } from 'react';

// List of frequently asked questions for the About page
const faqs = [
  {
    question: 'What makes StyleSphere unique?',
    answer:
      'StyleSphere combines the latest trends with a seamless user experience. Our multi-theme platform ensures fashion lovers can browse in a way that feels personalized.',
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'Yes! We offer free shipping on all orders over ₹999. No hidden costs, just great fashion.',
  },
  {
    question: 'Can I return or exchange items?',
    answer:
      'Absolutely. We offer a 7-day return/exchange policy on all eligible items.',
  },
  {
    question: 'Is my payment information secure?',
    answer:
      'Your security is our priority. We use encrypted payment gateways to ensure all transactions are safe.',
  },
];

const About = () => {
  // State to track which FAQ is open (expanded)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle the open/close state of an FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main
      className="min-h-screen pt-24 px-6 transition-all duration-500"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'var(--font)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">About StyleSphere</h1>
        <p className="text-xl mb-8 leading-relaxed">
          At <strong>StyleSphere</strong>, we believe fashion is a language. Our
          curated collections help you express yourself effortlessly. Whether
          you're into minimalist basics or bold statements, we've got something
          that fits your vibe. Plus, with a sleek, theme-switchable interface,
          shopping feels like an experience – not a chore.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Storefront and team images for visual appeal */}
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop"
            alt="Storefront"
            className="w-full h-72 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1170&auto=format&fit=crop"
            alt="Shopping team"
            className="w-full h-72 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Mission card */}
          <div
            className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p>
              To make fashion accessible, inclusive, and exciting. We curate
              premium products from trusted brands, helping you shop smart and
              stylish – all from the comfort of your screen.
            </p>
          </div>

          {/* Why Choose Us card */}
          <div
            className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Exclusive fashion drops every week</li>
              <li>Multi-theme browsing experience</li>
              <li>Fast delivery & easy returns</li>
              <li>Curated looks, styled by experts</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">FAQs</h2>
          <div className="space-y-4 mb-24">
            {/* Render each FAQ with expand/collapse logic */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden transition-all"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg hover:bg-gray-100 transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  {faq.question}
                  <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
                </button>
                {/* Show answer if this FAQ is open */}
                {openIndex === index && (
                  <div className="px-6 pb-4 text-sm text-gray-600 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
