import avatar from "@../../public/images/avatar.jpg";
import Image from "next/image";

import personal from "./personal.module.css";

export default function Personal() {
  const handleClosePersonalInfo = () => {
    const personalInfo = document.getElementById("personal");
    personalInfo.style.display = "none";
  };
  const handleOpenPersonalInfo = () => {
    const personalInfo = document.getElementById("personal");
    personalInfo.style.display = "block";
  };
  return (
    <div className={personal.container} id="personalInfo">
      <div className={personal.intro}>
        <div className={personal.avatar} onClick={handleOpenPersonalInfo}>
          <Image src={avatar} alt="avatar" className={personal.avatar__img} />
        </div>
      </div>
      <div className={personal.info} id="personal">
        <div className={personal.info__title}>About me </div>
        <div className={personal.user}>
          <div className={personal.user__title}>Fullname</div>
          <div className={personal.user__title__name}>NGUYEN MINH KIEN</div>
        </div>
        <div className={personal.age}>
          <div className={personal.age__title}>Age</div>
          <div className={personal.age__title__number}>20</div>
        </div>

        <div className={personal.address}>
          <div className={personal.address__title}>Address</div>
          <div className={personal.address__title__name}>Ha Noi, Viet Nam</div>
        </div>

        <div className={personal.role}>
          <div className={personal.role__title}>Role</div>
          <div className={personal.role__title__name}>Web Developer</div>
        </div>

        <div className={personal.closeBtn} onClick={handleClosePersonalInfo}>
          <Image
            src="/images/close-icon.svg"
            alt="close"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
