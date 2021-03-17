import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoconsoPage } from './infoconso.page';

describe('InfoconsoPage', () => {
  let component: InfoconsoPage;
  let fixture: ComponentFixture<InfoconsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoconsoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoconsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
