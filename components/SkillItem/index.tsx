import Image from "next/image";

interface SkillItemProps {
  image: string;
  text: string;
}

export function SkillItem({ image, text }: SkillItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Image src={`/img/${image}`} alt={text} width={50} height={50} />
      <p className="text-gray-700 text-sm">{text}</p>
    </li>
  );
}
