import { injectable } from "inversify";
import { BehaviorSubject } from "rxjs";

@injectable()
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  login(username: string, password: string): void {
    setTimeout(() => this.isAuthenticated$.next(true), 1000);
  }

  getIsAuthenticated() {
    return this.isAuthenticated$.asObservable();
  }
}
