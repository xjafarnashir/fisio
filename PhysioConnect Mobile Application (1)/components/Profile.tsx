import React from 'react';
import { ArrowLeft, User, Settings, Bell, Shield, Moon, Sun, LogOut, Edit, Camera, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface ProfileProps {
  onBack: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Profile({ onBack, isDarkMode, onToggleDarkMode }: ProfileProps) {
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    memberSince: "Jan 2024",
    completedSessions: 45,
    currentStreak: 7,
    totalMinutes: 1250,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  };

  const achievements = [
    { title: "First Session", description: "Completed your first exercise session", earned: true },
    { title: "Week Warrior", description: "7 day exercise streak", earned: true },
    { title: "Posture Pro", description: "Completed 10 posture analyses", earned: false },
    { title: "Consistency King", description: "30 day exercise streak", earned: false }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl">Profile</h1>
          <Button variant="ghost" size="sm" className="ml-auto">
            <Edit className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* User Info */}
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <Avatar className="w-20 h-20">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full p-0">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl">{userData.name}</h2>
              <p className="text-muted-foreground">{userData.email}</p>
              <p className="text-sm text-muted-foreground">Member since {userData.memberSince}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-2xl text-teal-600">{userData.completedSessions}</div>
              <div className="text-sm text-muted-foreground">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-600">{userData.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-green-600">{userData.totalMinutes}</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-4">
          <h3 className="text-lg mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Achievements
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg border-2 ${
                  achievement.earned 
                    ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' 
                    : 'border-muted bg-muted/50'
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-yellow-400 text-black' : 'bg-muted'
                  }`}>
                    {achievement.earned ? '🏆' : '🔒'}
                  </div>
                  <Badge 
                    variant={achievement.earned ? "default" : "secondary"} 
                    className="ml-2 text-xs"
                  >
                    {achievement.earned ? 'Earned' : 'Locked'}
                  </Badge>
                </div>
                <h4 className="text-sm">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Settings */}
        <Card className="p-4">
          <h3 className="text-lg mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <div>
                  <div className="text-sm">Dark Mode</div>
                  <div className="text-xs text-muted-foreground">Toggle dark/light theme</div>
                </div>
              </div>
              <Switch checked={isDarkMode} onCheckedChange={onToggleDarkMode} />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5" />
                <div>
                  <div className="text-sm">Push Notifications</div>
                  <div className="text-xs text-muted-foreground">Exercise reminders and updates</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" />
                <div>
                  <div className="text-sm">Privacy</div>
                  <div className="text-xs text-muted-foreground">Data and privacy settings</div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Additional Options */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <User className="w-5 h-5 mr-3" />
            Account Information
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Bell className="w-5 h-5 mr-3" />
            Notification Settings
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-5 h-5 mr-3" />
            Privacy & Security
          </Button>
          
          <Separator className="my-4" />
          
          <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}