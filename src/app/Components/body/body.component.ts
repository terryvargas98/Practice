import {Component} from '@angular/core';
import { getgid } from 'process';
import { DOCUMENT } from '@angular/common';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    Objeto: any = {
     frase: 'Un gran poder requiere un gran responsabilidad',
     autor: 'Ben Parker'
    };
     x = true;
     heroes: string[] = ['Hulk', 'Capitan', 'Thanos'];
     retornar(){
         return this.x = !this.x;
     }
    }
