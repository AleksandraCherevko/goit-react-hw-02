const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
