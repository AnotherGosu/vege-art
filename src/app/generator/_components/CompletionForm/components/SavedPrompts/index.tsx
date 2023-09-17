import { Record } from "./components/Record";
import { RemoveButton } from "./components/RemoveButton";

import { useSavedPrompts } from "./useSavedPrompts";

interface SavedPromptsProps {
  onPromptChange: (prompt: string) => void;
}

export default function SavedPrompts({ onPromptChange }: SavedPromptsProps) {
  const { prompts, onRemovePrompt } = useSavedPrompts();

  return (
    <section>
      <h3 className="mb-2 font-medium">Saved prompts</h3>

      <div className="flex flex-col gap-2">
        {prompts.map((prompt, idx) => (
          <article
            key={prompt + idx}
            className="grid grid-cols-[1fr_max-content] gap-2"
          >
            <Record
              prompt={prompt}
              onPrompt={() => onPromptChange(prompt)}
            />

            <RemoveButton onRemove={() => onRemovePrompt(prompt)} />
          </article>
        ))}
      </div>
    </section>
  );
}
