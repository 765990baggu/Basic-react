import { useState, useEffect } from "react";
const useonlinestatus = () => {
  const [onlinestatus, setonline] = useState(true);
  useEffect(() => {
    //check if online
    window.addEventListener("offline", () => {
      setonline(false);
    });
    window.addEventListener("online", () => {
      setonline(true);
    });
  }, []);
  // Boolean value
  return onlinestatus;
};

export default useonlinestatus;
