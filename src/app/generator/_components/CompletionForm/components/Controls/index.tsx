interface ControlsProps {
  isLoading: boolean;
  isPrompt: boolean;
  stop: () => void;
}

export const Controls = ({ isLoading, isPrompt, stop }: ControlsProps) => {
  return (
    <div className="flex justify-end gap-2">
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
  );
};
