import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemCardComponent } from './card-item-card.component';

describe('CardItemCardComponent', () => {
  let component: CardItemCardComponent;
  let fixture: ComponentFixture<CardItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
