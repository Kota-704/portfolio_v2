import HeaderList from "../headerList";
import { LanguageSwitcher } from "../LanguageSwitcher";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function Hamburger({ isOpen }: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-full py-5 bg-gray-800 bg-opacity-90 z-40 flex flex-col justify-center items-center transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav>
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
