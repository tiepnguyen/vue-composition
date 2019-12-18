import { welcome } from '@/composables/greeting.ts'

describe('greeting tests', () => {
  it('should welcome with name', () => {
    let name = 'World'
    expect(welcome(name)).toBe(`Welcome to ${name}`)
  })
})
