import axios from 'axios';
import { User } from '../bases/user';

const { REACT_APP_HELLO_SERVER_URL } = process.env;

export class HelloServer {
  getUser(): Promise<User> {
    const baseUrl = `${REACT_APP_HELLO_SERVER_URL}users/`
    return axios.get(baseUrl).then(res => res.data)
  }
}