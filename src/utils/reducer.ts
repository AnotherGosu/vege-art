import { GlobalState } from "little-state-machine";

export const savePrompt = (
  state: GlobalState,
  payload: string,
): GlobalState => {
  const updatedPrompts = state.prompts.filter((prompt) => prompt !== payload);

  return { ...state, prompts: [payload, ...updatedPrompts] };
};

export const removePrompt = (
  state: GlobalState,
  payload: string,
): GlobalState => {
  const updatedPrompts = state.prompts.filter((prompt) => prompt !== payload);

  return { ...state, prompts: updatedPrompts };
};
