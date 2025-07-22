import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import NearTherapy from './components/NearTherapy';
import ExerciseFit from './components/ExerciseFit';
import TelePhysio from './components/TelePhysio';
import JournalLink from './components/JournalLink';
import PostureIQ from './components/PostureIQ';
import Profile from './components/Profile';

type Screen = 'splash' | 'home' | 'near-therapy' | 'exercise-fit' | 'tele-physio' | 'journal-link' | 'posture-iq' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set up proper viewport meta and responsive behavior
    const setViewportMeta = () => {
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        document.head.appendChild(viewport);
      }
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    };

    // Add web app manifest meta tags for better mobile experience
    const addWebAppMeta = () => {
      // Theme color
      let themeColor = document.querySelector('meta[name="theme-color"]');
      if (!themeColor) {
        themeColor = document.createElement('meta');
        themeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColor);
      }
      themeColor.setAttribute('content', isDarkMode ? '#0f172a' : '#ffffff');

      // Apple specific meta tags
      let appleMobileCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
      if (!appleMobileCapable) {
        appleMobileCapable = document.createElement('meta');
        appleMobileCapable.setAttribute('name', 'apple-mobile-web-app-capable');
        appleMobileCapable.setAttribute('content', 'yes');
        document.head.appendChild(appleMobileCapable);
      }

      let appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      if (!appleStatusBar) {
        appleStatusBar = document.createElement('meta');
        appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
        document.head.appendChild(appleStatusBar);
      }
      appleStatusBar.setAttribute('content', isDarkMode ? 'black-translucent' : 'default');
    };

    setViewportMeta();
    addWebAppMeta();

    // Auto-transition from splash to home after 3 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen, isDarkMode]);

  useEffect(() => {
    // Apply dark mode class to document with smooth transition
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Update theme color dynamically
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', isDarkMode ? '#0f172a' : '#ffffff');
    }
  }, [isDarkMode]);

  // Handle orientation changes and screen resize
  useEffect(() => {
    const handleOrientationChange = () => {
      // Force a repaint after orientation change to prevent layout issues
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('home')} />;
      case 'home':
        return <HomeScreen onNavigate={navigateToScreen} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
      case 'near-therapy':
        return <NearTherapy onBack={() => setCurrentScreen('home')} />;
      case 'exercise-fit':
        return <ExerciseFit onBack={() => setCurrentScreen('home')} />;
      case 'tele-physio':
        return <TelePhysio onBack={() => setCurrentScreen('home')} />;
      case 'journal-link':
        return <JournalLink onBack={() => setCurrentScreen('home')} />;
      case 'posture-iq':
        return <PostureIQ onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return <Profile onBack={() => setCurrentScreen('home')} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
      default:
        return <HomeScreen onNavigate={navigateToScreen} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 overflow-x-hidden">
      {/* Ensure proper mobile experience */}
      <div className="w-full h-full">
        {renderScreen()}
      </div>
    </div>
  );
}