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
    <>
      <ul className="sci">
        <li>
          <a href="https://www.instagram.com/bilal_a_r04/?next=%2F">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Rustydinoco">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/bilal-achmad-84b43a274">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
