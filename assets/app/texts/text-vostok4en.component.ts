import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostok4en.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostok4EnComponent {
    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }
}