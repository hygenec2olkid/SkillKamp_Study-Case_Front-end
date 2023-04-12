interface ColorProps {
  option: string[];
}

export default function Color({ option }: ColorProps) {
  return (
    <div>
      <header>{option.title}</header>
      <div className="flex">
        {option.selections.map((selection) => (
          <div key={selection.id}>
            <input
              required
              style={{ backgroundColor: `${selection.value}` }}
              className="h-[20px] w-[20px] mr-2 rounded-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
