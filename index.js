// Code your solutions in this file
function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(startNumber) {
  let currentNumber = startNumber;

  while (currentNumber >= 0) {
    console.log(currentNumber);
    currentNumber--;
  }
}

countDown(10);
