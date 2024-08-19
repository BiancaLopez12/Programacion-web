import "./App.css"; // Asegúrate de personalizar este archivo para tu estilo
import { Projects } from "./components/Projects";

const whastAppNumber = "+5491135155907";
const whatsappMessage =
  "Hola, estoy interesado en tu portfolio. ¿Podemos hablar más sobre esto?";
const emailAddress = "biancajoanalopez@gmail";
const emailBody =
  "Hola, estoy interesado en tu portfolio. ¿Podemos hablar más sobre esto?";

// Componente principal del portfolio
const App = () => {
  return (
    <div className="App">
      {/* Imagen en forma de burbuja */}
      <div className="profile-picture-container">
        <img src="/fotoportfolio.jpg" alt="" className="profile-picture" />
      </div>
      <header>
        <h1>𝐁𝐈𝐀𝐍𝐂𝐀 𝐉𝐎𝐀𝐍𝐀 𝐋Ó𝐏𝐄𝐙</h1>
        <nav>
          <ul>
            <li>
              <a href="#about"> 𝓢𝓸𝓫𝓻𝓮 𝓜𝓲</a>
            </li>
            <li>
              <a href="#projects">𝓜𝓲𝓼 𝓟𝓻𝓸𝔂𝓮𝓬𝓽𝓸𝓼</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2> 𝐒𝐎𝐁𝐑𝐄 𝐌𝐈</h2>
        <p>
          ¡𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 𝐁𝐢𝐚𝐧𝐜𝐚 𝐋𝐨𝐩𝐞𝐳, 𝐮𝐧𝐚 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐚𝐝𝐨𝐫𝐚 𝐝𝐞 𝐭𝐞𝐜𝐧𝐨𝐥𝐨𝐠í𝐚 𝐲 𝐝𝐢𝐬𝐞ñ𝐚𝐝𝐨𝐫𝐚
          𝐚𝐩𝐚𝐬𝐢𝐨𝐧𝐚𝐝𝐚 𝐩𝐨𝐫 𝐜𝐫𝐞𝐚𝐫 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐥𝐞𝐬 𝐢𝐧𝐧𝐨𝐯𝐚𝐝𝐨𝐫𝐚𝐬 𝐲 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐚𝐥𝐞𝐬.
          𝐌𝐞 𝐞𝐬𝐩𝐞𝐜𝐢𝐚𝐥𝐢𝐳𝐨 𝐞𝐧 𝐓𝐈𝐂 , 𝐜𝐨𝐦𝐨 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐚𝐝𝐨𝐫𝐚 𝐰𝐞𝐛 𝐲 𝐝𝐢𝐬𝐞ñ𝐚𝐝𝐨𝐫𝐚 , 𝐲
          𝐝𝐢𝐬𝐟𝐫𝐮𝐭𝐨 𝐫𝐞𝐬𝐨𝐥𝐯𝐞𝐫 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚𝐬 𝐜𝐨𝐦𝐩𝐥𝐞𝐣𝐨𝐬 𝐜𝐨𝐧 𝐬𝐨𝐥𝐮𝐜𝐢𝐨𝐧𝐞𝐬 𝐞𝐥𝐞𝐠𝐚𝐧𝐭𝐞𝐬 𝐲
          𝐞𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬."
        </p>
      </section>
      <Projects />
      <section>
        <h2>𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎𝐒</h2>
        <nav>
          <ul>
            <li>
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                  emailBody
                )}&body=${encodeURIComponent(emailBody)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                𝗘𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗽𝗼𝗿 𝗰𝗼𝗿𝗿𝗲𝗼 𝗲𝗹𝗲𝗰𝘁𝗿ó𝗻𝗶𝗰𝗼
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${whastAppNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                𝗘𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗽𝗼𝗿 𝗪𝗵𝗮𝘀𝘁𝗔𝗽𝗽𝗽
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <footer>
        <p>&copy; 2024 Bianca Joana López. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
