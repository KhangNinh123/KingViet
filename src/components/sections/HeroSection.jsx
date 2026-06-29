import homepageVideo from "../../assets/videos/0607.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[780px] bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={homepageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
