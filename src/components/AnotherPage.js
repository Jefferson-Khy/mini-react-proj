import React, { useState } from 'react';
import styles from './AnotherPage.module.css';
import { Link } from 'react-router-dom';

function AnotherPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const panels = [
    {
      backgroundImage: "url('https://cdn.oneesports.gg/cdn-data/2023/06/Valorant_Deadlock_KeyArt.jpg')",
      link: "https://playvalorant.com/en-us/agents/deadlock/",
      title: "Deadlock"
    },
    {
      backgroundImage: "url('https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2020/06/Valorant_Omen.jpg')",
      link: "https://playvalorant.com/en-us/agents/omen/",
      title: "Omen"
    },
    {
      backgroundImage: "url('https://i.ytimg.com/vi/FUoqAn5T4h4/maxresdefault.jpg')",
      link: "https://playvalorant.com/en-us/agents/chamber/",
      title: "Chamber"
    },
    {
      backgroundImage: "url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt39cb66a45c3e9721/615f8adab4dc5405a577a6ed/Raze_v2.png')",
      link: "https://playvalorant.com/en-us/agents/raze/",
      title: "Raze"
    },
    {
      backgroundImage: "url('https://gamingbolt.com/wp-content/uploads/2020/07/Valorant_Brimstone.jpg')",
      link: "https://playvalorant.com/en-us/agents/brimstone/",
      title: "Brimstone"
    }
  ];

  return (
    <div className={styles.anotherPageContainer}>
      <div className={styles.panelContainer}>
        {panels.map((panel, index) => (
          <div
            key={index}
            className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}
            style={{ backgroundImage: panel.backgroundImage }}
            onClick={() => handleClick(index)}
          >
            <a href={panel.link}>
              <h3>{panel.title}</h3>
            </a>
          </div>
        ))}
      </div>
      <Link to="/">Homepage</Link>
    </div>
  );
}

export default AnotherPage;
