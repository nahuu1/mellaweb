import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Ambulance, ShieldAlert, FireExtinguisher, Car } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { currentUser, login, signup, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.longitude, position.coords.latitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please enable location services.",
            variant: "destructive",
          });
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !userLocation) return;

    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: userLocation as [number, number],
      zoom: 12
    });

    // Add user marker
    new mapboxgl.Marker({ color: '#FF0000' })
      .setLngLat(userLocation as [number, number])
      .addTo(map.current);

    // Mock emergency workers
    const workers = [
      { lngLat: [userLocation[0] + 0.01, userLocation[1] + 0.01], type: 'ambulance' },
      { lngLat: [userLocation[0] - 0.01, userLocation[1] - 0.01], type: 'police' },
      { lngLat: [userLocation[0] + 0.02, userLocation[1] - 0.02], type: 'fire' },
    ];

    workers.forEach(worker => {
      new mapboxgl.Marker({ color: '#00FF00' })
        .setLngLat(worker.lngLat as [number, number])
        .addTo(map.current!);
    });

    return () => map.current?.remove();
  }, [userLocation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      toast({
        title: isLogin ? "Login Successful" : "Signup Successful",
        description: "Welcome to the emergency services platform!",
      });
    } catch (error) {
      toast({
        title: "Authentication Error",
        description: "Failed to authenticate. Please check your credentials.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out.",
        variant: "destructive",
      });
    }
  };

  if (currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Welcome, {currentUser.email}</h2>
                <p className="text-gray-600">Emergency Services Dashboard</p>
              </div>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

          <Card className="p-4">
            <h3 className="text-xl font-semibold mb-4">Emergency Services Near You</h3>
            <div ref={mapContainer} className="h-[400px] rounded-lg" />
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'} to Emergency Services
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </Card>
    </div>
  );
};

const EmergencyButton = ({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) => (
  <button className={`${color} text-white p-6 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 flex flex-col items-center space-y-3 w-full`}>
    {icon}
    <span className="font-semibold">{title}</span>
  </button>
);

export default Index;