function scuberGreetingForFeet(feetNumber){
  // Write your code here!
  if(feetNumber<=400){
    return "This one is on me!";
  }else if(feetNumber>400 && feetNumber<=2000){
    return "That will be twenty bucks.";
  }else if (feetNumber>=2000 && feetNumber<=2500){
    return "I will gladly take your thirty bucks.";
  }else{
    return "No can do.";
  }

}

function ternaryCheckCity(city){
  // Write your code here!\
  let message = city ==="NYC"? "Ok, sounds good." : "No go.";
  return message;


}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message = "";
  switch(tip){
    case "generous" : 
      message= "Thank you so much.";
      break;
    case "not as generous" : 
      message="Thank you."
      break;
    default:
      message="Bye."
      break;  
  }
  return message;

}