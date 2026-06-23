import homepageVideo from "../../assets/videos/HOMEPAGE WEB.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full aspect-video md:aspect-auto md:h-[760px] bg-gray-100 overflow-hidden">
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
