import Link from "next/link";
import HeaderList from "../headerList";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  return (
    <>
      <header className="header p-4 fixed top-0 left-0 w-full z-30">
        <div className="px-14 flex justify-between items-center w-full">
          <h1 className="text-6xl font-relation">
            <Link href={"/"} className="font-bold">
              Kota&apos;s Portfolio
            </Link>
          </h1>
          <nav>
            <LanguageSwitcher />
            <ul className="flex gap-8 text-yellow-300">
              <HeaderList href="/" text="HOME" />
              <HeaderList href="/" text="WORKS" />
              <HeaderList href="/" text="SKILL" />
              <HeaderList href="/" text="BLOG" />
              <HeaderList href="/" text="CONTACT" />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
