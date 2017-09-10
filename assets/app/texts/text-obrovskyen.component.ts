import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-obrovskyen.component.html',
    styleUrls: ['text.component.css']
})

export class TextObrovskyEnComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}