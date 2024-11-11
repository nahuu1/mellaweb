import { Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">EZ SHOP</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/mobile" className="nav-link">Mobile phone</Link>
          <Link to="/laptop" className="nav-link">Laptop</Link>
          <Link to="/gadget" className="nav-link">Gadget</Link>
          <Link to="/tv" className="nav-link">TV</Link>
          <Link to="/tablet" className="nav-link">Tablet</Link>
          <Link to="/headphone" className="nav-link">Headphone</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-accent transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 hover:text-accent transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;