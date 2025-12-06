export const FloatingIcons = () => {
  // Using simple SVG icons
  const icons = [
    { 
      Icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "text-red-500",
      position: "top-1/4 left-1/3",
      delay: "0s"
    },
    { 
      Icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "text-blue-400",
      position: "top-1/3 right-1/3",
      delay: "1s"
    },
    { 
      Icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      color: "text-green-500",
      position: "bottom-1/3 left-1/3",
      delay: "2s"
    },
    { 
      Icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      color: "text-amber-500",
      position: "bottom-1/4 right-1/3",
      delay: "1s"
    },
    { 
      Icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
        </svg>
      ),
      color: "text-purple-500",
      position: "top-1/2 left-1/3",
      delay: "2s"
    },
    { 
      Icon: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        </svg>
      ),
      color: "text-pink-500",
      position: "top-1/2 right-1/3",
      delay: "1s"
    },
  ];

  return (
    <>
      <style>{`
        @keyframes micro-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(3px); }
          50% { transform: translateY(-5px) translateX(-3px); }
          75% { transform: translateY(-10px) translateX(2px); }
        }
        .floating-icon {
          animation: micro-float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {icons.map(({ Icon, color, position, delay }, index) => (
          <div
            key={index}
            className={`floating-icon absolute ${position} ${color} opacity-60`}
            style={{ animationDelay: delay }}
          >
            <Icon />
          </div>
        ))}
        
        {/* Subtle gradient orbs - positioned closer to center */}
        {/* <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-purple-400/5 rounded-full blur-3xl" /> */}
      </div>
    </>
  );
};