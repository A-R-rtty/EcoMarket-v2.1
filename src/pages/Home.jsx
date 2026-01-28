import React from "react";
import Bienvenida from "../components/bienvenida";
import CarouselPrincipal from "../components/carousel";
import CardNosotros from "../components/cardNosotros";

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
