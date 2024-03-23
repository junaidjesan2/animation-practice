import { useState } from "react";
import "./styles.css";

import { motion } from "framer-motion";

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
          <motion.h1
            initial={{ x: -1000 }}
            transition={{
              duration: 2,
            }}
            animate={{ x: 0 }}
            id="title"
            className="relative"
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            Our Product
          </motion.h1>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,}}
              transition={{ duration: 1 }}
            >
              <img
                className=" h-44 w-44 absolute right-72 top-10 opacity-70"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt=""
              />
            </motion.div>
          )}
        </div>
      </div>
      <div className="">
        <motion.h1
          initial={{ x: -1000 }}
          transition={{
            duration: 3,
          }}
          animate={{ x: 0 }}
          id="title"
          className="relative"
          onMouseOver={mouseOver1}
          onMouseLeave={mouseLeave1}
        >
          New journey
        </motion.h1>
        {hovered1 && (
          <motion.div
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-44 w-44 absolute right-80 top-16 opacity-70"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt=""
            />
          </motion.div>
        )}
      </div>
      <div className="">
        <motion.h1
          initial={{ x: -1000 }}
          transition={{
            duration: 4,
          }}
          animate={{ x: 0 }}
          id="title"
          className="relative"
          onMouseOver={mouseOver2}
          onMouseLeave={mouseLeave2}
        >
          Released
        </motion.h1>
        {hovered2 && (
          <motion.div
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className=" h-44 w-44 absolute right-96 top-24"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt=""
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
