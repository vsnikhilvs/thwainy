import Image from "next/image";
import styles from "./Contact.module.scss";
import { constants } from "@/constants/contact/constants";
import banner from "@/assets/banner.png";
import { Button, TextField } from "@mui/material";
import Layout from "@/components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src={"/thwainy/banner.png"}
          alt={"Banner Image"}
          className={styles.bannerImage}
        />
        <div className={styles.content}>
          <span className={styles.title}>{constants.title}</span>
          <span className={styles.subtitle}>{constants.subtitle}</span>
          <div className={styles.contactForm}>
            <div className={styles.rowInputs}>
              <TextField
                label={constants.companyNamePlaceholder}
                variant="outlined"
                className={styles.normalInput}
              />
              <TextField
                label={constants.emailPlaceholder}
                variant="outlined"
                className={styles.normalInput}
              />
            </div>
            <div className={styles.rowInputs}>
              <TextField
                label={constants.namePlaceholder}
                variant="outlined"
                className={styles.normalInput}
              />
              <TextField
                label={constants.telephonePlaceholder}
                variant="outlined"
                className={styles.normalInput}
              />
            </div>
            <TextField
              label={constants.commentsPlaceholder}
              multiline
              rows={4}
              defaultValue=""
              className={styles.commentsInput}
            />
          </div>
          <div className={styles.buttonSection}>
            <Button variant="contained" className={styles.brochureButton}>
              Send
            </Button>
          </div>
        </div>
        <div className={styles.contactSection}>
          <span className={styles.contactTitle}>{constants.contactTitle}</span>
          <div className={styles.personnalSection}>
            {constants.contactPersonnals.map((p, i) => (
              <div key={i} className={styles.personnal}>
                <span className={styles.contactPersonnalTitle}>{p.title}</span>
                <span className={styles.contactPersonnalDesc}>
                  {p.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
