import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { FloatingIcons } from "./FloatingIcons";

export function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative z-10 text-center py-20 md:py-32 px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4 text-blue-800" />
                <span className="text-sm font-medium text-blue-800">Your Digital Knowledge Hub</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
                Your Second Brain for
                <br />
                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Everything You Discover
                </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up-delay">
                Save videos, articles, tweets, and documents in one beautiful place. 
                Never lose track of important content again.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up-delay-2">
                <button 
                    onClick={() => navigate("/signup")}
                    className="px-8 py-3 text-base font-semibold bg-blue-800 text-white rounded-lg hover:bg-blue-900 hover:shadow-xl transition-all transform hover:scale-105"
                >
                    Start for Free
                </button>
                <button 
                    className="px-8 py-3 text-base font-semibold border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-blue-50 transition-all"
                >
                    Watch Demo
                </button>
            </div>
            <FloatingIcons />
        </section>
    );
}