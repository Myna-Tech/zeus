"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Trophy,
  Star,
  Globe,
  Clock,
  CheckCircle,
  Play,
  MessageCircle,
  Award,
  Target,
  Video,
  Mic,
  GraduationCap,
  Coffee,
  Zap,
} from "lucide-react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <Zap className="w-6 h-6 mr-2 text-yellow-300" />
          <span className="text-xl font-bold">PROMO TERBATAS!</span>
          <Zap className="w-6 h-6 ml-2 text-yellow-300" />
        </div>
        <p className="text-red-100 mb-4">Diskon hingga 50% berakhir dalam:</p>
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-sm text-red-100">Hari</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm text-red-100">Jam</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm text-red-100">Menit</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm text-red-100">Detik</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MynaEnglishLanding() {
  return (
    <>
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
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

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div> */}
                <div className="text-2xl font-bold text-gray-800">
                  <span style={{ color: "#D88755" }}>Myna</span>-English
                </div>
              </div>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#program"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Program
                </a>
                <a
                  href="#keunggulan"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Keunggulan
                </a>
                <a
                  href="#testimoni"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Testimoni
                </a>
                <a
                  href="#tentang"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Tentang Kami
                </a>
              </div>
              <button
                className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover-scale"
                style={{ backgroundColor: "#D88755" }}
              >
                Mulai Belajar
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="gradient-bg">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-[slideInFromLeft_1s_ease-out]">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <Mic className="w-4 h-4 text-orange-700 mr-2" />
                    <span className="text-sm font-medium text-orange-800">
                      #1 Kursus Speaking & Grammar Online
                    </span>
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                    Kuasai <span style={{ color: "#D88755" }}>Speaking</span> &
                    <span className="block" style={{ color: "#D88755" }}>
                      Grammar
                    </span>
                    Bahasa Inggris
                  </h1>

                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Kursus bahasa Inggris{" "}
                    <strong>Private Online 1-on-1 via Zoom</strong> yang fokus
                    pada peningkatan kemampuan berbicara dan pemahaman tata
                    bahasa. Tingkatkan skill Academic English dan Daily
                    Conversation Anda bersama tutor berpengalaman.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 hover-scale flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: "#D88755" }}
                    >
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                        50% OFF
                      </div>
                      <Video className="mr-2 w-5 h-5" />
                      Mulai Kelas Online
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-lg text-lg font-semibold text-gray-700 border-2 border-gray-300 hover:border-orange-400 transition-all duration-300 flex items-center justify-center">
                      <Play className="mr-2 w-5 h-5" />
                      Demo Speaking Class
                    </button>
                  </div>

                  <div className="mt-10 flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">
                        300+
                      </div>
                      <div className="text-gray-600">Siswa Speaking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">
                        98%
                      </div>
                      <div className="text-gray-600">Peningkatan Fluency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">
                        1-on-1
                      </div>
                      <div className="text-gray-600">Private Online</div>
                    </div>
                  </div>
                </div>

                <div className="relative animate-[slideInFromRight_1s_ease-out]">
                  <div className="floating-element">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Video className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Kelas Private 1-on-1 via Zoom
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Latihan speaking intensif dengan feedback langsung
                          untuk meningkatkan fluency dan confidence Anda
                        </p>
                        <div className="flex justify-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Rating 4.9/5 untuk Speaking Progress
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Program Speaking & Grammar Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dua fokus utama pembelajaran untuk mengasah kemampuan berbicara
                dan tata bahasa Anda
              </p>
            </div>

            {/* Limited Time Promo Banner with Countdown */}
            <div className="max-w-4xl mx-auto mb-12">
              <CountdownTimer />
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Academic English Program */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover-scale border-2 border-blue-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Academic English Speaking
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Fokus pada kemampuan berbicara untuk kebutuhan akademik,
                    interview, dan presentasi formal
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-800 mb-4 text-left">
                      Yang Akan Anda Pelajari:
                    </h4>
                    <ul className="text-left space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Interview Practice:</strong> Latihan wawancara
                          untuk masuk universitas dan beasiswa
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Presentation Skills:</strong> Teknik
                          presentasi tugas dan project akademik
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Academic Vocabulary:</strong> Kosakata formal
                          untuk diskusi akademik
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Grammar Correction:</strong> Perbaikan tata
                          bahasa dalam konteks formal
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="text-sm text-blue-800 mb-2">
                      Pilihan Paket - PROMO TERBATAS!
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">4 Pertemuan</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">
                            Rp 1,6 Juta
                          </div>
                          <div className="font-bold text-blue-800 text-lg">
                            Rp 800K
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">8 Pertemuan</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">
                            Rp 3 Juta
                          </div>
                          <div className="font-bold text-blue-800 text-lg">
                            Rp 1,5 Juta
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-blue-600 mt-2">
                      *1 jam/pertemuan, rekomendasi 1x/minggu
                    </div>
                    <div className="bg-red-500 text-white text-center py-1 rounded-lg mt-2 text-sm font-semibold">
                      🔥 HEMAT HINGGA 50%!
                    </div>
                  </div>

                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    Pilih Academic English
                  </button>
                </div>
              </div>

              {/* Daily Conversation Program */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover-scale border-2 border-green-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    PALING POPULER
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Coffee className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Daily English Conversation
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Latihan percakapan sehari-hari untuk meningkatkan fluency
                    dan confidence berbicara
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-800 mb-4 text-left">
                      Yang Akan Anda Pelajari:
                    </h4>
                    <ul className="text-left space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Casual Conversation:</strong> Percakapan
                          santai untuk situasi sehari-hari
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Fluency Training:</strong> Latihan berbicara
                          lancar tanpa jeda panjang
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Pronunciation Fix:</strong> Perbaikan
                          pelafalan dan intonasi natural
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Grammar in Speaking:</strong> Aplikasi grammar
                          yang benar saat berbicara
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="text-sm text-green-800 mb-2">
                      Pilihan Paket - PROMO TERBATAS!
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">4 Pertemuan</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">
                            Rp 1,6 Juta
                          </div>
                          <div className="font-bold text-green-800 text-lg">
                            Rp 800K
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">8 Pertemuan</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">
                            Rp 3 Juta
                          </div>
                          <div className="font-bold text-green-800 text-lg">
                            Rp 1,5 Juta
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 mt-2">
                      *1 jam/pertemuan, rekomendasi 1x/minggu
                    </div>
                    <div className="bg-red-500 text-white text-center py-1 rounded-lg mt-2 text-sm font-semibold">
                      🔥 HEMAT HINGGA 50%!
                    </div>
                  </div>

                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    Pilih Daily Conversation
                  </button>
                </div>
              </div>
            </div>

            {/* Personalized Study Plan */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    ⭐ PERSONALIZED STUDY PLAN - PROMO SPESIAL!
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Paket Disesuaikan Kebutuhan Anda
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Sesuaikan jumlah pertemuan, durasi, dan fokus pembelajaran
                    berdasarkan target spesifik Anda. Cocok untuk persiapan
                    ujian, interview, atau kebutuhan khusus lainnya.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <p className="text-orange-800 font-semibold text-sm mb-2">
                      💡 Konsultasi gratis untuk menentukan paket yang tepat
                      sesuai budget dan target Anda
                    </p>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                      🎁 BONUS: Free assessment + study roadmap senilai Rp 300K!
                    </div>
                  </div>
                  <button
                    className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover-scale relative"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    Konsultasi Paket Custom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Myna-English Section */}
        <section id="keunggulan" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Kenapa Perlu Belajar di Myna-English?
              </h2>
              <p className="text-xl text-gray-600">
                5 Keunggulan yang membuat pembelajaran di Myna-English berbeda
                dan efektif
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover-scale">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Kelas Live dan Interaktif
                    </h3>
                    <p className="text-gray-600">
                      Kelas dirancang agar siswa dapat merasa nyaman dan percaya
                      diri untuk berbicara dalam Bahasa Inggris dengan suasana
                      yang mendukung dan tidak menghakimi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover-scale">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Tutor Berpengalaman
                    </h3>
                    <p className="text-gray-600">
                      Siswa akan diajarkan oleh tutor yang berpengalaman untuk
                      dapat membantu siswa meningkatkan skill berbicara dalam
                      Bahasa Inggris dengan metode yang terbukti efektif.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover-scale">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Berfokus Pada Pemahaman Konsep dan Berpikiran Kritis
                    </h3>
                    <p className="text-gray-600">
                      Sistem belajar menggunakan metode seperti di luar negeri
                      yang memfokuskan pada pemahaman konsep dan berpikiran
                      kritis, agar siswa dapat memahami materi dengan mudah dan
                      efektif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover-scale">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Materi Belajar Menyesuaikan Kebutuhan Siswa
                    </h3>
                    <p className="text-gray-600">
                      Personalized Study Plan - Materi belajar dapat disesuaikan
                      dengan kebutuhan spesifik dari siswa untuk hasil
                      pembelajaran yang optimal dan sesuai target.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover-scale">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Kelas Online Dengan Jadwal Fleksibel
                    </h3>
                    <p className="text-gray-600">
                      Kelas diadakan dalam Private Online 1-on-1 (via Zoom)
                      dengan menyesuaikan jadwal availability siswa agar
                      memiliki fleksibilitas dalam hal lokasi dan waktu belajar.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Bonus: Kelas Offline Available!
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tersedia juga kelas grouping offline (min. 4 orang) dengan
                      tutor yang datang langsung ke lokasi Anda!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimoni" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Transformasi Speaking Siswa Kami
              </h2>
              <p className="text-xl text-gray-600">
                Bukti nyata peningkatan kemampuan berbicara dari siswa
                Myna-English
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;Dulu saya grogi banget presentasi dalam bahasa Inggris.
                  Setelah 3 bulan belajar Academic English di Myna, sekarang
                  saya bisa interview beasiswa dengan percaya diri!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">RA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Rina Amelia
                    </div>
                    <div className="text-gray-600 text-sm">
                      Mahasiswa S1 - Academic English
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;Pronunciation saya dulunya berantakan. Tutor
                  Myna-English sabar banget ngajarin sampai speaking saya
                  natural. Sekarang teman kantor bilang accent saya udah
                  bagus!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">BH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Budi Hartono
                    </div>
                    <div className="text-gray-600 text-sm">
                      Karyawan IT - Daily Conversation
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;Ambil paket kombinasi 6 bulan dan hasilnya luar biasa!
                  Grammar saya fix, speaking jadi lancar. Worth every penny
                  untuk investasi skill!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">LM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Lisa Maulida
                    </div>
                    <div className="text-gray-600 text-sm">
                      Teacher - Paket Kombinasi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Method Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Metode Pembelajaran Speaking Kami
              </h2>
              <p className="text-xl text-gray-600">
                Pendekatan sistematis untuk membuat Anda berbicara dengan lancar
                dan percaya diri
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Assessment Awal
                      </h3>
                      <p className="text-gray-600">
                        Evaluasi level speaking dan identifikasi area yang perlu
                        diperbaiki
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Practice Intensif
                      </h3>
                      <p className="text-gray-600">
                        Latihan speaking dengan scenario real-life dan feedback
                        langsung
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Grammar Integration
                      </h3>
                      <p className="text-gray-600">
                        Perbaikan grammar secara natural dalam konteks
                        percakapan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Progress Tracking
                      </h3>
                      <p className="text-gray-600">
                        Monitoring kemajuan dan penyesuaian materi sesuai
                        perkembangan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-element">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Hasil dalam 30 Hari
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Rasakan peningkatan confidence dan fluency speaking Anda
                      dalam sebulan pertama
                    </p>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-orange-800 font-semibold">
                        &quot;90% siswa merasakan peningkatan signifikan dalam 4
                        minggu pertama&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Pertanyaan Yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-600">
                Semua yang perlu Anda ketahui tentang pembelajaran di
                Myna-English
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    🎯 Apakah kursus di Myna-English bisa untuk segala usia?
                  </h3>
                  <p className="text-gray-600">
                    Kursus ini ditujukan khusus untuk siswa dengan usia di atas
                    17 tahun, sehingga materi dan metode pembelajaran sudah
                    disesuaikan untuk dewasa muda dan profesional.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    💻 Bagaimana proses belajar di kelas Private Online 1-on-1?
                  </h3>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Untuk siswa yang memiliki kebutuhan belajar spesifik dan
                      tertarik belajar secara privat:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li>Isi Contact Form di halaman Kontak Kami</li>
                      <li>
                        Lengkapi Nama, Email, WhatsApp, dan kebutuhan belajar
                        (Academic English/Daily Conversation)
                      </li>
                      <li>Tim Myna-English akan menghubungi untuk follow up</li>
                      <li>Jadwal disesuaikan dengan availability siswa</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    🏢 Apakah Myna-English menawarkan belajar secara Offline?
                  </h3>
                  <div className="text-gray-600">
                    <p className="mb-2">
                      <strong>Ya (based on request)</strong> - Tersedia kelas
                      grouping offline dengan ketentuan:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Minimum 4 orang dalam grup</li>
                      <li>Tutor akan datang ke lokasi siswa</li>
                      <li>Isi Contact Form di halaman Kelas Offline</li>
                      <li>Biaya berdasarkan kesepakatan kedua belah pihak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    🎙️ Apakah kursus di Myna-English bisa untuk belajar selain
                    Speaking?
                  </h3>
                  <p className="text-gray-600">
                    Untuk saat ini kami berfokus mengajarkan skill Speaking.
                    Namun, jika Anda memiliki kebutuhan TOEFL/IELTS atau kursus
                    lainnya, silakan informasikan ke tim kami melalui Contact
                    Form untuk bantuan lebih lanjut.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    🆓 Apakah saya dapat Coba Gratis terlebih dahulu?
                  </h3>
                  <div className="text-gray-600">
                    <p className="mb-2">
                      <strong>Ya!</strong> Tersedia trial class gratis (60
                      menit):
                    </p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li>
                        Isi Contact Form sesuai jenis kelas yang diinginkan
                      </li>
                      <li>
                        Tim Myna-English akan menghubungi untuk sesi trial
                      </li>
                      <li>
                        Setelah trial, jika tertarik lanjut ke kursus berbayar
                      </li>
                      <li>Book jadwal dan lakukan pembayaran</li>
                      <li>Siap belajar di Myna-English!</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    📞 Bagaimana cara menghubungi tim Myna-English?
                  </h3>
                  <p className="text-gray-600">
                    Siswa dapat melengkapi data diri melalui Contact Form di
                    halaman Kontak Kami dengan wajib melengkapi Nama Lengkap,
                    Email Aktif, Nomor WhatsApp, dan Pesan/Pertanyaan. Tim kami
                    akan menghubungi untuk follow up lebih lanjut.
                  </p>
                </div>
              </div>
            </div>

            {/* Price Summary Box */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-red-700 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    PROMO!
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  🔥 FLASH SALE - Harga Kursus
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-2">4 Pertemuan</div>
                    <div className="text-red-100 mb-2 line-through text-sm">
                      Rp 1,6 Juta
                    </div>
                    <div className="text-3xl font-bold">Rp 800K</div>
                    <div className="text-sm text-red-100 mt-2">
                      1 bulan, 1x/minggu
                    </div>
                    <div className="bg-yellow-400 text-red-700 text-xs font-bold px-2 py-1 rounded-full mt-2">
                      HEMAT 50%
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-2">8 Pertemuan</div>
                    <div className="text-red-100 mb-2 line-through text-sm">
                      Rp 3 Juta
                    </div>
                    <div className="text-3xl font-bold">Rp 1,5 Juta</div>
                    <div className="text-sm text-red-100 mt-2">
                      1-2 bulan, 1x/minggu
                    </div>
                    <div className="bg-yellow-400 text-red-700 text-xs font-bold px-2 py-1 rounded-full mt-2">
                      HEMAT 50%
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-2">Custom Plan</div>
                    <div className="text-red-100 mb-2">Sesuai kebutuhan</div>
                    <div className="text-3xl font-bold">Konsultasi</div>
                    <div className="text-sm text-red-100 mt-2">
                      Personalized study plan
                    </div>
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-2">
                      BONUS GRATIS
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-red-100">
                    ⚡ Promo terbatas! Daftar sekarang sebelum kehabisan slot!
                  </p>
                  <p className="text-sm text-red-200 mt-2">
                    *Durasi: 1 jam/pertemuan | **Ada syarat minimum skor TOEFL
                    untuk paket 4 pertemuan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile Section */}
        <section id="tentang" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Meet Our Founder
              </h2>
              <p className="text-xl text-gray-600">
                Belajar langsung dari founder yang berpengalaman internasional
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <Image
                      src="/daniella.jpg"
                      alt="Daniella"
                      width={300}
                      height={300}
                      className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6"
                    />
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Daniella Amyana
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-blue-700 mb-3">
                        Latar Belakang Pendidikan:
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Universitas Indonesia
                            </p>
                            <p className="text-gray-600">
                              Management – S1 Program Double Degree
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Tilburg University, Belanda
                            </p>
                            <p className="text-gray-600">
                              International Business Administration – S1 Program
                              Double Degree
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Coventry University, Inggris
                            </p>
                            <p className="text-gray-600">
                              International Marketing – S2
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="text-xl font-semibold text-orange-700 mb-3">
                        Pengalaman Mengajar:
                      </h4>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            5+
                          </span>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">
                            5 Tahun
                          </p>
                          <p className="text-gray-600">
                            Pengalaman mengajar bahasa Inggris
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                      <p className="text-lg italic">
                        &quot;Dengan pengalaman pendidikan internasional di 3
                        negara, saya memahami betul tantangan berbicara bahasa
                        Inggris untuk orang Indonesia. Myna-English hadir untuk
                        membantu Anda mencapai confidence dan fluency yang
                        diperlukan untuk sukses di kancah global.&quot;
                      </p>
                      <p className="mt-4 font-semibold">
                        - Daniella Amyana, Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="gradient-bg">
            <div className="max-w-4xl mx-auto text-center px-6 relative">
              {/* Floating Promo Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold animate-bounce">
                  🚨 PROMO BERAKHIR DALAM 7 HARI!
                </div>
              </div>

              <div className="pt-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Siap Berbicara Bahasa Inggris dengan Percaya Diri?
                </h2>
                <p className="text-xl text-gray-700 mb-4">
                  Bergabunglah dengan 300+ siswa yang sudah merasakan
                  transformasi kemampuan speaking mereka.
                </p>
                <p className="text-lg text-red-700 font-semibold mb-8">
                  ⚡ Dapatkan trial class gratis + diskon 50% untuk pendaftar
                  minggu ini!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="px-10 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 hover-scale flex items-center justify-center relative"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      HOT!
                    </div>
                    <Video className="mr-2 w-5 h-5" />
                    Trial Class Gratis + Diskon
                  </button>
                  <button className="px-10 py-4 rounded-lg text-lg font-semibold text-gray-800 border-2 border-gray-300 bg-white hover:border-orange-400 transition-all duration-300 flex items-center justify-center">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Kami
                  </button>
                </div>

                <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto">
                  <p className="text-sm text-gray-600 mb-2">
                    * Trial class 60 menit untuk mengenal metode dan tutor kami
                  </p>
                  <p className="text-sm text-red-600 font-semibold">
                    🎁 BONUS: Modul Speaking Guide senilai Rp 200K untuk 50
                    pendaftar pertama!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div> */}
                  <div className="text-2xl font-bold">
                    <span style={{ color: "#D88755" }}>Myna</span>-English
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  Kursus Speaking & Grammar bahasa Inggris terbaik dengan metode
                  Private Online 1-on-1 via Zoom.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/myna_english"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  >
                    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Program Utama</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Academic English Speaking</li>
                  <li>Daily Conversation</li>
                  <li>Grammar Integration</li>
                  <li>Personalized Study Plan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Kelas Private 1-on-1</li>
                  <li>Via Zoom Online</li>
                  <li>Trial Class Gratis (60 menit)</li>
                  <li>Jadwal Fleksibel</li>
                  <li>Kelas Offline (min. 4 orang)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kontak Kami</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp: +62 xxx-yyyy-zzzz</span>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>speak@myna-english.com</span>
                  </div> */}
                  <div className="flex items-center space-x-2">
                    <span>🌐</span>
                    <span>mynaenglish.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Senin-Sabtu 08:00-20:00</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://myna-english.com/kontak-kami"
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Contact Form
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>
                &copy; 2025 Myna-English. Semua hak cipta dilindungi. | Fokus
                Speaking & Grammar sejak 2022
              </p>
              <p className="mt-2 text-sm">
                Khusus untuk usia 17+ | Private Online 1-on-1 via Zoom | Kelas
                Offline tersedia (min. 4 orang)
              </p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button dengan Dialog Animation */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Animated Dialog dengan Auto Hide/Show */}
          <div className="absolute bottom-20 right-0 mb-2 animate-[fadeInOut_4s_infinite]">
            <div className="relative bg-green-50 border border-green-200 rounded-xl shadow-lg px-4 py-3 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-green-800 text-sm font-medium">
                  Ada yang mau ditanyakan? Klik ke sini
                </p>
              </div>

              {/* WhatsApp style tail */}
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-green-50 border-r border-b border-green-200 transform rotate-45"></div>
            </div>
          </div>

          <a
            href="https://wa.me/62858"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover-scale pulse"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087" />
            </svg>
          </a>

          <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </div>
    </>
  );
}