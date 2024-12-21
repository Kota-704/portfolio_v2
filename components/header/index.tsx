import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="header p-4 fixed top-0 left-0 w-full z-30">
        <div className="px-14 flex justify-between items-center w-full">
          <h1 className="text-6xl font-relation">
            <Link href={'/'} className="font-bold">
              Kota&apos;s Portfolio
            </Link>
          </h1>
          <nav>
            <ul className="flex gap-8 text-yellow-300">
              <li className="hover:text-white">
                <Link href={'/'} className="text-xl transition-colors duration-300 ease-in-out">
                  Home
                </Link>
              </li>
              <li className="hover:text-white">
                <Link href={'/'} className="text-xl transition-colors duration-300 ease-in-out">
                  Works
                </Link>
              </li>
              <li className="hover:text-white">
                <Link href={'/'} className="text-xl transition-colors duration-300 ease-in-out">
                  Skill
                </Link>
              </li>
              <li className="hover:text-white">
                <Link href={'/'} className="text-xl transition-colors duration-300 ease-in-out">
                  Blog
                </Link>
              </li>
              <li className="hover:text-white">
                <Link href={'/'} className="text-xl transition-colors duration-300 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
