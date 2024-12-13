import Container from "./UI/Container.tsx";
import {
  Timer as TimerProps,
  useTimersContext,
} from "../contexts/TimersContext.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const [durationLeft, setDurationLeft] = useState<number>(duration * 1000);
  const { isRunning } = useTimersContext();
  const interval = useRef<number | null>(null);

  const hasFinished = durationLeft <= 0 || !isRunning;

  useEffect(() => {
    if (hasFinished) {
      interval.current && clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(() => {
      setDurationLeft((prevDuration) => prevDuration - 50);
    }, 50);

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [hasFinished]);

  const formattedDurationLeft = (durationLeft / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress value={durationLeft} max={duration * 1000}>
          {durationLeft}
        </progress>
      </p>
      <p>{formattedDurationLeft}s</p>
    </Container>
  );
}
