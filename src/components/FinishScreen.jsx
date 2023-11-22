function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji = "";
  if (percentage === 100) {
    emoji = "🥇";
  } else {
    emoji = "❤️";
  }

  return (
    <>
      <p className="result">
        Your scored <strong>{points}</strong> out of {maxPossiblePoints} {emoji}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
export default FinishScreen;
