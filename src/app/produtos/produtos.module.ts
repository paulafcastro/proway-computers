import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule, 
    FormsModule, 
  ],
  providers: [NotificacaoService],
})

export class ProdutosModule { }
