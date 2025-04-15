interface Identifiable {
  equals(other: Identifiable): boolean;
}
export abstract class Entity {
  id: Identifiable;

  constructor(id: Identifiable) {
    this.id = id;
  }

  equals(obj: this): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }

    if (obj.id === undefined) {
      return false;
    }

    if (obj.constructor.name !== this.constructor.name) {
      return false;
    }

    return obj.id.equals(this.id);
  }
}
