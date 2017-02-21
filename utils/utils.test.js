const utils = require('./utils')
const expect = require('expect')

it('should add two numbers', () => {
  let res = utils.add(33,11)
  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`expected 44 but got ${res}`)
  // }
});

it('should square a number', () => {
  let res = utils.square(6)
  expect(res).toBe(36).toBeA('number')
  // if(res !== 36) {
  //   throw new Error(`Expected 36 but got ${res}`)
  // }
})

it('should verify that first and lastname are set', () => {
  let userObj = {
    age: 39,
    sex: 'male',
    city: 'Pretoria'
  }
  let fullName = 'Pierre Ferreira'
  let res = utils.setName(userObj, fullName)
  expect(res).toInclude({
    firstName: 'Pierre',
    lastName: 'Ferreira'
  }).toBeA('object')
})

it('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'Peer'}).toNotEqual({name: 'Peers'})
  // expect([1,5,'ball']).toEqual([1,5,'ball'])
  expect({
    name: "Peer",
    age: 39
  }).toInclude({
    age: 39
  })
})
