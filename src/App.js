import profileImg from './profile_img.png';
import github from "./github.png";
import slack from "./slack.png";
import zuriLogo from "./Zuri.Internship_Logo.png";
import IFG from "./I4G.png";

import './App.css';

function App() {
  return (
    <div>
      <div className="profile_section">
        <img
          id="profile__img"
          className="profile__img"
          src={profileImg}
          alt="profile"
        />
        <h1 id="twitter" className="twitter">
          Annette Black
        </h1>
        <h1 id="slack" hidden>
          Timi Odusanya
        </h1>
      </div>

      <div className="link_section">
        <button className="link">
          <a href="https://twitter.com/timi_odusanya">Twitter Link</a>
        </button>
        <button className="link" id="btn__zuri">
          <a href="https://training.zuri.team/">Zuri Team</a>
        </button>
        <button className="link" id="books">
          <a href="http://books.zuri.team/">Zuri Books</a>
        </button>
        <button className="link" id="book__python">
          <a href="https://books.zuri.team/python-for-beginners?ref_id=TimiOdusanya">
            Python Books
          </a>
        </button>
        <button className="link" id="pitch">
          <a href="https://background.zuri.team/">
            Background Check for Coders
          </a>
        </button>
        <button className="link">
          <a href="https://books.zuri.team/design-rules">Design Books</a>
        </button>
        <div className="socials">
          <img src={slack} id="" alt="" className="slack" />
          <img src={github} id="" alt="" className="github" />
        </div>
      </div>

      <hr />
      <div className="footer">
        <img src={zuriLogo} alt="zuri_logo" className="zuri_logo" />
        <h1 className="footer_name">HNG Internship 9 Frontend Task</h1>
        <img src={IFG} alt="ingressive" className="ifg" />
      </div>
    </div>
  );
}

export default App;
