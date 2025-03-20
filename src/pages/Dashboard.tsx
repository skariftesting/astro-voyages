import { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { generateStars } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string; color: string }[]>([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  return (
    <div className="min-h-screen bg-space-blue overflow-hidden relative">
      {/* Star background */}
      <div className="star-field">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`star ${star.size} animate-star-twinkle`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="container mx-auto max-w-6xl px-4 mb-16">
          <div className="text-center">
            <span className="bg-space-purple/10 text-space-pink px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              DASHBOARD
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-space-white mb-6">
              Your Space <span className="text-gradient">Control</span>
            </h1>
            <p className="text-space-gray max-w-2xl mx-auto">
              Manage your bookings, track your rewards, and explore new destinations.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Upcoming Trip */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle>Upcoming Trip</CardTitle>
                <CardDescription>Your next adventure awaits!</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Destination</Label>
                    <Input type="text" value="Mars Colony" readOnly />
                  </div>
                  <div>
                    <Label>Departure Date</Label>
                    <Input type="text" value="2042-07-22" readOnly />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Booking ID</Label>
                    <Input type="text" value="M42-2042" readOnly />
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Input type="text" value="Confirmed" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Rewards Program */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle>Rewards Program</CardTitle>
                <CardDescription>Track your progress and unlock exclusive benefits.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span>Current Tier: <Badge variant="secondary">Orion</Badge></span>
                  <span>Points: 4,200</span>
                </div>
                <Progress value={85} className="h-2 bg-space-light-blue/30" />
                <div className="flex items-center justify-between mt-2 text-sm text-space-light-gray">
                  <span>Next Tier: Supernova</span>
                  <span>6,000 Points</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* User Profile */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>Manage your account details.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Avatar className="mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-medium text-space-white">Astro Nomad</p>
                  <p className="text-sm text-space-light-gray">astro.nomad@example.com</p>
                </div>
                <div className="w-full mt-4">
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" defaultValue="AstroNomad" className="mb-2" />
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" defaultValue="astro.nomad@example.com" />
                </div>
              </CardContent>
            </Card>
            
            {/* Travel Preferences */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle>Travel Preferences</CardTitle>
                <CardDescription>Customize your space travel experience.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Preferred Cabin Class</span>
                    <span className="font-medium text-space-white">Business</span>
                  </div>
                  <Progress value={60} className="h-2 bg-space-light-blue/30" />
                  <div className="flex items-center justify-between">
                    <span>Preferred Destination Type</span>
                    <span className="font-medium text-space-white">Orbital Stations</span>
                  </div>
                  <Progress value={42} className="h-2 bg-space-light-blue/30" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
