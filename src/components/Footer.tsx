import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">
                  M&ABM
                </span>
                <span className="text-[10px] uppercase tracking-wider font-medium text-slate-500">
                  Consultancy & Law Firm
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your Trusted Partner in Every Legal Frontier. Providing comprehensive, strategic, and result-oriented legal solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">About Us</a></li>
              <li><a href="#expertise" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Expertise</a></li>
              <li><a href="#why-us" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Why Choose Us</a></li>
              <li><a href="#team" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Our Team</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Contact</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6">Practice Areas</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#expertise" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Corporate Law</a></li>
              <li><a href="#expertise" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Banking & Finance</a></li>
              <li><a href="#expertise" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Admiralty & Maritime</a></li>
              <li><a href="#expertise" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Dispute Resolution</a></li>
              <li><a href="#expertise" className="hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">Criminal Defence</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest legal updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                aria-label="Email Address for Newsletter"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-l-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 text-sm"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} M&ABM Consultancy and Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
