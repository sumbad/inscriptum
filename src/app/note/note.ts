// import { Define } from 'abstract-element';

// require('./style.scss');

import './style.scss';
import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';




class Note {
  constructor(
    private _authService: AuthService = new AuthService(new StorageService(), `${document.location.origin}/notes`),
  ) {
    const $tl_article = document.querySelector('.tl_article');
    if ($tl_article !== null) {
      if (this._authService.$authenticated.getValue()) {
        $tl_article.classList.add('tl_article_editable');
      } else {
        this._authService.$authenticated.subscribe(
          hasAuth => {
            if (hasAuth !== null) {
              if (hasAuth) {
                $tl_article.classList.add('tl_article_editable');
              } else {
                $tl_article.classList.remove('tl_article_editable');
              }
            }
          }
        );
      }
    }

  }
}


new Note();


// @Define('inscriptum-note')
// export class NoteComponent {

// }