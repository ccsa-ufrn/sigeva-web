import { Component } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: [],
    template: `

        <!-- Ajeitar -->
        <nav class="navbar navbar-fixed-top navbar-light" style="background-color: white; border-bottom: 1px solid #c6c6c6;">
            <a class="navbar-brand" href="#">SIGEVA</a>
            <div class="float-xs-right">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            routerLink="/"
                        >Início</a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link text-danger"
                            routerLink="/register"
                        >Inscrever-se</a>
                    </li>
                    <li class="nav-item ">
                        <a
                            class="nav-link text-success"
                            routerLink="/login"
                        >Entrar</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class ExternalComponent { }
