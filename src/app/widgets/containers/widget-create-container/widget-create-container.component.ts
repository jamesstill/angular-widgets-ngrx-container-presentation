import { Component, OnInit } from '@angular/core';
import { Widget } from '../../models/widget';

// ngrx
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { WidgetActions } from '../../state/actions';

@Component({
    selector: 'app-widget-create-container',
    templateUrl: './widget-create-container.component.html',
})
export class WidgetCreateContainerComponent implements OnInit {

    errorMessage = '';

    constructor(private readonly store: Store<State>) { }

    ngOnInit(): void { }

    onWidgetCreated(widget: Widget): void {
        // send message to store that a widget was created
        this.store.dispatch(WidgetActions.createWidget({ widget }));
    }
}
