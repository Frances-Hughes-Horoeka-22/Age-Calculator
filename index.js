module.exports = { age };

function age() {
  let dateEntered = document.getElementById('date').value;
  let monthEntered = document.getElementById('month').value;
  let yearEntered = document.getElementById('year').value;

  let date = new Date();
  let dayToday = date.getDate();
  let monthToday = 1 + date.getMonth();
  let yearToday = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dateEntered > dayToday) {
    dayToday = dayToday + month[monthToday - 1];
    monthToday = monthToday - 1;
  }

  if (monthEntered > monthToday) {
    monthToday = monthToday + 12;
    yearToday = yearToday - 1;
  }

  let d = dayToday - dateEntered;
  let m = monthToday - monthEntered;
  let y = yearToday - yearEntered;

  document.getElementById('age').innerHTML =
    'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}
