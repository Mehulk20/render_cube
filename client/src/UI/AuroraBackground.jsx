const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Purple Blob */}
      <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl animate-float" />

      {/* Pink Blob */}
      <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl animate-float-delayed" />

      {/* Blue Blob */}
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl animate-float-slow" />
    </div>
  );
};

export default AuroraBackground;
