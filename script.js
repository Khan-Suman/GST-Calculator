const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')


// Get number of people from number of people div
let noOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = Number(tipInput.value)
  tip = tip/100

  // get the total tip amount
  const tipAmount = bill * tip

  // calculate the total (tip amount + bill)
  const total = bill + tipAmount

  // calculate the per person total (total divided by number of people)
  const perPerson = total/noOfPeople

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `Rs${perPerson.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  noOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = noOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(noOfPeople <= 1){
    alert('hey, you cannot have less than 1 person!!')
    return
  }
  
  // decrement the amount of people
  noOfPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = noOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}