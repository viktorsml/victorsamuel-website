import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';
import { SmartPictureModule } from 'src/app/shared/components/smart-picture/smart-picture.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [
        HomePageRoutingModule,
        SocialIconsModule,
        SmartPictureModule
      ],
      providers: [
        { provide: 'VanillaTilt', useValue: window['VanillaTilt'] }
      ]
    })
      .compileComponents();
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
