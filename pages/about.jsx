import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import LinkSocialMedia from "../components/LinkSocialMedia";
import { linksocialmedia } from "../constant/SocialMedia";
import BackArrow from "../components/ui/BackArrow";

export default function about() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sectionRight}>
          <BackArrow />
          <span className={styles.title}>About</span>
        </div>
        <div className={styles.sectionLeft}>
          <p>
            Design enthusiast, research aficionado, and tech aficionado –
            that&apos;s me! With a knack for crafting user-centered products and
            a flair for web development, I&apos;m your go-to expert for bridging
            the gap between design and IT.
          </p>
          <p>
            Collaboration is my jam – I thrive in dynamic teams where creativity
            and tech collide. Let&apos;s craft the future together!
          </p>
          <div className={styles.underline} />
          <div className={styles.descriptionBottom}>
            <div className={styles.socialMedia}>
              <ul className={styles.socialMediaContent}>
                {linksocialmedia.map((links) => (
                  <li key={links.id}>
                    <LinkSocialMedia link={links.link} name={links.name} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.wrapperButton}>
              <motion.button
                className={styles.button}
                whileHover={{
                  borderRadius: 0,
                  backgroundColor: "#F8F9FA",
                  color: "#343A40",
                  borderColor: "#343A40",
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }}
              >
                <a href="/download/cv.pdf" download="Gifino_Thoriq_CV">
                  Download CV
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
