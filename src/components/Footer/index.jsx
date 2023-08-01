import { Link } from 'react-router-dom';

import instIcon from '../../assets/img/instagram.svg';
import telegramIcon from '../../assets/img/telegram.svg';
import whatsappIcon from '../../assets/img/whatsapp.svg';
import { NUMBER } from '../../constants';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link
            className={styles.link}
            to="https://instagram.com/deardarla.mua?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <img src={instIcon} alt="instagram" />
          </Link>

          <Link className={styles.link} to="https://t.me/dear_darla" target="_blank">
            <img src={telegramIcon} alt="telegram" />
          </Link>

          <Link className={styles.link} to={`https://wa.me/${NUMBER}`} target="_blank">
            <img src={whatsappIcon} alt="whatsapp" />
          </Link>
        </div>

        <div className={styles.footerText}>Профессиональный визажист в Москве Славкова Дарья</div>
      </div>
    </div>
  );
};

export default Footer;
