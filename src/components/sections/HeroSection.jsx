const HeroSection = () => {
  return (
    <section className="relative w-full aspect-video md:aspect-auto md:h-[980px] bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source
          src="https://brvllgovveaxteagqcti.supabase.co/storage/v1/object/public/kingviet-assets/0607.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
