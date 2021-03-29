import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyfromMobileComponent } from './buyfrom-mobile.component';

describe('BuyfromMobileComponent', () => {
  let component: BuyfromMobileComponent;
  let fixture: ComponentFixture<BuyfromMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyfromMobileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyfromMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
