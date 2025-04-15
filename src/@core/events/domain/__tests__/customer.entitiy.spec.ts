import { Customer } from '../entities/customer.entity';

test('shoudl create a valid customer', () => {
  const customer = Customer.create({
    name: 'teste',
    cpf: '12345678909',
  });

  expect(customer.name).toBe('teste');
  expect(customer.cpf.value).toBe('12345678909');
});
