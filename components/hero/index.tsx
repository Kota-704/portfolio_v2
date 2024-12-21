export default function Hero() {
  return (
    <>
      <section
        className="hero flex justify-center items-center h-screen bg-contain bg-center bg-no-repeat opacity-30 absolute top-0 left-0 w-full z--1"
        style={{
          backgroundImage: "url(/img/hero_background.png)",
        }}
      ></section>
      <div className="hero-content text-center flex flex-col justify-center items-center h-screen">
        <h2 className="text-6xl text-white font-relation">
          Kota&apos;s Portfolio
        </h2>
      </div>
    </>
  );
}
