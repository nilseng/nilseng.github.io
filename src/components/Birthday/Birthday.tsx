import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import muttern from "./muttern.jpeg";
import eggen from "./romsdalseggen.jpg";
import "./Birthday.scss";

export const Birthday = () => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showGift, setShowGift] = useState<boolean>(false);
  const [randomColor, setRandomColor] = useState<string>();

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleShowGift = () => {
    setShowGift(true);
  };

  useEffect(() => {
    setInterval(generateRandomColor, 500);
  }, []);

  const generateRandomColor = () => {
    const rgb = Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor("#" + rgb);
  };

  return (
    <Container className="text-light w-100 py-5">
      <h3>Gratulerer med dagen!</h3>
      <p>Hvem har bursdag sier du?</p>
      <Button onClick={handleShowImage}>Trykk her!</Button>
      {showImage && (
        <div>
          <Image src={muttern} className="spin-2s mw-100 w-sm-60 py-4" />
          <p>Det er mamma som har bursdag. Jeeeeee!:D</p>
        </div>
      )}
      {showImage && (
        <>
          <p>Hva er gaven fra Kaja, Oda og Teodor sier du?</p>
          <Button onClick={handleShowGift}>Trykk her!</Button>
          {showGift && (
            <>
              <h1 style={{ color: randomColor }}>TUR!!!</h1>
              <div>
                <Image src={eggen} className="scale-2s mw-100 w-sm-60 py-4" />
              </div>
              Vi setter av 10.-12. september og foreslår Romsdalseggen! Blir den
              for tøff, finnes det andre muligheter i området. Vi har booket
              overnatting på{" "}
              <a href="https://www.heinali.no/index.html">Heinåli-hytta</a>.
              Gratulerer til{" "}
              <span
                className="spin-2s delay-2s"
                style={{ color: randomColor, display: "inline-block" }}
              >
                KARI NILSENG
              </span>
            </>
          )}
        </>
      )}
    </Container>
  );
};
