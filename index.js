
  // Write your code here!

function scuberGreetingForInches(distance){
  // Write your code here!
  if (distance <= 400){
    return "This is on me!";
  }
  else if (distance > 2000 && distance < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC"? "ok, sounds good." :"No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "Not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."    
  }
}