import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const MyBooks = () => {
  return (
    <>
      <Helmet>
        <title>Mine bøker</title>
      </Helmet>
      
      <h1>Mine Bøker</h1>
      <section>
        <ul className="cardList">
          <li className="card">
            <img src="../src/img/Sel11.webp" alt="sel med bok"/>
            <button>
              <Link to="/registrerbok">Registrer bok</Link>
            </button>
          </li>
          <li className="card">
            <img src="../src/img/Sel12.webp" alt="sel som blunker"/>
            <button>Leste bøker</button>
          </li>
          <li className="card">
            <img src="../src/img/Sel6.webp" alt="sel med sjokkert ansikt"/>
            <button>Ønsker å lese</button>
          </li>
        </ul>
      </section>
    </>
  );
};
export default MyBooks;
