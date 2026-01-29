import React from "react";
import Bienvenida from "../organismos/bienvenida";
import CarouselPrincipal from "../organismos/carousel";
import CardNosotros from "../moleculas/cardNosotros";

function Home() {
  return (
    <>
      <CarouselPrincipal />
      <div className="container">
        <Bienvenida />
        <CardNosotros/>
      </div>
    </>
  );
}

export default Home;
