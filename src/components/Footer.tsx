import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="bg-primary text-white pt-20 pb-10">
  <div className="max-w-7xl mx-auto px-6 md:px-12">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

      {/* LEFT SECTION */}
      <div className="space-y-6">

        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">

          <h2 className="text-xl md:text-xl font-bold leading-tight">
            QL Therapeutics Pvt Ltd
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-sm leading-relaxed max-w-sm">
          Advancing Global Health Through Scientific Precision and Innovative Solutions.
        </p>

      </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/capabilities" className="hover:text-accent transition-colors">Capabilities</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Quality Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Stay updated with our latest innovations.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-accent w-full" />
              <button className="p-2 bg-accent rounded-lg hover:bg-accent/90 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 QL Therapeutics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/ql-therapeutics-pvt-ltd/posts/?feedView=all" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/qltherapeutics/" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
