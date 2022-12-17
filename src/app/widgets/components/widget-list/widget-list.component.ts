import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Widget } from '../../models/widget';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetListComponent {

  @Input() widgets: Widget[] | null;
  @Input() selectedWidget: Widget | null;

  @Output() widgetSelected = new EventEmitter<Widget>();
  @Output() widgetDeleted = new EventEmitter<Widget>();

  constructor() {
    this.widgets = [];
    this.selectedWidget = { id: 0 };
  }

  selectWidget(widget: Widget): void {
    this.widgetSelected.emit(widget);
  }

  deleteWidget(widget: Widget): void {
    var widgetName = `${widget.shape} ${widget.name}`;
    if (confirm(`Really delete the widget: ${widgetName}?`)) {
      this.widgetDeleted.emit(widget);
    }
  }

}
