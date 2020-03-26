import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [HomePageRoutingModule, SocialIconsModule, SmartPictureModule],
      providers: [{ provide: 'VanillaTilt', useValue: window['VanillaTilt'] }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
