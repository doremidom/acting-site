import logo from "./logo.svg";
import "./App.css";
import vid from "./videos/bg_desktop.mp4";
import mobile_vid from "./videos/bg_mobile.mp4";
import still from "./videos/bg.jpg";
import NavItem from "./NavItem";
import React, { useRef, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
  const musicRef = useRef();
  const conceptRef = useRef();
  const synopsisRef = useRef();
  const voRef = useRef();
  const photoRef = useRef();
  const contactRef = useRef();

  const [hoveredLink, setHoveredLink] = useState("");

  return (
    <div className="App">
      <div className="md:w-1/2 text-left p-4 pb-0">
          <p>
              <b>DOMINIQUE STAR</b> is an actor, singer, and musician who splits her time between Los Angeles and London. She attended Columbia University and La Sorbonne and
              spent several years as a musician in NYC and Paris.

            </p>
      </div>

      <nav
        className={`hidden  h-10 md:hover:h-10 right-0 md:flex fixed top-0 z-30 transition-[height] duration-200 overflow-hidden`}
      >
        <NavItem
          onClick={() =>
            synopsisRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-blue-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="ABOUT"
        />
        <NavItem
          onClick={() =>
            conceptRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-green-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="Videos"
        />
        <NavItem
          onClick={() =>
            photoRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-green-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="photos"
        />


        <NavItem
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-orange-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="contact"
        />
      </nav>

      <div className="relative  w-screen bg-white/95" ref={synopsisRef}>
        <div className="text-black text-left m-auto w-full md:flex relative top-1/3 bg-white p-4">
          <div className="items-center justify-center md:flex flex-col flex-1 ">
            <img src="DominiqueStar.jpg" alt="Dominique Star" />
          </div>
          <div className="md:flex flex-col flex-1 p-8 md:p-12 space-y-4">
            <h2>RECENT WORK</h2>
            <ul>
              <li><b>2025</b></li>
              <li>Summer Intensive at the <b>Royal Academy of Dramatic Arts (RADA)</b></li>
              <li>Pokemon Go campaign (how 2016)</li>
              <li><b>2024</b></li>
              <li>Music/Theatre: Perchance to Dream Concept Album (Radiohead + Hamlet) - Listen here</li>
              <li>Television: <b>Doctor Odyssey</b> (her network debut!)</li>
              <li>Film: V/H/S Beyond</li>
              <li><b>2023</b></li>
              <li>Theatre: Co-created, produced, and directed a groundbreaking adaptation of
              Hamlet told through the music of Radiohead. <a href="https://concept.perchancetodream.org/" target="_blank">
                <u>Photos & more here</u>
              </a></li>
              <li>Film: Starred as Jamie in Split, a USC MFA thesis now making the festival rounds.</li>
            </ul>

            <h2>ABOUT</h2>
            <p>
              Born in Connecticut but raised in Rhode Island, Dominique is a creative soul with the heart of a poet and the work ethic of someone who literally does not know how to chill out and do nothing. Her favorite catchphrase is "how hard can it be?"
            </p>
            <p>
              She is represented by Citizen Skull Management theatrically and
                Wildflowers Agency
              for modelling and commercials.
            </p>
            <p>Also, she knows how to code & built this website (take that, squarespace).</p>
          </div>
        </div>
      </div>

      <div className="w-screen bg-white/95 text-center py-10" ref={conceptRef}>
        <h2>Acting Reel</h2>
        <div className="m-auto mb-10 w-full md:w-1/2 h-full max-w-[800px] text-center">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/adgo3ostrAQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <h2>Here are all the instruments she can play in one convenient video:</h2>
        <div className="m-auto mb-10 w-full md:w-1/2 h-full max-w-[800px] text-center">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/DnQZBw7ePNU?si=2-2kLcK-VaCYGfP-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="relative w-screen bg-white/95 pb-10" ref={photoRef}>
        <h2>Here is her face:</h2>
        <div className="grid md:grid-cols-3 mb-8  m-auto gap-8">
          <div>
            <img
              src="DominiqueStarHeadshot1.jpg?v=11"
              alt="Dominique Star Headshot"
            />
          </div>
          <div>
            <img
              src="DominiqueStarHeadshot2.jpg?v=3"
              alt="Dominique Star Headshot"
            />
          </div>
          <div>
            <img
              src="DominiqueStarHeadshot3.jpg?v=3"
              alt="Dominique Star Headshot"
            />
          </div>
        </div>
      </div>

      <div className="relative w-screen bg-white/95 pb-10" ref={contactRef}>
        <h2 className="mb-4">Contact </h2>

        <div className="pb-10 space-y-2 underline-offset-4">
          <p>
            Email:{" "}
            <a className="underline" href="mailto:info@dominiquestar.com">
              info@dominiquestar.com
            </a>
          </p>
          <p>
            <a
              href="https://www.imdb.com/name/nm11311565/?ref_=ext_shr_lnk"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              IMDB
            </a>{" "}
            <a
              href="https://resumes.actorsaccess.com/dominiquestar"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Actors Access
            </a>
          </p>
          <p>
            Social:{" "}
            <a
              href="https://www.instagram.com/doremidom/"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Instagram
            </a>{" "}
            <a
              href="https://www.youtube.com/dominiquestar"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Youtube
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
