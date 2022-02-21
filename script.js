// these variables define the buttons in our modal
const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const closeModalButton1 = document.querySelectorAll('[data-close-button1]')
const nextModalButton = document.querySelectorAll('[data-next-button]')
// starts the game in modal1
const startButton = document.querySelectorAll('[data-start-button]')

// this is the overlay feature
const overlay = document.getElementById('overlay')

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})
closeModalButton1.forEach(button => {
  button.addEventListener('click', () => {
      const modal1 = button.closest('.modal1')
      closeModal(modal1)
  })
})
// Next modal button
nextModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal1 = button.closest('.modal')
        nextModal(modal1)
    })
})
startButton.forEach(button => {
  button.addEventListener('click', () => {
      commenceDuel();
  })
})
function openModal(modal) {
    if(modal == null) return
modal.classList.add('active')
overlay.classList.add('active')
}
function closeModal(modal) {
    if(modal == null) return
modal.classList.remove('active')
overlay.classList.remove('active')
}
function closeModal1(modal1) {
  if(modal1 == null) return
modal.classList.remove('active')
overlay.classList.remove('active')
}
function nextModal(modal1) {
    if (modal1 == null) return
    modal1.classList.add('active')
    overlay.classList.add('active')
}
////////////////////////////////////////////////////////////////////////
// stores all sonnets
const sonnets =
  ['Sonnet 18: Shall I compare thee to a summers day? Thou art more lovely and more temperate: Rough winds do shake the darling buds of May, And summer’s lease hath all too short a date: Sometime too hot the eye of heaven shines, And often is his gold complexion dimm’d; And every fair from fair sometime declines, By chance or nature’s changing course untrimm’d; But thy eternal summer shall not fade Nor lose possession of that fair thou owest; Nor shall Death brag thou wander’st in his shade, When in eternal lines to time thou growest: So long as men can breathe or eyes can see, So long lives this and this gives life to thee.',

    'Sonnet 30: When to the sessions of sweet silent thought I summon up remembrance of things past, I sigh the lack of many a thing I sought, And with old woes new wail my dear time’s waste: Then can I drown an eye, unused to flow, For precious friends hid in death’s dateless night, And weep afresh love’s long since cancell’d woe, And moan the expense of many a vanish’d sight: Then can I grieve at grievances foregone, And heavily from woe to woe tell o’er The sad account of fore-bemoaned moan, Which I new pay as if not paid before. But if the while I think on thee, dear friend, All losses are restor’d and sorrows end.',

    'Sonnet 129: The expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjured, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoyed no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallowed bait, On purpose laid to make the taker mad. Mad in pursuit and in possession so; Had, having, and in quest to have extreme; A bliss in proof, and proved, a very woe; Before, a joy proposed; behind a dream. All this the world well knows; yet none knows well To shun the heaven that leads men to this hell.',

    'Sonnet 130: My mistress’ eyes are nothing like the sun; Coral is far more red, than her lips red: If snow be white, why then her breasts are dun; If hairs be wires, black wires grow on her head. I have seen roses damasked, red and white, But no such roses see I in her cheeks; And in some perfumes is there more delight Than in the breath that from my mistress reeks. I love to hear her speak, yet well I know That music hath a far more pleasing sound: I grant I never saw a goddess go, My mistress, when she walks, treads on the ground: And yet by heaven, I think my love as rare, As any she belied with false compare.',

    'Sonnet 73: That time of year thou mayst in me behold When yellow leaves, or none, or few, do hang Upon those boughs which shake against the cold, Bare ruined choirs, where late the sweet birds sang. In me thou see’st the twilight of such day As after sunset fadeth in the west; Which by and by black night doth take away, Death’s second self, that seals up all in rest. In me thou see’st the glowing of such fire, That on the ashes of his youth doth lie, As the death-bed, whereon it must expire, Consum’d with that which it was nourish’d by. This thou perceiv’st, which makes thy love more strong, To love that well, which thou must leave ere long.'];

// randomizes sonnets
const randomSonnet = Math.floor(Math.random() * sonnets.length)

// defines questions for purposes inside commenceDuel
const questions = [
  {
    question: "A?",
    answers: {
      a: "a",
      b: "b"
    }
  }
];
// starts game
function commenceDuel() {

  // initializes variable
  let i = 0;

  // beginning prompt
  const y = window.prompt('If you are seeing this for the first time, press ENTER. Otherwise type Y to help Hank out.')

  // stores answers in array to display @ end + compare w randomSonnet
  let answerArray = [];
  // variables for answers defined below
  let z;
  let q;
  let w;
  let t;
  let v;
  let x;
  let m;
  let r;
  let p;
  let j;
  // if no input-- function does not run.
  if (y === "") {
    return;
  }
  if (y === "N") {
    // if N -- function does not run
    console.log('Game Over!')
    return;
  } else
    // this starts the game!
    if (y === 'Y', 'y') {
      while (i < questions.length) {
        console.group("HANK SAYS");
        console.log("Thank god kid, I'm real loaded and can't even type... I got some questions for ya to help us get going.")
        // prevents infinite loop
        break;
      }
      // initializes console group

      // first question!
      z = window.prompt('First off: how ya doing? Type "A" for alright, "B" for could be better"')
      if (z === "A", 'a') {
        // pushes to answerArray
        answerArray.push("WOKE UP FEELING FINE TODAY. THAT'S HOW I KNEW IT WAS GONNA TO BE A WILD ONE")
        console.log("What ya think you're better than me!")
      }
      if (z === "B", 'b') {

        console.log('well kid you know what they they -- misery loves company.')
        answerArray.push("WOKE UP FEELING HOW I FEEL EVERYDAY, LIKE A RUSTED OUT GUTTER IN AN ABONDONED L.A. MANSION")
      }
      if (z === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // second question
      q = window.prompt('Got a lover on your mind or are ya sane today? Type "A" if you have someone on your mind, or "B" if you are sane.')
      if (q === "A", 'a') {
        console.log("She got a number huh?")
        answerArray.push("& WITH A LOVER ON MY MIND IT WAS NO COINCIDENCE I WOKE UP WITH A LION IN MY BED")
      } if (q === "B") {
        console.log("I'm not calling you a liar but you're the only sane person on this planet.")
        answerArray.push("BUT WITH NOTHING ON MY MIND I JUST DRANK THE DAY AWAY")
      }
      if (q === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // third
      w = window.prompt("It's New Years Day. What did you do last night? Type 'A' if you went out and painted the town red, type 'B' if you were in bed by 9 because you ate too much spicy food.")
      if (w === "A", 'a') {
        console.log("Good for you kid. Why didn't you invite ol Hank?")
        answerArray.push("I THOUGHT I FELT SOMETHING FOLLOW ME HOME AFTER I BLEW UP BABY NEW YEAR")
      } if (w === "B", 'b') {
        console.log("Who taught you how to party? The nuns at Sunday School?")
        answerArray.push("I THOUGHT I FELT SOMETHING IN MY COLON AFTER I BLEW UP BABY NEW YEAR")
      }
      if (w === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // fourth
      t = window.prompt("Got any New Year Resolutions? Type 'A' for yes, 'B' for no.")
      if (t === "A", 'a') {
        console.log("What's the first one? Learning how to tie your velcro shoes?")
        answerArray.push("BUT IT LEFT EARLY AFTER STEALIN ALL MY CIGARETTES AND BEER")
      } if (t === "B", 'b') {
        console.log("What's the first one going to be? Learning how to tie your velcro shoes?")
        answerArray.push("BUT IT TURNED OUT TO BE THE HOT AIR OF FORGOTTEN DREAMS")
      }
      if (t === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // fifth
      v = window.prompt("How's your family? Type 'A' for good, 'B' for what family?.")
      if (v === "A", 'a') {
        console.log("Well tell your dad he still owes me fifty bucks")
        answerArray.push("OUTTA BEER - WALKED TO THE STORE AND THE CASHIER LOOKED LIKE A GIANT TICK")
      } if (v === "B", 'b') {
        console.log("Ah , I'm sorry kid, you can come live with Ol Hank if you ever need to.")
        answerArray.push("OUTTA BEER - STUMBLED TO THE STORE AND WAS ACCOSTED BY A GANG OF PLATYPUS'")
      }
      if (v === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // sixth
      x = window.prompt('Got yourself a job? type "A" for yes, "B" for no.')
      if (x === "A", 'a') {
        console.log("You know what they say about jobs...")
        answerArray.push("I THREW EM SOME MONEY LIKE I WAS A KENNEDY & MADE LIKE A TREE")
      } if (x === "B", 'b') {
        console.log("That's the one reasonable thing I've heard all day")
        answerArray.push("SO I RAN OUTTA THERE WITH WHAT I HAD")
      }
      if (x === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // seventh
      m = window.prompt("How's that workin out for ya? Type 'A' for good, 'B' for not so good.")
      if (m === "A", 'a') {
        console.log("yeah well whose your boss? I got some words for him")
        answerArray.push("NOW I'M RIGHT BACK WHERE I WAS LAST YEAR")
      } if (m === "B", 'b') {
        console.log("I could've told you that")
        answerArray.push("NO FUN - NOW I'M RIGHT BACK AT SQUARE ONE")
      }
      if (m === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // eighth
      r = window.prompt('What do you think of poetry readings? Type "A" if you hate them, type "B" if you really hate them.')
      if (r === "A", 'a') {
        console.log("me too")
        answerArray.push("WRITING POETRY COS I GOT NOTHIN ELSE GOING ON")
      } if (r === "B", 'b') {
        console.log("right on, you'll never see me at one.")
        answerArray.push("WRITING POETRY COS HOPEFULLY ONE DAY IT'LL BRING ME FAME AND FORTUNE")
      }
      if (r === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // ninth
      p = window.prompt('What do you think of Billy Shakespeare anyway? Type "A" if you think he is the best, "B" if you really dont care.')
      if (p === "A", 'a') {
        console.log("Come on now, have you ever read Stendahl?")
        answerArray.push("WISHING I WAS OL BILLY SHAKESPEARE")
      } if (p === "B", 'b') {
        console.log("me neither")
        answerArray.push("BURNING ALL MY BOOKS FOR WARMTH - SHAKESPEARE KEEPS MY COZIEST")
      }
      if (p === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // tenth
      j = window.prompt('You know Im a poet to kid, what do ya think of ol Hanks work? type "A" if you like it, "B" if you never read it.')
      if (j === "A", 'a') {
        console.log("atta boy")
        answerArray.push("BUT I'M JUST CHARLES HANK BUKOWKSI, BEST POET IN THE UNIVERSE")
      } if (j === "B", 'b') {
        console.log("we better win kid or I'm gonna smash up your car")
        answerArray.push("BUT I'M JUST CHARLES HANK BUKOWSKI, WORST POET IN THE UNIVERSE")
      }
      if (j === "") {
        console.log('No answer selected. Please play again.')
        return;
      }
      // ends console group
      console.groupEnd("Hank SAYS");
    }

  console.log("Nice work. This is Shakespeare's Sonnet:")
  // gives you a randomized sonnet
  console.log(sonnets[randomSonnet])
  // gives you your answer array
  console.log(`& This is your poem:`)
  console.log(`${answerArray[0]}`)
  console.log(`${answerArray[1]}`)
  console.log(`${answerArray[2]}`)
  console.log(`${answerArray[3]}`)
  console.log(`${answerArray[4]}`)
  console.log(`${answerArray[5]}`)
  console.log(`${answerArray[6]}`)
  console.log(`${answerArray[7]}`)
  console.log(`${answerArray[8]}`)
  console.log(`${answerArray[9]}`)

  // CAN REUSE THESE VARIABLES TO COMPARE AND GET WINNER 
  let erCountSonnet = 0
  let estCountSonnet = 0
  let erCountAnswers = 0
  let estCountAnswers = 0

  // function that decides which poem is strongest, taking parameters of string and word
  function editorDecides(string, word) {
    // use split method to search strings for specific characters
    return string.split(word).length - 1;
  }
  // calling the search on the variable arrays -- answerArray is changed to a string
  erCountSonnet = editorDecides(sonnets[randomSonnet], 'er')
  estCountSonnet = editorDecides(sonnets[randomSonnet], 'est')
  erCountAnswers = editorDecides(answerArray.toString(), 'ER')
  estCountAnswers = editorDecides(answerArray.toString(), 'EST')

  // console logging these bad bois
  console.log("estCount in Shakespeare's sonnet", estCountSonnet)
  console.log("erCount in Shakespeare's sonnet", erCountSonnet)
  console.log('estCount in your poem', estCountAnswers)
  console.log('erCount in your poem', erCountAnswers)

  // conditional statements to decide who wins and loses 

  if (erCountSonnet > erCountAnswers && estCountSonnet > estCountAnswers) {
    console.log('Shakespeare wins!')
  }
  else if (erCountSonnet > erCountAnswers + estCountAnswers) {
    console.log('Shakespeare wins!')
  }
  else if (estCountSonnet > erCountAnswers + estCountAnswers) {
    console.log('Shakespeare wins!')
  }
  else if (erCountSonnet > erCountAnswers && estCountAnswers === estCountSonnet) {
    console.log('Shakespeare wins!')
  }
  else if (estCountSonnet > estCountAnswers && erCountAnswers === erCountSonnet) {
    console.log('Shakespeare wins!')
  }
  else if (erCountAnswers > erCountSonnet && estCountAnswers > estCountSonnet) {
    console.log('You win!')
  }
  else if (erCountAnswers > erCountSonnet && estCountAnswers === estCountSonnet) {
    console.log('You Win!')
  }
  else if (estCountAnswers > estCountSonnet && erCountAnswers === erCountSonnet) {
    console.log('You Win!')
  }
  else if (erCountAnswers > erCountSonnet + estCountSonnet) {
    console.log('You win!')
  }
  else if (estCountAnswers > erCountSonnet + estCountSonnet) {
    console.log('You win!')
  }
  else {
    console.log('Tie. Play again.')
  }
}

commenceDuel()











