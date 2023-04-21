import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Hjem</h1>
      <ul children="homeCardList">
        <li className="homeCard">
          <img src="/src/img/Sel11.png" />
          <article>
            <h3>Velkommen til Lesesel!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus ipsum in pulvinar ultricies. Donec dignissim massa sem, non
              placerat mauris elementum ac. Praesent pharetra fermentum enim
              vitae tempus. Ut maximus nisl vitae rhoncus ultricies.
            </p>
            <button>
              <Link to="/registrerbok" className="homeLink">
                Registrer bok
              </Link>
            </button>
          </article>
        </li>

        <li className="homeCard">
          <img src="/src/img/Sel7.png" />
          <article>
            <h3>Sjekk scoreboard</h3>
            <p>
              Hvor mye har vennene dine lest? Hvor ligger du på scoreboard? Er du på pallen?  <br/>
              Dette kan du sjekke her. 
            </p>
            <button>
              <Link to="/scoreboard" className="homeLink">
                Gå til scoreboard
              </Link>
            </button>
          </article>
        </li>
        <li className="homeCard">
          <img src="/src/img/Sel6.png" />
          <article>
            <h3>Ønsker å lese</h3>
            <p>
              Har du funnet en bok du ønsker å lese, men du kan ikke begynne på den akkurat nå? 
              Hva med å lagre bøkene i en liste, slik at når du er klar, kan du bare gå inn på listen å se hvilke bøker du har lagret. <br/>
              På den måten glemmer du ikke hvilke bøker du har vært interessert i. 
            </p>
            <button>
              <Link to="/scoreboard" className="homeLink">
                Ønsker å lese
              </Link>
            </button>
          </article>
        </li>
      </ul>
    </>
  );
};
export default Home;
