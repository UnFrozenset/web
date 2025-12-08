// 1
function z1() {
    const students = [
        {name: 'Павел', age: 20},
        {name: 'Иван', age: 20},
        {name: 'Эдем', age: 20},
        {name: 'Денис', age: 20},
        {name: 'Виктория', age: 20},
        {age: 40},
    ]

    function pickPropArray(arr, prop) {
        let result = []

        for (let elem of arr) {
            if (elem.hasOwnProperty(prop)) {
                result.push(elem[prop])
            }
        }

        return result
    }

    const result = pickPropArray(students, 'name')
    console.log(result)
}

// 2
function z2() {
    function createCounter() {
        let count = 0

        return function () {
            console.log(++count);
        }
    }

    const counter1 = createCounter()
    counter1() // 1
    counter1() // 2

    const counter2 = createCounter()
    counter2() // 1
    counter2() // 2

    counter1() // 3
    counter1() // 4
    counter2() // 3
}

// 3
function z3() {
    function spinWords(str) {
        let words = str.split(' ')
        return words.map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
    }

    const result1 = spinWords("Привет от Legacy")
    console.log(result1) // тевирП от ycageL

    const result2 = spinWords("This is a test")
    console.log(result2) // This is a test
}

// 4
function z4() {
    function findTwoSum(nums, target) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }

        return "Пара не найдена"
    }

    const result1 = findTwoSum([2, 7, 11, 15], 9)
    console.log(result1) // [0, 1]

    const result2 = findTwoSum([1, 2, 3], 6)
    console.log(result2) // Подходящей пары нет

    const result3 = findTwoSum([2, 7, 11, 15], 17)
    console.log(result3) // [0, 3]

    const result4 = findTwoSum([2, 7, 11, 15], 26)
    console.log(result4) // [2, 3]
}

// 5
function z5() {
    function findLongestSubstring(arr) {
        arr.sort((a, b) => a.length - b.length);
        const firstStr = arr[0]
        let res = ""

        for (let i = 0; i < firstStr.length - 1; i++) {
            for (let j = firstStr.length; j >= i + 2; j--) {
                const substring = firstStr.substring(i, j);

                let isGoodSub = true

                for (let str of arr) {
                    if (!str.includes(substring)) {
                        isGoodSub = false
                        break
                    }
                }

                if (!isGoodSub) {
                    continue
                }
                if (substring.length > res.length) {
                    res = substring
                }
            }
        }
        return res;
    }

    const result1 = findLongestSubstring(["цветок", "поток", "хлопок"])
    console.log(result1) // "ок"

    const result2 = findLongestSubstring(["собака", "гоночная машина", "машина"])
    console.log(result2) // ""

    const result3 = findLongestSubstring(["asdahyurghgitdjhgftiuhjhuiuiaaaaa", "aaaaafkgjdhgjhdghaaaa", "dsgdhghdghdghaaaaadjhfshfghkfh"])
    console.log(result3) // "aaaaa"
}

// z1()
// z2()
// z3()
// z4()
// z5()