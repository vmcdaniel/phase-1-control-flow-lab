

function scuberGreetingForFeet(feetLength) {
  if (feetLength <= 400) {
  return 'This one is on me!'; 
  }
  else if(feetLength >= 400 && feetLength <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feetLength > 2500) {
    return 'No can do.';
  }
  else if (feetLength > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}


function ternaryCheckCity(city){
  return (city === 'NYC') ? 'Ok, sounds good.' :'No go.';
  //return (city === 'Pittsburgh')  ? 'No go.' : 'Lets go.';
}

function switchOnCharmFromTip(tip){;
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.';
        break;   
        case 'thanks for everything':
          return 'Bye.'
          break;
}
} 