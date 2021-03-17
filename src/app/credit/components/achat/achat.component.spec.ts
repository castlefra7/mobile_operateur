import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchatComponent } from './achat.component';

describe('AchatComponent', () => {
  let component: AchatComponent;
  let fixture: ComponentFixture<AchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
