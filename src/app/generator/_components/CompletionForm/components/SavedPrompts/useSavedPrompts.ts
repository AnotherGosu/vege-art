import { useStateMachine } from "little-state-machine";

import { removePrompt } from "@/utils/reducer";

export const useSavedPrompts = () => {
  const {
    state: { prompts },
    actions,
  } = useStateMachine({ removePrompt });

  const onRemovePrompt = (template: string) => {
    actions.removePrompt(template);
  };

  return {
    prompts,
    onRemovePrompt,
  };
};
