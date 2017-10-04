import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { Http } from '@angular/http';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'login'.
   */
  selector: 'login',  // <login></login>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './login.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title,
    public username: String,
    public password: String,
    private _loginURL = 'https://plexsync.rtd3.me/servers',
    private http: Http
  ) {}

  onLogin(username, password) {
    
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    
    this.http.post(this._loginURL, body)
  }

  public ngOnInit() {
    console.log('hello `Login` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

}
