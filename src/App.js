import React from 'react';
import Slider from 'react-slick';
import './styles.css';

const App = () => {
  const manhwas = [
    { id: 1, name: '1. Best Supernatural Manhwa – Leviathan-> ', image: 'https://animemangatoon.com/wp-content/uploads/2024/06/pjimage-12-4-e1720973001888-1140x570.jpg',   description: '' },
    { id: 2, name: '2. Tower of God', image: 'https://animemangatoon.com/wp-content/uploads/2024/06/season-1-1.jpg' ,   description: 'The Tower of God revolves around Twenty-Fifth Baam, who spends most of his early life stuck beneath the titular tower. While looking for his friend Rachel, he climbs the mysterious tower. What he will discover in his quest to find his friend is also beyond anything he could have imagined. Moreover, the more he climbs, the more difficult it gets, as each floor offers him a new obstacle that he has to overcome to keep climbing. Baam needs to succeed in all these challenges to reach the peak of the Tower eventually.' },
    { id: 3, name: '3. Leveling Up with the Gods', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/594f4d74-e0a2-4179-b8f5-141f140345d0-e1721128805577.jpg' ,   description: 'Leveling Up with the Gods is undoubtedly one of the best supernatural manhwa. It centres on Kim Yuwon, who, after losing the battle against the Outer Gods, is offered another opportunity and sent back into the past. Now, back to the time before the war, Yuwon has only one objective – to eventually climb the Tower and become the strongest to avert the potential destruction. If you liked Tower of God, you must read Leveling Up With the Gods. '},
    { id: 4, name: '4. Existence', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-113722-e1721128847688.jpg',   description: 'Existence follows the central character Lee Jan-In, who has experienced countless lives as a different species being before being born as a human. With each life, he questions the objective of his constant reincarnation. After being born as a human with all the memories of his previous life, he understands the purpose of his existence, and that is the extermination of humanity. However, soon after experiencing the intricacies of human life, he eventually begins to question the meaning of his life.' },
    { id: 5, name: '5. The Breaker', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/650x650_9a375a18096744f1075cfab98ecd25e8f0c2242407633b527cd89760-1-e1721128882154.jpg',   description: 'The Breaker, in particular, follows the central character of the manhwa Lee Shi-Woon. After witnessing the fighting abilities of his new English teacher, Chun Woo, Lee finds a ray of hope to alter his life from constant bullying. With the hope of escaping his life, Shi-Woon finally convinces his teacher to take him as his disciple. However, what Shi-Woon considers an escape from his reality is only a welcome invitation to the infernal world of the Murim.' },
    { id: 6, name: '6. The First Hunter – Another Great Supernatural Manhwa', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-191552-e1721129164159-750x375.jpg',   description: '' },
    { id: 7, name: '7. Supernatural Manhwa: Noblesse', image: 'https://animemangatoon.com/wp-content/uploads/2024/06/Screenshot-2024-06-15-154729-e1721129126183-750x375.jpg',   description: 'Noblesse is a title only given to the strongest vampire. The Manhwa series takes place in a fictional world where the supernatural and the ordinary coexist apart from each other. The central character, Cadiz Etrama Di Raizel, falls into a slumber of 820 years and eventually awakens to an unfamiliar world. He finally reunites with his loyal servant Frankenstein and starts a new life. However, with the dangers looming around it would be difficult to conceal his abilities as a Noblesse for long. ' },
    { id: 8, name: '8. Ultimate Outcast', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/manhwa-Greatest-Outcast-e1721129034969-1140x570.jpg',   description: 'The Ultimate Outcast manhwa focuses on high school student Kang Hanuel, a victim of societal ostracization. Although every outcast doesn’t turn vengeful, after witnessing his friend in a terrifying incident, Kang decides to be that outcast. After discovering a strange power, Hanuel finally decides to take revenge on everyone responsible in the most terrifying way possible, making it one of the best supernatural manhwa.' },
    { id: 9, name: '9. Supernatural Manhwa: Unholy Blood', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-193948-e1721129000296-750x375.jpg',   description: 'Unholy Blood focuses on Hayan Park, an ordinary university student who wants nothing but a peaceful life. Her wish is destroyed after the demise of her adopted father at the hands of vampires, compelling her to disclose her true identity finally. She is the last pure-blood vampire. After revealing her reality, she is forced to confront her past and biological family. Eventually, with a human detective’s help, Hayan sets out for revenge against the vampires. ' },
    { id: 10, name: '10. Dice: The Cube that Changes Everything', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-194410-e1721128974884-750x375.jpg',   description: 'Dice: The Cube that Changes Everything, in particular, centres around the central character, Dongtae. Initially, he begins as a shy high school kid who is a loser in every aspect of his life. After being constantly mistreated and bullied, his life takes a fortunate twist when he becomes a dicer. However, can he alter his whole life by rolling a simple cube?' },

    // Add more manhwa items here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Lore Olympus</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#characters">Characters</a></li>
          <li><a href="#manhwas">Manhwas</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Lore Olympus</h1>
          <p className="hero-subtitle">Jaw Dropping Seen on Media</p>
          <a href="https://animemangatoon.com/lore-olympus-webtoon-overview/" className="cta-btn">Read More</a>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="characters">
        <h2>Main Characters</h2>
        <div className="character-cards">
          <div className="character-card">
            <img src="https://animemangatoon.com/wp-content/uploads/2024/05/64u47lg4-360x504.png.webp" alt="Character 1" />
            <div className="character-details">
              <h3>Character 1</h3>
              <p>In the Lore Olympus webtoon, Hades, the God of the underworld, takes center stage. Often depicted as a handsome blue man in a business suit, Hades runs the Underworld Corporation, serves as the older brother of Zeus and Poseidon, and plays a role in the Six Traitor Dynasty.
                 His character takes on the burden of leadership and pursuing personal interests. [Read Lore Olympus Season 1 Review]</p>
            </div>
          </div>
          <div className="character-card">
            <img src="https://animemangatoon.com/wp-content/uploads/2024/05/myq53tdb-360x504.png.webp" alt="Character 2" />
            <div className="character-details">
              <h3>Character 2</h3>
              <p>Persephone, the goddess of spring, is the story’s heroine alongside the underworld. Initially portrayed as an innocent and naive young woman, her character develops dramatically as she faces more challenges.

Persephone is depicted with pink skin and a generous heart, a stark contrast to the harsh reality of Olympus. Her journey included discovering her strength,
 and she dealt with the trauma of being raped by Apollo, as well as her strong feelings about the underworld.</p>
            </div>
          </div>
          <div className="character-card">
            <img src="https://animemangatoon.com/wp-content/uploads/2024/05/ilzxkblr-750x753.png.webp" alt="Character 3" />
            <div className="character-details">
              <h3>Character 3</h3>
              <p>
              Zeus, the king of the gods, is depicted as a yellow-skinned man with long, straight hair. Known for his promiscuity and egotism, Zeus’ actions often brought chaos to Olympus. A member of the Six Realms of Lies, he has intimate relationships with many characters, including his brothers Hades and Poseidon,
               and many lovers. His character provides a lens through which to examine issues of power and corruption.</p>
            </div>
        </div>
        <div className="character-card">
            <img src="https://animemangatoon.com/wp-content/uploads/2024/05/ccgqrffp-360x504.png.webp" alt="Character 4" />
            <div className="character-details">
              <h3>Character 4</h3>
              <p>Poseidon, the God of the sea, is Zeus’s brother from the underworld. He is usually characterized by a carefree and quick temperament, portrayed with green skin and long, wavy hair. Despite being slightly less witted, Poseidon is very loyal to his family. 
                His relationship with his wife Amphitrite and their polygamous arrangement add an intriguing dynamic to his character.</p>
            </div>
        </div>
        <div className="character-card">
            <img src="https://animemangatoon.com/wp-content/uploads/2024/05/p682kcd9-360x504.png.webp" alt="Character 5" />
            <div className="character-details">
              <h3>Character 5</h3>
              <p>Eros, the God of love and the son of Aphrodite and Ares is a strong, maroon young man. He is one of Persephone’s best friends and knows the depression she is enduring. Eros is supportive and loving, often helping 
                to nurture other romantic relationships as he deals with his challenges, including his relationship with Psyche.</p>
            </div>
        </div>
        
        </div>
      </section>

      {/* Supernatural Manhwas Section */}
      <section id="manhwas" className="manhwas">
        <h2>Best Supernatural Manhwas</h2>
        <Slider {...settings}>
          {manhwas.map((manhwa) => (
            <div key={manhwa.id}>
              <img src={manhwa.image} alt={manhwa.name} />
              <h3>{manhwa.name}</h3>
              <p>{manhwa.description}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default App;
