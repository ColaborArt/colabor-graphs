let id = 0;

export default function UIdGenerator() {
  return {
    next() {
      return {
        value: ++id
      }
    }
  }
}
