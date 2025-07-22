import React, { useState } from 'react';
import { ArrowLeft, Video, Phone, Send, Paperclip, Camera, Mic, MoreVertical } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';

interface TelePhysioProps {
  onBack: () => void;
}

export default function TelePhysio({ onBack }: TelePhysioProps) {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      lastMessage: "How are you feeling after yesterday's exercises?",
      time: "2m ago",
      unread: 2,
      status: "online",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      lastMessage: "Let's schedule a follow-up session",
      time: "1h ago",
      unread: 0,
      status: "away",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Emma Rodriguez",
      lastMessage: "Your posture analysis results are ready",
      time: "3h ago",
      unread: 1,
      status: "offline",
      avatar: "https://images.unsplash.com/photo-1594824347933-d0501ba2fe65?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "therapist",
      content: "Good morning! How are you feeling today?",
      time: "9:00 AM",
      type: "text"
    },
    {
      id: 2,
      sender: "user",
      content: "Good morning Dr. Johnson! I'm feeling much better after yesterday's session.",
      time: "9:05 AM",
      type: "text"
    },
    {
      id: 3,
      sender: "therapist",
      content: "That's wonderful to hear! Have you been doing the stretches I recommended?",
      time: "9:07 AM",
      type: "text"
    },
    {
      id: 4,
      sender: "user",
      content: "Yes, I've been following the routine. Here's a video of my progress:",
      time: "9:10 AM",
      type: "text"
    },
    {
      id: 5,
      sender: "user",
      content: "Exercise Progress Video",
      time: "9:10 AM",
      type: "video"
    },
    {
      id: 6,
      sender: "therapist",
      content: "Excellent form! Your range of motion has improved significantly. How are you feeling after yesterday's exercises?",
      time: "9:15 AM",
      type: "text"
    }
  ];

  if (activeChat) {
    const conversation = conversations.find(c => c.id === activeChat);
    if (!conversation) return null;

    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Chat Header */}
        <div className="bg-card border-b border-border p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => setActiveChat(null)} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 relative">
              <img 
                src={conversation.avatar} 
                alt={conversation.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                conversation.status === 'online' ? 'bg-green-500' : 
                conversation.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
              }`}></div>
            </div>
            <div className="flex-1">
              <h1 className="text-lg">{conversation.name}</h1>
              <p className="text-sm text-muted-foreground">
                {conversation.status === 'online' ? 'Online' : 
                 conversation.status === 'away' ? 'Away' : 'Last seen 2h ago'}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                {msg.type === 'video' ? (
                  <div className={`p-3 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <div className="w-48 h-32 bg-black/10 rounded-lg flex items-center justify-center mb-2">
                      <Play className="w-8 h-8" />
                    </div>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                ) : (
                  <div className={`p-3 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <p>{msg.content}</p>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-1 px-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-card border-t border-border p-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Camera className="w-4 h-4" />
            </Button>
            <Input 
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline" size="sm">
              <Mic className="w-4 h-4" />
            </Button>
            <Button size="sm">
              <Send className="w-4 h-4" />
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
        <div className="flex items-center space-x-3 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl">TelePhysio</h1>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-border">
        <h2 className="text-lg mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button className="flex items-center justify-center space-x-2 h-12 bg-blue-500 hover:bg-blue-600 text-white">
            <Video className="w-5 h-5" />
            <span>Start Video Call</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
            <Phone className="w-5 h-5" />
            <span>Audio Call</span>
          </Button>
        </div>
      </div>

      {/* Conversations */}
      <div className="p-4">
        <h2 className="text-lg mb-4">Recent Conversations</h2>
        <div className="space-y-3">
          {conversations.map((conversation) => (
            <Card 
              key={conversation.id} 
              className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setActiveChat(conversation.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src={conversation.avatar} 
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                    conversation.status === 'online' ? 'bg-green-500' : 
                    conversation.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm truncate">{conversation.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1 min-w-[20px] h-5 rounded-full">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Schedule Appointment */}
        <Card className="p-4 mt-6 border-dashed border-2 border-muted-foreground/20">
          <div className="text-center">
            <h3 className="text-lg mb-2">Need to book a session?</h3>
            <p className="text-muted-foreground text-sm mb-4">Schedule an appointment with your preferred therapist</p>
            <Button className="w-full">
              Schedule Appointment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}