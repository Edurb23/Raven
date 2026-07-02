import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]'
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  @Input() revealDelay = 0;

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.renderer.addClass(element, 'reveal-on-scroll');
    this.renderer.setStyle(element, 'transition-delay', `${this.revealDelay}ms`);

    if (!('IntersectionObserver' in window)) {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.renderer.addClass(element, 'is-visible');
        this.observer?.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
