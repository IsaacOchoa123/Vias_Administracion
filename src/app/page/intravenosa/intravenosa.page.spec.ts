import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntravenosaPage } from './intravenosa.page';

describe('IntravenosaPage', () => {
  let component: IntravenosaPage;
  let fixture: ComponentFixture<IntravenosaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntravenosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
