const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-6 p-4">
      <div
  className="hero h-[510px] rounded-2xl "
  style={{
    backgroundImage: "url(https://i.ibb.co/xY31GWV/DALL-E-2024-10-22-11-19-05-A-vibrant-inviting-hero-section-background-for-a-recipe-website-The-image.webp)",
  }}>
  <div className="hero-overlay bg-opacity-40 rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="md:w-2/3 w-full">
      <h1 className="mb-5 text-5xl font-bold ">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Unleash your inner chef with personalized cooking classes designed to elevate your culinary skills and ignite creativity!
      </p>
      <div className="flex items-center gap-5 justify-center">
      <button className="btn bg-green-400 text-white rounded-2xl border-none px-6 hover:text-green-700">Explore Now</button>
      <button className="btn bg-transparent text-green-400 rounded-2xl border-1
       px-6 hover:text-green-700">Your Feedback</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
