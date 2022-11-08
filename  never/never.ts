function generateError(): never {
  throw new Error('Error was generated');
}

generateError();

function dumpError(): never {
  while(true) {}
}
  
function recursion(): never {
  return recursion();
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
  switch(action) {
    case 'refund':
      //...
      break;
    case 'checkout':
      //...
      break;
    case 'reject':
      //...
      break;
    default:
      // @ts-ignore
      const _: never = action;
      throw new Error('Such action doesn\'t exist');
  }
}

// Исчерпывающая проверка
function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if(typeof x === 'number') {
    return false;
  }

  generateError();
}

// never помогает нам ограничить какие-то случаи, когда мы должны проходить явную проверку по типам