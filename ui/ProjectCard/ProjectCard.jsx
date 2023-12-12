import Image from "next/image";
import projectCard from "./projectCard.module.css";
import Link from "next/link";

export default function ProjectCard({ name, link, image }) {
  return (
    <Link href={link} className={projectCard.item}>
      <div className={projectCard.item__name}>{name}</div>
      <div className={projectCard.item__imageBox}>
        <Image
          src={"/uploads/" + image}
          alt="item-image"
          width={500}
          height={500}
          quality={100}
          className={projectCard.item__imageBox__image}
        />
      </div>
    </Link>
  );
}
