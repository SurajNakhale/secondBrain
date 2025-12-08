import { useNavigate } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative z-20 flex items-center justify-between py-4 px-6 md:px-12 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div 
                className="flex items-center gap-2 group cursor-pointer"
                onClick={() => navigate("/")}
            >
                <Brain className="h-7 w-7 text-blue-800 group-hover:scale-110 transition-transform" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    SecondBrain
                </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#features" className="hover:text-blue-800 transition-colors">Features</a>
                <a href="#about" className="hover:text-blue-800 transition-colors">About</a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3">
                <button 
                    onClick={() => navigate("/signin")}
                    className="px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-50 rounded-lg transition-all"
                >
                    Sign in
                </button>
                <button 
                    onClick={() => navigate("/signup")}
                    className="px-4 py-2 text-sm font-medium bg-blue-800 text-white rounded-lg hover:bg-blue-900 hover:shadow-lg transition-all transform hover:scale-105"
                >
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-600" />
                ) : (
                    <Menu className="h-6 w-6 text-gray-600" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
                    <div className="flex flex-col gap-4 p-6">
                        <a 
                            href="#features" 
                            className="text-sm font-medium hover:text-blue-800 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a 
                            href="#about" 
                            className="text-sm font-medium hover:text-blue-800 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <button 
                            onClick={() => {
                                navigate("/signin");
                                setIsMenuOpen(false);
                            }}
                            className="px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-50 rounded-lg transition-all text-left"
                        >
                            Sign in
                        </button>
                        <button 
                            onClick={() => {
                                navigate("/signup");
                                setIsMenuOpen(false);
                            }}
                            className="px-4 py-2 text-sm font-medium bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}