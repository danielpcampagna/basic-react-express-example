import axios from "axios";
import { RandomUserAnswer } from "./base";

const { USER_BASE_SERVICE } = process.env;
export class RandomUserService {
  get() {
    const baseUrl = USER_BASE_SERVICE as string;
    return axios.get<RandomUserAnswer>(baseUrl).catch(console.error);
  }
}