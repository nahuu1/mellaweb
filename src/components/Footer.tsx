import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-[#4CAF50]">Me</span>
              <span className="text-[#2D5DA1]">lla</span>
            </h2>
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/marketplace">Emergency Response</Link></li>
                <li><Link to="/">Safety Alerts</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">Safety Tips</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <p className="text-accent mb-4">
                24/7 Emergency Line
                <a href="tel:911" className="text-[#2D5DA1] block mt-2 font-bold">
                  911
                </a>
              </p>
              <div className="flex gap-4">
                <Link to="/" className="text-accent hover:text-[#4CAF50]">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-[#4CAF50]">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-[#4CAF50]">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-[#4CAF50]">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;