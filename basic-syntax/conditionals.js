const age = 18

if (age < 18) {
  console.log('You are a minor.')
} else if (age >= 18 && age < 65) {
  console.log('You are an adult.')
} else {
  console.log('You are a senior citizen.')
}

// Ternary Operator
const canVote = (age >= 18) ? 'Yes' : 'No'
console.log(canVote)
