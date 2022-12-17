import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Widget } from '../../models/widget';

// ngrx
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { WidgetActions } from '../../state/actions';
import { getWidget } from '../../state/selectors/widgets.selectors';

@Component({
    selector: 'app-widget-update-container',
    templateUrl: './widget-update-container.component.html',
})
export class WidgetUpdateContainerComponent implements OnInit {

    widget$: Observable<Widget>;

    errorMessage = '';

    constructor(
        private readonly route: ActivatedRoute,
        private readonly store: Store<State>) {

        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.widget$ = this.store.select(getWidget(id)) as Observable<Widget>;
    }

    ngOnInit(): void { }

    onWidgetUpdated(widget: Widget): void {
        // send message to store that a widget was updated
        this.store.dispatch(WidgetActions.updateWidget({ widget }));
    }
}
