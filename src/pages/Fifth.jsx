import "./Fifth.css";
import { useRef } from "react";

import jane from "/assets/perfil/jane.png";
import cout from "/assets/perfil/cout.png";
import cameron from "/assets/perfil/cameron.png";
import ralph from "/assets/perfil/ralph.png";

const testimonials = [
  {
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla.",
    author: "Jane Cooper",
    consumption: "10KWh",
    img: jane,
  },
  {
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Mattis pharetra accumsan eget.",
    author: "Ralph Edwards",
    consumption: "32KWh",
    img: ralph,
  },
  {
    text: "Viverra lacus suspendisse elit. Duis enim semper fermentum consequat aenean libero.",
    author: "Courtney Henry",
    consumption: "6KWh",
    img: cout,
  },
  {
    text: "Hendrerit augue ut nec, senectus quis integer netus. Mauris egestas feugiat leo.",
    author: "Cameron Williamson",
    consumption: "12KWh",
    img: cameron,
  },
  {
    text: "Hendrerit augue ut nec, senectus quis integer netus. Mauris egestas feugiat leo.",
    author: "Cameron Williamson",
    consumption: "12KWh",
    img: cameron,
  },
];

const Fifth = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const cardWidth = carouselRef.current.scrollWidth / testimonials.length;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Se chegamos ao final, volte ao início
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: cardWidth, // Ajuste para o tamanho de cada card
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;

      const cardWidth = carouselRef.current.scrollWidth / testimonials.length; // Calcula a largura média de cada card

      // Se estamos no início do carrossel, role para o final
      if (scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: scrollWidth, // Move para o final
          behavior: "smooth",
        });
      } else {
        // Se não estamos no início, role para o card anterior
        carouselRef.current.scrollBy({
          left: -cardWidth, // Ajuste para o tamanho de cada card
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="fifth">
      <div className="fifth-content">
        <p style={{ color: "#FCD34D", backgroundColor: "transparent" }}>
          Join other Sun harvesters
        </p>
        <div className="fifth-text">
          <div style={{ backgroundColor: "transparent"    }}>
            <h1>Make something awesome</h1>
            <p>
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div style={{ backgroundColor: "transparent" }}>
            <button className="request-button">
              Request a Quote{" "}
              <span style={{ backgroundColor: "transparent" }}>→</span>
            </button>
          </div>
        </div>

        {/* Contêiner do Carrossel */}
        <div className="carousel-wrapper">
          <div className="carousel" ref={carouselRef}>
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <p>{item.text}</p>
                <div className="author-info">
                  <img src={item.img} alt={item.author} />
                  <div>
                    <strong>{item.author}</strong>
                    <p>{item.consumption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="arrow" onClick={handlePrev}>
            ←
          </button>
          <button className="arrow" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
