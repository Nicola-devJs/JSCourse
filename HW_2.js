// 1
const user = {
   firstName: 'Boris',
   age: 24,
}

console.log('#1', user)

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = ['apple', 'pear', 'plum']

fruitContainer[1] = 'cherry'
console.log('#2', fruitContainer)

// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3

const yearsOfService = 5
const performanceRating = 4

const conditionPerformanceRating =
   performanceRating === 4 || performanceRating === 5

if (performanceRating < 1 || performanceRating > 5) {
   console.log('The rating can be a min of 1 and a max of 5')
} else if (yearsOfService < 5 && conditionPerformanceRating) {
   console.log('Bonus 5%')
} else if (yearsOfService >= 5 && conditionPerformanceRating) {
   console.log('Bonus 10%')
} else {
   console.log('Not bonus')
}

const employeeInfo = { yearsOfService, performanceRating }
console.log('#3', employeeInfo)

/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

// 4
const userData = {
   name: 'Victor',
   age: 31,
   address: {
      street: '123 Main Street',
      city: 'Cityville',
      state: 'Stateville',
      zipCode: '12345',
   },
}

const userData2 = {
   name: 'Vlad',
   age: '31',
   address: {
      street: '456 Oak Avenue',
      city: 'Townsville',
      state: 'Stateland',
      zipCode: null,
   },
}

const data = [userData, userData2]

if (data[2]) {
   console.log('1')
} else if (
   data[0].age === data[1].age &&
   !(typeof data[0].name !== 'string' || typeof data[1].address.zipCode)
) {
   console.log('2')
} else if (typeof data[0].name === 'string' && +data[1].age <= 0) {
   console.log('3')
} else if (typeof data[1].address['zipCode'] === 'object') {
   console.log('4')
} else {
   console.log('5')
}

//! В консоли будет выведено '4'. Так как ключ объекта по этому адресу - data[1].address['zipCode'] вернет значение 'null', typeof null === 'object'. Это особенность js придуманная еще в начале создания самого языка.
//? В консоли не выведено '1', потому что элемент в массиве под индексом [2] не определен
//? В консоли не выведено '2', потому что при строгом сравнении разных типов data[0].age === data[1].age, всегда возращается false, Поэтому без раздумий условный оператор && возвращает false
//? В консоли не выведено '3', потому что приведенное к числу строка '31' - не может быть меньше или равно нулю +data[1].age <= 0, поэтому возвращается false, а условный оператор && если есть false (falsy значение) сразу его возвращает
//? В консоли не выведено '5', потому что выполнилось пердыдущее условие, и вывело '4'

// Что будет выведено в консоли и почему

// 5

const programmingLanguage = 'Python'

switch (programmingLanguage) {
   case 'JavaScript':
      console.log('JavaScript - отличный выбор для веб-разработки!')
      break
   case 'Python':
      console.log('Python - мощный и удобный язык для разработки.')
      break
   case 'Java':
      console.log(
         'Java - популярный язык для разработки кросс-платформенных приложений.'
      )
      break
   case 'C++':
      console.log(
         'C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.'
      )
      break
   default:
      console.log(
         `${programmingLanguage} не соответствует ни одному из вышеперечисленных вариантов.`
      )
}

/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */
