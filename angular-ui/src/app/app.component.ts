import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _router: Router, @Inject(DOCUMENT) _document: Document) {
    if (
      !_document.defaultView!.location.pathname ||
      _document.defaultView!.location.pathname === '/'
    ) {
      this._router.navigateByUrl('login');
    }
  }

  ngOnInit() {}
}
