type Props = {
  sender: "user" | "bot";
  text: string;
};

export default function Message({ sender, text }: Props) {
  return (
    <div
      className={`my-2 flex ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg max-w-xs whitespace-pre-wrap ${
          sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {text.split(/\s+/).map((word, index) =>
          word.startsWith("http") ? (
            <a
              key={index}
              href={word}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-all"
            >
              {word}{" "}
            </a>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </div>
    </div>
  );
}
