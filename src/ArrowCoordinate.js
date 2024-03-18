import { useEffect, useState } from "react";

function ArrowCordinate() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", pushPosition);
    return () => {
      window.addEventListener("mousemove", pushPosition);
      console.log("clean events row");
    };
  }, []);

  function pushPosition(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div>
      <p>
        {position.x} - {position.y}
      </p>
    </div>
  );
}

export default ArrowCordinate;
