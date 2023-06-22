// vars
// select dom elements
  var startButton = document.querySelector('.start-button')
  var resetButton = document.querySelector('.reset-button')
  var timerEl = document.querySelector('.timer-count')
  var wordBlanksEl = document.querySelector('.word-blanks')
  var winsEl = document.querySelector('.win')
  var lossesEl = document.querySelector('.lose')
  var wins = 0
  var losses = 0
  var time = 10
  var intervalId

  var words = ["jellyfish", "pancackes", "callback", "bacon", "porcupine"]
  var userGuesses = [] // list of letters guessed by user
  var answer

  function getRandomWord() {
    var randomIndex = Math.floor( Math.random() * words.length )
    answer = words[randomIndex]
  }

  function renderWord(randomWord) {
    var blanks = ""
    for (var i = 0; i < answer.length; i++) {
      var letter = answer[i]
      //check if userGuesses contains current letter
      if (userGuesses.includes(letter)) {
        blanks += letter

      } else {
        blanks += "_"

      }
        // if yes
          // show letter
        //else
          // show _

      console.log(blanks)
    }
    wordBlanksEl.innerText = blanks.split('').join(' ')

  }

  function tick() {
    console.log("Tick...")
    // check if userGuesses has all letters that are in answer string
    // if has guess all letters
    if (!wordBlanksEl.innerText.includes("_")) {
      // end round
      // increment wins
      wins++
      // display "you won!"
      wordBlanksEl.innerText = "You Won!"

    } else {
      // is our timer count at 0?
      if (time <= 0) {
        clearInterval(intervalId)
        timerEl.innerText = "Out of time!"
        // diplay "lost round"
        // increment losses

      } else {
        // decrement timer count
        time--
        // display count on page
        timerEl.innerText = time

      }
    }
  }

  function startRound() {
    getRandomWord()
    renderWord()
    intervalId = setInterval(tick, 1000)
  }

  function onKeyDown(event) {
    // check if letter pressed is in the answer string
    // and if not already guessed
    if (answer.includes(event.key) && !userGuesses.includes(event.key)) {
      userGuesses.push(event.key)

    }
    renderWord()
    console.log(answer)
    console.log(event.key)
    console.log(userGuesses)
  }

  // Event Listeners
    // start - startRound()
  startButton.addEventListener('click', startRound)
    
  document.body.addEventListener('keypress', onKeyDown)
  
  // TODO: reset
    // keydown - onKeydown