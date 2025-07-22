import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Target, Trophy, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface ExerciseFitProps {
  onBack: () => void;
}

export default function ExerciseFit({ onBack }: ExerciseFitProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All', color: 'bg-primary text-primary-foreground' },
    { id: 'strength', name: 'Strength', color: 'bg-red-500 text-white' },
    { id: 'flexibility', name: 'Flexibility', color: 'bg-green-500 text-white' },
    { id: 'balance', name: 'Balance', color: 'bg-blue-500 text-white' },
    { id: 'cardio', name: 'Cardio', color: 'bg-orange-500 text-white' }
  ];

  const exercises = [
    {
      id: 1,
      title: "Morning Stretches",
      description: "Gentle stretches to start your day",
      duration: "15 min",
      difficulty: "Beginner",
      category: "flexibility",
      exercises: 8,
      calories: 45,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop",
      progress: 75
    },
    {
      id: 2,
      title: "Core Strengthening",
      description: "Build your core stability and strength",
      duration: "20 min",
      difficulty: "Intermediate",
      category: "strength",
      exercises: 12,
      calories: 85,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      progress: 30
    },
    {
      id: 3,
      title: "Balance Training",
      description: "Improve your balance and coordination",
      duration: "12 min",
      difficulty: "Beginner",
      category: "balance",
      exercises: 6,
      calories: 35,
      image: "https://images.unsplash.com/photo-1506629905607-0b8a906b14e0?w=400&h=200&fit=crop",
      progress: 0
    },
    {
      id: 4,
      title: "Low Impact Cardio",
      description: "Gentle cardio for cardiovascular health",
      duration: "25 min",
      difficulty: "Intermediate",
      category: "cardio",
      exercises: 10,
      calories: 120,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=200&fit=crop",
      progress: 60
    }
  ];

  const filteredExercises = activeCategory === 'all' 
    ? exercises 
    : exercises.filter(ex => ex.category === activeCategory);

  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;

    return (
      <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
        {/* Exercise Video View - Responsive */}
        <div className="relative flex-1 overflow-hidden">
          {/* Video Player - Responsive aspect ratio */}
          <div className="w-full h-1/2 sm:h-3/5 bg-black relative overflow-hidden">
            <img 
              src={exercise.image} 
              alt={exercise.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 active:scale-95 touch-manipulation">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedExercise(null)}
              className="absolute top-4 left-4 min-w-[48px] min-h-[48px] text-white hover:bg-white/20 active:scale-95"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* Exercise Details - Scrollable on mobile */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto safe-area-bottom">
            <h1 className="text-xl sm:text-2xl font-medium mb-2">{exercise.title}</h1>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{exercise.description}</p>

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6">
              <div className="text-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-blue-500" />
                <div className="text-sm sm:text-base font-medium">{exercise.duration}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="text-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-green-500" />
                <div className="text-sm sm:text-base font-medium">{exercise.exercises}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Exercises</div>
              </div>
              <div className="text-center">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-orange-500" />
                <div className="text-sm sm:text-base font-medium">{exercise.calories}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Calories</div>
              </div>
            </div>

            {exercise.progress > 0 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span className="font-medium">{exercise.progress}%</span>
                </div>
                <Progress value={exercise.progress} className="h-2" />
              </div>
            )}

            {/* Action buttons - Touch-friendly */}
            <div className="space-y-3">
              <Button className="w-full min-h-[48px] text-sm sm:text-base" size="lg">
                {exercise.progress > 0 ? 'Continue Exercise' : 'Start Exercise'}
              </Button>
              <Button variant="outline" className="w-full min-h-[48px] text-sm sm:text-base">
                Preview Exercises
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Header - Responsive */}
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
            <h1 className="text-lg sm:text-xl font-medium">Exercise Sessions</h1>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="min-w-[44px] min-h-[44px] px-3"
            aria-label="Filter exercises"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Category Filters - Horizontal scroll on mobile */}
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap min-h-[40px] text-sm flex-shrink-0"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Today's Stats - Responsive spacing */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border-b border-border">
        <h2 className="text-base sm:text-lg font-medium mb-3">Today's Progress</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-teal-600 font-medium">2</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-blue-600 font-medium">35</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-green-600 font-medium">130</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Calories</div>
          </div>
        </div>
      </div>

      {/* Exercise Programs - Mobile-optimized scrolling */}
      <div className="flex-1 p-4 space-y-3 sm:space-y-4 overflow-y-auto safe-area-bottom">
        {filteredExercises.map((exercise) => (
          <Card key={exercise.id} className="overflow-hidden hover:shadow-md transition-shadow touch-manipulation">
            <div className="relative">
              <img 
                src={exercise.image} 
                alt={exercise.title}
                className="w-full h-32 sm:h-40 object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-black/50 text-white text-xs">
                {exercise.difficulty}
              </Badge>
              {exercise.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                  <Progress value={exercise.progress} className="h-1 bg-white/20" />
                  <div className="text-xs mt-1">{exercise.progress}% Complete</div>
                </div>
              )}
            </div>
            
            <div className="p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-medium mb-1">{exercise.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{exercise.description}</p>
              
              {/* Exercise details - Responsive layout */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {exercise.duration}
                </span>
                <span>{exercise.exercises} exercises</span>
                <span>{exercise.calories} cal</span>
              </div>

              <Button 
                className="w-full min-h-[44px] text-sm sm:text-base"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <Play className="w-4 h-4 mr-2" />
                {exercise.progress > 0 ? 'Continue' : 'Start Session'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}