import React, { useCallback, useEffect, useState } from "react";

const FunctoinExample = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    return () => {
      console.log("버튼 리렌더링");
    };
  }, [number]);

  useEffect(() => {
    alert("mount");
    return () => {
      alert("unmount");
    };
  }, []);

  const handleNumber = useCallback(() => {
    setNumber(number + 1);
  });

  return <button onClick={handleNumber}>나는버튼</button>;
};

export default FunctoinExample;
