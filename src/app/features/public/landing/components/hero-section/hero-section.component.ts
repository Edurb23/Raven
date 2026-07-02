import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject
} from '@angular/core';
import { createTimeline, utils } from 'animejs';

import { CtaLinkComponent } from '../../../../../shared/components/cta-link/cta-link.component';

@Component({
  selector: 'app-hero-section',
  imports: [CtaLinkComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private timeline?: ReturnType<typeof createTimeline>;

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const select = (target: string) => root.querySelector(target);

    this.timeline = createTimeline({
      loop: true,
      defaults: { ease: 'inOutQuad' }
    });

    this.timeline
      .add(select('.player-demo__device'), { scale: [0.96, 1], opacity: [0, 1], duration: 500 })
      .add(select('.player-demo__cover'), { scale: [0.92, 1], rotate: [-2, 0], duration: 650 }, '-=260')
      .add(select('.player-demo__progress span'), { width: ['8%', '72%'], duration: 1400 })
      .add(select('.player-demo__like'), { x: [-24, 0], opacity: [0, 1], scale: [0.88, 1], duration: 420 }, '-=820')
      .add(select('.player-demo__rating'), { x: [24, 0], opacity: [0, 1], scale: [0.88, 1], duration: 420 }, '-=360')
      .add(select('.player-demo__moving-cover'), { x: [0, -128], y: [0, 190], scale: [0.82, 0.42], opacity: [0, 1, 0], duration: 900 })
      .add(select('.player-demo__list'), { y: [24, 0], opacity: [0, 1], duration: 520 }, '-=520')
      .add(root.querySelectorAll('.player-demo__list-cover'), { y: [18, 0], opacity: [0, 1], duration: 360, delay: utils.stagger(110) }, '-=240')
      .add({ duration: 1100 })
      .add(root.querySelectorAll('.player-demo__like, .player-demo__rating, .player-demo__list'), { opacity: 0, duration: 360 });
  }

  ngOnDestroy(): void {
    this.timeline?.revert();
  }
}
