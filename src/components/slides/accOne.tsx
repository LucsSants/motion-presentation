import { motion } from "motion/react";
import "./slides.css";
import { Accordion } from "../accordion/accordion";
import { CardsList } from "../cards/cardsList";

function AccOne() {
  return (
    <motion.div
      className="secondContainer"
    >
        <h2>Accordion</h2>
      <div className="secondContent">
        <Accordion openedHeight={200}>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </Accordion>
      </div>
      <h2>Cards</h2>

      <div className="secondContent">
        <CardsList/>
      </div>

    </motion.div>
  );
}

export { AccOne };
