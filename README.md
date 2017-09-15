# AddToTen
this is a simple techdemo of a game written in Javascript (with the p5 library). As you can guess, it is created for children, to learn them how to add two numbers. That is also the reason why the maximum amount of dots is always 10 or less (they can then use their fingers to count).

# Goal of the game

The goal of this game is simple, count the dots on both the mushrooms. Then you push the button and say the total amount of dots on both mushrooms. If it is correct there is a soundfile saying you give an correct answer. If it is incorrect another soundfile is playing. I used the W3 WebSpeech API for speech recognition.  
NOTE: The language is set to Dutch ("nl-NL"), if your live in another country you must change this accordingly.

# sidenotes

This game is based on a game my father programmed way, WAY back on the Commodore 64. 
The gamelogic is mostly complete at the moment, so that is why I posted it on Github. Ofcourse, there are still some things that can make the game better: 

  - Most obvious, it needs more graphics. I want to create a forest backdrop, and a  friendly little dwarf and animate is in a way so that it looks that HE is the one telling you if you said an correct of incorrect answer. 

  - You can say a sentence, and the game will only get the numbers you say (using RegEx). If you happen to say more numbers (like saying the sentence: "3 plus 4 equals 7") the game will return an INcorrect answer, because it takes the numbers '3' AND '4' AND '7' from your sentence.

  - No logic that plays a soundfile when the game cannot recognize numbers out of your speech.
  
   - Maybe some nice background music. 

Also the reason I used a lot of "this." is because I like the way it looks like in the "sketch.js" file. I simply love the fact that you can create a new object and than call the functions you use by adding them after the dot (gm.randomnrs() for example). That is juse a little quirk of me.
