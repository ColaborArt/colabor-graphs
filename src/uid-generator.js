export default function* UIdGenerator() {
  let id = 0;

  while (true) {
    yield ++id;
  }
}
