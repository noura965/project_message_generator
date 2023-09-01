
print("Message Generator");
print("GENERATE");
print("READ");

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

const collectiveWisdom = {
    YouAre: ['Beautiful', 'Cheerful', 'Bright', 'Joyful'],
    FocusOn: ['Healthy Lifestyle', 'Good time', 'Valuable friends', 'Loved yourself more'],
    quote: ['Well done is better than well said', 'Do one thing everyday that scares you', 'Spread love everywhere you go', 'Success is a journey not a destination']
  }

 // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'YouAre':
        personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'FocusOn':
        personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'quote':
        personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }