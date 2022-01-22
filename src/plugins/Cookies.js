export function CookiesGet(name) {
  let a = JSON.parse(localStorage.getItem(name));
  if (!a) return false
  return a;
}

export function CookiesSet(name, value) {
  let a = JSON.parse(localStorage.getItem(name));
  localStorage.setItem(name, JSON.stringify(value));
  return true;
}

export function CookiesRemove(value) {
  let a = JSON.parse(localStorage.getItem(value));
  if (a) localStorage.removeItem(value);
  return true;
}