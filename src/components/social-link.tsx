import Image from "next/image";

type Props = {
  image: string;
  link: string;
};

export default function SocialLink({ image: src, link }: Props) {
  return (
    <div className="w-5 h-5 relative">
      <a href={link} target="_blank">
        <Image className="object-cover" src={src} fill alt="telegram" />
      </a>
    </div>
  );
}
