import Image from 'next/image';
import styles from '../styles/clients.module.css';

const clients = [
  { name: 'BWS', src: '/images/partners/bws.png' },
  { name: 'East Hants Glass', src: '/images/partners/easthantsglass.jpg' },
  { name: 'First Choice Hair Cutters', src: '/images/partners/firstchoicehaircutters.svg' },
  { name: 'GC', src: '/images/partners/gc.svg' },
  { name: 'Happy Harrys', src: '/images/partners/happyharrys.svg' },
  { name: 'Hardiman', src: '/images/partners/hardiman.png' },
  { name: 'LevPlan', src: '/images/partners/levplan.svg' },
  { name: 'Maureen', src: '/images/partners/maureen.jpg' },
  { name: 'Ironclad', src: '/images/partners/ironclad.png' },
];

export default function Clients() {
  // Duplicate clients for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className="gradient-text">Trusted by Leading Businesses</span>
        </h2>
        <p className={styles.subtitle}>
          Partnering with amazing brands across Nova Scotia
        </p>

        <div className={styles.slider}>
          <div className={styles.sliderItems}>
            {duplicatedClients.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                <Image
                  src={client.src}
                  alt={client.name}
                  width={120}
                  height={60}
                  className={styles.clientLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}