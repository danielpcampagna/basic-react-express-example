import { User } from "../base/user.base";
import { RandomUserService } from "../services/randomUser";

export class UserController {
  static async read(): Promise<void | User> {
    const res = await new RandomUserService().get()
    if (res) {
      const { title, last } = res.data.results[0].name;
      return {
        title,
        last
      }
    }
  }
}