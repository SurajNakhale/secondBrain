import { Brain } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-gray-200 bg-white/80 backdrop-blur-sm py-8 px-6 text-center mt-20">
            <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-blue-800" />
                <span className="font-semibold text-gray-800">SecondBrain</span>
            </div>
            <p className="text-sm text-gray-500">
                © 2025 SecondBrain. Built with <span className="text-blue-800 font-bold"> love </span> to help you remember everything.
            </p>
        </footer>
    );
}