import { Link } from 'react-router-dom';

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
      <div className={styles.heroTopQuote}>
        “Моя страсть - создавать неповторимые образы, подчеркивая естественную красоту каждого
        человека”
      </div>

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
