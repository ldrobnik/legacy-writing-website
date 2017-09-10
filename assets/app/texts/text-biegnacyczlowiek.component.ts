import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-biegnacyczlowiek.component.html',
    styleUrls: ['text.component.css']
})

export class TextBiegnacyczlowiekComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}