import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
    selector: 'app-pastrie-description',
    templateUrl: './pastrie-description.component.html',
    styleUrls: ['./pastrie-description.component.scss']
})
export class PastrieDescriptionComponent implements OnInit {
    pastrie : Pastrie | undefined ;
    constructor(
        private route: ActivatedRoute, // récupérez le service route
        private pS: PastrieService // récupérez le service
    ) { 

    }
        ngOnInit() {
            // permet de récupérer l'identifiant
            const id = this.route.snapshot.paramMap.get('id');
            console.log(id);
            
            if (id)
              this.pS.getPastrie(id).subscribe(pastrie => {
                this.pastrie = pastrie;
                //console.log(pastrie)
              })
        }

}