import { Aggregate } from 'src/@core/common/domain/aggregate-root';
import Cpf from 'src/@core/common/domain/value-objects/cpf-vo';
import Uuid from 'src/@core/common/domain/value-objects/uid-vo';

export class CustomerId extends Uuid {}

export type CustomerConstructorProps = {
  id: string;
  cpf: Cpf;
  name: string;
};
export class Customer extends Aggregate {
  id: CustomerId;
  cpf: Cpf;
  name: string;

  constructor(props: CustomerConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new CustomerId(props.id)
        : (props.id ?? new CustomerId());
    this.cpf = props.cpf;
    this.name = props.name;
  }

  static create(command: { name: string; cpf: string }) {
    return new Customer({
      name: command.name,
      cpf: new Cpf(command.cpf),
    });
  }

  toJSON() {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
    };
  }
}
