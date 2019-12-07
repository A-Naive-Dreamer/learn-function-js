/**
 * * Functions
 */

function logName(name) {
  console.log(`Hello, ${name}`)
}

const nameA = 'Alpha',
  nameB = 'Betty'

logName(nameA)
logName(nameB)

const checkAge = function (age) {
  if (age >= 18) {
    console.log('You are old enough')
  } else if (age < 18 && age >= 0) {
    console.log('You are still young')
  } else {
    console.log('You are not born yet')
  }
}

checkAge(10)
checkAge(25)
checkAge(-2)

const addMarks = (text, mark, times) => {
  let newText = text

  for (let i = 0; i < times; ++i) {
    newText += mark
  }

  console.log(newText)
}

addMarks('Hello', '!', 1)
addMarks('Hello', '!', 3)
addMarks('How are you', '?', 1)
addMarks('How are you', '?', 2)

const showNameWithAge = (name = 'Unknown', age = 0) => {
  const nameWithAge = `${name} is ${age} years(s) old`

  return nameWithAge
}

const alpha = showNameWithAge('Alpha', 11)
const betty = showNameWithAge('Betty', 42)
const gamma = showNameWithAge('Gamma', 30)

console.log(alpha)
console.log(betty)
console.log(gamma)

/**
 * * Calculator
 */

function add() {
  let x = prompt('Masukkan bilangan pertama untuk pertambahan'),
    y = prompt('Masukkan bilangan kedua untuk pertambahan'),
    res = parseInt(x) + parseInt(y),
    show = `Hasil ${x} + ${y} = ${res}`

  alert(show)
}

function subtract() {
  let x = prompt('Masukkan bilangan pertama untuk pengurangan'),
    y = prompt('Masukkan bilangan kedua untuk pengurangan'),
    res = parseInt(x) - parseInt(y),
    show = `Hasil ${x} - ${y} = ${res}`

  alert(show)
}

function multiply() {
  let x = prompt('Masukkan bilangan pertama untuk perkalian'),
    y = prompt('Masukkan bilangan kedua untuk perkalian'),
    res = parseInt(x) * parseInt(y),
    show = `Hasil ${x} x ${y} = ${res}`

  alert(show)
}

function divide() {
  let x = prompt('Masukkan bilangan pertama untuk pembagian'),
    y = prompt('Masukkan bilangan kedua untuk pembagian'),
    res = parseInt(x) / parseInt(y),
    show = `Hasil ${x} : ${y} = ${res}`

  alert(show)
}

function calculator() {
  choice = prompt(
    'Masukkan pilihan operasi yang Anda inginkan (1: pertambahan, 2: pengurangan, 3: perkalian, 4: pembagian'
  )

  switch (choice) {
    case '1':
      add()
      break
    case '2':
      subtract()
      break
    case '3':
      multiply()
      break
    case '4':
      divide()
      break
  }

  let retry = prompt('Apakah anda ingin mengulang (Yes/No)?')

  if (retry === 'Yes' || retry === 'yes') {
    calculator()
  }
}

calculator()

const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']

const showNames = names => {
  for (let index = 0; index < names.length; ++index) {
    const name = names[index]

    console.log(`[${index + 1}] ${name}`)
  }
}

/**
 * * Contacts console
 */

showNames(names)

const filterNames = (names, minimumLength) => {
  let newNames = []

  for (let index = 0; index < names.length; ++index) {
    const name = names[index]

    if (name.length >= minimumLength) {
      newNames.push(name)
    }
  }

  return newNames
}

const filteredNames = filterNames(names, 12)

showNames(filteredNames)

const myContacts = [
  {
    id: 1,
    name: 'Alpha Avalon',
    phone: '+1 111 101010',
    email: 'alpha@avalon.org',
    favorite: true,
    rating: 9,
    tags: ['Popular', 'Cool']
  },
  {
    id: 2,
    name: 'Betty Brave',
    phone: '+62 812 242424',
    email: 'betty@braverian.com'
  },
  {
    id: 3,
    name: 'Gamma Gacurio',
    phone: '+63 813 363636',
    email: 'gamma@gacurio.dev'
  }
]

const showContacts = contacts => {
  for (let index = 0; index < contacts.length; ++index) {
    const contact = contacts[index]

    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    )
  }
}

showContacts(myContacts)

const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; ++index) {
    const contact = contacts[index]

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact)
    }
  }

  return newContacts
}

const filteredContacts = filterContacts(myContacts, 12)

showContacts(filteredContacts)

/**
 * * Todos console
 */

const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

const showTodos = data => {
  for (let index = 0; index < data.length; ++index) {
    const item = data[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

showTodos(todos)

const searchTodos = (data, textToSearch) => {
  let newTodos = []

  for (let index = 0; index < data.length; ++index) {
    const item = data[index],
      lowerCasedItem = item.toLowerCase(),
      lowerCasedText = textToSearch.toLowerCase()

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}

const foundTodos = searchTodos(todos, 'the')

showTodos(foundTodos)

const myTodos = [
  {
    id: 1,
    text: 'Write the letter',
    tags: ['important', 'writing'],
    favorite: true,
    completed: false
  },
  {
    id: 2,
    text: 'Eat some lunch',
    tags: ['food'],
    favorite: true,
    completed: false
  },
  {
    id: 3,
    text: 'Run around the city',
    favorite: false,
    completed: true
  }
]

const showTodos2 = data => {
  for (let index = 0; index < data.length; ++index) {
    const item = data[index]

    let itemString = ''

    itemString += item.completed ? `[Done]` : `[ x ]`
    itemString += ` ${item.text} `
    itemString += item.favorite ? `*` : `x`

    console.log(itemString)
  }
}

showTodos2(myTodos)

const searchTodosText = (data, searchText) => {
  let newTodos = []

  for (let index = 0; index < data.length; ++index) {
    const item = data[index],
      lowerCasedItemText = item.text.toLowerCase(),
      lowerCasedSearchText = searchText.toLowerCase()

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}

const foundTodos2 = searchTodosText(myTodos, 'the')

showTodos2(foundTodos2)
