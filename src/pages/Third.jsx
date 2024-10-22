import "./Third.css";

const Third = () => (
  <section className="third">
    <div className="third-image">
      <img src="src/assets/cell.png" />
    </div>
    <div className="third-content">
      <p style={{ color: "#D97706" }}>Services</p>
      <h1>Personalized services</h1>
      <p>
        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
        Auctor turpis semper id sit ornare maecenas lectus sed.
      </p>
      <div className="container">
        <div className="block">
          <h3>Et mauris</h3>
          <p>
            Posuere quis sed mauris non curabitur pretium elementum eget.
            Feugiat sed maecenas eu accumsan tristique.
          </p>
        </div>
        <div className="block">
          <h3>Eget sit</h3>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="block">
          <h3>Imperdiet pellentesque</h3>
          <p>
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
            viverra parturient tristique nulla.
          </p>
        </div>
        <div className="block">
          <h3>Non libero</h3>
          <p>
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
            ut sed eros, consectetur viverra.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Third;
