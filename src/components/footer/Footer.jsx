import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import IconButton from "../../ui/IconButton";
import { iconsLinks } from "../../utils/helpers";
import classes from "./Footer.module.scss";
import { SiGmail } from "react-icons/si";
const FacebookIcon = <FaFacebook />;
const LinkedInIcon = <FaLinkedin />;
const WhatsAppIcon = <FaWhatsapp />;
const GitHubIcon = <FaGithub />;
const GmailIcon = <SiGmail />;

export const icons = [
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
  GitHubIcon,
  GmailIcon,
];

function Footer() {
  return (
    <footer className={classes.footer}>
      <main className={classes.layout}>
        <h1 className={classes.title}>Contact or follow me on :</h1>
        <ul className={classes.listIcons} >
          {iconsLinks.map((icon, index) => (
            <li key={icon.title} className={classes.icon}>
              <a href={icon.href} target="_blank" rel="noreferrer noopener">
                <IconButton
                  icon={icons[index]}
                  backgroundColor={icon.bgColor}
                  title={icon.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </main>
    </footer>
  );
}

export default Footer;
