"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  BookOpen,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Star,
  Clock,
  Award,
  Play,
  MessageCircle,
  Bell,
  Search,
  GraduationCap,
  Coffee,
  Globe,
  Mic,
  TrendingUp,
  CheckCircle,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

// Types
interface Tutor {
  id: string;
  name: string;
  photo: string;
  courseTopics: string[];
  experience: string;
  rating: number;
  totalStudents: number;
  speciality: string;
  availability: "online" | "busy" | "offline";
  description: string;
}

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState<string>("overview");
  const [userName] = useState<string>("Amyana Daniella");

  // Dummy tutors data
  const tutors: Tutor[] = [
    {
      id: "1",
      name: "Daniella Amyana",
      photo: "DA",
      courseTopics: [
        "Academic English",
        "IELTS Preparation",
        "Business English",
      ],
      experience: "3+ years",
      rating: 4.9,
      totalStudents: 150,
      speciality: "Academic English",
      availability: "online",
      description:
        "Founder dengan pengalaman internasional di UI, Tilburg University, dan Coventry University",
    },
    {
      id: "2",
      name: "Sarah Mitchell",
      photo: "SM",
      courseTopics: ["Daily Conversation", "Pronunciation", "Grammar"],
      experience: "5+ years",
      rating: 4.8,
      totalStudents: 120,
      speciality: "Daily Conversation",
      availability: "online",
      description:
        "Native speaker dari UK dengan spesialisasi conversation dan pronunciation training",
    },
    {
      id: "3",
      name: "James Rodriguez",
      photo: "JR",
      courseTopics: [
        "Business English",
        "Presentation Skills",
        "Interview Prep",
      ],
      experience: "4+ years",
      rating: 4.9,
      totalStudents: 95,
      speciality: "Business English",
      availability: "busy",
      description:
        "Former corporate trainer dengan expertise di business communication",
    },
    {
      id: "4",
      name: "Emily Chen",
      photo: "EC",
      courseTopics: ["Academic Writing", "TOEFL Prep", "Research Methods"],
      experience: "6+ years",
      rating: 4.7,
      totalStudents: 80,
      speciality: "Academic Writing",
      availability: "online",
      description:
        "PhD holder dengan pengalaman mengajar di universitas internasional",
    },
  ];

  // Navigation menu items
  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "progress",
      label: "Course Progress",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "schedule",
      label: "My Schedule",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "materials",
      label: "Materials",
      icon: <FileText className="w-5 h-5" />,
    },
    { id: "tutors", label: "Find Tutors", icon: <Users className="w-5 h-5" /> },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        .gradient-bg {
          background: linear-gradient(
            -45deg,
            #f7f7f7,
            #d88755,
            #f7f7f7,
            #ebbf9a
          );
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .glass-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .tutor-card {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .tutor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(216, 135, 85, 0.2);
        }

        .menu-item {
          transition: all 0.3s ease;
        }

        .menu-item:hover {
          background: rgba(216, 135, 85, 0.1);
          transform: translateX(5px);
        }

        .menu-item.active {
          background: linear-gradient(135deg, #d88755, #c77644);
          color: white;
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div> */}
                <div className="text-xl font-bold text-gray-800">
                  <span style={{ color: "#D88755" }}>Myna</span>-English
                </div>
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Cari tutor, materi, atau kursus..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <span className="hidden md:block text-gray-700 font-medium">
                    {userName}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-lg h-[calc(100vh-80px)] sticky top-20">
            <div className="p-6">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-black menu-item ${
                      activeMenu === item.id ? "active" : ""
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <div className="gradient-bg rounded-2xl p-8 glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                      Selamat datang, {userName}! 👋
                    </h1>
                    <p className="text-gray-600 text-lg">
                      Siap untuk meningkatkan kemampuan bahasa Inggris Anda hari
                      ini?
                    </p>
                  </div>
                  <div className="floating-element">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Classes</p>
                    <p className="text-2xl font-bold text-gray-800">12</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Progress</p>
                    <p className="text-2xl font-bold text-gray-800">75%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Next Class</p>
                    <p className="text-2xl font-bold text-gray-800">2h</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Certificates</p>
                    <p className="text-2xl font-bold text-gray-800">3</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tutors Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Expert Tutors
                </h2>
                <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="tutor-card glass-card rounded-2xl p-6"
                  >
                    <div className="text-center">
                      {/* Avatar */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-lg font-bold">
                            {tutor.photo}
                          </span>
                        </div>
                        <div
                          className={`absolute -bottom-1 -right-1 w-5 h-5 ${getAvailabilityColor(
                            tutor.availability
                          )} border-2 border-white rounded-full`}
                        ></div>
                      </div>

                      {/* Name & Speciality */}
                      <h3 className="font-bold text-gray-800 mb-1">
                        {tutor.name}
                      </h3>
                      <p className="text-sm text-orange-600 font-medium mb-3">
                        {tutor.speciality}
                      </p>

                      {/* Rating & Experience */}
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            {tutor.rating}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {tutor.experience}
                        </div>
                      </div>

                      {/* Course Topics */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {tutor.courseTopics.slice(0, 2).map((topic, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                          {tutor.courseTopics.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              +{tutor.courseTopics.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                        {tutor.description}
                      </p>

                      {/* Actions */}
                      <div className="space-y-2">
                        <button
                          className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                          disabled={tutor.availability === "offline"}
                        >
                          {tutor.availability === "online"
                            ? "Book Class"
                            : tutor.availability === "busy"
                            ? "Join Waitlist"
                            : "Offline"}
                        </button>
                        <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
                          View Profile
                        </button>
                      </div>

                      {/* Students Count */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-center text-xs text-gray-500">
                          <Users className="w-3 h-3 mr-1" />
                          {tutor.totalStudents} students
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Continue Learning
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Resume your last session
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Schedule Class</h3>
                    <p className="text-gray-600 text-sm">
                      Book your next session
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Ask Questions</h3>
                    <p className="text-gray-600 text-sm">
                      Get help from tutors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
