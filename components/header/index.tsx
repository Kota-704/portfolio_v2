import Link from "next/link";
import HeaderList from "../headerList";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Hamburger from "../hamburger";
import HamburgerMenu from "../hamburgerMenu";

export default function Header() {
  return (
    <>
      <header className="header p-4 fixed top-0 left-0 w-full z-30">
        <div className="px-0 xl:px-14 flex justify-between items-center w-full">
          <h1 className="text-4xl xl:text-6xl font-relation">
            <Link href={"/"} className="font-bold">
              Kota&apos;s Portfolio
            </Link>
          </h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-8 text-yellow-300">
              <LanguageSwitcher />
              <HeaderList href="/#works" text="WORKS" />
              <HeaderList href="/#skill" text="SKILL" />
              <HeaderList href="/blog" text="BLOG" />
              <HeaderList href="/#contact" text="CONTACT" />
            </ul>
          </nav>
        </div>
      </header>
      <HamburgerMenu />
      <Hamburger
        isOpen={false}
        toggleMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}
