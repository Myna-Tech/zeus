"use client";

import React, { useState } from "react";
import {
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
  TrendingUp,
  CheckCircle,
  Users,
  ArrowRight,
  Trophy,
  Book,
  Headphones,
  PenTool,
  MessageSquare,
  BarChart3,
  PlayCircle,
  Lock,
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

// Course Progress Types
interface Lesson {
  id: string;
  title: string;
  duration: number;
  status: "completed" | "current" | "locked";
  type: "video" | "exercise" | "quiz" | "speaking";
  score?: number;
  completedAt?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: number;
  lessons: Lesson[];
  unlocked: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  totalHours: number;
  completedHours: number;
  modules: Module[];
  instructor: string;
  nextClass?: string;
  category: "Academic" | "Daily" | "Business";
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  earnedDate?: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

// Course Progress Component
function CourseProgress() {
  const [selectedCourse, setSelectedCourse] = useState<string>("1");

  const courses: Course[] = [
    {
      id: "1",
      title: "Academic English Mastery",
      description:
        "Comprehensive academic English for university and scholarship applications",
      level: "Intermediate",
      progress: 75,
      totalHours: 40,
      completedHours: 30,
      instructor: "Daniella Amyana",
      nextClass: "2024-01-25 14:00",
      category: "Academic",
      modules: [
        {
          id: "m1",
          title: "Academic Writing Fundamentals",
          description:
            "Master the basics of academic writing structure and style",
          totalLessons: 8,
          completedLessons: 8,
          estimatedTime: 12,
          unlocked: true,
          lessons: [
            {
              id: "l1",
              title: "Essay Structure & Organization",
              duration: 45,
              status: "completed",
              type: "video",
              score: 95,
              completedAt: "2024-01-15",
            },
            {
              id: "l2",
              title: "Academic Vocabulary Building",
              duration: 30,
              status: "completed",
              type: "exercise",
              score: 88,
              completedAt: "2024-01-16",
            },
            {
              id: "l3",
              title: "Citation & Referencing",
              duration: 60,
              status: "completed",
              type: "video",
              score: 92,
              completedAt: "2024-01-17",
            },
            {
              id: "l4",
              title: "Thesis Statement Writing",
              duration: 40,
              status: "completed",
              type: "exercise",
              score: 90,
              completedAt: "2024-01-18",
            },
          ],
        },
        {
          id: "m2",
          title: "Presentation & Speaking Skills",
          description:
            "Develop confidence in academic presentations and discussions",
          totalLessons: 6,
          completedLessons: 4,
          estimatedTime: 10,
          unlocked: true,
          lessons: [
            {
              id: "l9",
              title: "Presentation Structure",
              duration: 45,
              status: "completed",
              type: "video",
              score: 89,
              completedAt: "2024-01-23",
            },
            {
              id: "l10",
              title: "Visual Aids & Slides",
              duration: 40,
              status: "completed",
              type: "exercise",
              score: 85,
              completedAt: "2024-01-24",
            },
            {
              id: "l11",
              title: "Speaking Confidence",
              duration: 50,
              status: "current",
              type: "speaking",
            },
            {
              id: "l12",
              title: "Q&A Handling",
              duration: 35,
              status: "locked",
              type: "speaking",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Daily Conversation Fluency",
      description: "Build natural speaking skills for everyday communication",
      level: "Beginner",
      progress: 45,
      totalHours: 30,
      completedHours: 13.5,
      instructor: "Sarah Mitchell",
      nextClass: "2024-01-26 10:00",
      category: "Daily",
      modules: [
        {
          id: "m3",
          title: "Basic Conversation Starters",
          description: "Learn how to start and maintain casual conversations",
          totalLessons: 6,
          completedLessons: 6,
          estimatedTime: 8,
          unlocked: true,
          lessons: [
            {
              id: "l15",
              title: "Greetings & Introductions",
              duration: 30,
              status: "completed",
              type: "speaking",
              score: 92,
              completedAt: "2024-01-10",
            },
            {
              id: "l16",
              title: "Small Talk Topics",
              duration: 25,
              status: "completed",
              type: "exercise",
              score: 88,
              completedAt: "2024-01-11",
            },
          ],
        },
      ],
    },
  ];

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "First Steps",
      description: "Complete your first lesson",
      icon: <Star className="w-6 h-6" />,
      earned: true,
      earnedDate: "2024-01-15",
      rarity: "common",
    },
    {
      id: "2",
      title: "Speaking Master",
      description: "Complete 20 speaking exercises",
      icon: <MessageSquare className="w-6 h-6" />,
      earned: true,
      earnedDate: "2024-01-20",
      rarity: "rare",
    },
    {
      id: "3",
      title: "Module Champion",
      description: "Complete an entire module with 90+ average",
      icon: <Trophy className="w-6 h-6" />,
      earned: true,
      earnedDate: "2024-01-22",
      rarity: "epic",
    },
  ];

  const selectedCourseData =
    courses.find((c) => c.id === selectedCourse) || courses[0];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-500";
      case "rare":
        return "bg-blue-500";
      case "epic":
        return "bg-purple-500";
      case "legendary":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="w-4 h-4" />;
      case "exercise":
        return <PenTool className="w-4 h-4" />;
      case "quiz":
        return <FileText className="w-4 h-4" />;
      case "speaking":
        return <Headphones className="w-4 h-4" />;
      default:
        return <Book className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "current":
        return "text-orange-600 bg-orange-100";
      case "locked":
        return "text-gray-400 bg-gray-100";
      default:
        return "text-gray-400 bg-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="gradient-bg rounded-2xl p-8 glass-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Course Progress 📚
            </h1>
            <p className="text-gray-600 text-lg">
              Track your learning journey and achievements
            </p>
          </div>
          <div className="floating-element">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => setSelectedCourse(course.id)}
            className={`glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 ${
              selectedCourse === course.id
                ? "ring-2 ring-orange-500 bg-orange-50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {course.description}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.level === "Beginner"
                        ? "bg-green-100 text-green-700"
                        : course.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {course.level}
                  </span>
                  <span className="text-gray-500">
                    with {course.instructor}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">
                  {course.progress}%
                </div>
                <div className="text-sm text-gray-500">
                  {course.completedHours}h / {course.totalHours}h
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            {course.nextClass && (
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Next class:{" "}
                {new Date(course.nextClass).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detailed Progress */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Modules & Lessons */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Course Modules</h2>

          {selectedCourseData.modules.map((module) => (
            <div key={module.id} className="glass-card rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {module.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>
                      {module.completedLessons}/{module.totalLessons} lessons
                    </span>
                    <span>~{module.estimatedTime}h</span>
                  </div>
                </div>
                <div className="flex items-center">
                  {module.unlocked ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Module Progress */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                  style={{
                    width: `${
                      (module.completedLessons / module.totalLessons) * 100
                    }%`,
                  }}
                ></div>
              </div>

              {/* Lessons */}
              {module.lessons.length > 0 && (
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`lesson-item flex items-center justify-between p-3 rounded-lg ${
                        lesson.status === "locked" ? "opacity-50" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(
                            lesson.status
                          )}`}
                        >
                          {lesson.status === "completed" ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : lesson.status === "current" ? (
                            <PlayCircle className="w-4 h-4" />
                          ) : (
                            <Lock className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">
                            {lesson.title}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center space-x-2">
                            {getLessonIcon(lesson.type)}
                            <span>{lesson.duration} min</span>
                            {lesson.type === "speaking" && (
                              <span className="text-orange-600">
                                • Speaking
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {lesson.score && (
                        <div className="text-right">
                          <div
                            className={`text-lg font-bold ${
                              lesson.score >= 90
                                ? "text-green-600"
                                : lesson.score >= 80
                                ? "text-yellow-600"
                                : "text-red-600"
                            }`}
                          >
                            {lesson.score}%
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats & Achievements */}
        <div className="space-y-6">
          {/* Overall Stats */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Learning Stats
            </h3>

            {/* Circular Progress */}
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#d88755"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 50 * (1 - selectedCourseData.progress / 100)
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {selectedCourseData.progress}%
                    </div>
                    <div className="text-sm text-gray-500">Complete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Hours</span>
                <span className="font-semibold">
                  {selectedCourseData.completedHours}h
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Score</span>
                <span className="font-semibold text-green-600">89%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Study Streak</span>
                <span className="font-semibold text-orange-600">
                  12 days 🔥
                </span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`achievement-card p-3 rounded-lg border ${
                    achievement.earned
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200"
                      : "bg-gray-50 border-gray-200 opacity-60"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                        achievement.earned
                          ? getRarityColor(achievement.rarity)
                          : "bg-gray-400"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.description}
                      </div>
                      {achievement.earnedDate && (
                        <div className="text-xs text-gray-500 mt-1">
                          Earned:{" "}
                          {new Date(achievement.earnedDate).toLocaleDateString(
                            "id-ID"
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
              <div className="flex items-center space-x-3">
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

        <div className="flex relative">
          {/* Sidebar */}
          <aside className="w-64 md:w-64 w-0 md:block hidden bg-white shadow-lg h-[calc(100vh-80px)] sticky top-20 transition-all duration-300">
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
            {activeMenu === "overview" && (
              <>
                {/* Welcome Section */}
                <div className="mb-8">
                  <div className="gradient-bg rounded-2xl p-8 glass-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                          Selamat datang, {userName}! 👋
                        </h1>
                        <p className="text-gray-600 text-lg">
                          Siap untuk meningkatkan kemampuan bahasa Inggris Anda
                          hari ini?
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
                    <button
                      onClick={() => setActiveMenu("tutors")}
                      className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                    >
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
                              {tutor.courseTopics
                                .slice(0, 2)
                                .map((topic, idx) => (
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
                  <div className="glass-card rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition-all duration-300">
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

                  <div
                    className="glass-card rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setActiveMenu("schedule")}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          Schedule Class
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Book your next session
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          Ask Questions
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Get help from tutors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeMenu === "progress" && <CourseProgress />}

            {activeMenu === "schedule" && (
              <div className="text-center py-20">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Schedule Coming Soon
                </h2>
                <p className="text-gray-600">
                  This feature is under development
                </p>
              </div>
            )}

            {activeMenu === "materials" && (
              <div className="text-center py-20">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Materials Coming Soon
                </h2>
                <p className="text-gray-600">
                  This feature is under development
                </p>
              </div>
            )}

            {activeMenu === "tutors" && (
              <div className="text-center py-20">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Find Tutors Coming Soon
                </h2>
                <p className="text-gray-600">
                  This feature is under development
                </p>
              </div>
            )}

            {activeMenu === "settings" && (
              <div className="text-center py-20">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Settings Coming Soon
                </h2>
                <p className="text-gray-600">
                  This feature is under development
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}