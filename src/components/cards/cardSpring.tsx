import { useSpring, animated } from "@react-spring/web";
import "./cards.css";
import { useDrag } from "react-use-gesture";

function CardSpring({
  name,
  handlePop,
}: {
  name: string;
  handlePop: () => void;
}) {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 100, friction: 15, bounce:0 },
  }));

  const bindDrag = useDrag(
    ({ down, offset }) => {
      api.start({
        x: offset[0],
        immediate: true,
      });

      if (!down) {
        if (offset[0] > 90) {
          api.start({ x: 200, y: 250, config: {duration: 200} ,onRest: () => handlePop() });

          return;
        }

        if (offset[0] < -90) {
          api.start({ x: -200, y: 250, config: {duration: 200} , onResolve: () => handlePop() });
          return;
        }
        api.start({
          x: 0,
        });
      }

      console.log(offset[0]);
    },
    { axis: "x", bounds: { right: 100, left: -100 }, rubberband: false }
  );

  const rotate = x.to([-150, 0, 150], [-35, 0, 35]);
  const opacity = x.to([-150, 0, 150], [0.7, 1, 0.7]);

  return (
    <animated.div
      {...bindDrag()}
      style={{ x, rotate, opacity, y }}
      className="cardSpring"
      onDragEnd={() => console.log("dragended")}
    >
      <p>{name}</p>
    </animated.div>
  );
}

export { CardSpring };
