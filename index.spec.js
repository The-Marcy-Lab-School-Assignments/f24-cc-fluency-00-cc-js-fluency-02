const {
  getNames,
  getVerifiedUsers,
  lessThan1k,
  searchUsername,
  longWinded,
  follower
} = require('./index.js');

const users = require('./users.js')
const testSuiteName = 'cc-fluency-00'

describe(testSuiteName, () => {
  // 1. getNames
  it('getNames returns an array of names corresponding to all users', () => {
    expect(getNames(users)).toEqual(['Reuben O.', 'Laisha C', 'Anne H.','Steph S.','Carmen S'])
  });

  // 2. getNames
  it('getVerifiedUsers returns an array of user objects that are `verified`', () => {
    expect(getVerifiedUsers(users)).toEqual([
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
    ])
  });

  // 3. lessThan1k
  it('lessThan1k returns an array of user objects that have a `followers` count of less than 1000', () => {
    expect(lessThan1k(users)).toEqual([
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
    ])
  });

  // 4. searchUsername
  it('searchUsername returns an array containing the user object with the provided username', () => {
    expect(searchUsername(users, "@passaic_papi")).toEqual([
      { name: 'Laisha C',
        username: '@passaic_papi',
        followers: 700,
        verified: true,
        bio: "My commute is longer than yours."
      }
    ])
  });

  // 5. longWinded
  it('longWinded returns an array containing the user object with the longest bio', () => {
    expect(longWinded(users)).toEqual([
      { name: 'Carmen S',
        username: '@omar_apollo_fanclub',
        followers: 1200000,
        verified: true,
        bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
      },
    ])
  });

  // 6. follower
  it('follower returns the users array according to `followers` in ascending order', () => {
    expect(follower(users)).toEqual([
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
    ])
  });


})
