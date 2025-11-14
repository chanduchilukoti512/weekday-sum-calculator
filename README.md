#  JavaScript Function – Weekday Sum Calculator

#  Problem Statement

Write a function in JavaScript that takes a dictionary D where each key is a date (in YYYY-MM-DD format) and its value is an integer.
Return a new dictionary where:

Keys represent the days of the week — Mon, Tue, Wed, Thu, Fri, Sat, Sun.  

Each value is the sum of all integers corresponding to that weekday.

If a weekday is missing, calculate its value as the mean of the previous and next days.

# Example
Input
{
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': 6,
  '2020-01-07': 2,
  '2020-01-08': -2
}

Output
{
  'Mon': -6,
  'Tue': 2,
  'Wed': 2,
  'Thu': 4,
  'Fri': 6,
  'Sat': 8,
  'Sun': 2
}

# Unit Tests

Run the file using Node.js to verify output:

node solution.js


All tests log the results and confirm correct behavior.

# Notes

The program handles date parsing, weekday aggregation, and mean interpolation for missing days.

Developed as part of a JavaScript coding challenge to demonstrate problem-solving and data manipulation skills.
