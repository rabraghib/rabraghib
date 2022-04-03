import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  SkipSelf,
  ViewChild
} from '@angular/core';
import { IAbout } from '@rabraghib/content';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: []
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('ContentContainer') ContentContainerRef!: ElementRef<HTMLElement>;
  @ViewChild('ImgContainer') ImgContainerRef!: ElementRef<HTMLElement>;
  @Input() data!: IAbout;
  @Input() ShouldFitFullScreenHeight = false;
  @Output() TakeAction = new EventEmitter<boolean>();
  @HostBinding('class') get HostClasses() {
    return `
      ${
        this.ShouldFitFullScreenHeight
          ? 'min-h-screen md:min-h-[calc(100vh-2.5rem)]'
          : 'min-h-[30rem]'
      }
      relative grid gap-x-8 lg:gap-x-10 gap-y-5
      items-center justify-items-center md:content-center
      py-10 px-6 sm:px-10 lg:p-16 md:pt-28 lg:px-24 lg:pt-32
      grid-rows-[auto,1fr] md:grid-rows-none grid-cols-5 
      before:bg-primary before:block before:absolute before:z-0 before:top-0
      before:h-1/3 sm:before:h-1/2 before:w-full before:rounded-br-[100%] before:left-0
      md:before:h-[calc(100%+150px)] md:before:rounded-br-full md:before:left-[-50vw]
      md:before:w-[calc(50vw+100%/2.7)]
    `;
  }
  // changeDetector is of Host
  constructor(
    private breakpointObserver: BreakpointObserver,
    @SkipSelf() private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.isProperHeight(
      this.ContentContainerRef,
      this.ImgContainerRef
    ).subscribe(() => this.changeDetector.detectChanges());
  }

  OnCTAClicked() {
    this.TakeAction.emit(true);
  }
  isProperHeight(...els: ElementRef[]): Observable<boolean> {
    const totalHeight = els.reduce(
      (sum: number, el: ElementRef) => sum + el.nativeElement.offsetHeight,
      0
    );
    return this.breakpointObserver
      .observe([`(max-height: ${totalHeight + 200}px)`])
      .pipe(
        map(result => {
          this.ShouldFitFullScreenHeight = result.matches;
          return result.matches;
        }),
        shareReplay()
      );
  }
}
