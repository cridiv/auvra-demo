import React from 'react';
import { ArrowRight, X, Mail } from 'lucide-react';

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, onClose }) => {
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleModalClick}
    >
      <div className="bg-[#0a0a0a] border border-purple-600/30 rounded-2xl p-6 sm:p-8 w-full max-w-sm mx-auto shadow-2xl transform transition-all duration-300 scale-100 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-center items-center mb-6 relative">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Log In or Sign Up
          </h2>
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 sm:top-0 sm:right-0 p-2 rounded-lg hover:bg-purple-600/20 transition-colors duration-200"
          >
            <X size={20} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <form className="space-y-4">
          {/* Continue with Email Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#1a1a1a] border border-purple-600/30 rounded-xl text-white font-medium transition-all duration-300 hover:bg-[#252525] hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 group"
          >
            <Mail size={18} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 flex-shrink-0" />
            <span className="flex-1 text-sm sm:text-base">Continue with Email</span>
            <ArrowRight size={16} className="text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </button>

          {/* X (Twitter) Auth Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#1a1a1a] border border-purple-600/30 rounded-xl text-white font-medium transition-all duration-300 hover:bg-[#252525] hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="flex-1 text-sm sm:text-base">Continue with X</span>
            <ArrowRight size={16} className="text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </button>

          {/* Google Auth Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#1a1a1a] border border-purple-600/30 rounded-xl text-white font-medium transition-all duration-300 hover:bg-[#252525] hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="flex-1 text-sm sm:text-base">Continue with Google</span>
            <ArrowRight size={16} className="text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </button>

          {/* Passkey Option */}
          <div className="pt-4 sm:pt-6 border-t border-purple-600/20">
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-3 px-4 sm:px-6 py-2 sm:py-3 text-purple-400 font-medium transition-all duration-300 hover:text-purple-300 hover:bg-purple-600/10 rounded-xl border border-transparent hover:border-purple-600/30 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
              <span className="text-sm sm:text-base">I have a passkey</span>
            </button>
          </div>
        </form>

        <div className="text-center mt-4 sm:mt-6">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            By continuing, you agree to our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;