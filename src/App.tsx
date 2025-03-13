import React, { useState, useEffect } from 'react';
import { Car, Calendar, Clock, History, Phone, Mail, MapPin, Wrench, PenTool as Tool, Shield, Award, CheckCircle } from 'lucide-react';

type Service = {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
};

const services: Service[] = [
  {
    id: 1,
    name: "Complete Car Service",
    description: "Comprehensive maintenance package including oil change, filter replacement, and 50-point inspection",
    duration: "4-5 hours",
    price: "₹4,999",
    features: [
      "Engine oil replacement",
      "Oil filter change",
      "Air filter cleaning",
      "Brake check & service",
      "Battery water top up",
      "AC performance check"
    ]
  },
  {
    id: 2,
    name: "Premium Brake Service",
    description: "Complete brake system overhaul with genuine parts and professional inspection",
    duration: "2-3 hours",
    price: "₹2,999",
    features: [
      "Brake pad replacement",
      "Rotor inspection",
      "Brake fluid top-up",
      "Caliper cleaning",
      "Brake testing",
      "Safety inspection"
    ]
  },
  {
    id: 3,
    name: "Engine Performance Package",
    description: "Advanced diagnostics and tune-up for optimal engine performance",
    duration: "5-6 hours",
    price: "₹6,999",
    features: [
      "Computer diagnostics",
      "Spark plug replacement",
      "Fuel system cleaning",
      "Throttle body service",
      "Performance testing",
      "Engine timing adjustment"
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: "Genuine Parts",
    description: "We use only authentic OEM parts for all repairs and services"
  },
  {
    icon: Tool,
    title: "Expert Mechanics",
    description: "Our team consists of certified professionals with 10+ years experience"
  },
  {
    icon: Award,
    title: "Service Warranty",
    description: "6-month warranty on all services and repairs"
  }
];

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    registrationNumber: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to your database
    console.log({ ...formData, selectedDate, selectedTime, selectedService });
    alert('Booking submitted successfully! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`space-y-6 md:w-1/2 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Expert Car Care You Can Trust
              </h1>
              <p className="text-xl text-blue-100">
                Premium auto service with state-of-the-art facilities and certified mechanics
              </p>
              <div className="flex space-x-4">
                <a href="#book-service" 
                  className="cta-button inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400">
                  Book Service
                </a>
                <a href="#services" 
                  className="cta-button inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&h=600" 
                alt="Professional mechanic servicing a car" 
                className="hero-image rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 service-card">
                <feature.icon className="w-12 h-12 text-blue-900" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our range of professional car care services, designed to keep your vehicle in perfect condition
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 service-card">
                <Wrench className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4 pt-4 border-t">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {service.duration}</span>
                  <span className="text-xl font-bold text-blue-900">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white" id="book-service">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Book a Service</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Schedule your car service appointment with our expert team. We'll confirm your booking within 2 hours.
          </p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Car Model</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.carModel}
                  onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.registrationNumber}
                  onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedService || ''}
                  onChange={(e) => setSelectedService(Number(e.target.value))}
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.name} - {service.price}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-8 bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors cta-button"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Tool className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-blue-100">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-blue-100">6-month warranty on all services</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-blue-100">Same-day service for most repairs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Pricing</h3>
              <p className="text-blue-100">Competitive rates with no hidden charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg service-card">
              <Phone className="w-8 h-8 text-blue-900" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 9269021678</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg service-card">
              <Mail className="w-8 h-8 text-blue-900" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">anand.t9903@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg service-card">
              <MapPin className="w-8 h-8 text-blue-900" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">A-143 Aashiyana</p>
                <p className="text-gray-600">Near SKIT Gate No.1</p>
                <p className="text-gray-600">Ramnagariya Road, Jagatpura</p>
                <p className="text-gray-600">Jaipur, Rajasthan 302017</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
              <p className="text-gray-400">
                Anand's Garage has been serving car owners since 1995. We pride ourselves on quality service, 
                expert knowledge, and customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
              <p className="text-gray-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
              <p className="text-gray-400">Emergency Service Available 24/7</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#book-service" className="hover:text-white transition-colors">Book Service</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p>&copy; 2025 Anand's Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;