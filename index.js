const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (tutorialByLine){
    return tutorialByLine.split(' ').map(function (word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');
  });
  };

// const titleCased = tutorials.map(eachTutorial => {
//   const splitText = eachTutorial.split(' ');
//   for (let i = 0; i < splitText.length; i++) {
//     splitText[i] = splitText[i][0].toUpperCase() + splitText[i].substr(1);
//   };
//     splitText.join(' ')
//     return splitText
//   });
//   const finishedSentences = titleCased.map (eachNewTutorial => { return eachNewTutorial.join(' ')})

//   tutorials.splice(0, finishedSentences.length,...finishedSentences)





  
  
