import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  get theme(): string {
    return document.documentElement.getAttribute('theme')!;
  }

  set theme(name: string) {
    document.documentElement.setAttribute('theme', name);
  }

  get font(): string {
    return document.documentElement.getAttribute('font')!;
  }

  set font(name: string) {
    document.documentElement.setAttribute('font', name);
  }

}
