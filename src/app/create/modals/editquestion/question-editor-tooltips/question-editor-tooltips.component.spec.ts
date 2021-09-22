import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionEditorTooltipsComponent } from './question-editor-tooltips.component';

describe('QuestionEditorTooltipsComponent', () => {
  let component: QuestionEditorTooltipsComponent;
  let fixture: ComponentFixture<QuestionEditorTooltipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEditorTooltipsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionEditorTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
