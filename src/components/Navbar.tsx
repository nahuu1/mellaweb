import { Search, User, Bell, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#2D5DA1]">
          <span className="text-[#4CAF50]">Me</span>lla
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/marketplace" className="nav-link hover:text-[#4CAF50] transition-colors">
            {translations[language].emergencyServices}
          </Link>
          <Link to="/marketplace" className="nav-link hover:text-[#4CAF50] transition-colors">
            {translations[language].findWorkers}
          </Link>
          <Link to="/marketplace" className="nav-link hover:text-[#4CAF50] transition-colors">
            {translations[language].safetyAlerts}
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleLanguage}
            className="p-2 hover:text-[#4CAF50] transition-colors flex items-center gap-2"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
          <button className="p-2 hover:text-[#4CAF50] transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-[#4CAF50] transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 hover:text-[#4CAF50] transition-colors">
            <Bell size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;