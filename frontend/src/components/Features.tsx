import { Youtube, FileText, Share2, Link2, Zap, Shield } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: <Youtube className="h-6 w-6" />,
            title: "Save Videos",
            desc: "Capture YouTube videos and courses you want to watch later.",
            gradient: "from-red-500/10 to-orange-500/10",
            iconColor: "text-red-500"
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Store Documents",
            desc: "Keep all your important documents and notes organized.",
            gradient: "from-blue-500/10 to-cyan-500/10",
            iconColor: "text-blue-500"
        },
        {
            icon: <Link2 className="h-6 w-6" />,
            title: "Bookmark Links",
            desc: "Never lose track of interesting articles and resources.",
            gradient: "from-purple-500/10 to-pink-500/10",
            iconColor: "text-purple-500"
        },
        {
            icon: <Share2 className="h-6 w-6" />,
            title: "Share Your Brain",
            desc: "Share your curated collections with anyone, anywhere.",
            gradient: "from-green-500/10 to-emerald-500/10",
            iconColor: "text-green-500"
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Quick Access",
            desc: "Find anything instantly with powerful search.",
            gradient: "from-yellow-500/10 to-amber-500/10",
            iconColor: "text-yellow-600"
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Secure & Private",
            desc: "Your data is encrypted and belongs only to you.",
            gradient: "from-indigo-500/10 to-blue-500/10",
            iconColor: "text-indigo-500"
        },
    ];

    return (
        <section id="features" className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Everything you need
                </h2>
                <p className="text-gray-600 text-lg">
                    Built to help you organize and remember what matters
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Large Card - Spans 2 columns */}
                <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[0].gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <div className={features[0].iconColor}>
                            {features[0].icon}
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{features[0].title}</h3>
                    <p className="text-gray-600">{features[0].desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more →
                    </div>
                </div>

                {/* Small Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[1].gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <div className={features[1].iconColor}>
                            {features[1].icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{features[1].title}</h3>
                    <p className="text-gray-600 text-sm">{features[1].desc}</p>
                </div>

                {/* Small Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[2].gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <div className={features[2].iconColor}>
                            {features[2].icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{features[2].title}</h3>
                    <p className="text-gray-600 text-sm">{features[2].desc}</p>
                </div>

                {/* Large Card - Spans 2 columns */}
                <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[3].gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <div className={features[3].iconColor}>
                            {features[3].icon}
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{features[3].title}</h3>
                    <p className="text-gray-600">{features[3].desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more →
                    </div>
                </div>

                {/* Medium Card */}
                {/* <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[4].gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <div className={features[4].iconColor}>
                            {features[4].icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{features[4].title}</h3>
                    <p className="text-gray-600 text-sm">{features[4].desc}</p>
                </div> */}

                {/* Full Width Card */}
                {/* <div className="md:col-span-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {features[5].icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{features[5].title}</h3>
                            <p className="text-purple-100">{features[5].desc}</p>
                        </div>
                        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap">
                            Learn About Security →
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
}