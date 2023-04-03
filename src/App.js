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
          <div className="items-center justify-center md:flex flex-col flex-1 ">
            <img
              src="DominiqueStarHeadshot1.jpeg?v=5"
              alt="Dominique Star Headshot"
            />
          </div>
          <div className="items-center justify-center md:flex flex-col flex-1 p-8 md:p-12 space-y-4">
            <p>
              Dominique Star is an actor, singer, and multi-instrumentalist from
              Rhode Island. She attended Columbia University, and spent several
              years as a musician in NYC and Paris before moving to LA.
            </p>
            <p>
              As an actor, her work on Jay Shetty's webseries has been viewed
              millions of times, and her voiceover career has spanned from
              national commercials to award winning video games. As a musician,
              she's sung with MIKA and Macy Gray, plays guitar, piano, and
              ukulele, and has had her music featured in network and streaming
              series.
            </p>

            <p>PS, she knows how to code & built this website ;)</p>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-black/95 pt-10 text-white md:pb-10"
        ref={musicRef}
      >
        <div className="lg:w-1/2 m-auto h-2/3 md:h-screen lg:h-full mb-10">
          <iframe
            className="m-auto mb-10 w-full h-full"
            src="https://drive.google.com/file/d/1_u_DvyFNZb5CFiAEtX1mZS-veTWUttpw/preview"
            allow="autoplay"
            title="Dominique Star's Acting Resume"
          ></iframe>
        </div>
        <a
          className="p-2 text-purple-400 hover:text-white border border-purple-400 mb"
          href="https://drive.google.com/uc?export=download&id=1_u_DvyFNZb5CFiAEtX1mZS-veTWUttpw"
        >
          Download Resume
        </a>
      </div>
      <div
        className="w-screen bg-black/95 text-center md:py-10 md:pt-44"
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
      </div>
      <div className="relative w-screen bg-black/95 pb-10" ref={photoRef}>
        <h2>Photos</h2>
        <div className="grid md:grid-cols-3 mb-8  m-auto gap-8">
          <div>
            <img
              src="DominiqueStarHeadshot4.jpeg?v=3"
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
              src="DominiqueStarHeadshot3.jpeg?v=3"
              alt="Dominique Star Headshot"
            />
          </div>
        </div>
        <h2>Project Stills</h2>
        <div className="grid-cols-2 md:grid-cols-3 grid">
          <div>
            <img
              src="DominiqueStarStillJayShetty.jpg"
              alt="Dominique Star in Red Flags"
            />
          </div>
          <div>
            <img src="splash.jpg" alt="Dominique Star in Perchance to Dream" />
          </div>

          <div>
            <img
              src="DominiqueStarStillJayShetty2.jpg"
              alt="Dominique Star in The Accident"
            />
          </div>
          <div>
            <img
              src="DominiqueStarStillSymphony.png"
              alt="Dominique Star in Symphony"
            />
          </div>
          <div>
            <img
              src="DominiqueStarStillJayShetty3.jpg"
              alt="Dominique Star in The Accident"
            />
          </div>
          <div>
            <img
              src="DominiqueStarStillJayShetty4.png"
              alt="Dominique Star in Red Flags"
            />
          </div>
        </div>
      </div>

      <div className="relative w-screen bg-black/95 pb-10" ref={contactRef}>
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
            </a>
            - 20k followers |{" "}
            <a
              href="https://www.youtube.com/dominiquestar"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Youtube
            </a>
            - 1.1k followers
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
