import styles from "./ExperienceList.module.css";
import useWindowDimensions from "../../helper/useWindowsDimensions";
import Image from "next/image";

function largeScreen(id, company, duration, role, desc, location) {
  return (
    <li key={id}>
      <div className={styles.header}>
        <span>{company}</span>
        <span>{duration}</span>
      </div>
      <div className={styles.location}>
        <Image
          width={12}
          height={12}
          src={"/icon/Location.svg"}
          alt="location"
        />
        <span>{location}</span>
      </div>
      <span className={styles.role}>as {role}</span>
      <p className={styles.description}>{desc}</p>
    </li>
  );
}

function smallScreen(id, company, duration, role, desc, location) {
  return (
    <li key={id}>
      <div className={styles.header}>
        <span>{company}</span>
      </div>
      <div className={styles.location}>
        <Image
          width={12}
          height={12}
          src={"/icon/Location.svg"}
          alt="location"
        />
        <span>{location}</span>
      </div>
      <div className={styles.content}>
        <span className={styles.role}>as {role}</span>
        <span>{duration}</span>
      </div>
      <p className={styles.description}>{desc}</p>
    </li>
  );
}

export default function ExperienceList({
  id,
  company,
  duration,
  role,
  desc,
  location,
}) {
  const { width } = useWindowDimensions();

  if (width > 426) {
    return largeScreen(id, company, duration, role, desc, location);
  } else {
    return smallScreen(id, company, duration, role, desc, location);
  }
}
