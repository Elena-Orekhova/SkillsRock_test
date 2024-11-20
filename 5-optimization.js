//1. Функция debounce
function debounce(func, delay) {
  let timeout;
  
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Пример использования
let rawClickCount = 0;
let debouncedClickCount = 0;

function updateRawClickDisplay() {
  rawClickCount++;
  document.getElementById('rawClickOutput').textContent = `Все клики: ${rawClickCount}`;
}

const debouncedFunction = debounce(() => {
  debouncedClickCount++;
  document.getElementById('debounceOutput').textContent = `Обработанные клики (дебаунс): ${debouncedClickCount}`;
}, 1000);

const debounceButton = document.getElementById('debounceButton');
debounceButton.addEventListener('click', () => {
  updateRawClickDisplay();
  debouncedFunction();
});


//2. Глубокое клонирование объекта
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Если это не объект, возвращаем его как есть
  }

  const copy = Array.isArray(obj) ? [] : {}; // Определяем тип (массив или объект)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]); // Рекурсивно клонируем значения
    }
  }
  return copy;
}

// Пример использования
function cloneDemo() {
  const original = { name: 'Anna', address: { city: 'Paris' } };
  const copy = deepClone(original);
  copy.address.city = 'Rum';
  document.getElementById('cloneOutput').textContent =
    `Оригинал: ${JSON.stringify(original)}\nКопия: ${JSON.stringify(copy)}`;
}
