import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Factory,
  Microscope,
  Zap,
  ShieldCheck,
  Award,
  Beaker,
  CheckCircle2
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";


// ✅ Counter Component (OUTSIDE main component)
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [visible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Typewriter = ({ text, speed = 50, pause = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed / 2);
    } else if (index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (index === 0 && isDeleting) {
      timeout = setTimeout(() => setIsDeleting(false), 300);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};


// ✅ MAIN COMPONENT
const Capabilities = () => {
  return (
    <div className="pt-20">



{/* HERO */}
<section className="section-padding bg-primary text-white text-center">

  <div className="max-w-7xl mx-auto px-6">

    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Manufacturing & Strategic Capabilities
    </h1>

    <p className="text-white/80 text-lg leading-relaxed">
      QL Therapeutics unlocks value through integrated pharmaceutical
      and nutraceutical manufacturing, global partnerships,
      and regulatory expertise.
    </p>

  </div>

</section>

{/* CORE CAPABILITIES */}
<section className="section-padding relative overflow-hidden bg-white">

  {/* 🌈 BACKGROUND */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="mb-20 text-center">
      <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
        Our Expertise
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        Core Capabilities
      </h2>
    </div>

    <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap">

  {[
    {
      title: "Nutraceutical Manufacturing",
      desc: "Production of supplements, vitamins, herbal extracts and functional foods.",
      image: "/nutraceutical.jpg"
    },
    {
      title: "Pharmaceutical Collaborations",
      desc: "Manufacturing partnerships for tablets, capsules, liquids and topicals.",
      image: "/pharma.jpg"
    },
    {
      title: "Marketing & Distribution",
      desc: "B2B, B2C and D2C distribution across emerging global markets.",
      image: "/marketing.jpg"
    },
    {
      title: "Advisory Services",
      desc: "GMP advisory, dossier sourcing and manufacturing problem solving.",
      image: "/advisory.jpg"
    }
  ].map((item, idx) => (

    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex-1 min-w-[340px] max-w-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col relative"
    >

      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-col justify-between flex-1 p-10 text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-accent transition-all duration-700"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-accent via-primary to-accent"></div>

        <div className="relative z-10">

          <p className="text-xs tracking-widest uppercase text-white/80 mb-2">
            /// Core Capability
          </p>

          <h3 className="text-xl font-semibold leading-snug">
            {item.title}
          </h3>

          <p className="text-sm text-white/80 mt-4 leading-relaxed">
            {item.desc}
          </p>

        </div>

      </div>

    </motion.div>

  ))}

</div>

  </div>

</section>


{/* WHAT SETS US APART */}
<section className="section-padding bg-slate-50">

<div className="max-w-7xl mx-auto px-6">

<SectionHeading
subtitle="Our Edge"
title="What Sets Our Manufacturing Apart"
centered
/>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

{[
"World-Class Manufacturing Facility",
"Dedicated Research And Development Wing",
"Cutting-Edge Manufacturing Technology",
"Exclusive Personal Care Manufacturing Facility",
"WHO-GMP Certified Facility",
"USFDA Registered Facility",
"Dedicated Diskette Manufacturing Line",
"300+ Formulations"
].map((item,idx)=>(

<motion.div
key={idx}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:idx*0.05}}
whileHover={{scale:1.05}}
className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4"
>

<div className="w-6 h-6 rounded-full bg-accent mt-1"></div>

<p className="text-primary font-semibold text-sm">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>


<section className="section-padding bg-slate-50 text-center">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeading
      subtitle="Quality Standards"
      title="Global Certifications"
    />

    <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
      <img src="/who.png" alt="WHO GMP" className="h-30 object-contain" />
      <img src="/usfda.png" alt="US FDA" className="h-30 object-contain" />
      <img src="/halal.png" alt="Halal" className="h-30 object-contain" />
      <img src="/kosher.png" alt="Kosher" className="h-30 object-contain" />
      <img src="/haccp.png" alt="HACCP" className="h-30 object-contain" />
      <img src="/iso9001.png" alt="ISO 9001" className="h-30 object-contain" />
      <img src="/iso22000.png" alt="ISO 22000" className="h-30 object-contain" />
    </div>

  </div>
</section>




{/* MANUFACTURING INFRASTRUCTURE */}
<section className="section-padding bg-white">

<div className="max-w-7xl mx-auto px-6">

<SectionHeading
subtitle="Manufacturing Infrastructure"
title="Precision Engineered Production"
/>

<div className="grid md:grid-cols-2 gap-10 mt-12">

{[
{
img:"/manufacturing-machine1.jpg",
title:"Automatic Machines for Tablets & Capsules"
},
{
img:"/liquid-production1.jpg",
title:"Fully Automated Syrup & Liquid Lines"
},
{
img:"/rd-lab1.jpg",
title:"Qualified Formulation & R&D Team"
},
{
img:"/qa-lab1.jpg",
title:"Dedicated QA & QC In-House Lab"
}
].map((item,idx)=>(

<motion.div
key={idx}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:idx*0.1}}
whileHover={{scale:1.03}}
className="rounded-3xl overflow-hidden shadow-xl group"
>

<div className="overflow-hidden">

<img
src={item.img}
className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
/>

</div>

<p className="text-center font-semibold text-primary py-4">
{item.title}
</p>

</motion.div>

))}

</div>

</div>

</section>



{/* MANUFACTURING APPROACH */}
<section className="section-padding bg-slate-50">

<div className="max-w-7xl mx-auto px-6">

<SectionHeading
subtitle="Quality First"
title="How We Approach Manufacturing"
/>

<p className="text-slate-600 text-lg leading-relaxed mb-10">
Quality doesn’t get added at the end of the line. It starts with sourcing,
continues through formulation and production, and finishes with testing,
packaging and documentation. Every ingredient is verified and every batch
is traceable to ensure regulatory compliance and consistent quality.
</p>

<div className="grid md:grid-cols-2 gap-6">

{[
"Every batch is fully traceable",
"Every ingredient is verified",
"Every step is recorded",
"Manufacturing meets global regulatory standards"
].map((item,idx)=>(

<div key={idx} className="flex gap-4">

<div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white">
<CheckCircle2 size={14}/>
</div>

<p className="text-primary font-semibold">
{item}
</p>

</div>

))}

</div>

</div>

</section>



{/* PRODUCTION CAPACITY */}
<section className="section-padding bg-slate-50 relative overflow-hidden">

{/* glow background */}
<div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

<div className="max-w-7xl mx-auto px-6 relative">

<div className="bg-primary text-white rounded-3xl shadow-2xl px-10 py-20 text-center">

<div className="mb-10 text-center">
  <p className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-accent mb-3">
    Production Capacity
  </p>

  <h2 className="text-xl md:text-2xl font-semibold text-white/80">
    Manufacturing at Scale
  </h2>
</div>

<div className="grid md:grid-cols-4 gap-10 mt-14">

{[
{value:134, suffix:"M", label:"Tablets / Diskettes per month"},
{value:30, suffix:"M", label:"Capsules per month"},
{value:12, suffix:" Tons", label:"Powder"},
{value:350, suffix:"K", label:"Liquid bottles per month"}
].map((item, idx)=>(

<motion.div
key={idx}
initial={{opacity:0, y:50, scale:0.9}}
whileInView={{opacity:1, y:0, scale:1}}
viewport={{once:true}}
transition={{duration:0.6, delay:idx*0.2}}
whileHover={{y:-8, scale:1.07}}
className="relative p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 transition-all duration-300 group"
>

{/* glow hover */}
<div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all"></div>

<h3 className="text-5xl font-bold text-accent mb-3">
<Counter value={item.value} suffix={item.suffix}/>
</h3>

<p className="text-white/80 text-sm leading-relaxed">
{item.label}
</p>

</motion.div>

))}

</div>

</div>

</div>

</section>

</div>
);
};

export default Capabilities;