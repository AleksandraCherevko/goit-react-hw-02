const Feedbacks = ({ feedback, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
      <p>Total feedback: {totalFeedback}</p>
    </div>
  );
};

export default Feedbacks;
