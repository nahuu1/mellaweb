import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Ambulance, ShieldAlert, FireExtinguisher, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-white to-[#E8F5E9]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-[#2D5DA1]">
              Emergency Response
              <span className="block text-[#4CAF50]">For Ethiopia</span>
            </h1>
            <p className="text-accent text-lg mb-8">
              Immediate assistance when you need it most 🚨
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-[#2D5DA1] hover:bg-[#2D5DA1]/90 text-white px-8 py-6 rounded-xl animate-pulse hover:animate-none transition-all duration-300 flex items-center gap-2"
              >
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                variant="outline"
                className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-8 py-6 rounded-xl transition-all duration-300"
              >
                Login
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-[#4CAF50] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-[#2D5DA1] rounded-full opacity-30 blur-3xl"></div>
            <div className="grid grid-cols-2 gap-6">
              <EmergencyButton 
                icon={<Ambulance className="w-8 h-8" />}
                title="Medical"
                color="bg-red-500"
              />
              <EmergencyButton 
                icon={<ShieldAlert className="w-8 h-8" />}
                title="Police"
                color="bg-blue-500"
              />
              <EmergencyButton 
                icon={<FireExtinguisher className="w-8 h-8" />}
                title="Fire"
                color="bg-orange-500"
              />
              <EmergencyButton 
                icon={<Car className="w-8 h-8" />}
                title="Traffic"
                color="bg-green-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2D5DA1]">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              number="01"
              title="Request Help"
              description="Quick access to emergency services with just a few taps"
              color="bg-red-100"
              textColor="text-red-600"
            />
            <FeatureCard 
              number="02"
              title="Get Connected"
              description="Instantly connect with nearby emergency responders"
              color="bg-blue-100"
              textColor="text-blue-600"
            />
            <FeatureCard 
              number="03"
              title="Stay Safe"
              description="Real-time updates and safety alerts for your area"
              color="bg-green-100"
              textColor="text-green-600"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#2D5DA1]">Stay Updated</h2>
          <p className="text-accent mb-8">Subscribe to receive safety alerts and updates</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EmergencyButton = ({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) => {
  return (
    <button className={`${color} text-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-3`}>
      {icon}
      <span className="font-semibold">{title}</span>
    </button>
  );
};

const FeatureCard = ({ number, title, description, color, textColor }: { 
  number: string, 
  title: string, 
  description: string,
  color: string,
  textColor: string
}) => {
  return (
    <div className="text-center space-y-4">
      <div className={`${color} w-16 h-16 mx-auto rounded-xl flex items-center justify-center`}>
        <span className={`${textColor} font-bold text-xl`}>{number}</span>
      </div>
      <h3 className="font-semibold text-xl text-[#2D5DA1]">{title}</h3>
      <p className="text-accent">{description}</p>
    </div>
  );
};

export default Index;