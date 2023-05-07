import { useRef } from "react";

import "./App.css";

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const OrderRef = useRef(null);
  const ContactRef = useRef(null);
  const __image__wrap = useRef(null);

  const HomehandleMouseMove = (event) => {
    HomeRef.current.style.cursor = "pointer";
    __image__wrap.current.style.marginTop = "0px";
  };
  const AbouthandleMouseMove = (event) => {
    AboutRef.current.style.cursor = "pointer";
    __image__wrap.current.style.marginTop = "-50vh";
  };
  const OrderhandleMouseMove = (event) => {
    OrderRef.current.style.cursor = "pointer";
    __image__wrap.current.style.marginTop = "-100vh";
  };
  const ContacthandleMouseMove = (event) => {
    ContactRef.current.style.cursor = "pointer";
    __image__wrap.current.style.marginTop = "-150vh";
  };

  return (
    <>
      <div className="hover__container">
        <div className="hover__left">
          <div className="hover__left__menu">
            <h1 id="home" onMouseMove={HomehandleMouseMove} ref={HomeRef}>
              Home
            </h1>
            <h1 id="about" onMouseMove={AbouthandleMouseMove} ref={AboutRef}>
              About
            </h1>
            <h1 id="order" onMouseMove={OrderhandleMouseMove} ref={OrderRef}>
              Order
            </h1>
            <h1
              id="contact"
              onMouseMove={ContacthandleMouseMove}
              ref={ContactRef}
            >
              Contact
            </h1>
          </div>
        </div>
        <div className="hover__right">
          <div className="__image__wrap">
            <div className="__image__slide__wrap" ref={__image__wrap}>
              <div className="__image__slide__one images__"></div>
              <div className="__image__slide__two images__"></div>
              <div className="__image__slide__three images__"></div>
              <div className="__image__slide__four images__"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
