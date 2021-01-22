import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { PoPageDynamicTableFilters } from '@po-ui/ng-templates';

@Injectable({
    providedIn: 'root'
})
export class MonitorService {
    private serviceUrl = 'http://localhost:8051/api/rh/esocial/v1/esocialMonitor/campos/visao';

    constructor(private http: HttpClient) {  }

    getCamposVisao(): Observable<PoPageDynamicTableFilters[]> {
        return this.http.get<PoPageDynamicTableFilters[]>(this.serviceUrl).pipe(
            tap(dado => console.log('Todos: ' + JSON.stringify(dado))),
            catchError(x => this.handleError)
        );        
    }

    private handleError(erro: HttpErrorResponse){
        let mensagem = '';
        if (erro.error instanceof ErrorEvent){
            mensagem = `Código retornado do servidor: ${erro.status}. Mensagem do erro: ${erro.message}`;
        } else {
            mensagem = mensagem = `Código retornado do servidor: ${erro.status}`;
        }

        console.error(mensagem);
        return throwError(mensagem);
    }
}