import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const serviceInfo = [
  { id: 1, info: "info1" },
  { id: 2, info: "info2" },
  { id: 3, info: "info3" },
  { id: 4, info: "info4" },
  { id: 5, info: "info5" },
];

export default function Slick() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="flex items-center">
      <div className="w-2/6">
        <h1 className="text-center font-bold text-3xl">Explore my services</h1>
      </div>
      <div className="slider-container w-4/6">
        <Slider {...settings}>
          {serviceInfo.map((D) => (
            <div
              key={D.id}
              className="bg-lime-500 py-20 px-10 border-2 mx-10 mr-24 rounded-xl"
            >
              <h1  className="text-center font-bold text-xl">{D.info}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
