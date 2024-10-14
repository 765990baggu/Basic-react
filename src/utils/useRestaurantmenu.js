import { Menu_Api } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_Api + resId);
    const json = await data.json();
    console.log(json);
    setresinfo(json);
  };
  return resinfo;
};
export default useRestaurantmenu;
