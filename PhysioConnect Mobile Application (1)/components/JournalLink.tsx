import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Star, Share, Bookmark, Search, Filter, Clock, User } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface JournalLinkProps {
  onBack: () => void;
}

export default function JournalLink({ onBack }: JournalLinkProps) {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [bookmarked, setBookmarked] = useState<number[]>([1, 3]);
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: "Modern Approaches to Sports Injury Rehabilitation",
      author: "Dr. Sarah Johnson, PT, PhD",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Sports Medicine",
      excerpt: "Exploring innovative rehabilitation techniques that combine traditional physiotherapy with modern technology to accelerate recovery times and improve patient outcomes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      views: 1234,
      rating: 4.8,
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "The Role of Exercise in Chronic Pain Management",
      author: "Dr. Michael Chen, DPT",
      date: "Jan 12, 2025",
      readTime: "12 min read",
      category: "Pain Management",
      excerpt: "A comprehensive review of exercise-based interventions for chronic pain conditions, including evidence-based protocols and patient case studies.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop",
      views: 892,
      rating: 4.9,
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Neuroplasticity and Motor Learning in Stroke Recovery",
      author: "Dr. Emma Rodriguez, PhD",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "Neurology",
      excerpt: "Understanding how the brain adapts and recovers after stroke, and how physiotherapy interventions can enhance neuroplastic changes.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      views: 2156,
      rating: 4.7,
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Postural Assessment in the Digital Age",
      author: "Dr. James Wilson, DPT",
      date: "Jan 8, 2025",
      readTime: "6 min read",
      category: "Posture",
      excerpt: "How modern technology is revolutionizing postural assessment and the implications for remote physiotherapy practice.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=200&fit=crop",
      views: 756,
      rating: 4.6,
      difficulty: "Beginner"
    }
  ];

  const toggleBookmark = (articleId: number) => {
    setBookmarked(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Article Header */}
        <div className="relative">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 left-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => toggleBookmark(article.id)}
              className="text-white hover:bg-white/20"
            >
              <Bookmark className={`w-5 h-5 ${bookmarked.includes(article.id) ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Share className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-4">
          <Badge className="mb-3">{article.category}</Badge>
          <h1 className="text-2xl mb-3 leading-tight">{article.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
              {article.rating}
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-foreground">
            <p className="mb-4">{article.excerpt}</p>
            
            <h2>Introduction</h2>
            <p>
              Modern physiotherapy is rapidly evolving with the integration of advanced technologies and evidence-based practices. 
              This comprehensive review examines the latest developments in rehabilitation techniques and their clinical applications.
            </p>

            <h2>Key Findings</h2>
            <p>
              Our research indicates significant improvements in patient outcomes when combining traditional manual therapy 
              techniques with modern diagnostic tools and personalized treatment protocols.
            </p>

            <h2>Clinical Applications</h2>
            <p>
              The implementation of these new approaches requires careful consideration of patient-specific factors, 
              including injury severity, patient compliance, and access to technology-enhanced rehabilitation equipment.
            </p>

            <h2>Conclusion</h2>
            <p>
              The future of physiotherapy lies in the thoughtful integration of technology with human expertise, 
              ensuring that patient care remains personalized while benefiting from technological advancements.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-border">
            <h3 className="text-lg mb-3">Related Articles</h3>
            <div className="space-y-3">
              {articles.filter(a => a.id !== article.id).slice(0, 2).map((relatedArticle) => (
                <Card key={relatedArticle.id} className="p-3 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex space-x-3">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm mb-1">{relatedArticle.title}</h4>
                      <p className="text-xs text-muted-foreground">{relatedArticle.author}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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
          <h1 className="text-xl">PhysioMU Journal</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Featured Article */}
      <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-b border-border">
        <h2 className="text-lg mb-3">Featured Article</h2>
        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedArticle(articles[0].id)}>
          <div className="relative">
            <img 
              src={articles[0].image} 
              alt={articles[0].title}
              className="w-full h-32 object-cover"
            />
            <Badge className="absolute top-2 left-2">{articles[0].category}</Badge>
            <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">Featured</Badge>
          </div>
          <div className="p-3">
            <h3 className="text-lg mb-2">{articles[0].title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{articles[0].excerpt}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{articles[0].author}</span>
              <span>{articles[0].readTime}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Categories */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg mb-3">Categories</h2>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {['All', 'Sports Medicine', 'Pain Management', 'Neurology', 'Posture', 'Exercise Therapy'].map((category) => (
            <Button key={category} variant="outline" size="sm" className="whitespace-nowrap">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="p-4 space-y-4 h-[calc(100vh-400px)] overflow-y-auto">
        {articles.slice(1).map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedArticle(article.id)}>
            <div className="flex">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 p-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(article.id);
                    }}
                    className="p-1"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked.includes(article.id) ? 'fill-current text-primary' : 'text-muted-foreground'}`} />
                  </Button>
                </div>
                
                <h3 className="text-sm mb-1 leading-tight">{article.title}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.author}</span>
                  <div className="flex items-center space-x-2">
                    <span>{article.readTime}</span>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      {article.rating}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}