import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { AboutData, getBrandInfo, ProjectsData } from '@rabraghib/content';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent implements OnInit {
  @HostBinding('class') readonly HostClasses = `
    block h-screen w-full overflow-x-hidden overflow-y-auto relative bg-black text-slate-400
    scroll-smooth
  `;

  readonly SocialProfiles = AboutData.profiles
    .map(profile => ({
      ...profile,
      brand: getBrandInfo(profile.platform)
    }))
    .filter(p => p.brand.labels.includes('social'));
  readonly data = {
    about: AboutData,
    projects: ProjectsData
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    AOS.init({
      delay: 100,
      duration: 1000
    });
    (this.elementRef.nativeElement as HTMLElement).onscroll = () => {
      AOS.refresh();
    };
  }
}
