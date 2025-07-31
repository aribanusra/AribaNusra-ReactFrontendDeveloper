
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
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
        <motion.h1
          className="text-5xl font-bold mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-xl mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          Let’s connect! Reach out for any queries, collaborations, or just to say hi 👋
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="p-6 rounded-xl shadow-lg"
            style={{ backgroundColor: 'var(--card-bg)' }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <div className="mb-4">
              <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full p-2 rounded border"
                style={{ color: 'var(--text)' }}
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-2 rounded border"
                style={{ color: 'var(--text)' }}
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 rounded border"
                style={{ color: 'var(--text)' }}
                placeholder="Write something..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 rounded font-semibold transition-colors"
              style={{
                backgroundColor: 'var(--button-bg)',
                color: 'var(--button-text)',
              }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Store Info */}
          <motion.div
            className="p-6 rounded-xl shadow-lg flex flex-col gap-4 justify-center"
            style={{ backgroundColor: 'var(--card-bg)' }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Store Details</h2>
            <div className="flex items-start gap-3">
              <MapPin className="text-xl" />
              <span>
                221B Baker Street,<br />
                London, UK
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-xl" />
              <span>contact@themecraft.dev</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-xl" />
              <span>+44 123 456 7890</span>
            </div>
            <p className="mt-4 italic text-sm opacity-80">
              Open: Mon–Sat | 10:00 AM – 7:00 PM
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
