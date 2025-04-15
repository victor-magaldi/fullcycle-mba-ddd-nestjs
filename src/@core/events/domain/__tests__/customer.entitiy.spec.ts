import { Customer, CustomerId } from '../entities/customer.entity';

test('shoudl create a valid customer', () => {
  const customer = Customer.create({
    name: 'teste',
    cpf: '12345678909',
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.name).toBeDefined();
  expect(customer.name).toBe('teste');
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.cpf.value).toBeDefined();
  expect(customer.cpf.value).toBe('12345678909');
});
