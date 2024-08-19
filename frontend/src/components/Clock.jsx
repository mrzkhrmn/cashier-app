import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const day = ("0" + time.getDay()).slice(-2);
  const month = ("0" + time.getMonth()).slice(-2);
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = ("0" + time.getMinutes()).slice(-2);
  const seconds = ("0" + time.getSeconds()).slice(-2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-end">
      <h2 className="text-lg">
        {day}/{month}/{year}
      </h2>
      <h2 className="text-lg">
        {hours}:{minutes}:{seconds}
      </h2>
    </div>
  );
};
