import React from 'react';
import { Search, User, Bell, MapPin, Dumbbell, Video, BookOpen, Scan, Moon, Sun } from 'lucide-react';
import { Input } from './ui/input';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function HomeScreen({ onNavigate, isDarkMode, onToggleDarkMode }: HomeScreenProps) {
  const features = [
    {
      id: 'near-therapy',
      title: 'Find Nearby Therapists',
      subtitle: 'Near Therapy',
      icon: MapPin,
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-white'
    },
    {
      id: 'exercise-fit',
      title: 'Start Exercise Session',
      subtitle: 'Exercise Fit',
      icon: Dumbbell,
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-white'
    },
    {
      id: 'tele-physio',
      title: 'Online Consultation',
      subtitle: 'TelePhysio',
      icon: Video,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-white'
    },
    {
      id: 'journal-link',
      title: 'Access Journal',
      subtitle: 'Journal Link',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-white'
    },
    {
      id: 'posture-iq',
      title: 'Analyze Posture',
      subtitle: 'Posture IQ',
      icon: Scan,
      color: 'from-orange-500 to-red-500',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Header - Responsive with safe areas */}
      <div className="bg-card border-b border-border px-4 py-3 sm:px-6 shadow-sm safe-area-top">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-base sm:text-lg font-medium">P</span>
            </div>
            <h1 className="text-lg sm:text-xl text-foreground font-medium truncate">PhysioConnect</h1>
          </div>
          <div className="flex items-center space-x-1">
            {/* Touch-friendly buttons with 48x48 minimum */}
            <button 
              onClick={onToggleDarkMode} 
              className="min-w-[48px] min-h-[48px] p-3 rounded-full hover:bg-accent transition-colors active:scale-95"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => onNavigate('profile')} 
              className="min-w-[48px] min-h-[48px] p-3 rounded-full hover:bg-accent transition-colors active:scale-95"
              aria-label="Open profile"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Search Bar - Responsive */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input 
            placeholder="Search therapists, exercises..." 
            className="pl-10 h-12 bg-input-background border-border text-sm sm:text-base rounded-lg"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Main Content - Flexible with responsive spacing */}
      <div className="flex-1 p-3 sm:p-4 overflow-hidden">
        {/* Welcome Message - Responsive typography */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-medium mb-1 sm:mb-2">Welcome back!</h2>
          <p className="text-sm sm:text-base text-muted-foreground">How can we help you today?</p>
        </div>

        {/* Core Features Grid - Adaptive layout */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Large feature cards - Responsive sizing */}
          <button
            onClick={() => onNavigate(features[0].id)}
            className={`bg-gradient-to-br ${features[0].color} rounded-xl p-3 sm:p-4 ${features[0].textColor} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex flex-col justify-between min-h-[100px] sm:min-h-[120px] aspect-square`}
            aria-label={features[0].title}
          >
            {React.createElement(features[0].icon, { className: "w-6 h-6 sm:w-8 sm:h-8 mb-2 flex-shrink-0" })}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm opacity-90 font-medium">{features[0].subtitle}</h3>
              <p className="text-xs mt-1 leading-tight opacity-80">{features[0].title}</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate(features[1].id)}
            className={`bg-gradient-to-br ${features[1].color} rounded-xl p-3 sm:p-4 ${features[1].textColor} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex flex-col justify-between min-h-[100px] sm:min-h-[120px] aspect-square`}
            aria-label={features[1].title}
          >
            {React.createElement(features[1].icon, { className: "w-6 h-6 sm:w-8 sm:h-8 mb-2 flex-shrink-0" })}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm opacity-90 font-medium">{features[1].subtitle}</h3>
              <p className="text-xs mt-1 leading-tight opacity-80">{features[1].title}</p>
            </div>
          </button>

          {/* Medium feature card */}
          <button
            onClick={() => onNavigate(features[2].id)}
            className={`bg-gradient-to-br ${features[2].color} rounded-xl p-3 sm:p-4 ${features[2].textColor} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex flex-col justify-between min-h-[100px] sm:min-h-[120px] aspect-square`}
            aria-label={features[2].title}
          >
            {React.createElement(features[2].icon, { className: "w-6 h-6 sm:w-7 sm:h-7 mb-2 flex-shrink-0" })}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm opacity-90 font-medium">{features[2].subtitle}</h3>
              <p className="text-xs mt-1 leading-tight opacity-80">{features[2].title}</p>
            </div>
          </button>

          {/* Compact feature cards stack */}
          <div className="grid grid-rows-2 gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate(features[3].id)}
              className={`bg-gradient-to-br ${features[3].color} rounded-lg sm:rounded-xl p-2 sm:p-3 ${features[3].textColor} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-2 min-h-[48px] sm:min-h-[56px]`}
              aria-label={features[3].title}
            >
              {React.createElement(features[3].icon, { className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" })}
              <div className="text-left min-w-0">
                <h3 className="text-xs opacity-90 font-medium truncate">{features[3].subtitle}</h3>
              </div>
            </button>

            <button
              onClick={() => onNavigate(features[4].id)}
              className={`bg-gradient-to-br ${features[4].color} rounded-lg sm:rounded-xl p-2 sm:p-3 ${features[4].textColor} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-2 min-h-[48px] sm:min-h-[56px]`}
              aria-label={features[4].title}
            >
              {React.createElement(features[4].icon, { className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" })}
              <div className="text-left min-w-0">
                <h3 className="text-xs opacity-90 font-medium truncate">{features[4].subtitle}</h3>
              </div>
            </button>
          </div>
        </div>

        {/* Quick Stats - Responsive */}
        <div className="bg-card rounded-xl p-3 sm:p-4 border border-border">
          <h3 className="text-sm mb-2 sm:mb-3 text-muted-foreground font-medium">Today's Progress</h3>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-lg sm:text-xl text-teal-600 font-medium">5</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl text-blue-600 font-medium">12</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl text-green-600 font-medium">85%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Posture</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Touch-friendly */}
      <div className="bg-card border-t border-border px-4 py-2 safe-area-bottom">
        <div className="flex justify-around items-center max-w-sm mx-auto">
          <button 
            className="flex flex-col items-center space-y-1 text-primary min-w-[64px] min-h-[48px] justify-center rounded-lg transition-colors"
            aria-label="Home"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors min-w-[64px] min-h-[48px] justify-center rounded-lg"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs">Alerts</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')} 
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors min-w-[64px] min-h-[48px] justify-center rounded-lg"
            aria-label="Profile"
          >
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}