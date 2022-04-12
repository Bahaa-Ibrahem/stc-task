import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from 'ngx-toastr';
import { LocalizationService } from 'src/app/internationalization/localization.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: string = 'en';
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(private themeService: ThemeService, 
    private localizationService: LocalizationService,
    private overlay: OverlayContainer) { }

  ngOnInit(): void {
    localStorage.setItem('language', 'en');    
    this.localizationService.initService();

    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        document.documentElement.classList.add(darkClassName);
        // this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        document.documentElement.classList.remove(darkClassName);
        // this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  onSelect(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
  }

  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null!;
  }

  get meduimFont() {
    return this.themeService.font === 'meduim';
  }

  set meduimFont(enabled: boolean) {
    this.themeService.font = null!;
  }

  get samllFont() {
    return this.themeService.font === 'small';
  }

  set samllFont(enabled: boolean) {
    this.themeService.font = enabled ? 'small' : null!;
  }

  get largFont() {
    return this.themeService.font === 'larg';
  }

  set largFont(enabled: boolean) {
    this.themeService.font = enabled ? 'larg' : null!;
  }

}