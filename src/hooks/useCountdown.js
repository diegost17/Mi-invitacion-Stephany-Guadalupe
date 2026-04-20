import { useEffect, useState } from "react";

export default function useCountdown(date) {
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(date) - new Date();

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return time;
}