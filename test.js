'use strict';
// Custom tag function for template literals
function logGreeting(strings, personName) {
  const message = `${strings} ${personName}!`;
  console.log(message);
}
// Example usage
const someone = 'Alice';
logGreeting`Greetings for ${someone}`;
