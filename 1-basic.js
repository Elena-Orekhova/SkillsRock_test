// Проверка на палиндром
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '');
  
  if (!str) return false;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Демонстрация функции Проверка на палиндром
function checkPalindrome() {
  const input = document.getElementById('palindromeInput').value;
  const result = isPalindrome(input);
  document.getElementById('palindromeOutput').textContent = result ? 'Это палиндром' : 'Это не палиндром';
}


// FizzBuzz
function fizzBuzz() {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result.join(', ');
}

// Демонстрация функции FizzBuzz
function runFizzBuzz() {
  document.getElementById('fizzBuzzOutput').textContent = fizzBuzz();
}


// Разбиение массива на части
function chunkArray(array, size) {
  let newArray = [];

  if (size <= 0) {
    return newArray;
  }
  
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;
}

// Демонстрация функции Разбиение массива на части
function chunkArrayDemo() {
  const input = document.getElementById('chunkInputArray').value.split(',').map(i => i.trim());
  const size = parseInt(document.getElementById('chunkSize').value, 10);
  document.getElementById('chunkOutput').textContent = JSON.stringify(chunkArray(input, size), null, 2);
}