import logo from "./logo.svg";
import "./App.css";
import NavItem from "./NavItem";
import React, { useRef, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
function App() {
  const conceptRef = useRef();
  const synopsisRef = useRef();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <ParallaxProvider>
      <Router>
        <React.Fragment>
    <div className="App">

      <div className="h-screen w-screen splash flex" style={{ "--scroll-offset": `${scrollY}px` }}>
<ParallaxBanner
  layers={[
    {
      image: '/1.jpg',
      speed: -20,
    },
  ]}
  style={{ aspectRatio: '16 / 9' }}>
   <div className="absolute inset-0 flex items-end md:items-center justify-center">
        <h1 className="name text-[#ff9f9f] md:text-[#00ff87] text-[10vw] md:text-[6vw] font-bold mix-blend-luminosity mb-8">DOMINIQUE STAR</h1>
      </div>
  </ParallaxBanner>

      </div>

      <div className="w-screen bg-white/95 relative" ref={synopsisRef}>
        <div className="text-black text-left m-auto w-full bg-white p-4 pt-0">
      <nav
        className={`md:flex md:space-x-8 py-4 text-[4vw] md:text-lg font-bold right-0 text-center items-center justify-center `}
      >
        <div className="flex space-x-1 items-center">
            <a href="https://instagram.com/doremidom" target="_blank" rel="noreferrer">
          <img src="ig.svg"  alt="instagram" className="w-7 h-7 max-w-none hover:fill-white" />
        </a>
          <a href="https://www.imdb.com/name/nm11311565/" target="_blank" rel="noreferrer">
          <img src="im.svg"  alt="imdb" className="w-7 h-7 max-w-none hover:fill-white" />
        </a>
         <a href="https://www.youtube.com/@DominiqueStar" target="_blank" rel="noreferrer">
          <img src="yt.svg"  alt="youtube" className="w-7 h-7 max-w-none hover:fill-white" />
        </a>
        <a href="https://www.tiktok.com/@Dominique_Star" target="_blank" rel="noreferrer">
          <img src="tt.svg"  alt="tiktok" className="w-7 h-7 max-w-none hover:fill-white" />
        </a>
        <a href="https://open.spotify.com/artist/0cDL6wpZxjT9D6BqZf3tZu?si=Mr-uyh_bQMqvSktrS6r_SQ" target="_blank" rel="noreferrer">
          <img src="sp.svg"  alt="spotify" className="w-5 h-5 max-w-none hover:fill-white" />
        </a>

        </div>
        <NavItem
          bgColor="hover:bg-blue-600"

          href="/"
          label="Home"
        />
        <NavItem
          onClick={() =>
            conceptRef.current.scrollIntoView({ behavior: "smooth" })
          }
          bgColor="hover:bg-green-600"

          href="/music"
          label="Music"
        />
        <NavItem
          href="/acting"
          bgColor="hover:bg-purple-600"

          label="Acting"
        />
             <NavItem
         href="/modeling"
          bgColor="hover:bg-orange-600"

          label="Modeling"
        />

        <NavItem
          href="/contact"
          bgColor="hover:bg-yellow-300"

          label="Contact"
        />
      </nav>
          <div className="md:w-2/3 m-auto text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/music" element={<Videos />} />
            <Route exact path="/modeling" element={<Modeling />} />
            <Route exact path="/acting" element={<Acting />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </div>
      </div>

      <div className="relative w-screen bg-white/95 pb-10">
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
    </React.Fragment></Router>
    </ParallaxProvider>
  );
}

export function Home(){
  return (
    <div className="md:px-8 mt-4 space-y-6 md:w-3/4 m-auto text-left">
      DOMINIQUE STAR is an actor & musician who splits her time between Los Angeles and London. In 2025 she trained at RADA as part of their Advanced Acting for Camera Summer intensive. She was most recently seen on screen in <i>Ryan Murphy's "Doctor Odyssey"</i>, and on stage as <i>Ophelia</i> in a groundbreaking <i>Hamlet x Radiohead </i> musical, Perchance to Dream.
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/AaLxC87yG9E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="grid grid-cols-2 gap-2">
              <img className=""
              src="smile.jpg"
              alt="Dominique Star Headshot"
            />
            <img className=""
              src="DominiqueStarHeadshot1.jpg"
              alt="Dominique Star Headshot"
            />

            </div>

            </div>
          )
}

export function Videos(){
return(<div className="space-y-6">
<h2>Live Performances</h2>
  <div className="grid md:grid-cols-2 mb-8 m-auto gap-8 text-left">
      <div>
        <iframe
              className="youtube-video"
              src="https://youtube.com/embed/mgRjF9jVplg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
            Musical Theatre
          </div>
    <div>
     <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/EfPfX2_XAXk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
        Rock
        </div>
        <div>
  <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/DnQZBw7ePNU?si=2-2kLcK-VaCYGfP-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          Pop / Alternative
          </div>

<div>
            <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/ZYtzXJ9D3eo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          Folk/Acoustic
</div>
       <div>
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/F7lxNozXy5o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
        Musical Theatre
        </div>
<div>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/2DygzyNLiE0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
          Indie Pop: Music & lyrics by Dominique</div>


</div>

        <h2>Recordings:</h2>

        <div className="grid md:grid-cols-2 mb-8 m-auto gap-8">


          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/AaLxC87yG9E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
   <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/LSNu_B7FFGE?si=NV6f4lk6Pjq2QV1m&amp;start=151"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>


   <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/aq_Kll3-ld0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/gMdwXDEa-EU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>

       </div>
       </div>
)
}

export function Contact(){
  return(<>

</>)

}

export function Modeling(){
return(<div className="grid md:grid-cols-3 mb-8  m-auto gap-8">





     <img
      src="/modelling/12.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

     <img
      src="/modelling/14.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

 <img
      src="/modelling/15.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


<img
      src="/modelling/16.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

     <img
      src="/modelling/17.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

     <img
      src="/modelling/19.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


    <img
      src="/modelling/4.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


     <img
      src="/modelling/5.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


     <img
      src="/modelling/6.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


     <img
      src="/modelling/2.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

     <img
      src="/modelling/3.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

     <img
      src="/modelling/7.jpg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


     <img
      src="/modelling/9.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />

     <img
      src="/modelling/10.jpeg?version=2"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />





     <img
      src="/modelling/18.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />











</div>)
}

export function Acting(){
  return(<div className="space-y-8">
         <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/xMbrb_21RyQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
          <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/I0aP62x_Ie0 "
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>


        <div className="grid md:grid-cols-3 mb-8  m-auto gap-8">
          <div>
            <img
              src="DominiqueStarHeadshot1.jpeg?v=11"
              alt="Dominique Star Headshot"
            />
          </div>
          <div>
            <img
              src="DominiqueStarHeadshot2.jpeg?v=3"
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

        <iframe src="https://drive.google.com/file/d/1_u_DvyFNZb5CFiAEtX1mZS-veTWUttpw/preview" width="100%" title="Dominique Star acting resume"
height="800px" allow="autoplay"></iframe>

  </div>)
}
export default App;
