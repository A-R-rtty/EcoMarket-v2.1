import React from "react";
import Bienvenida from "../components/bienvenida";
import CarouselPrincipal from "../components/carousel";

function Home() {
  return (
    <>
      <CarouselPrincipal />
      <div className="container">
        <Bienvenida />
      </div>
    </>
  );
}

export default Home;
