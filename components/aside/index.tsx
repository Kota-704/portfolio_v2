import Image from "next/image";

export function Aside() {
  return (
    <aside className="hidden md:block w-1/5">
      <div className="fixed top-1/2  right-6">
        <div className="flex flex-col justify-center items-center gap-6 w-20 h-40 bg-slate-50 p-6 rounded-lg">
          <a href="https://x.com/lQduRiTw4BNA0yW" target="_blank">
            <Image src="/img/x.png" alt="X" width={100} height={100} />
          </a>
          <a href="https://github.com/Kota-704" target="_blank">
            <Image
              src="/img/github.png"
              alt="GitHub"
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
    </aside>
  );
}
