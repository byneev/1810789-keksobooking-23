function randomize(start, end) {
  const range = end - start;
  if (start < 0 || end < 0 || range <= 0) {
    return;
  }
  return Math.floor(Math.random() * (range + 1) + start);
}

randomize(2, 10);

function randomizeFloat(start, end, signAmount) {
  const range = end - start;
  if (start < 0 || end < 0 || range <= 0) {
    return;
  }
  const result = (Math.random() * (range + 1) + start).toFixed(signAmount);
  return result >= 5 ? (5).toFixed(signAmount) : result;
}

randomizeFloat(2, 5, 2);
