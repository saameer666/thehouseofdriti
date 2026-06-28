import { Routes } from '@angular/router';
import { Homepagelogin } from './homepagelogin/homepagelogin';
import { Mainpage } from './mainpage/mainpage';
import { Collections } from './mainpage/collections/collections';



export const routes: Routes = [
    {
        path: '',
        component: Homepagelogin
    },
    {
        path: 'mainpage',
        component: Mainpage,
        
        
    }
];