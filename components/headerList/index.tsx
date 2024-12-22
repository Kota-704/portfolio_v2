import Link from "next/link";

interface HeaderListProps {
  href: string;
  text: string;
}

export default function HeaderList({ href, text }: HeaderListProps) {
  return (
    <li className="hover:text-white">
      <Link
        href={href}
        className="text-xl transition-colors duration-300 ease-in-out font-dm-serif font-medium"
      >
        {text}
      </Link>
    </li>
  );
}
