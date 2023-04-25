import Link from "next/link";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterComponent = () => {
    return (
        <footer className="footer-container">
            <div className="footer-container__content container">
                <Link href={"tel://+34660942023"} className="footer-container__content__link">
                    <PhoneInTalkIcon className="footer-container__content__link__icon" />
                </Link>
                <Link href={"mailto:lilibetfdez@gmail.com"} target="_blank" className="footer-container__content__link">
                    <EmailIcon className="footer-container__content__link__icon" />
                </Link>
                <Link href={"https://www.linkedin.com/in/lilibet-fern%C3%A1ndez-mollinedo/"} target="_blank" className="footer-container__content__link">
                    <LinkedInIcon className="footer-container__content__link__icon" />
                </Link>
                <Link href={"https://github.com/lilifernandez91"} target="_blank" className="footer-container__content__link">
                    <GitHubIcon className="footer-container__content__link__icon" />
                </Link>
                <Link href={"https://twitter.com/Lili_fdez_91"} target="_blank" className="footer-container__content__link">
                    <TwitterIcon className="footer-container__content__link__icon" />
                </Link>
            </div>
        </footer>
    );
}

export default FooterComponent;