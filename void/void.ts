function logId(id: string): void {
  console.log(id);
}

const loggedId = logId('qwert2131242');
console.log(loggedId);

function muliplyValues(a: number, b?: number): number | undefined /* number | void */ {
  // Если в хоть одной ветке, мы что-то возвращаем, то функция вернет что-то, или undefined
  // Но тут можно использовать вовращаемое значенеие number | void
  if (!b) {
    return a * a;
  }
}

// void игнорирует возврат, если мы типизируем функцию, которая возращает void
type VoidFn = () => void;

const ignore: VoidFn = () => {
  return true; // Для нас не важно, что вернет (будет проигнорировано)
}
console.log(ignore()); // true

const arrHere = [1, 2, 3];
const arrThere = [];
const innerFn = (el: number): number => arrThere.push(el);

arrHere.forEach(innerFn);