import { createContext, useContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer: (timer: Timer) => {},
    startTimers: () => {},
    stopTimers: () => {},
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error(
      "useTimersContext must be used within a TimersContextProvider"
    );
  }
  return timersCtx;
}

export { useTimersContext, TimersContextProvider };
