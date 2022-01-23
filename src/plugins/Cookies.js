export function CookiesGet(name) {
  let a = JSON.parse(localStorage.getItem(name));
  if (!a) return false
  return a;
}

export function CookiesSet(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
  return true;
}

export function CookiesRemove(name) {
  let a = JSON.parse(localStorage.getItem(name));
  if (a) localStorage.removeItem(name);
  return true;
}

export function SessionGet(name) {
  let a = window.sessionStorage.getItem(name);
  if (!a) return false;
  return a;
}

export function SessionSet(name, value) {
  window.sessionStorage.setItem(name, JSON.stringify(value));
  return true;
}

export function SessionRemove(name) {
  let a = JSON.parse(window.sessionStorage.getItem(name));
  if (a) window.sessionStorage.removeItem(name);
  return true;
}