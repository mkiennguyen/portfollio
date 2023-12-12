import contact from "./contact.module.css";
import Image from "next/image";
import Link from "next/link";
import contactCover from "@../../public/images/boy-dog.jpg";

export default function Contact() {
  return (
    <div className={contact.form} id="contact">
      <div className={contact.info}>
        <h2 className={contact.info__title}> Contact with me </h2>
        <div className={contact.info__subTitle}>
          Contact me via social networking platforms, if necessary, send me an
          email
        </div>

        <div className={contact.socials}>
          <Link
            href="https://github.com/kadamato"
            className={`${contact.social} ${contact.github}`}
          >
            <Image
              src="/images/github.svg"
              width={24}
              height={24}
              alt="github"
              className={contact.social__icon}
            />
            <div> Github</div>
          </Link>

          <Link
            href="https://www.facebook.com/conmeomaunau"
            className={`${contact.social} ${contact.facebook}`}
          >
            <Image
              src="/images/facebook.svg"
              width={24}
              height={24}
              alt="facebook"
              className={contact.social__icon}
            />
            <div> Facebook</div>
          </Link>

          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTKzqzNGRgzRRlzwjwXNmnDvvkvbffqfHwqmJSDpTttWthXZPXLHzjMWKgkrPwLzJvHPlgl"
            className={`${contact.social} ${contact.gmail}`}
          >
            <Image
              src="/images/mail.svg"
              width={24}
              height={24}
              alt="gmail"
              className={contact.social__icon}
            />
            <div>Gmail</div>
          </Link>

          <Link
            href="https://discord.gg/FXRTHxherh"
            className={`${contact.social} ${contact.discord}`}
          >
            <Image
              src="/images/discord.svg"
              width={24}
              height={24}
              alt="gmail"
              className={contact.social__icon}
            />
            <div>Discord</div>
          </Link>
        </div>
      </div>
      <div className={contact.imageBox}>
        <Image
          src={contactCover}
          alt="Contact"
          className={contact.imageBox__image}
        />
      </div>
    </div>
  );
}
