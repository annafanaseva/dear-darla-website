import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

import { photos } from '../../constants';
import Button from '../Button';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTopQuote}>
        “Я верю, что макияж - это не маска, а инструмент, который помогает подчеркнуть
        индивидуальность и улучшить самочувствие”
      </div>

      <div className={styles.wrapper}>
        {photos &&
          Object.values(photos).map((photo, idx) => (
            <Parallax
              translateY={[0, 20, 'easeIn']}
              scale={[0.9, 1, 'easeOutQuad']}
              speed={100}
              opacity={[0.7, 1, 'easeOutQuad']}
              key={idx}
              className={styles.imgWrapper}
            >
              <img src={photo.img} alt="Профессиональный визажист в Москве Славкова Дарья" />
            </Parallax>
          ))}
      </div>

      <div className={styles.heroBottomQuote}>
        “Я открыта для ваших идей и всегда готова совместно работать над созданием идеального
        образа, который вы мечтаете увидеть”
      </div>

      <Parallax translateY={[-10, 40, 'easeIn']} speed={10} className={styles.button}>
        <Link to="https://t.me/deardarla0">
          <Button title="КАНАЛ В TELEGRAM" />
        </Link>
      </Parallax>
    </div>
  );
};

export default Hero;
