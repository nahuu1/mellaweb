import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Ambulance, ShieldAlert, FireExtinguisher, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

const EmergencyButton = ({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) => (
  <button className={`${color} text-white p-6 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 flex flex-col items-center space-y-3 w-full sm:w-48`}>
    {icon}
    <span className="font-semibold">{title}</span>
  </button>
);

const Index = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {t.emergency}
            </h1>
            <p className="text-xl text-gray-600">
              {t.findHelp}
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder={t.search}
                className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
              <Button
                onClick={() => navigate('/marketplace')}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size="icon"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <EmergencyButton 
              icon={<Ambulance className="w-8 h-8" />}
              title={t.ambulance}
              color="bg-red-500"
            />
            <EmergencyButton 
              icon={<ShieldAlert className="w-8 h-8" />}
              title={t.police}
              color="bg-blue-500"
            />
            <EmergencyButton 
              icon={<FireExtinguisher className="w-8 h-8" />}
              title={t.fire}
              color="bg-orange-500"
            />
            <EmergencyButton 
              icon={<Car className="w-8 h-8" />}
              title={t.traffic}
              color="bg-green-500"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;