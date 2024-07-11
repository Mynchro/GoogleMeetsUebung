const reactions = [
  { emoji: "💖", label: "Love" },
  { emoji: "👍🏾", label: "Thumbs Up" },
  { emoji: "🎉", label: "Party" },
  { emoji: "👏🏾", label: "Clap" },
  { emoji: "😂", label: "Laugh" },
  { emoji: "😮", label: "Surprised" },
  { emoji: "😢", label: "Sad" },
  { emoji: "🤔", label: "Thinking" },
  { emoji: "👎🏾", label: "Thumbs Down" },
];

const reactionBarStyle = {
  display: "flex",
  marginTop: "25px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2b2b2b",
  padding: "5px",
  borderRadius: "25px",
};

const reactionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  width: "35px",
  height: "35px",
  cursor: "pointer",
  padding: "5px",
  borderRadius: "50%",
  transition: "background-color 0.3s",
};

const Emoji = () => {
  return (
    <div className="emoji-bar-container">
      <div style={reactionBarStyle}>
        {reactions.map((reaction, index) => (
          <span
            key={index}
            style={reactionStyle}
            role="img"
            aria-label={reaction.label}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {reaction.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Emoji;
