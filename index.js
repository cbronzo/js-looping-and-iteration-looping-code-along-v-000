// Code your solutions in this file

function printBadges(names) {
for (let i = 0; i < names.length; i++) {
	console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
	}
	
return names;
}

printBadges(names);

function tailsNeverFails() {
  let counter = 0;
  while(Math.random() >= .5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}