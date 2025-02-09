import HeaderList from "../headerList";
import { LanguageSwitcher } from "../LanguageSwitcher";

export default function Hamburger() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 z-30 py-3 lg:hidden">
      <nav className="">
        <ul className="flex flex-col justify-center items-center gap-4 text-yellow-300">
          <HeaderList href="/#works" text="WORKS" />
          <HeaderList href="/#skill" text="SKILL" />
          <HeaderList href="/blog" text="BLOG" />
          <HeaderList href="/#contact" text="CONTACT" />
          <LanguageSwitcher />
        </ul>
      </nav>
    </div>
  );
}
