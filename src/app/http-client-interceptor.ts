import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(private $localStorage: LocalStorageService) {

  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.$localStorage.retrieve("authenticationToken");
    console.log('jwt token ' + token);
    if (true) {
        console.log('jwt token jinlaile');

      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YW5sb25nMXNkZmRzMSJ9.NYVeIMgAGtkn009Xsj6hbhfsFnTcJ9BzagsGheCBLiEVBGz8BZRqrX4Xqvui6yF7nPrfKYHuk8RUBOcZLlledA")
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
