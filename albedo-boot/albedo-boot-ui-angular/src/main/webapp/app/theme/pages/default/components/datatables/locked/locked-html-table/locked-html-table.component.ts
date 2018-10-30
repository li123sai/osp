import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core'
import { Helpers } from '../../../../../../../helpers'
import { ScriptLoaderService } from '../../../../../../../shared/base/service/script-loader.service'


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./locked-html-table.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LockedHtmlTableComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/demo/default/custom/components/datatables/locked/html-table.js')

    }

}
