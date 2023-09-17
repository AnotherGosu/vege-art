import { useStateMachine } from "little-state-machine";

import { savePrompt } from "@/utils/reducer";

interface UseControlsArgs {
  prompt: string;
}

export const useControls = ({ prompt }: UseControlsArgs) => {
  const { actions } = useStateMachine({ savePrompt });

  const onSavePrompt = () => {
    actions.savePrompt(prompt);
  };

  return { onSavePrompt };
};
