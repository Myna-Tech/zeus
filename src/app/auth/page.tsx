"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from "lucide-react";

// Type definitions
interface FormData {
  namaLengkap: string;
  email: string;
  sandi: string;
  konfirmasiSandi: string;
}

interface FormErrors {
  namaLengkap?: string;
  email?: string;
  sandi?: string;
  konfirmasiSandi?: string;
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: "",
    email: "",
    sandi: "",
    konfirmasiSandi: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!isLogin && !formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.sandi) {
      newErrors.sandi = "Sandi wajib diisi";
    } else if (formData.sandi.length < 6) {
      newErrors.sandi = "Sandi minimal 6 karakter";
    }

    if (!isLogin && !formData.konfirmasiSandi) {
      newErrors.konfirmasiSandi = "Konfirmasi sandi wajib diisi";
    } else if (!isLogin && formData.sandi !== formData.konfirmasiSandi) {
      newErrors.konfirmasiSandi = "Konfirmasi sandi tidak sesuai";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Static dummy login
      if (isLogin) {
        if (
          formData.email === "amyanad09@gmail.com" &&
          formData.sandi === "12345678"
        ) {
          // Successful login - redirect to dashboard
          console.log("Login successful!");
          window.location.href = "/dashboard";
        } else {
          // Invalid credentials
          setErrors({
            email: "Email atau sandi tidak valid",
            sandi: "Email atau sandi tidak valid",
          });
        }
      } else {
        // Registration - for demo, just redirect to dashboard
        console.log("Registration successful:", formData);
        window.location.href = "/dashboard";
      }
    }
  };

  const handleGoogleAuth = (): void => {
    // Handle Google authentication
    console.log("Google auth clicked");
    // Add your Google auth logic here
  };

  return (
    <>
      {/* Global styles */}
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

        .auth-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.95);
        }

        .input-focus:focus {
          border-color: #d88755;
          box-shadow: 0 0 0 3px rgba(216, 135, 85, 0.1);
        }

        .btn-primary {
          background: linear-gradient(135deg, #d88755, #c77644);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #c77644, #b66533);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(216, 135, 85, 0.3);
        }

        .google-btn {
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .google-btn:hover {
          border-color: #d88755;
          background-color: #f9fafb;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="min-h-screen gradient-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            {/* <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke beranda
            </Link>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div> */}

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Masuk ke Akun Anda" : "Daftar Sekarang"}
            </h2>
            <p className="text-gray-600">
              {isLogin
                ? "Lanjutkan perjalanan belajar bahasa Inggris Anda"
                : "Mulai perjalanan belajar bahasa Inggris bersama kami"}
            </p>
          </div>

          {/* Auth Card */}
          <div className="auth-card rounded-2xl shadow-2xl p-8">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  isLogin
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Masuk
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isLogin
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Daftar
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Lengkap (Register only) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="namaLengkap"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="namaLengkap"
                      name="namaLengkap"
                      type="text"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg input-focus text-black placeholder-gray-400 ${
                        errors.namaLengkap
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  {errors.namaLengkap && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.namaLengkap}
                    </p>
                  )}
                </div>
              )}

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Alamat Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg input-focus text-black placeholder-gray-400 ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="nama@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="sandi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sandi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="sandi"
                    name="sandi"
                    type={showPassword ? "text" : "password"}
                    value={formData.sandi}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-10 py-3 border rounded-lg input-focus text-black placeholder-gray-400 ${
                      errors.sandi ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Masukkan sandi Anda"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.sandi && (
                  <p className="mt-1 text-sm text-red-600">{errors.sandi}</p>
                )}
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="konfirmasiSandi"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Konfirmasi Sandi
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="konfirmasiSandi"
                      name="konfirmasiSandi"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.konfirmasiSandi}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-10 py-3 border rounded-lg input-focus text-black placeholder-gray-400 ${
                        errors.konfirmasiSandi
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                      placeholder="Konfirmasi sandi Anda"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.konfirmasiSandi && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.konfirmasiSandi}
                    </p>
                  )}
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    className="text-sm text-orange-600 hover:text-orange-500"
                  >
                    Lupa sandi?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary text-white py-3 px-4 rounded-lg font-semibold text-lg"
              >
                {isLogin ? "Masuk Sekarang" : "Daftar Sekarang"}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">atau</span>
                </div>
              </div>
            </div>

            {/* Google Auth */}
            <button
              onClick={handleGoogleAuth}
              className="w-full google-btn bg-white py-3 px-4 rounded-lg font-medium text-gray-700 flex items-center justify-center space-x-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Lanjutkan dengan Google</span>
            </button>

            {/* Benefits Section (Register only) */}
            {!isLogin && (
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <h4 className="text-sm font-semibold text-orange-800 mb-3">
                  Keuntungan bergabung dengan Myna-English:
                </h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    Trial class gratis 60 menit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    Diskon hingga 50% untuk member baru
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    Jadwal fleksibel sesuai availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    Akses ke materi pembelajaran eksklusif
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Dengan mendaftar, Anda menyetujui{" "}
              <Link
                href="/terms"
                className="text-orange-600 hover:text-orange-500"
              >
                Syarat & Ketentuan
              </Link>{" "}
              dan{" "}
              <Link
                href="/privacy"
                className="text-orange-600 hover:text-orange-500"
              >
                Kebijakan Privasi
              </Link>{" "}
              kami.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}