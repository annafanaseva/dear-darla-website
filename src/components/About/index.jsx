import { Link } from 'react-router-dom';
import Button from '../Button';
import dary from '../../assets/img/dary.jpg';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.hero}>
      <img src={dary} alt="Профессиональный визажист в Москве Славкова Дарья" />

      <div className={styles.wrapper}>
        <p className={styles.text}>
          Меня зовут Дарья, и я рада приветствовать Вас на моей странице.
        </p>

        <p className={styles.text}>
          Я - визажист с опытом работы в индустрии красоты. Моя страсть - создавать неповторимые
          образы, подчеркивая естественную красоту каждого человека. Поэтому я всегда стремлюсь
          создать индивидуальный образ, соответствующий уникальным чертам лица и стилю клиента.
        </p>

        <p className={styles.text}>
          Пожалуйста, не стесняйтесь связаться со мной для получения дополнительной информации или
          для записи на консультацию. Я с нетерпением жду возможности помочь Вам выглядеть
          великолепно и почувствовать себя уверенно.
        </p>

        <div className={styles.button}>
          <Link to="https://t.me/dear_darla" target="_blank">
            <Button title="НАПИСАТЬ" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
