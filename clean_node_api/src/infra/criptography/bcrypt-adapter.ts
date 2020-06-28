import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly saltEncrypt: number;
  constructor (saltEncrypt: number) {
    this.saltEncrypt = saltEncrypt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.saltEncrypt)
    return hash
  }
}
