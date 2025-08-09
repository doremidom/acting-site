import logo from "./logo.svg";
import "./App.css";
import NavItem from "./NavItem";
import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const conceptRef = useRef();
  const synopsisRef = useRef();
  const photoRef = useRef();
  const contactRef = useRef();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <Router>
        <React.Fragment>
    <div className="App">
      {/* <div className="md:w-1/2 text-left p-4 pb-0">
          <p>
              <b>DOMINIQUE STAR</b> is an actor, singer, and musician who splits her time between Los Angeles and London. She attended Columbia University and La Sorbonne and
              spent several years as a musician in NYC and Paris.
            </p>
      </div> */}
      <div className="h-screen splash flex items-center justify-center" style={{ "--scroll-offset": `${scrollY}px` }}>
       <svg
          className="fixed-svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
             <rect width="100%" height="100%" fill="white" />
            {/* Text mask — will scroll because it's positioned relative */}
            <mask id="text-mask" maskUnits="userSpaceOnUse" >
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="800"
                fontSize="7rem"
                fill="#242424"
                className="scrolling-mask-text"
                paintOrder="stroke"
              >
                DOMINIQUE STAR
              </text>
            </mask>

            {/* Grayscale filter */}
            <filter id="toGray">
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>

          {/* Fixed-position grayscale image */}
          <image
            href="/bgcolor.jpg"
            width="1200"
            height="800"
            preserveAspectRatio="xMinYMin slice"
            filter="url(#toGray)"
            mask="url(#text-mask)"
          />
        </svg>
      </div>

      <div className="w-screen bg-white/95 relative" ref={synopsisRef}>
        <div className="text-black text-left m-auto w-full bg-white p-4 pt-0">
      <nav
        className={`flex py-4  text-lg font-bold right-0 text-center items-center justify-center space-x-4 `}
      >
        <div className="flex space-x-1 mr-1 items-center">
            <a href="https://instagram.com/doremidom" target="_blank" rel="noreferrer">
          <img src="ig.svg"  alt="instagram" className="w-5 h-5 max-w-none hover:fill-white" />
        </a>
         <a href="https://www.youtube.com/@DominiqueStar" target="_blank" rel="noreferrer">
          <img src="yt.svg"  alt="youtube" className="w-5 h-5 max-w-none hover:fill-white" />
        </a>
        <a href="https://www.tiktok.com/@Dominique_Star" target="_blank" rel="noreferrer">
          <img src="tt.svg"  alt="tiktok" className="w-5 h-5 max-w-none hover:fill-white" />
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
          <div className="w-2/3 m-auto text-center">
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
    </React.Fragment></Router>
  );
}

export function Home(){
  return (
    <div className="px-8 mt-4 space-y-4 md:w-2/3 m-auto text-left">
            <p>
            Most recently seen on Ryan Murphy's Doctor Odyssey, Dominique Star is a multi-hyphenate actor-musician-model-writer with the heart of a poet and the work ethic of someone who literally does not know how to chill out and do nothing. Her favorite catchphrase is "how hard can it be?"
            </p>
            <p>
              She is represented by Citizen Skull Management and Wildflowers Agency.
            </p>
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/AaLxC87yG9E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <img className=""
              src="DomGuitars.jpg"
              alt="Dominique Star Headshot"
            /></div>
          )
}

export function Videos(){
return(<div className="space-y-6">
<h2>Live Performances</h2>
  <div className="grid md:grid-cols-2 mb-8 m-auto gap-8">
     <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/EfPfX2_XAXk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
  <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/DnQZBw7ePNU?si=2-2kLcK-VaCYGfP-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

            <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/ZYtzXJ9D3eo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/F7lxNozXy5o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>

         <div>
<iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/w2SThs5QNtE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
          Music & lyrics by Dominique</div>
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
          Music & lyrics by Dominique</div>


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
            src="https://www.youtube.com/embed/FxIYQ2WJZEs"
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
            src="https://www.youtube.com/embed/7nfTAWALE_s"
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
  return(<></>)

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
      src="/modelling/10.jpeg"
      alt="Dominique Star Headshot"
      className="triggerIMAGG"
    />


     <img
      src="/modelling/11.jpeg"
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
          src="https://www.youtube.com/embed/adgo3ostrAQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>

<iframe src="https://drive.google.com/file/d/1_u_DvyFNZb5CFiAEtX1mZS-veTWUttpw/preview" width="100%" title="Dominique Star acting resume"
height="800px" allow="autoplay"></iframe>
        <div className="grid md:grid-cols-2 mb-8  m-auto gap-8">
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
              <div>
            <img
              src="DominiqueStarHeadshot4.jpg?v=3"
              alt="Dominique Star Headshot"
            />
          </div>
        </div>

  </div>)
}
export default App;
