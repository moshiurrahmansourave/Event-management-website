<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer:</b></summary>
<p> A: `{}

#### Answer: ?

<i>Write your explanation here</i>

</p>this  console are trying to get greetign  value  and the greetgn = {} . that's  why the  ans is (A)
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer:</b></summary>
<p> C: `"12"`

#### Answer: ?

<i>Write your explanation here</i>

</p> on the function we can get sum of a and b and  the value of a is number but the value of b is string that's why the answer is '12' 
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p> A: `['🍕', '🍫', '🥑', '🍔']`

#### Answer: ?

<i>Write your explanation here</i>

</p> on the function try to  get value of (food) by console log and  the answer is (A) because the value of favoriteFood  is not set in the  food
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>B: `Hi there, undefined`

#### Answer: ?

<i>Write your explanation here</i>

</p>on the function do not set the value of name for the reason the result of name is undefined and the  return of  string "Hi there" is Hi there
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>C: 3

#### Answer: ?

<i>Write your explanation here</i>

</p> because the condition is Count+= 1 that's means 0 number in the array of nums is not count and the function is looping  and the  last count is 3 that's why the result is  3
</details>
