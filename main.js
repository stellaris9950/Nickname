
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



//get Names





function singleNick(firstName, lastName){
  let num = randomInt(1, 10);
  let 
  let nick = `${firstName} + ${lastName}`
  alert(nick)
  return(nick);
}

function allNick(firstName, lastName){
  let nick = `${firstName} + ${lastName}`
  alert(nick)
  return(nick);
 
}
