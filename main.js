
//EventLisner for function
document.getElementById("single").addEventListener("click", singleNickGenerate);
document.getElementById("all").addEventListener("click", allNickGenerate);



//function calling

//eventlistner and function starter of single nick generate
function singleNickGenerate(){
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  //run function
  let oneNick = singleNick(firstName, lastName)

  document.getElementById("nickOutput").innerHTML = oneNick
}

//eventlistner and function starter of all nick generate
function allNickGenerate(){
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  //run function
  let oneNick = allNick(firstName, lastName)

  document.getElementById("nickOutput").innerHTML = oneNick
}



//storage of nicknames array
let nickNames = ["Crusher", "the Scientist", "Twinkle-toes", "The Coder", "Jester", "The Sloth", "Quick-Silver"]

//function single Nickname
function singleNick(firstName, lastName){
  let randomNick = randomArray(nickNames);
  let nick = `${firstName} " ${randomNick} " ${lastName}`
  return(nick);
}


//function all nickname

function allNick(firstName, lastName){
  //0let allNickname = ""
  let allNickname = ""
  for (let i = 0; i < nickNames.length; i++){
    allNickname +=  `<h4>${firstName} "${nickNames[i]}" ${lastName}</h4>`
  }
  return allNickname;
}
