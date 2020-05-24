import { MyEventEmiter } from '../src/EventEmitter'

describe('MyEventEmitter', () => {
  test('add', () => {
    const emitter = new MyEventEmiter()
    emitter.on('add', (a: number, b: number) => {
      expect(a+b).toBe(3)
    })
    emitter.emit('add', 1, 2)
  })
})
