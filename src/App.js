import logo from "./logo.svg";
import "./App.css";
import styles from "./index.css";
import vid from "./videos/bg_med.mp4";
import still from "./videos/bg.jpg";
import NavItem from "./NavItem";
import React, { useRef, useState } from "react";

function App() {
  const musicRef = useRef();
  const conceptRef = useRef();
  const synopsisRef = useRef();

  const [hoveredLink, setHoveredLink] = useState("");

  return (
    <div className="App">
      <video id="bg-video" loop autoPlay muted playsInline poster={still}>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav
        className={`w-screen h-10 md:hover:h-10 flex fixed top-0 z-30  transition-[height] duration-200 overflow-hidden`}
      >
        <NavItem
          onClick={() =>
            synopsisRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-blue-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="bio"
        />
        <NavItem
          onClick={() =>
            musicRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onHover={setHoveredLink}
          bgColor="hover:border-pink-600"
          hoveredLink={hoveredLink}
          label="resume"
        />
        <NavItem
          onClick={() =>
            conceptRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-green-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="media"
        />
        <NavItem
          onClick={() =>
            conceptRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:border-orange-600"
          onHover={setHoveredLink}
          hoveredLink={hoveredLink}
          label="voiceover"
        />
      </nav>
      <div className="w-screen h-screen m-auto text-center uppercase text-white">
        <div className="w-full h-full bg-black/50">
          <div className="relative top-1/3">
            <div className="text-5xl relative top-1/3  md:text-[96px]">
              Dominique Star
            </div>
            <div className="text-xl md:text-2xl">Actor, Singer, Musician</div>
          </div>
        </div>
      </div>
      <div className="relative  w-screen bg-black/95" ref={synopsisRef}>
        <div className="text-white text-left m-auto w-full md:flex relative top-1/3 bg-black p-4">
          <div className="items-center justify-center md:flex flex-col ">
            <img
              src="DominiqueStarHeadshot.jpg"
              alt="Dominique Star Headshot"
            />
          </div>
          <div className="items-center justify-center md:flex flex-col p-8">
            <p>
              Dominique Star is an actor, singer, and multi-instrumentalist from
              Rhode Island. She attended Columbia University and spent several
              years as a musician in NYC and Paris before moving to LA. She's
              drawn to free-spirited, sarcastic, edgy, artsy characters.
            </p>

            <p className="mt-4">
              As a musician, she's sung on stage with MIKA, has played guitar
              and piano since the age of 14, and has had her music featured in
              network and streaming series across the globe.
            </p>

            <p className="mt-4">
              As an actor, her work on Jay Shetty's webseries has been viewed
              millions of times across social media, and her voiceover career
              has spanned from national commercials to award winning video games
              such as Yi and the Thousand Moons.
            </p>
            <p className="mt-4">
              PS, she knows how to code & built this website :)
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-black/95 pt-10 text-white pb-10"
        ref={musicRef}
      >
        <div className="lg:w-1/2 m-auto h-full mb-10">
          <iframe
            className="m-auto mb-10 w-full h-full"
            src="https://drive.google.com/file/d/1gLynsLkuVIZpZWK2QtXW2fcmWoaD9qtE/preview"
            allow="autoplay"
            title="Dominique Star's Acting Resume"
          ></iframe>
        </div>
        <a
          className="p-2 bg-purple-600 border border-white mb"
          href="https://drive.google.com/uc?export=download&id=1gLynsLkuVIZpZWK2QtXW2fcmWoaD9qtE"
        >
          Download Resume
        </a>
      </div>
      <div
        className="w-screen bg-black/95 text-center py-10 pt-44"
        ref={conceptRef}
      >
        <h2>THEATRICAL & MUSIC REEL</h2>

        <iframe
          className="m-auto mb-10 w-full md:w-1/2 h-[315px] max-w-[600px]"
          src="https://www.youtube.com/embed/Pmpls4-jzNg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <br />
        <div className="md:flex justify-center gap-12">
          <div>
            <h3>ACTING</h3>
            <iframe
              className="m-auto max-w-[400px] w-full h-[200px]"
              src="https://www.youtube.com/embed/sUmdYp4qSn0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <br />
            <iframe
              className="m-auto max-w-[400px] w-full h-[200px]"
              src="https://www.youtube.com/embed/ZYgrNwUBcR0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <h3>MUSIC</h3>
            <iframe
              src="https://www.youtube.com/embed/2DygzyNLiE0"
              title="YouTube video player"
              className="m-auto max-w-[400px] w-full h-[200px]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <br />

            <iframe
              src="https://www.youtube.com/embed/3HV8pl1ERbo?start=271"
              title="YouTube video player"
              frameBorder="0"
              className="m-auto max-w-[400px] w-full h-[200px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <br />
          </div>
        </div>
        <div className="pb-10">
          <h3>SOCIAL MEDIA</h3>
          <a
            href="https://www.instagram.com/doremidom/"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            Instagram
          </a>
          - 20k followers |{" "}
          <a
            href="https://www.instagram.com/doremidom/"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            Youtube
          </a>
          - 1.1k followers
        </div>
      </div>
    </div>
  );
}

export default App;
