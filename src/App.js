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
      <BrowserView>
        <video id="bg-video" loop autoPlay muted playsInline poster={still}>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </BrowserView>
      <MobileView>
        <video id="bg-video" loop autoPlay muted playsInline poster={still}>
          <source src={mobile_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MobileView>
      {/*
      <nav
        className={`w-screen h-10 md:hover:h-10 flex fixed top-0 z-30 transition-[height] duration-200 overflow-hidden`}
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
      </nav> */}
      <div className="w-screen h-screen m-auto text-center uppercase text-black">
        <div className="w-full h-full bg-white/50">
          <div className="relative top-1/3">
            <div className="text-5xl relative top-1/3  md:text-[96px] font-thin">
              Dominique Star
            </div>
            <div className="text-xl md:text-2xl">Actor, Singer, Musician</div>
          </div>
        </div>
      </div>
      <div className="relative  w-screen bg-white/95" ref={synopsisRef}>
        <div className="text-black text-left m-auto w-full md:flex relative top-1/3 bg-white p-4">
          <div className="items-center justify-center md:flex flex-col flex-1 ">
            <img src="jackieng1.jpg" alt="Dominique Star Headshot" />
          </div>
          <div className="items-center justify-center md:flex flex-col flex-1 p-8 md:p-12 space-y-4">
            <p>
              Dominique Star is an actor, singer, and multi-instrumentalist from
              Rhode Island. She attended Columbia University and La Sorbonne,
              and spent several years as a musician in NYC and Paris before
              moving to LA.
            </p>
            <p>
              In 2023 she co-created & directed a groundbreaking adaptation of
              Hamlet told through the music of Radiohead. It premiered to a
              sold-out 400 person concert in Los Angeles. You can read about it{" "}
              <a href="https://concept.perchancetodream.org/" target="_blank">
                <u>here</u>
              </a>
              . If you happen to know Radiohead she would very much like to talk
              to them.
            </p>

            <p>
              As a musician, she's sung with MIKA and Macy Gray, plays guitar,
              piano, drums, bass, and ukulele, and has had her music featured in
              network and streaming series.
            </p>
            <p>
              2024 has been her busiest year yet, with roles in two feature
              films and a new ABC series.
            </p>

            <p>
              She is managed by Citizen Skull Management theatrically and the
              Bella Agency for modelling.
            </p>

            <p>PS, she knows how to code & built this website ;)</p>

            <a
              className="p-2 text-purple-400 hover:text-white border border-purple-400 mb"
              href="https://drive.google.com/uc?export=download&id=1_u_DvyFNZb5CFiAEtX1mZS-veTWUttpw"
            >
              Download Acting Resume
            </a>
          </div>
        </div>
      </div>

      <div className="w-screen bg-white/95 text-center py-10" ref={conceptRef}>
        <h2>Theatrical Reel</h2>
        <div className="m-auto mb-10 w-full md:w-1/2 h-full max-w-[800px] text-center">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/S-FWUwGFQcg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <h2>Music Reel</h2>
        <div className="m-auto mb-10 w-full md:w-1/2 h-full max-w-[800px] text-center">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/S2LNrdgm-Qc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="relative w-screen bg-white/95 pb-10" ref={photoRef}>
        <h2>Headshots</h2>
        <div className="grid md:grid-cols-3 mb-8  m-auto gap-8">
          <div>
            <img
              src="DominiqueStarHeadshot3.jpeg?v=3"
              alt="Dominique Star Headshot"
            />
          </div>
          <div>
            <img
              src="DominiqueStarHeadshot1.jpeg?v=10"
              alt="Dominique Star Headshot"
            />
          </div>
          <div>
            <img
              src="DominiqueStarHeadshot4.jpeg?v=3"
              alt="Dominique Star Headshot"
            />
          </div>
        </div>
        <h2>Project Stills</h2>
        <div className="grid-cols-2 md:grid-cols-3 grid">
          <div>
            <img
              src="DoctorOdysseyPhillippaSooDominiqueStar.jpg"
              alt="Phillippa Soo and Dominique Star in Doctor Odyssey"
            />
          </div>
          <div>
            <img src="DominiqueStarSplit.png" alt="Dominique Star in Split" />
          </div>
          <div>
            <img src="DominiqueStarSplit2.png" alt="Dominique Star in Split" />
          </div>
          <div>
            <img
              src="DoctorOdysseyChordOverstreetDominiqueStar.jpg"
              alt="Chord Overstreet and Dominique Star in Doctor Odyssey"
            />
          </div>
          <div>
            <img src="splash.jpg" alt="Dominique Star in Perchance to Dream" />
          </div>
          <div>
            <img src="DSsplit5.png" alt="Dominique Star in Split" />
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
