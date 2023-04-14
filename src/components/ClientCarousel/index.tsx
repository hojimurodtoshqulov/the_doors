import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore from "swiper";
import styles from "./carousel.module.scss";
import { MutableRefObject, useRef } from "react";

function ClientCarousel() {
  const swiperRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          swiperRef.current;
        }}
      >
        qweqwe
      </button>
      <Swiper loop navigation ref={swiperRef}>
        <SwiperSlide>
          <div className={styles.card}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            quod nihil veritatis deserunt ipsam error totam officia ea inventore
            facere repellendus voluptatibus corporis, minima non facilis unde et
            fuga quam. Ea voluptatibus maxime voluptatem. Nemo ipsum est ad
            aliquam impedit! Omnis ipsum ducimus unde. Sapiente dolorem
            recusandae, deserunt vitae id ab, repellendus distinctio laborum,
            minus obcaecati ipsum vel. Beatae provident vero quam error sapiente
            debitis possimus cumque vitae suscipit neque quis ipsa omnis
            accusantium, totam asperiores quaerat, ullam rem molestias deserunt.
            Voluptate ipsa rem commodi eum mollitia quam eius odio. Officia
            fugit mollitia illum quas aliquid perspiciatis alias, excepturi,
            laudantium voluptates unde eos assumenda facere suscipit consequatur
            recusandae sequi dicta, ex dolore! Ratione deserunt, laudantium vel
            harum saepe magnam iste! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde veniam ut eveniet deserunt nesciunt iste ab
            ipsa, repellat porro ex ullam maiores omnis aut corporis
            accusantium, aspernatur quisquam laborum reprehenderit sint quaerat
            facilis quidem incidunt? Quia optio ex doloribus, quam repellendus
            voluptates. Asperiores ex dolorum itaque accusantium recusandae?
            Magni voluptatum voluptas eum provident. Repellendus, a sed esse
            doloribus dicta praesentium non labore, delectus ea quae eaque!
            Beatae repellendus rem possimus culpa amet ullam. Ullam, praesentium
            doloribus exercitationem reprehenderit eum, quisquam dolorum
            veritatis consectetur voluptas expedita temporibus, soluta debitis
            illo vitae architecto magnam pariatur quo nam sunt autem aspernatur
            nisi excepturi?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ClientCarousel;
