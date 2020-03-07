import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerDetailPage } from './worker-detail.page';

describe('WorkerDetailPage', () => {
  let component: WorkerDetailPage;
  let fixture: ComponentFixture<WorkerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
