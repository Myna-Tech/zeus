"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Star,
  Globe,
  Clock,
  CheckCircle,
  Play,
  MessageCircle,
  Award,
  Target,
} from "lucide-react";

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
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo-myna.png"
                  alt="Myna Logo"
                  width={48}
                  height={48}
                  className="filter brightness-0 invert"
                />
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
                Daftar Sekarang
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
                    <Trophy className="w-4 h-4 text-orange-700 mr-2" />
                    <span className="text-sm font-medium text-orange-800">
                      #1 Kursus Bahasa Inggris untuk Professional
                    </span>
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                    Kuasai Bahasa Inggris,
                    <span className="block" style={{ color: "#D88755" }}>
                      Raih Masa Depan Cemerlang
                    </span>
                  </h1>

                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Kursus bahasa Inggris privat yang dirancang khusus untuk
                    mahasiswa dan pekerja Indonesia. Tingkatkan karir dan
                    peluang studi dengan metode pembelajaran yang efektif dan
                    menyenangkan.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 hover-scale flex items-center justify-center"
                      style={{ backgroundColor: "#D88755" }}
                    >
                      Mulai Belajar Sekarang
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-lg text-lg font-semibold text-gray-700 border-2 border-gray-300 hover:border-orange-400 transition-all duration-300 flex items-center justify-center">
                      <Play className="mr-2 w-5 h-5" />
                      Tonton Demo
                    </button>
                  </div>

                  <div className="mt-10 flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">
                        500+
                      </div>
                      <div className="text-gray-600">Siswa Aktif</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">
                        95%
                      </div>
                      <div className="text-gray-600">Tingkat Kepuasan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">
                        2 Tahun
                      </div>
                      <div className="text-gray-600">Pengalaman</div>
                    </div>
                  </div>
                </div>

                <div className="relative animate-[slideInFromRight_1s_ease-out]">
                  <div className="floating-element">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Globe className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Belajar dengan Tutor Berpengalaman
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Metode pembelajaran 1-on-1 yang disesuaikan dengan
                          kebutuhan dan gaya belajar Anda
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
                          Rating 4.9/5 dari 500+ siswa
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
                Program Pembelajaran Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih program yang sesuai dengan tujuan dan level bahasa Inggris
                Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Program for Students */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover-scale">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    English for Students
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Program khusus mahasiswa untuk meningkatkan kemampuan
                    akademik, TOEFL, IELTS, dan persiapan studi lanjut.
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Persiapan TOEFL & IELTS
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Academic Writing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Presentation Skills</span>
                    </li>
                  </ul>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    Rp 300K
                  </div>
                  <div className="text-gray-600 mb-6">/bulan (8 sesi)</div>
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    Pilih Program
                  </button>
                </div>
              </div>

              {/* Program for Workers */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover-scale border-2 border-orange-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    PALING POPULER
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    English for Professionals
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Program untuk pekerja yang ingin meningkatkan karir dengan
                    kemampuan bahasa Inggris bisnis yang mumpuni.
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Business Communication
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Meeting & Negotiation
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Email Writing</span>
                    </li>
                  </ul>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    Rp 450K
                  </div>
                  <div className="text-gray-600 mb-6">/bulan (8 sesi)</div>
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    Pilih Program
                  </button>
                </div>
              </div>

              {/* Intensive Program */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover-scale">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Intensive Program
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Program intensif untuk yang ingin hasil cepat dengan
                    pembelajaran harian dan target spesifik.
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Daily 1-hour Sessions
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Customized Curriculum
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Progress Tracking</span>
                    </li>
                  </ul>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    Rp 800K
                  </div>
                  <div className="text-gray-600 mb-6">/bulan (20 sesi)</div>
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ backgroundColor: "#D88755" }}
                  >
                    Pilih Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="keunggulan" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Mengapa Memilih Myna-English?
              </h2>
              <p className="text-xl text-gray-600">
                Keunggulan yang membuat kami berbeda dari yang lain
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Pembelajaran 1-on-1
                </h3>
                <p className="text-gray-600">
                  Fokus penuh pada kebutuhan belajar personal Anda dengan tutor
                  berpengalaman
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Jadwal Fleksibel
                </h3>
                <p className="text-gray-600">
                  Sesuaikan jadwal belajar dengan aktivitas kuliah atau kerja
                  Anda
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tutor Bersertifikat
                </h3>
                <p className="text-gray-600">
                  Instruktur berpengalaman dengan sertifikasi internasional dan
                  track record terbukti
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Support 24/7
                </h3>
                <p className="text-gray-600">
                  Dapatkan bantuan kapan saja melalui chat, email, atau telepon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimoni" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Apa Kata Siswa Kami?
              </h2>
              <p className="text-xl text-gray-600">
                Dengarkan pengalaman mereka yang sudah merasakan manfaatnya
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
                  &quot;Berkat Myna-English, saya berhasil dapat beasiswa S2 di
                  Australia. IELTS score saya naik dari 6.0 ke 7.5 dalam 3
                  bulan!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">SA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Sari Andini
                    </div>
                    <div className="text-gray-600 text-sm">Mahasiswa UI</div>
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
                  &quot;Setelah 6 bulan belajar di Myna-English, akhirnya saya
                  promosi jadi Project Manager. Confidence speaking saya
                  meningkat drastis!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">RF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Rizki Fadillah
                    </div>
                    <div className="text-gray-600 text-sm">
                      Software Engineer
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
                  &quot;Metode pengajarannya sangat praktis dan aplikatif.
                  Sekarang saya sudah berani presentasi dalam bahasa Inggris di
                  kantor!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">DN</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Dina Marlina
                    </div>
                    <div className="text-gray-600 text-sm">
                      Marketing Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="gradient-bg">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Siap Meningkatkan Kemampuan Bahasa Inggris Anda?
              </h2>
              <p className="text-xl text-gray-700 mb-10">
                Bergabunglah dengan ratusan siswa yang sudah merasakan
                manfaatnya. Dapatkan konsultasi gratis untuk menentukan program
                yang tepat untuk Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-10 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 hover-scale"
                  style={{ backgroundColor: "#D88755" }}
                >
                  Konsultasi Gratis
                </button>
                <button className="px-10 py-4 rounded-lg text-lg font-semibold text-gray-800 border-2 border-gray-300 bg-white hover:border-orange-400 transition-all duration-300">
                  WhatsApp Kami
                </button>
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
                  <Image
                    src="/logo-myna.png"
                    alt="Myna Logo"
                    width={48}
                    height={48}
                    className="filter brightness-0 invert"
                  />
                  <div className="text-2xl font-bold">
                    <span style={{ color: "#D88755" }}>Myna</span>-English
                  </div>
                </div>
                <p className="text-gray-400">
                  Kursus bahasa Inggris privat terbaik untuk mahasiswa dan
                  pekerja Indonesia.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Program</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>English for Students</li>
                  <li>English for Professionals</li>
                  <li>Intensive Program</li>
                  <li>TOEFL/IELTS Preparation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Pembelajaran 1-on-1</li>
                  <li>Konsultasi Gratis</li>
                  <li>Flexible Schedule</li>
                  <li>Progress Tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 +62 812-3456-7890</li>
                  <li>📧 info@myna-english.com</li>
                  <li>📍 Jakarta, Indonesia</li>
                  <li>🕒 Mon-Fri 9AM-6PM</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Myna-English. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
