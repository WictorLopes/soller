import "./Fifth.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import jane from "/assets/perfil/jane.png";
import cout from "/assets/perfil/cout.png";
import cameron from "/assets/perfil/cameron.png";
import ralph from "/assets/perfil/ralph.png";
import wictor from "/assets/perfil/wictor.png";

const testimonials = [
  {
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Jane Cooper",
    consumption: "10KWh",
    img: jane,
  },
  {
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: "Ralph Edwards",
    consumption: "32KWh",
    img: ralph,
  },
  {
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    author: "Courtney Henry",
    consumption: "6KWh",
    img: cout,
  },
  {
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    author: "Cameron Williamson",
    consumption: "12KWh",
    img: cameron,
  },
  {
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    author: "Cameron Williamson",
    consumption: "12KWh",
    img: cameron,
  },
  {
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Wictor Lopes",
    consumption: "10KWh",
    img: wictor,
  },
  {
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    author: "Jane Cooper",
    consumption: "10KWh",
    img: jane,
  },
];

const Fifth = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      let cardWidth = carouselRef.current.scrollWidth / testimonials.length; // Largura padrão
  
      // Ajuste para telas pequenas
      if (window.innerWidth <= 768) {
        cardWidth = Math.min(clientWidth, 300); // Limita a largura do cartão em telas menores
      }
  
      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }
  };
  
  const handlePrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      let cardWidth = carouselRef.current.scrollWidth / testimonials.length; // Largura padrão
  
      // Ajuste para telas pequenas
      if (window.innerWidth <= 768) {
        cardWidth = Math.min(carouselRef.current.clientWidth, 300); // Limita a largura do cartão em telas menores
      }
  
      if (scrollLeft === 0) {
        carouselRef.current.scrollTo({
          left: scrollWidth, // Move para o final
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: -cardWidth,
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
          <div style={{ backgroundColor: "transparent" }}>
            <h1>Make something awesome</h1>
            <p>
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div style={{ backgroundColor: "transparent" }}>
            <button className="request-button">
              Request a Quote{"  "}
              <FontAwesomeIcon
                style={{ marginLeft: "8px", backgroundColor: "transparent" }}
                icon={faArrowRight}
              />
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
          <div className="arrowsResponsive">
            <button className="arrow" onClick={handlePrev}>
              <FontAwesomeIcon
                style={{ marginLeft: "8px", backgroundColor: "transparent" }}
                icon={faArrowLeft}
              />
            </button>
            <button className="arrow" onClick={handleNext}>
              <FontAwesomeIcon
                style={{ marginLeft: "8px", backgroundColor: "transparent" }}
                icon={faArrowRight}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
