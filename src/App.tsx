import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/button/button";
import { Title } from "./components/slides/title";
import { PassionPage } from "./components/slides/passtionPage";
import { NextButton } from "./components/slides/nextButton";
import { Intro } from "./components/slides/introdução";
import { AccOne } from "./components/slides/accOne";
import { PresencePage } from "./components/slides/presence";
import { Imple } from "./components/slides/imple";
import { End } from "./components/slides/end";
import { Motion } from "./components/slides/motion";

function SlideWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // Garante animação única por slide
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100vw", height: "100vh", position: "relative" }} // 🔥 Garante tamanho total
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);

  const slides = [
    <Title key="title" />,
    <PassionPage key="animation" />,  
    <Intro key="intro" />,
    <Motion key="motion"/>,
    <AccOne key="AccOne" />,
    <PresencePage key="PresencePage" />,
    <Imple key="Imple" />,
    <End key="End"/>
  ];

  function nextSlide() {
    setCurrentSlide((prev) =>
      prev !== null && prev < slides.length - 1 ? prev + 1 : prev
    );
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }

  return (
    <div className="main-container">
      {currentSlide === null ? (
        <Button title="Começar" onClick={() => setCurrentSlide(0)} />
      ) : (
        <>
          <SlideWrapper>{slides[currentSlide]}</SlideWrapper>
          <NextButton
            title="Anterior"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            left
          />
          <NextButton
            title="Próximo"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          />
        </>
      )}
    </div>
  );
}

export default App;
