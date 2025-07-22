import React, { useState } from 'react';
import { ArrowLeft, Camera, Scan, RotateCcw, CheckCircle, AlertCircle, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface PostureIQProps {
  onBack: () => void;
}

export default function PostureIQ({ onBack }: PostureIQProps) {
  const [analysisMode, setAnalysisMode] = useState<'camera' | 'results' | 'exercises'>('camera');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const postureData = {
    overallScore: 78,
    areas: [
      { name: 'Head Position', score: 85, status: 'good', issue: 'Slight forward head posture' },
      { name: 'Shoulder Alignment', score: 72, status: 'moderate', issue: 'Left shoulder elevated' },
      { name: 'Spinal Curvature', score: 90, status: 'excellent', issue: 'Optimal lumbar curve' },
      { name: 'Hip Level', score: 68, status: 'moderate', issue: 'Right hip slightly elevated' },
      { name: 'Weight Distribution', score: 75, status: 'good', issue: 'Slight forward weight shift' }
    ]
  };

  const recommendations = [
    {
      title: "Neck Stretches",
      description: "Gentle neck stretches to address forward head posture",
      duration: "10 minutes",
      frequency: "3x daily",
      priority: "high"
    },
    {
      title: "Shoulder Blade Squeezes",
      description: "Strengthen upper back to improve shoulder alignment",
      duration: "5 minutes",
      frequency: "2x daily",
      priority: "high"
    },
    {
      title: "Hip Flexor Stretches",
      description: "Address hip imbalance with targeted stretching",
      duration: "8 minutes",
      frequency: "Daily",
      priority: "medium"
    }
  ];

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisMode('results');
    }, 3000);
  };

  if (analysisMode === 'exercises') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <div className="bg-card border-b border-border p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => setAnalysisMode('results')} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl">Recommended Exercises</h1>
          </div>
        </div>

        {/* Exercise Recommendations */}
        <div className="p-4 space-y-4">
          {recommendations.map((exercise, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg">{exercise.title}</h3>
                <Badge variant={exercise.priority === 'high' ? 'destructive' : 'secondary'}>
                  {exercise.priority} priority
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">{exercise.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-lg text-blue-600">{exercise.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-lg text-green-600">{exercise.frequency}</div>
                  <div className="text-sm text-muted-foreground">Frequency</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1">Start Exercise</Button>
                <Button variant="outline">Watch Demo</Button>
              </div>
            </Card>
          ))}

          <Card className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border-dashed border-2">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-teal-600" />
              <h3 className="text-lg mb-2">Track Your Progress</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Regular posture analysis helps monitor improvements over time
              </p>
              <Button onClick={() => setAnalysisMode('camera')}>
                Schedule Next Analysis
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (analysisMode === 'results') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <div className="bg-card border-b border-border p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl">Posture Analysis Results</h1>
          </div>
        </div>

        {/* Overall Score */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-b border-border">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white">
                <span className="text-2xl">{postureData.overallScore}</span>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white"></div>
            </div>
            <h2 className="text-2xl mb-2">Good Posture</h2>
            <p className="text-muted-foreground">Your posture score is above average with room for improvement</p>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="p-4">
          <h3 className="text-lg mb-4">Detailed Analysis</h3>
          <div className="space-y-4 mb-6">
            {postureData.areas.map((area, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-base mb-1">{area.name}</h4>
                    <p className="text-sm text-muted-foreground">{area.issue}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {area.status === 'excellent' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {area.status === 'good' && <CheckCircle className="w-5 h-5 text-blue-500" />}
                    {area.status === 'moderate' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                    <span className="text-lg">{area.score}</span>
                  </div>
                </div>
                <Progress value={area.score} className="h-2" />
              </Card>
            ))}
          </div>

          <div className="flex space-x-2">
            <Button 
              className="flex-1"
              onClick={() => setAnalysisMode('exercises')}
            >
              <Target className="w-4 h-4 mr-2" />
              View Exercises
            </Button>
            <Button 
              variant="outline"
              onClick={() => setAnalysisMode('camera')}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Analysis
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl">Posture Analysis</h1>
        </div>
      </div>

      {/* Camera Interface */}
      <div className="relative h-[calc(100vh-80px)]">
        {/* Camera Preview */}
        <div className="w-full h-2/3 bg-black relative overflow-hidden">
          {isAnalyzing ? (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                <h3 className="text-xl mb-2">Analyzing Posture</h3>
                <p className="text-sm opacity-80">Please hold still while we analyze your posture</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-16 h-16 mx-auto mb-4 opacity-60" />
                <h3 className="text-xl mb-2">Position Yourself</h3>
                <p className="text-sm opacity-80">Stand straight and face the camera</p>
              </div>
            </div>
          )}

          {/* Pose Guidelines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-48 h-96 border-2 border-white/40 border-dashed rounded-full relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-white/60 rounded-full"></div>
                <div className="absolute top-16 left-4 w-6 h-6 border-2 border-white/60 rounded-full"></div>
                <div className="absolute top-16 right-4 w-6 h-6 border-2 border-white/60 rounded-full"></div>
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-white/60 rounded-full"></div>
                <div className="absolute bottom-16 left-6 w-6 h-6 border-2 border-white/60 rounded-full"></div>
                <div className="absolute bottom-16 right-6 w-6 h-6 border-2 border-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions and Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl border-t border-border p-4 h-1/3">
          <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4"></div>
          
          <h3 className="text-lg mb-3">Posture Analysis Setup</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600">1</span>
              </div>
              <p className="text-xs text-muted-foreground">Stand straight</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600">2</span>
              </div>
              <p className="text-xs text-muted-foreground">Face camera</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600">3</span>
              </div>
              <p className="text-xs text-muted-foreground">Hold still</p>
            </div>
          </div>

          <Button 
            className="w-full h-12"
            onClick={startAnalysis}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <span className="flex items-center">
                <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center">
                <Scan className="w-5 h-5 mr-2" />
                Start Posture Analysis
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}