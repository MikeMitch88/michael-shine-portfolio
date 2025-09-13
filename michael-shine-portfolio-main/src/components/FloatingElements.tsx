const FloatingElements = () => {
  return (
    <>
      {/* Floating Circles */}
      <div className="floating-circle w-20 h-20 top-20 left-10 opacity-30" style={{ animationDelay: "0s" }} />
      <div className="floating-circle floating-circle-cyan w-12 h-12 top-40 right-20 opacity-40" style={{ animationDelay: "2s" }} />
      <div className="floating-circle w-16 h-16 bottom-32 left-1/4 opacity-25" style={{ animationDelay: "4s" }} />
      <div className="floating-circle floating-circle-cyan w-8 h-8 top-1/3 right-1/3 opacity-50" style={{ animationDelay: "1s" }} />
      <div className="floating-circle w-24 h-24 bottom-20 right-10 opacity-20" style={{ animationDelay: "3s" }} />
      
      {/* Static Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-xl" />
      </div>
    </>
  );
};

export default FloatingElements;