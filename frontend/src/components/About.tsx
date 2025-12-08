import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

export function About() {
    const navigate = useNavigate();

    return (
        <section id="about" className="relative z-10 py-20 px-6 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <BookOpen className="h-4 w-4 text-blue-800" />
                <span className="text-sm font-medium text-blue-800">About SecondBrain</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Personal Knowledge Space
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                SecondBrain is designed to be your digital companion for capturing and organizing 
                everything you learn. From YouTube tutorials to important documents, from inspiring 
                articles to creative ideas — keep it all in one beautiful, searchable place. 
                Share your curated collections with friends, colleagues, or the world.
            </p>

            <button 
                onClick={() => navigate("/signup")}
                className="px-8 py-3 text-base font-semibold bg-blue-800 text-white rounded-lg hover:bg-blue-900 hover:shadow-xl transition-all transform hover:scale-105"
            >
                Start Building Your Brain
            </button>
        </section>
    );
}