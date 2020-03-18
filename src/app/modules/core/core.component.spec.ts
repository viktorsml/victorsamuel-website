import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routing';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        HeaderModule,
        CoreRoutingModule,
        SpinnerModule
      ],
      declarations: [
        CoreComponent,
        FooterComponent
      ],
      providers: [RouterModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
