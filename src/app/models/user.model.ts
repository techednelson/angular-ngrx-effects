interface Deserializable {
  deserialize(input: any): this;
}

export class User implements Deserializable {
  public id: string;
  public firstName: string;
  public lastName: string;
  public avatar: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
