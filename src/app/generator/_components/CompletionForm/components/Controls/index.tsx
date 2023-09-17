import { useControls } from "./useControls";

interface ControlsProps {
  prompt: string;
  isLoading: boolean;
  isPrompt: boolean;
  stop: () => void;
}

export const Controls = ({
  prompt,
  isLoading,
  isPrompt,
  stop,
}: ControlsProps) => {
  const { onSavePrompt } = useControls({ prompt });

  return (
    <div className="flex justify-between gap-2">
      <button
        type="button"
        className="btn-primary"
        onClick={onSavePrompt}
      >
        Save
      </button>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading || !isPrompt}
          className="btn-primary"
        >
          Generate
        </button>

        <button
          type="button"
          onClick={stop}
          disabled={!isLoading}
          className="btn-secondary"
        >
          Stop
        </button>
      </div>
    </div>
  );
};
