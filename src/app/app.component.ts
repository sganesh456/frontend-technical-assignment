import { Component, OnInit } from '@angular/core';
import { RecentTransaction } from './class/recent-transaction';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private transfer: RecentTransaction;
  transactions: RecentTransaction[] = [];
  balance: number;

  constructor(private restService: RestService) {
    this.transfer = new RecentTransaction();
  }

  ngOnInit() {
    this.getRecentTransactions();
  }

  getRecentTransactions(): void {
    this.balance = this.restService.getBalance();
    this.restService.getRecentTransactionsLists().subscribe((data: RecentTransaction[]) => {
      this.transactions = data;
    });
  }

  addNewTransactionsOnList(transfer: RecentTransaction): void {
    this.transactions = this.restService.addTransaction(transfer);
    this.balance = this.restService.calculateNewBalance(transfer.amount);
  }
}
