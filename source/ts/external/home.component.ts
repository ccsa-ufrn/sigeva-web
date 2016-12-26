import { Component } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['public/css/home.css'],
    template: `
        <div class="row">
            <div class="col-lg-12">
                <div class="bg-image">
                    <h1>SIGEVA</h1>
                    <h2>Participe da comunidade acadêmica através dos eventos
                    que nós oferecemos à você.</h2>
                </div>

                <div class="main-box">
                    <input class="form-control" placeholder="Procurar evento">
                    <button>Cadastrar-se</button>
                </div>
            </div>
        </div>

        <div class="row box-events">
            <div class="col-lg-12">
                <h1><span>#</span> Acompanhe nossos eventos</h1>

                <table>
                    <tr>
                        <td class="event-name">XXI Seminário de Pesquisa do CCSA</td>
                        <td class="event-status">
                            <span>Inscrições Abertas</span>
                        </td>
                        <td class="event-register">
                            <a>Inscrever-se</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `
})
export class HomeComponent { }
