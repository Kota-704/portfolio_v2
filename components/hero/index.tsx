import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="hero flex justify-center items-center h-screen bg-contain bg-center bg-no-repeat opacity-30 absolute top-0 left-0 w-full z--1"
      style={{
        backgroundImage: 'url(/img/hero_background.png)',
      }}
    >
      <div className="hero-content text-center flex flex-col justify-center items-center">
        <Image src="/img/logo.png" alt="logo" width={384} height={384} className="z-10" />
        <p className="text-2xl z-10">Welcome to my portfolio site</p>
      </div>
    </section>
  );
}
