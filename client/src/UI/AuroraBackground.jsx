const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Violet blob */}
      <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-violet/20 blur-3xl animate-float" />

      {/* Fuchsia blob */}
      <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia/20 blur-3xl animate-float-delayed" />

      {/* Info blob */}
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-info/15 blur-3xl animate-float-slow" />
    </div>
  );
};

export default AuroraBackground;
