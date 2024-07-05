import { useState } from "react";

import Options from "../Options/Options";
import Feedbacks from "../Feedbacks/Feedbacks";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((countFeedback) => ({
      ...countFeedback,
      [feedbackType]: countFeedback[feedbackType] + 1,
    }));
  };
const 

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options updateFeedback={updateFeedback} />
      <Feedbacks feedback={feedback} />
    </div>
  );
}

export default App;
