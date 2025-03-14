import { useState } from "react";

function Viewer() {
  const [currentCount] = useState(0);
  return (
    <>
      <p>현재 카운트:</p>
      <p>{currentCount}</p>
    </>
  );
}

export default Viewer;
