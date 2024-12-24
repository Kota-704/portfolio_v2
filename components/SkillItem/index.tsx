import Image from "next/image";

interface SkillItemProps {
  image: string;
  text: string;
}

export function SkillItem({ image, text }: SkillItemProps) {
  return (
    <li className="flex flex-col justify-center items-center gap-2">
      <Image src={`/img/${image}`} alt={text} width={100} height={100} />
      <p className="text-white text-sm">{text}</p>
    </li>
  );
}
