import { HomeComponent } from './home.component';

export default [
    {
        path: '',
        component: HomeComponent
    },
    { 
        path: 'login', 
        loadChildren: 'app/js/external/authorization/authorization.module#AuthorizationModule' 
    },
    {
        path: 'register', 
        loadChildren: 'app/js/external/authorization/authorization.module#AuthorizationModule'
    },
    {
        path: 'recovery-password', 
        loadChildren: 'app/js/external/authorization/authorization.module#AuthorizationModule'
    },
    {
        path: 'recovery-password/:id', 
        loadChildren: 'app/js/external/authorization/authorization.module#AuthorizationModule'
    }
];