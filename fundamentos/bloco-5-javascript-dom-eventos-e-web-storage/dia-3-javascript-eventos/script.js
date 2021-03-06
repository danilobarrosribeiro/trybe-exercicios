function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
//1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDayList = document.querySelector('#days');

  for (let i = 0; i <dezDaysList.length; i += 1) {
    const dias = dezDaysList[i];
    const listaDias = document.createElement('li');
    listaDias.innerHTML = dias;
    // listaDias.classList.add('day');
    if (listaDias.innerHTML === '25') {
      listaDias.classList.add('day', 'holiday', 'friday');
      monthDayList.appendChild(listaDias);
    } else if (listaDias.innerHTML === '24' || listaDias.innerHTML === '31') {
      listaDias.classList.add('day', 'holiday');
      monthDayList.appendChild(listaDias);
    } else if (listaDias.innerHTML === '4' || listaDias.innerHTML === '11' || listaDias.innerHTML === '18') {
      listaDias.classList.add('day', 'friday');
      monthDayList.appendChild(listaDias);
    } else {
      listaDias.classList.add('day');
      monthDayList.appendChild(listaDias);
    }    
  };
};

createDaysOfTheMonth()
//2
function feriados(buttonName) {
  const divButton = document.querySelector('.buttons-container');
  const botao = document.createElement('button');
  botao.innerHTML = buttonName;
  botao.id = 'btn-holiday';
  divButton.appendChild(botao);
}
feriados("Feriados");

//3
const botao = document.querySelector('#btn-holiday');
botao.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');

  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === 'white') {
      holidays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[i].style.backgroundColor = 'white';
    };
  };
});

//4
function friday() {
  const divButton = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = 'Sexta-feira';
  divButton.appendChild(buttonFriday);
}
friday();

//5
const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', function() {
  const fridays = document.querySelectorAll('.friday');

  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerHTML !== 'SEXTOU') {
      fridays[i].innerHTML = 'SEXTOU';
    } else {
      fridays[i].innerHTML = Number(fridays[i].previousElementSibling.innerText) + 1;
    };
  };
});

//6
const days = document.getElementsByClassName('day');

for (const day of days) {
  day.addEventListener('mouseover', function (event) {  
  event.target.style.fontSize = '2em';
});
};

for (const day of days) {
day.addEventListener('mouseout', function (event) {
  event.target.style.fontSize = '20px';
});
};

//7
function tasks (string) {
  let tarefa = document.createElement('span');
  tarefa.innerText = string;
  const taskDiv = document.querySelector('.my-tasks');
  taskDiv.appendChild(tarefa);
};
tasks('cozinhar');

//8
function colors (cor) {
  let color = document.createElement('div');
  color.style.backgroundColor = cor;
  color.className = 'task';
  const taskDiv = document.querySelector('.my-tasks');
  taskDiv.appendChild(color);
};
colors('red');

//9
const task = document.getElementsByClassName('task');

for (const i of task) {
  i.addEventListener('click', function (evt) {
    if (evt.target.className === 'task selected') {
      evt.target.className = 'task';
    } else {
      evt.target.className = 'task selected';
    }   
});
};

//10
const taskSelect = document.querySelector('.task');

for (let i of days) {
  i.addEventListener('click', function (event){  
    if (taskSelect == document.querySelector('.selected')) {
      if (i.style.color !== 'red') {
        event.target.style.color = taskSelect.style.backgroundColor;
      } else {
        event.target.style.color = 'rgb(119,119,119)';
      }
    }
  })
}
