import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondaryPage } from './secondary.page';

describe('SecondaryPage', () => {
  let component: SecondaryPage;
  let fixture: ComponentFixture<SecondaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
