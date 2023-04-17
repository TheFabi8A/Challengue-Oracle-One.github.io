const textUser = document.getElementById('textarea-user');
const textResult = document.getElementById('textarea-result');
const btnCript = document.getElementById('btn-cript');
const btnUncript = document.getElementById('btn-uncript');
const btnCopy = document.getElementById('btn-copy');
const msgError = document.getElementById('message-error');
const textEmpty = document.getElementById('text-empty-alert');
const containerResult = document.getElementById('container-result');

const criptWords = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat',
};

const uncriptWords = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u',
};

btnCopy.addEventListener('click', () => {
  const text = textResult.value;
  navigator.clipboard.writeText(text);
});

btnCript.addEventListener('click', () => {
  const text = textUser.value.toLowerCase();
  const criptText = criptOrUncript(text, criptWords);

  if (hasSpecialChars(text)) {
    msgError.classList.remove('hidden');
    setTimeout(() => {
      msgError.classList.add('hidden');
    }, 3000);
  } else {
    const criptText = criptOrUncript(text, criptWords);
    textResult.innerHTML = criptText;
  }

  if (textUser.value.length === 0) {
    textEmpty.classList.remove('hidden');
    containerResult.classList.add('hidden');
    setTimeout(() => {
      textEmpty.classList.add('hidden');
      containerResult.classList.remove('hidden');
    }, 5000);
  }
  textResult.innerHTML = criptText;
});

btnUncript.addEventListener('click', () => {
  const text = textUser.value.toLowerCase();
  const uncriptText = criptOrUncript(text, uncriptWords);

  if (hasSpecialChars(text)) {
    msgError.classList.remove('hidden');
    setTimeout(() => {
      msgError.classList.add('hidden');
    }, 3000);
  } else {
    const uncriptText = criptOrUncript(text, criptWords);
    textResult.innerHTML = uncriptText;
  }

  if (textUser.value.length === 0) {
    textEmpty.classList.remove('hidden');
    containerResult.classList.add('hidden');
    setTimeout(() => {
      textEmpty.classList.add('hidden');
      containerResult.classList.remove('hidden');
    }, 5000);
  }
  textResult.innerHTML = uncriptText;
});

/**
 * Verifica si el texto contiene caracteres especiales.
 *
 * @param {string} text
 * @return {boolean}
 */
function hasSpecialChars(text) {
  const specialChars = /[!@#$%^&*(),.?":{}|<>ñáéíóú]/g;
  return specialChars.test(text);
}

/**
 * Texto encripta o desencripta reemplazando claves en un objeto..
 *
 * @param {string} text
 * @param {Object} keys
 * @return {string}
 */
function criptOrUncript(text, keys) {
  const regex = new RegExp(Object.keys(keys).join('|'), 'g');
  return text.replace(regex, (match) => keys[match]);
}


if (window.screen.width >= 1440) {
  textUser.setAttribute('rows', '10');
}


