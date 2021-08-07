import React from "react";

const Body = () => {
  return (
    <div className="wholeBody">
      <div className="bodySectionOne">
        <div className="bodySectionOneText">
          <header className="bodyHeaderOne">LOREM IPSUM</header>
          <p>
            {" "}
            Dolor sit amet consectetur adipisicing elit. Animi facilis
            consequatur veritatis deserunt temporibus non ducimus officiis
            repudiandae? Quisquam adipisci.
          </p>
          <a
            href="https://www.roostergrin.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {">"} Lorem Ipsum
          </a>
        </div>
        <div className="bodySectionOneImage"></div>
      </div>
      <div className="bodySectionTwo">
        <div className="bodySectionTwoText">
          <header className="bodyHeaderOne">LOREM IPSUM</header>{" "}
          <button className="bodyButton">Button Button</button>
        </div>
      </div>
      <div className="bodySectionThree">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        adipisci quos tenetur recusandae quis fugiat exercitationem autem
        nesciunt odit labore velit voluptatem, voluptates id fuga ratione cum.
        Dignissimos, amet facere.
      </div>
      <div className="bodySectionFour">
        <div className="bodySectionFourText">
          <header>LOREM IPSUM</header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam
            mollitia atque consequatur vero. Quo, minus tempora in porro illo
            inventore, nam quos provident veritatis cupiditate aliquid beatae
            nesciunt veniam.{" "}
          </p>
          <button className="bodyButton">Button Button</button>
        </div>
      </div>
      <div className="bodySectionFive">Lorem ipsum dolor sit amet</div>
    </div>
  );
};

export default Body;
