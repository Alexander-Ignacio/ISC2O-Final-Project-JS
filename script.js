// Variables
let answer2 = 0
let answer4 = 0
let answer6 = 0
let answer8 = 0

/// Audio
// Variables
const songOne = document.getElementById('song1')
const songTwo = document.getElementById('song2')
const songThree = document.getElementById('song3')
const songFour = document.getElementById('song4')
const songFive = document.getElementById('song5')
// Play Song
function playSong1 () {
  songOne.play()
}
function playSong2 () {
  songTwo.play()
}
function playSong3 () {
  songThree.play()
}
function playSong4 () {
  songFour.play()
}
function playSong5 () {
  songFive.play()
}
// Pause Song
function pauseSong1 () {
  songOne.pause()
}
function pauseSong2 () {
  songTwo.pause()
}
function pauseSong3 () {
  songThree.pause()
}
function pauseSong4 () {
  songFour.pause()
}
function pauseSong5 () {
  songFive.pause()
}
// Questions None
document.getElementById('question1').style.display = 'none'
document.getElementById('question2').style.display = 'none'
document.getElementById('question3').style.display = 'none'
document.getElementById('question4').style.display = 'none'
document.getElementById('question5').style.display = 'none'
document.getElementById('question6').style.display = 'none'
document.getElementById('question7').style.display = 'none'
document.getElementById('question8').style.display = 'none'
document.getElementById('question9').style.display = 'none'
document.getElementById('question10').style.display = 'none'
document.getElementById('finish1').style.display = 'none'
// Hint None
document.getElementById('onehint').style.display = 'none'
document.getElementById('twohint').style.display = 'none'
document.getElementById('threehint').style.display = 'none'
document.getElementById('fourhint').style.display = 'none'
document.getElementById('fivehint').style.display = 'none'
// Image None
document.getElementById('vivaldi').style.display = 'none'
document.getElementById('mozart').style.display = 'none'
document.getElementById('beethoven').style.display = 'none'
document.getElementById('bach').style.display = 'none'
document.getElementById('chopin').style.display = 'none'

/// Buttons
// Question 1
document.getElementById('begin').addEventListener('click', start)
document.getElementById('101').addEventListener('click', correct1)
document.getElementById('102').addEventListener('click', incorrect1)
document.getElementById('hint1').addEventListener('click', hintOne)
document.getElementById('next1').addEventListener('click', nextOne)
document.getElementById('play1').addEventListener('click', playSong1)
document.getElementById('pause1').addEventListener('click', pauseSong1)
// Question 2
document.getElementById('2').addEventListener('click', guessOne)
document.getElementById('next2').addEventListener('click', nextTwo)
// Question 3
document.getElementById('301').addEventListener('click', incorrect2)
document.getElementById('302').addEventListener('click', correct2)
document.getElementById('hint2').addEventListener('click', hintTwo)
document.getElementById('next3').addEventListener('click', nextThree)
document.getElementById('play2').addEventListener('click', playSong2)
document.getElementById('pause2').addEventListener('click', pauseSong2)
// Question 4
document.getElementById('4').addEventListener('click', guessTwo)
document.getElementById('next4').addEventListener('click', nextFour)
// Question 5
document.getElementById('501').addEventListener('click', incorrect3)
document.getElementById('502').addEventListener('click', correct3)
document.getElementById('hint3').addEventListener('click', hintThree)
document.getElementById('next5').addEventListener('click', nextFive)
document.getElementById('play3').addEventListener('click', playSong3)
document.getElementById('pause3').addEventListener('click', pauseSong3)
// Question 6
document.getElementById('6').addEventListener('click', guessThree)
document.getElementById('next6').addEventListener('click', nextSix)
// Question 7
document.getElementById('701').addEventListener('click', correct4)
document.getElementById('702').addEventListener('click', incorrect4)
document.getElementById('hint4').addEventListener('click', hintFour)
document.getElementById('next7').addEventListener('click', nextSeven)
document.getElementById('play4').addEventListener('click', playSong4)
document.getElementById('pause4').addEventListener('click', pauseSong4)
// Question 8
document.getElementById('8').addEventListener('click', guessFour)
document.getElementById('next8').addEventListener('click', nextEight)
// Question 9
document.getElementById('901').addEventListener('click', correct5)
document.getElementById('902').addEventListener('click', incorrect5)
document.getElementById('hint5').addEventListener('click', hintFive)
document.getElementById('next9').addEventListener('click', nextNine)
document.getElementById('play5').addEventListener('click', playSong5)
document.getElementById('pause5').addEventListener('click', pauseSong5)
document.getElementById('last-question').addEventListener('click', guessFive)
document.getElementById('finish').addEventListener('click', nextTen)

