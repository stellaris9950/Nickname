// Triangle Perimeter Assignment Start Code
function isOdd (number){
    let result = number / 2;
    let int = Math.floor(result);
    let dec = result - int;
    if (dec === 0){
      alert("even");
      stuff = "false"
    }
    else {
      alert("odd")
      stuff = "true"
    }
    return(stuff)
  }