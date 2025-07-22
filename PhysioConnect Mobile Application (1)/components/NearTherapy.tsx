import React, { useState } from 'react';
import { ArrowLeft, MapPin, Star, Phone, Clock, Filter, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface NearTherapyProps {
  onBack: () => void;
}

export default function NearTherapy({ onBack }: NearTherapyProps) {
  const [selectedTherapist, setSelectedTherapist] = useState<number | null>(null);
  const [mapView, setMapView] = useState(true);

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Sports Rehabilitation",
      rating: 4.9,
      distance: "0.8 km",
      availability: "Available Now",
      experience: "8 years",
      phone: "+1 234-567-8901",
      hours: "9 AM - 6 PM",
      reviews: 124,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Orthopedic Therapy",
      rating: 4.8,
      distance: "1.2 km",
      availability: "Next: 2 PM",
      experience: "12 years",
      phone: "+1 234-567-8902",
      hours: "8 AM - 7 PM",
      reviews: 89,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Emma Rodriguez",
      specialization: "Neurological Rehabilitation",
      rating: 4.9,
      distance: "1.5 km",
      availability: "Available Now",
      experience: "10 years",
      phone: "+1 234-567-8903",
      hours: "10 AM - 8 PM",
      reviews: 156,
      image: "https://images.unsplash.com/photo-1594824347933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Header - Responsive with safe areas */}
      <div className="bg-card border-b border-border px-4 py-3 sm:px-6 shadow-sm safe-area-top">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack} 
              className="min-w-[48px] min-h-[48px] p-3 rounded-full hover:bg-accent active:scale-95"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg sm:text-xl font-medium">Find Nearby Therapists</h1>
          </div>
        </div>
        
        {/* View Toggle Buttons - Mobile-optimized */}
        <div className="flex space-x-2">
          <Button 
            variant={mapView ? "default" : "outline"} 
            size="sm" 
            onClick={() => setMapView(true)}
            className="flex-1 min-h-[44px] text-sm sm:text-base"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Map View
          </Button>
          <Button 
            variant={!mapView ? "default" : "outline"} 
            size="sm" 
            onClick={() => setMapView(false)}
            className="flex-1 min-h-[44px] text-sm sm:text-base"
          >
            List View
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="min-w-[44px] min-h-[44px] px-3"
            aria-label="Filter options"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {mapView ? (
        // Map View - Responsive layout
        <div className="relative flex-1 overflow-hidden">
          {/* Mock Map */}
          <div className="w-full h-2/3 bg-gradient-to-br from-blue-100 to-green-100 dark:from-slate-700 dark:to-slate-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Location Pins - Touch-friendly */}
            <div className="absolute top-16 sm:top-20 left-12 sm:left-16 transform -translate-x-1/2 -translate-y-1/2">
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation"
                aria-label="Therapist location 1"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="absolute top-24 sm:top-32 right-16 sm:right-20 transform -translate-x-1/2 -translate-y-1/2">
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation"
                aria-label="Therapist location 2"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="absolute bottom-16 sm:bottom-20 left-16 sm:left-20 transform -translate-x-1/2 -translate-y-1/2">
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation"
                aria-label="Therapist location 3"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* GPS Button - Touch-friendly */}
            <Button 
              className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 bg-white text-gray-600 hover:bg-gray-50 shadow-lg active:scale-95"
              variant="outline"
              aria-label="Center on current location"
            >
              <Navigation className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Bottom Sheet with Therapist Cards - Responsive */}
          <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl border-t border-border p-4 h-1/3 overflow-y-auto safe-area-bottom">
            <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4"></div>
            <div className="space-y-3">
              {therapists.slice(0, 2).map((therapist) => (
                <Card key={therapist.id} className="p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer touch-manipulation">
                  <div className="flex space-x-3">
                    <img 
                      src={therapist.image} 
                      alt={therapist.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-medium truncate">{therapist.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{therapist.specialization}</p>
                      <div className="flex items-center flex-wrap gap-2 mt-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs ml-1">{therapist.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{therapist.distance}</span>
                        <Badge variant="secondary" className="text-xs">{therapist.availability}</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // List View - Mobile-optimized scrolling
        <div className="flex-1 p-4 space-y-3 sm:space-y-4 overflow-y-auto safe-area-bottom">
          {therapists.map((therapist) => (
            <Card key={therapist.id} className="p-4 hover:shadow-md transition-shadow touch-manipulation">
              <div className="flex space-x-3 sm:space-x-4">
                <img 
                  src={therapist.image} 
                  alt={therapist.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="min-w-0 flex-1 mr-2">
                      <h3 className="text-base sm:text-lg font-medium truncate">{therapist.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">{therapist.specialization}</p>
                    </div>
                    <Badge 
                      variant={therapist.availability === "Available Now" ? "default" : "secondary"}
                      className="text-xs whitespace-nowrap"
                    >
                      {therapist.availability}
                    </Badge>
                  </div>
                  
                  {/* Responsive info layout */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {therapist.rating} ({therapist.reviews} reviews)
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {therapist.distance}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {therapist.hours}
                    </div>
                  </div>

                  {/* Action buttons - Touch-friendly */}
                  <div className="flex space-x-2">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 min-h-[44px] text-sm sm:text-base"
                    >
                      Book Appointment
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="min-w-[44px] min-h-[44px] px-3"
                      aria-label={`Call ${therapist.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}