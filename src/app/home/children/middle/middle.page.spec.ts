import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiddlePage } from './middle.page';

describe('MiddlePage', () => {
  let component: MiddlePage;
  let fixture: ComponentFixture<MiddlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiddlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
