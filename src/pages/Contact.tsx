import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import emailjs from 'emailjs-com';

const Contact = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="Connect With Us" 
                title="Get In Touch" 
              />

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();

                  emailjs.sendForm(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    e.target,
                    'YOUR_PUBLIC_KEY'
                  ).then(
                    () => {
                      alert('Thank you! Your message has been sent.');
                    },
                    () => {
                      alert('Failed to send message. Please try again.');
                    }
                  );
                }}
              >

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      name="user_name"
                      required
                      type="text"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      name="user_email"
                      required
                      type="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    name="user_phone"
                    required
                    type="tel"
                    pattern="[6-9]{1}[0-9]{9}"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">

                {/* Address */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      Headquarters
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      716, Ganesh Glory, Jagatpur Road<br />
                      Gota, Ahmedabad, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@qltherapeutics.com"
                      className="text-slate-500 hover:text-accent transition-colors"
                    >
                      info@qltherapeutics.com
                    </a>
                  </div>
                </div>

              </div>

              {/* GOOGLE MAP */}
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7515220.527268085!2d62.785419925!3d23.113882599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830065f642f9%3A0x47fa0a1ca6caf472!2sQL%20Therapeutics%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1773338812343!5m2!1sen!2sin"

                className="w-full h-[300px] rounded-3xl border-0"
                loading="lazy"
              ></iframe>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;