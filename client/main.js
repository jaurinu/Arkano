const buttonForm = document.getElementById('button-form')
const buttonStatistics = document.getElementById('button-statistics')
const form = document.getElementById('form')
const statisticsSection = document.getElementById('statistics-section')

buttonForm.addEventListener('click', ()=>{
  form.classList.remove('hideElement')
  statisticsSection.classList.add('hideElement')
})

buttonStatistics.addEventListener('click', ()=>{
  form.classList.add('hideElement')
  statisticsSection.classList.remove('hideElement')
})


const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1cbe1fb2ff4204ca59d47e7383de4031}'
console.log(url)
// const weatherWidget = () => {
// fetch(url)
//  .then(response => response.json())
//  .then(dataWidget => {
//   console.log(dataWidget);
//   });
//  };
//  weatherWidget()

const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1cbe1fb2ff4204ca59d47e7383de4031}'
const fetchWidget = () => {
fetch(url)
 .then(response => response.json())
 .then(dataWeather => {
  console.log(fetchWidget);
  });
 };


console.log(url)
const fetchWidget = async() => {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
}
fetchWidget();


document.getElementById('dashboard-form')
.addEventListener('submit', function (e){
  const newPurchases = document.getElementById('new-purchases').value
  const increment = document.getElementById('increment').value
  const newUsers = document.getElementById('new-users').value
  const newVisits = document.getElementById('new-visits').value

  if (newPurchases === '' || increment === '' || newUsers === '' || newVisits === ''){
    alert('Favor de llenar todos los campos')
  }else{
    
    let purchasesCard = document.getElementById('purchases-card')
    let incrementCard = document.getElementById('increment-card')
    let usersCard = document.getElementById('users-card')
    let visitsCard = document.getElementById('visits-card')
    purchasesCard.value = newPurchases
    incrementCard.value = (`${increment}%`)
    usersCard.value = newUsers
    visitsCard.value = newVisits

  }
  e.preventDefault();
})

document.getElementById('dashboard-cards')

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
