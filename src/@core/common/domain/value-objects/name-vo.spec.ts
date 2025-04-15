import { Name } from './name-vo';

test('Should crate a valid name', () => {
  const name = new Name('teste');
  expect(name.value).toBe('teste');
});