/// Functions
// Start
function start () {
  document.getElementById('question1').style.display = 'block'
  document.getElementById('instructions').style.display = 'none'
}
// Question 1
function correct1 () {
  document.getElementById('answer1').innerHTML = 'Correct!'
  document.body.style.backgroundColor = 'green'
}
function incorrect1 () {
  document.getElementById('answer1').innerHTML = 'Try again.'
  document.body.style.backgroundColor = 'red'
}
function hintOne () {
  document.getElementById('onehint').style.display = 'block'
}
// Question 2
function nextOne () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question1').style.display = 'none'
  document.getElementById('question2').style.display = 'block'
  document.getElementById('vivaldi').style.display = 'block'
  songOne.pause()
}
function guessOne () {
  answer2 = document.getElementById('input1').value

  if (answer2 === 'Vivaldi' || answer2 === 'Antonio Vivaldi' || answer2 === 'vivaldi' || answer2 === 'antonio vivaldi' || answer2 === 'antonio' || answer2 === 'Antonio') {
    document.body.style.backgroundColor = 'green'
    document.getElementById('2answer').innerHTML = 'Correct!'
  } else {
    document.body.style.backgroundColor = 'red'
    document.getElementById('2answer').innerHTML = 'Try again.'
  }
}
// Question 3
function nextTwo () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question2').style.display = 'none'
  document.getElementById('question3').style.display = 'block'
  songTwo.pause()
}
function correct2 () {
  document.getElementById('answer3').innerHTML = 'Correct!'
  document.body.style.backgroundColor = 'green'
}
function incorrect2 () {
  document.getElementById('answer3').innerHTML = 'Try again.'
  document.body.style.backgroundColor = 'red'
}
function hintTwo () {
  document.getElementById('twohint').style.display = 'block'
}
// Question 4
function nextThree () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question3').style.display = 'none'
  document.getElementById('question4').style.display = 'block'
  document.getElementById('mozart').style.display = 'block'
  songThree.pause()
}
function guessTwo () {
  answer4 = document.getElementById('input2').value

  if (answer4 === 'Mozart' || answer4 === 'Wolfgang Amadeus Mozart' || answer4 === 'mozart' || answer4 === 'wolfgang amadeus mozart' || answer4 === 'wolfgang mozart' || answer4 === 'Wolfgang Mozart') {
    document.body.style.backgroundColor = 'green'
    document.getElementById('4answer').innerHTML = 'Correct!'
  } else {
    document.body.style.backgroundColor = 'red'
    document.getElementById('4answer').innerHTML = 'Try again.'
  }
}
// Question 5
function nextFour () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question4').style.display = 'none'
  document.getElementById('question5').style.display = 'block'
  songFour.pause()
}
function correct3 () {
  document.getElementById('answer5').innerHTML = 'Correct!'
  document.body.style.backgroundColor = 'green'
}
function incorrect3 () {
  document.getElementById('answer5').innerHTML = 'Try again.'
  document.body.style.backgroundColor = 'red'
}
function hintThree () {
  document.getElementById('threehint').style.display = 'block'
}
// Question 6
function nextFive () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question5').style.display = 'none'
  document.getElementById('question6').style.display = 'block'
  document.getElementById('beethoven').style.display = 'block'
  songFive.pause()
}
function guessThree () {
  answer6 = document.getElementById('input3').value

  if (answer6 === 'Beethoven' || answer6 === 'Ludwig van Beethoven' || answer6 === 'beethoven' || answer6 === 'ludwig van beethoven' || answer6 === 'ludwig beethoven' || answer6 === 'Ludwig Beethoven') {
    document.body.style.backgroundColor = 'green'
    document.getElementById('6answer').innerHTML = 'Correct!'
  } else {
    document.body.style.backgroundColor = 'red'
    document.getElementById('6answer').innerHTML = 'Try again.'
  }
}
// Question 7
function nextSix () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question6').style.display = 'none'
  document.getElementById('question7').style.display = 'block'
}
function correct4 () {
  document.getElementById('answer7').innerHTML = 'Correct!'
  document.body.style.backgroundColor = 'green'
}
function incorrect4 () {
  document.getElementById('answer7').innerHTML = 'Try again.'
  document.body.style.backgroundColor = 'red'
}
function hintFour () {
  document.getElementById('fourhint').style.display = 'block'
}
// Question 8
function nextSeven () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question7').style.display = 'none'
  document.getElementById('question8').style.display = 'block'
  document.getElementById('bach').style.display = 'block'
}
function guessFour () {
  answer8 = document.getElementById('input4').value

  if (answer8 === 'Bach' || answer8 === 'Johann Sebastian Bach' || answer8 === 'bach' || answer8 === 'johann sebastian bach' || answer8 === 'jsb' || answer8 === 'JSB') {
    document.body.style.backgroundColor = 'green'
    document.getElementById('8answer').innerHTML = 'Correct!'
  } else {
    document.body.style.backgroundColor = 'red'
    document.getElementById('8answer').innerHTML = 'Try again.'
  }
}
// Question 9
function nextEight () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question8').style.display = 'none'
  document.getElementById('question9').style.display = 'block'
}
function correct5 () {
  document.getElementById('answer9').innerHTML = 'Correct!'
  document.body.style.backgroundColor = 'green'
}
function incorrect5 () {
  document.getElementById('answer9').innerHTML = 'Try again.'
  document.body.style.backgroundColor = 'red'
}
function hintFive () {
  document.getElementById('fivehint').style.display = 'block'
}
// Question 10
function nextNine () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question9').style.display = 'none'
  document.getElementById('question10').style.display = 'block'
  document.getElementById('chopin').style.display = 'block'
}
function guessFive () {
  const name = 'Frederic Chopin'
  let answer10 = 0
  while (name !== answer10) {
    answer10 = prompt('Who is this composer? (Please use their full name with proper capitalization, no accents.)')
    if (answer10 === name) {
      alert('You got it right!')
    } else if (answer10 !== name) {
      alert('Wrong. Sorry, try again!')
    }
  }
}
function nextTen () {
  document.body.style.backgroundColor = 'bisque'
  document.getElementById('question10').style.display = 'none'
  document.getElementById('finish1').style.display = 'block'
}
