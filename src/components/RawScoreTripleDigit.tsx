import RawScoreDigit from "./RawScoreDigit";

function RawScoreTripleDigit() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <RawScoreDigit />
      <RawScoreDigit />
      <RawScoreDigit />
    </div>
  );
}

export default RawScoreTripleDigit;
