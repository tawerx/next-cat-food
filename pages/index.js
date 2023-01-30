import Head from 'next/head';
import Card from '../components/Card';

import styles from '../styles/home.module.scss';

const cardsInfo = [
  {
    id: 1,
    title: 'Сказочное заморское яство',
    taste: 'фуа-гра',
    description: 'Печень утки разварная с артишоками',
    weight: 0.5,
    portion: 10,
    gift: 1,
    available: true,
  },
  {
    id: 2,
    title: 'Сказочное заморское яство',
    taste: 'рыбой',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка',
    weight: 2,
    portion: 40,
    gift: 2,
    available: true,
  },
  {
    id: 3,
    title: 'Сказочное заморское яство',
    taste: 'курой',
    description: 'Филе из цыплят с трюфелями в бульоне',
    weight: 5,
    portion: 100,
    gift: 5,
    available: false,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat food</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Cat food shop, here you can buy food for your cat" />
        <link rel="preload" as="image" href="/images/cardSelected.png" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.background}></div>
        <div className={styles.header}>Ты сегодня покормил кота?</div>
        <div className={styles.cards}>
          {cardsInfo.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
}
