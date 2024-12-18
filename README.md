# Code Challenge: JavaScript Fluency

## Instructions

1. Clone down this assignment to your local environment. 
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Description of the Problem
**Solve the following problems using higher order array methods**


For today's questions, we will perform all of our operations on the following array, `users`.

```js
const users = [
  { name: 'Reuben O.',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne H.',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph S.',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]
```

1. Return an array of all that contains only the `name` property of each user.
```js
getNames(users) //['Reuben O.', 'Laisha C', 'Anne H.','Steph S.','Carmen S']
```

2. We want all of the celebrities. Return an array of only the `verified` users.
```js
getVerfiedUsers(users) 
/* returns this array:
[
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  },
]
*/
```

3. Give me the folks who are struggling. Return an array of all of the users with less than 1000 `followers`.
```js
lessThan1k(users) 

/* returns this array:
[
  {
    name: 'Reuben O.',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  {
    name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: 'My commute is longer than yours.'
  },
  {
    name: 'Anne H.',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: '@mayabee is my best friend'
  }
]
*/
```

4. Write a function, `searchUsername`, that takes a string along with the array of objects and returns the user object whose `username` matches the string parameter.
```js
searchUsername(users, "@passaic_papi")

/* returns this array:
[
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  }
]
*/
```

5. Who is most long-winded? Return the object with the longest bio.
```js
longWinded(users) 

/* returns this array:
[
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  },
]
*/
```


6. Return an array sorted by `follower` count, least to greatest.
```js
follower(users) 
/* returns the follwoing array:
[
  { name: 'Reuben O.',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Anne H.',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Steph S.',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]
*/
```

