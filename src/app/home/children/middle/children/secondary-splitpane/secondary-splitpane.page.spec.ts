import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondarySplitpanePage } from './secondary-splitpane.page';

describe('SecondarySplitpanePage', () => {
  let component: SecondarySplitpanePage;
  let fixture: ComponentFixture<SecondarySplitpanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySplitpanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondarySplitpanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
