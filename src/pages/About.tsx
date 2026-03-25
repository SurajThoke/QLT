import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  Factory,
  FlaskConical
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";

const About = () => {
  return (
    <div className="pt-20">

      {/* HERO VIDEO */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about-hero1.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/65"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white ">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Building Accessible Healthcare
          </motion.h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Delivering innovative pharmaceutical and nutraceutical solutions
            for emerging markets worldwide.
          </p>

        </div>

      </section>



      {/* ABOUT OVERVIEW */}
      <section className="section-padding bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <SectionHeading
                subtitle="About QL Therapeutics"
                title="Building Accessible Healthcare for Emerging Markets"
              />

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                QL Therapeutics was founded with a mission to bridge the healthcare
                gap in emerging markets by delivering accessible and high-quality
                pharmaceutical and nutraceutical solutions.
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold text-primary">
                    Global Partnerships
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold text-primary">
                    Regulatory Expertise
                  </span>
                </div>

              </div>

            </motion.div>


             {/* Image Stat Cards */}
    <div className="grid grid-cols-3 gap-6">

      <div className="group relative h-44 rounded-3xl overflow-hidden text-white flex items-end p-6">
        <img src="/products.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold">150+</h3>
          <p className="text-sm">Products</p>
        </div>
      </div>

      <div className="group relative h-44 rounded-3xl overflow-hidden text-white flex items-end p-6">
        <img src="/global.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold">45</h3>
          <p className="text-sm">Global Markets</p>
        </div>
      </div>

      <div className="group relative h-44 rounded-3xl overflow-hidden text-white flex items-end p-6">
        <img src="/research.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <h3 className="text-3xl font-bold">5</h3>
          <p className="text-sm">R&D Hubs</p>
        </div>
      </div>
      </div>

    </div>


        </div>

      </section>

 {/* PURPOSE / VISION / MISSION */}
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Purpose",
          content:
            "Patients first — delivering trusted healthcare solutions to improve lives across emerging markets.",
          icon: <Users className="text-accent group-hover:text-white transition-colors duration-500" size={32} />
        },
        {
          title: "Vision",
          content:
            "To become a trusted global healthcare partner delivering innovative pharmaceutical and nutraceutical solutions.",
          icon: <Globe className="text-accent group-hover:text-white transition-colors duration-500" size={32} />
        },
        {
          title: "Mission",
          content:
            "To empower health and well-being through end-to-end healthcare solutions and strategic partnerships.",
          icon: <TrendingUp className="text-accent group-hover:text-white transition-colors duration-500" size={32} />
        }
      ].map((item) => (

        <motion.div
          key={item.title}
          whileHover={{ y: -10, scale: 1.03 }}
          className="group relative bg-white p-10 rounded-3xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-500"
        >

          {/* Animated Background Fill */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>

          {/* Content */}
          <div className="relative z-10 transition-colors duration-500">

            <div className="mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
              {item.content}
            </p>

          </div>

        </motion.div>

      ))}

    </div>
  </div>
</section>


      {/* WHO WE ARE */}
      <section className="section-padding bg-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <SectionHeading
            subtitle="Who We Are"
            title="Built by Healthcare Professionals"
          />

          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            QLT was started by professionals who have spent decades working
            within the healthcare industry — not just discussing it but
            building, manufacturing, distributing and scaling healthcare
            businesses globally.
          </p>

        </div>

      </section>


      <section className="section-padding relative bg-slate-50 overflow-hidden">

  {/* 🌈 BACKGROUND DESIGN */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative">

    <SectionHeading
      subtitle="Our Businesses"
      title="Healthcare Across the Value Chain"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Pharmaceuticals",
          desc: "Manufacturing tablets, capsules, liquids and topicals to GMP standards.",
          icon: <Factory size={26} />
        },
        {
          title: "Contract Manufacturing",
          desc: "End-to-end production support from formulation to export documentation.",
          icon: <Factory size={26} />
        },
        {
          title: "Dossier Licensing",
          desc: "Access to regulatory dossiers enabling faster market entry.",
          icon: <FlaskConical size={26} />
        },
        {
          title: "Nutraceuticals",
          desc: "Supplements, vitamins, herbal extracts and functional foods.",
          icon: <FlaskConical size={26} />
        },
        {
          title: "Contract Development",
          desc: "Custom formulation services for nutrition brands.",
          icon: <FlaskConical size={26} />
        },
        {
          title: "Poshan Brand",
          desc: "QLT's proprietary plant-based nutrition brand.",
          icon: <FlaskConical size={26} />
        }
      ].map((item, idx) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >

          {/* 🔥 HOVER GLOW */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-accent/10 blur-xl"></div>

          {/* ICON */}
          <div className="relative z-10 mb-5 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-primary transition">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="relative z-10 text-slate-600 text-sm leading-relaxed mb-4">
            {item.desc}
          </p>

          {/* CTA */}
          <span className="relative z-10 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition">
            Learn More →
          </span>

        </motion.div>

      ))}

    </div>

  </div>
</section>
      

    </div>
  );
};

export default About;