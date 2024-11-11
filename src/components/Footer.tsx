import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-6">EZ SHOP</h2>
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Templates</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">Ez Marketplace Pro - Shop</Link></li>
                <li><Link to="/">Ez Travel Shop</Link></li>
                <li><Link to="/">Ez Design Marketplace</Link></li>
                <li><Link to="/">Ez Marketplace Shop</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Plugins</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">Ez GOOGLE AI</Link></li>
                <li><Link to="/">Ez Phosphor Icons</Link></li>
                <li><Link to="/">Ez Organization Chart</Link></li>
                <li><Link to="/">Ez Plaid Connect</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">Twitter</Link></li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Linked In</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4">Hire Us</h3>
              <ul className="space-y-2 text-accent">
                <li><Link to="/">Bubble</Link></li>
                <li><Link to="/">Email</Link></li>
                <li><Link to="/">Fiverr</Link></li>
                <li><Link to="/">UpWork</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Get in touch</h3>
              <p className="text-accent mb-4">
                For any custom development or support reach us
                <a href="mailto:projects@eazycode.com" className="text-primary block mt-2">
                  projects@eazycode.com
                </a>
              </p>
              <div className="flex gap-4">
                <Link to="/" className="text-accent hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-accent hover:text-primary">
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