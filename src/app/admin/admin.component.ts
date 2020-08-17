import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';

import { User,Product } from '@app/_models';
import { UserService } from '@app/_services';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Ng2SearchPipe} from 'ng2-search-filter';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];
  
   public products : any;
    searchText;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll()
        .subscribe((Prod:any): void => {
            this.loading = false;
            console.info(Prod);
            this.products = Prod;
        });
    }
}