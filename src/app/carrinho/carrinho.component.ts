import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  itensDoCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor (
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensDoCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal(); 
  }

  calcularTotal() {
    this.total = this.itensDoCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensDoCarrinho = this.itensDoCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    alert("Parabéns! Você finalizou a sua compra!");
    this.itensDoCarrinho = [];
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
  
}
