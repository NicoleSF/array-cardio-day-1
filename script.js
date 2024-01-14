function toggleAccordionItem(itemNumber) {
    var item = document.querySelector('.accordion-item:nth-child(' + itemNumber + ') .accordion-content');
    item.style.display = (item.style.display === 'block') ? 'none' : 'block';
  
    // Feche os outros itens quando um é aberto
    var allItems = document.querySelectorAll('.accordion-item');
    for (var i = 0; i < allItems.length; i++) {
      if (i + 1 !== itemNumber) {
        allItems[i].querySelector('.accordion-content').style.display = 'none';
      }
    }
}

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

const tableBody = document.querySelector('#resultTable tbody');

fifteen.forEach(inventor => {
  const row = tableBody.insertRow();
  const cellName = row.insertCell(0);
  const cellLastName = row.insertCell(1)
  const cellYear = row.insertCell(2);
  const cellPassed = row.insertCell(3);

  cellName.textContent = inventor.first;
  cellLastName.textContent = inventor.last;
  cellYear.textContent = inventor.year;
  cellPassed.textContent = inventor.passed
})


const tableExercise2 = document.querySelector('#firstLastTable tbody');

const firstLastName = inventors.map((name) => {
  const row = tableExercise2.insertRow();
  const cellFirstName = row.insertCell(0);
  const cellLastName = row.insertCell(1);

  cellFirstName.textContent = name.first;
  cellLastName.textContent = name.last;
})

const tableExercise3 = document.querySelector('#sortTable tbody');

const birthday = inventors.sort((inventorA, inventorB) => inventorA.year > inventorB.year ? 1 : -1)

birthday.forEach(inventor => {
  const row = tableExercise3.insertRow();
  const cellName = row.insertCell(0);
  const cellLastName = row.insertCell(1)
  const cellYear = row.insertCell(2);
  const cellPassed = row.insertCell(3);

  cellName.textContent = inventor.first;
  cellLastName.textContent = inventor.last;
  cellYear.textContent = inventor.year;
  cellPassed.textContent = inventor.passed
})


const tableExercise4 = document.querySelector('#reduceTable tbody');

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)

const row = tableExercise4.insertRow();
const cellTotalYears = row.insertCell(0);

cellTotalYears.textContent = totalYears;


const tableExercise5 = document.querySelector('#sortTable2 tbody');

const yearsLived = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1
})

yearsLived.forEach(inventor => {
  const row = tableExercise5.insertRow();
  const cellName = row.insertCell(0);
  const cellLastName = row.insertCell(1)
  const cellYear = row.insertCell(2);
  const cellPassed = row.insertCell(3);

  cellName.textContent = inventor.first;
  cellLastName.textContent = inventor.last;
  cellYear.textContent = inventor.year;
  cellPassed.textContent = inventor.passed
})



