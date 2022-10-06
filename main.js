
//EventLisner for function
document.getElementById("single").addEventListener("click", singleNickGenerate);
document.getElementById("all").addEventListener("click", allNickGenerate);



//function calling
function singleNickGenerate(){
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  //run function
  let oneNick = singleNick(firstName, lastName)

  document.getElementById("nickOutput").innerHTML = oneNick
}

function allNickGenerate(){
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  //run function
  let oneNick = allNick(firstName, lastName)

  document.getElementById("nickOutput").innerHTML = oneNick
}

function singleNick(firstName, lastName){
  let nickNames = ["Crusher", "the Scientist", "Twinkle-toes", "The Coder", "Jester", "The Sloth", "Quick-Silver"]
  let num = randomInt(1, nickNames.length);
  let randomNick = nickNames[num]
  let nick = `${firstName} " ${randomNick} " ${lastName}`
  alert(nick)
  return(nick);
}

function allNick(firstName, lastName){
  let num = randomInt(1, 10);
  let nickNum = num
  let nick = `${firstName} " ${nickNum} " ${lastName}`
  alert(nick)
  return(nick);
 
}
