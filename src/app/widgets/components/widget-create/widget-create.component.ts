import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Widget } from '../../models/widget';

@Component({
  selector: 'app-widget-create',
  templateUrl: './widget-create.component.html',
  styleUrls: ['./widget-create.component.css'],
})
export class WidgetCreateComponent implements OnInit {
  widgetCreateForm!: FormGroup;
  public pageTitle = 'Create New Widget';
  public errorMessage = '';

  @Output() widgetCreated = new EventEmitter<Widget>();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {

    this.widgetCreateForm = new FormGroup({
      id: new FormControl(0),
      shape: new FormControl(''),
      name: new FormControl(''),
    });
  }

  onSubmit() {

    let widget = this.widgetCreateForm.value as Widget;
    this.widgetCreated.emit(widget);

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
