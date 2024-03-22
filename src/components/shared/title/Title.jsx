import { useState } from "react";
import "./styles.css";

export default function Title() {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  const mouseOver = () => setHovered(true);
  const mouseLeave = () => setHovered(false);
  const mouseOver1 = () => setHovered1(true);
  const mouseLeave1 = () => setHovered1(false);
  const mouseOver2 = () => setHovered2(true);
  const mouseLeave2 = () => setHovered2(false);
  return (
    <div className="relative">
      <div>
        <div className="">
          <h1
            id="title"
            className="relative"
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            Our Product
          </h1>
          {hovered && (
            <img
              className=" h-44 w-44 absolute right-72 top-10"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="">
        <h1
          id="title"
          className="relative"
          onMouseOver={mouseOver1}
          onMouseLeave={mouseLeave1}
        >
          New journey
        </h1>
        {hovered1 && (
          <img
            className="h-44 w-44 absolute right-80 top-16"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
          />
        )}
      </div>
      <div className="">
        <h1
          id="title"
          className="relative"
          onMouseOver={mouseOver2}
          onMouseLeave={mouseLeave2}
        >
          Released
        </h1>
        {hovered2 && (
          <img
            className=" h-44 w-44 absolute right-96 top-24"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt=""
          />
        )}
      </div>
    </div>
  );
}
