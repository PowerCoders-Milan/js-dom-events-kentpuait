// Ex 1. Add the .blue CSS class to the th elements

const thElements = document.querySelectorAll('th');

thElements.forEach((element) => {
  element.className = ".blue";
});

// Ex 2. Count the number of table body rows there are
//       Make the function teamCount() return it
const teamCount = () => {
  // TODO: return the number of teams
  const trElements = document.querySelectorAll('tr');
  return trElements.length;
};

// Ex 3. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team (Spezia) should have 39 points.

const list = document.querySelector('tbody');
list.insertAdjacentHTML("beforeend", "<tr><td>15</td><td>Spezia</td><td>39</td></tr>");

// Ex 4. Write some code to sum all points given to all teams
//       Make the function summarizePoints() return it
const summarizePoints = () => {
  const teamPoints = document.querySelectorAll('tbody tr td:last-child');
  // TODO: return the sum
  let sum = 0;
  teamPoints.forEach(teamPoint => {
    sum += parseInt(teamPoint.innerText);
  });
  return `Total: ${sum}`;
};

document.querySelector("#sum").innerText = summarizePoints();
console.log(summarizePoints());



// Ex 5. Change the background color of all `<th>` cells to #DDF4FF

const thEl = document.querySelectorAll('th');

thEl.forEach((element) => {
  element.style.backgroundColor = "#DDF4FF";
});



// calls of functions you created on top (DO NOT REMOVE)
console.log(`team count: ${teamCount()}`);
console.log(`summarize points: ${summarizePoints()}`);