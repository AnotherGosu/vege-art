"use client";

import { StateMachineProvider, createStore } from "little-state-machine";

import { STORE } from "@/constants/store";

createStore(STORE, {
  storageType: typeof window !== "undefined" ? window.localStorage : undefined,
});

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return <StateMachineProvider>{children}</StateMachineProvider>;
};
