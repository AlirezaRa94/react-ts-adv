import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
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

type TimersActionAdd = {
  type: "timer/add";
  payload: Timer;
};

type TimersActionStart = {
  type: "timers/start";
};

type TimersActionStop = {
  type: "timers/stop";
};

type TimersAction = TimersActionAdd | TimersActionStart | TimersActionStop;

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

function timersReducer(state: TimersState, action: TimersAction): TimersState {
  switch (action.type) {
    case "timer/add":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    case "timers/start":
      return { ...state, isRunning: true };
    case "timers/stop":
      return { ...state, isRunning: false };
    default:
      return state;
  }
}

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [{ isRunning, timers }, dispatch] = useReducer(
    timersReducer,
    initialState
  );

  const ctx: TimersContextValue = {
    isRunning,
    timers,
    addTimer: (timer: Timer) => dispatch({ type: "timer/add", payload: timer }),
    startTimers: () => dispatch({ type: "timers/start" }),
    stopTimers: () => dispatch({ type: "timers/stop" }),
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
