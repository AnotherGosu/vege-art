interface TemplateProps {
  prompt: string;
  onPrompt: () => void;
}

export const Record = ({ prompt, onPrompt }: TemplateProps) => {
  return (
    <div
      className="cursor-pointer rounded-md bg-slate-100 p-2 text-sm transition hover:bg-slate-200"
      onClick={onPrompt}
    >
      {prompt}
    </div>
  );
};
