import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageSettingsPage } from './message-settings.page';

describe('MessageSettingsPage', () => {
  let component: MessageSettingsPage;
  let fixture: ComponentFixture<MessageSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
