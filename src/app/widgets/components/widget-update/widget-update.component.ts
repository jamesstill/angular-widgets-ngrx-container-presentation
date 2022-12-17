import { Component, Input, OnInit, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Widget } from '../../models/widget';

@Component({
  selector: 'app-widget-update',
  templateUrl: './widget-update.component.html',
  styleUrls: ['./widget-update.component.css']
})
export class WidgetUpdateComponent implements OnInit {

  @Input() widget: Widget | null;

  @Output() widgetUpdated = new EventEmitter<Widget>();

  widgetUpdateForm!: FormGroup;
  public pageTitle = 'Update Widget';
  public errorMessage = '';

  constructor(private readonly router: Router) {
    this.widget = { id: 0 };
  }

  ngOnInit(): void {

    this.widgetUpdateForm = new FormGroup({
      'id': new FormControl(this.widget?.id),
      'shape': new FormControl(this.widget?.shape),
      'name': new FormControl(this.widget?.name)
    });
  }

  onSubmit() {
    
    let widget = this.widgetUpdateForm.value as Widget;
    this.widgetUpdated.emit(widget)

    // Navigate back to the list
    this.router.navigate(['/widgets']);
  }

  goBack(): void {
    this.router.navigate(['/widgets'], {
      queryParamsHandling: 'preserve',
      queryParams: { message: '' },
    });
  }
}