import Slick from "../../shared/slick/Slick";
import SwiperSlider from "../../shared/swipe/SwipeSlider";
import Title from "../../shared/title/Title";

export default function Home() {
  return (
    <div className="space-y-32">
      <div>
        <SwiperSlider></SwiperSlider>
      </div>
      <div>
        <Title></Title>
      </div>
      <div>
        <Slick></Slick>
      </div>
    </div>
  );
}
