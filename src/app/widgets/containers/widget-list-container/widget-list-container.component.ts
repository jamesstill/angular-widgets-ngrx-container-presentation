import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Widget } from '../../models/widget';

// ngrx
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { getSelectedWidget, selectWidgets } from '../../state/selectors/widgets.selectors';
import { WidgetActions } from '../../state/actions';

@Component({
    selector: 'app-widget-list-container',
    templateUrl: './widget-list-container.component.html',
})
export class WidgetListContainerComponent implements OnInit {

    widgets$: Observable<Widget[]>;
    selectedWidget$: Observable<Widget>;
    errorMessage = '';

    constructor(private readonly store: Store<State>) {
        // store select function expects a selector as an arg
        this.widgets$ = this.store.select(selectWidgets);
        this.selectedWidget$ = this.store.select(getSelectedWidget) as Observable<Widget>;
    }

    ngOnInit(): void {
        // send message to store that widgets were loaded
        this.store.dispatch(WidgetActions.loadWidgets());
    }

    onWidgetSelected(widget: Widget): void {
        // send message to store that a widget was selected
        this.store.dispatch(WidgetActions.selectCurrentWidget({ selectedWidget: widget }));
    }

    onWidgetDeleted(widget: Widget): void {
        // send message to store that a widget was deleted
        this.store.dispatch(WidgetActions.deleteWidget({ id: widget.id }));
    }
}
