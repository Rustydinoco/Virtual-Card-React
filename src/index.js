import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Imgprofile />
      <Content />
    </div>
  );
}

function Imgprofile() {
  return (
    <div className="img-bx">
      <img src="manja-vitolic-gKXKBY-C-Dk-unsplash.jpg" alt="" />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <Detail />
    </div>
  );
}

function Detail() {
  return (
    <div className="detail">
      <h2>
        Bilal Achmad
        <br />
        <span>Fullstack Developer</span>
      </h2>
      <Src />
    </div>
  );
}

function Src() {
  return (
    <ul className="sci">
      <li>
        <button>
          <i class="fab fa-facebook-f"></i>
        </button>
      </li>
      <li>
        {" "}
        <button>
          <i class="fab fa-twitter"></i>
        </button>
      </li>
      <li>
        <button>
          <i class="fab fa-instagram"></i>
        </button>
      </li>
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
