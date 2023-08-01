import { Link } from 'react-router-dom';

import textContactMain from '../../assets/img/text-contact-main.svg';
import Button from '../Button';
import instIcon from '../../assets/img/instagram.svg';
import telegramIcon from '../../assets/img/telegram.svg';
import whatsappIcon from '../../assets/img/whatsapp.svg';
import { NUMBER } from '../../constants';
import { MAIL } from '../../constants';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.hero}>
      <img
        src={textContactMain}
        className={styles.heroTopQuote}
        alt="Профессиональный визажист в Москве Славкова Дарья"
      />

      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link
            className={styles.link}
            target="_blank"
            to="https://instagram.com/deardarla.mua?igshid=YmMyMTA2M2Y=">
            <img src={instIcon} alt="instagram" />
          </Link>

          <Link className={styles.link} to="https://t.me/dear_darla" target="_blank">
            <img src={telegramIcon} alt="telegram" />
          </Link>

          <Link className={styles.link} to={`https://wa.me/${NUMBER}`} target="_blank">
            <img src={whatsappIcon} alt="whatsapp" />
          </Link>
        </div>

        <Link className={styles.contactLink} to={`tel:'${NUMBER}`} target="_blank">
          Мой телефон: +7-915-267-76-23
        </Link>

        <Link className={styles.contactLink} to={'mailto:' + MAIL} target="_blank">
          Моя почта: dary.slavkova@gmail.com
        </Link>

        <div className={styles.button}>
          <Link to="https://t.me/deardarla0">
            <Button title="КАНАЛ В TELEGRAM" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
