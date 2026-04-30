export function calculateKnapsack(subjects, maxTime) {
  const n = subjects.length;

  const dp = Array.from({ length: n + 1 }, () => Array(maxTime + 1).fill({ value: 0 }));

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= maxTime; w++) {
      if (i === 0 || w === 0) {
        dp[i][w] = { value: 0, included: false, explanation: "Base case: 0 subjects or 0 time." };
      } else {
        const subject = subjects[i - 1];
        if (subject.hours <= w) {
          const valueWithout = dp[i - 1][w].value;
          const valueWith = dp[i - 1][w - subject.hours].value + subject.marks;

          if (valueWith > valueWithout) {
            dp[i][w] = {
              value: valueWith,
              included: true,
              prevW: w - subject.hours,
              explanation: `Included ${subject.name} (+${subject.marks} marks). ${valueWith} > ${valueWithout} (skipping)`
            };
          } else {
            dp[i][w] = {
              value: valueWithout,
              included: false,
              prevW: w,
              explanation: `Skipped ${subject.name}. ${valueWithout} >= ${valueWith} (if included)`
            };
          }
        } else {
          dp[i][w] = {
            value: dp[i - 1][w].value,
            included: false,
            prevW: w,
            explanation: `Skipped ${subject.name} because its time (${subject.hours}h) exceeds available time (${w}h).`
          };
        }
      }
    }
  }

  const selectedSubjects = [];
  const optimalPath = new Set();

  let w = maxTime;
  let totalMarks = dp[n][maxTime].value;
  let timeUsed = 0;

  for (let i = n; i > 0; i--) {
    optimalPath.add(`${i}-${w}`);
    if (dp[i][w].value !== dp[i - 1][w].value && dp[i][w].included) {
      selectedSubjects.push(subjects[i - 1]);
      timeUsed += subjects[i - 1].hours;
      w = w - subjects[i - 1].hours;
    }
  }

  optimalPath.add(`0-${w}`);

  return {
    dpTable: dp,
    maxValue: totalMarks,
    timeUsed,
    selectedSubjects: selectedSubjects.reverse(),
    optimalPath
  };
}
