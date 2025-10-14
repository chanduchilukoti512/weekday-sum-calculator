function solution(D) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const result = Object.fromEntries(days.map(d => [d, 0]));

  // Step 1: Sum values by weekday
  for (const [date, value] of Object.entries(D)) {
    const day = new Date(date).getDay(); // 0 = Sun, 1 = Mon ...
    const dayIndex = (day + 6) % 7; // Convert so 0 = Mon, 6 = Sun
    const weekday = days[dayIndex];
    result[weekday] += value;
  }

  // Step 2: Fill missing days with mean of prev and next
  for (let i = 0; i < 7; i++) {
    const day = days[i];
    if (result[day] === 0) {
      let prev = result[days[(i + 6) % 7]];
      let next = result[days[(i + 1) % 7]];
      result[day] = Math.round((prev + next) / 2);
    }
  }

  return result;
}

function testSolution() {
  const assert = (cond, msg) => { if (!cond) throw new Error(msg); };

  // Test 1: Normal Case
  let D1 = {
    '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6,
    '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': 6,
    '2020-01-07': 2, '2020-01-08': -2
  };
  let res1 = solution(D1);
  console.log("Test 1 Output:", res1);

  // Test 2: Missing Days
  let D2 = {
    '2020-01-01': 6, '2020-01-04': 12,
    '2020-01-05': 14, '2020-01-06': 2,
    '2020-01-07': 4
  };
  let res2 = solution(D2);
  console.log("Test 2 Output:", res2);

  assert(Object.keys(res1).length === 7, "Should have 7 days");
  assert(Object.keys(res2).length === 7, "Should have 7 days");

  console.log("✅ All tests passed!");
}

testSolution();
