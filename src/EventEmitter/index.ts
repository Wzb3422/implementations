export class MyEventEmiter {
  private _events: {[props: string]: (() => any)[]} = {}
  public on(eventType: string, callback: (...args: any[]) => any) {
    if (eventType in this._events) {
      this._events[eventType].push(callback)
    } else {
      this._events[eventType] = [callback]
    }
    return this
  }
  public emit(eventType: string, ...args: any[]) {
    if (eventType in this._events) {
      this._events[eventType].forEach(cb => {
        cb.apply(this, args as [])
      })
      return true
    } else {
      return false
    }
  }
  public off(eventType: string, callback: (...args: any[]) => any) {
    if (eventType in this._events) {
      const index = this._events[eventType].findIndex(cb => cb === callback)
      console.log(index)
      if (index !== -1) {
        this._events[eventType].splice(index, 1)
      }
    }
    return this
  }
}
