import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecentTransaction } from '../../class/recent-transaction';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() recentTransacations: RecentTransaction[];

  title: string = 'Recent Transaction';
  icon: string = '../../../assets/credit-transfer-icon.png';

  public searchText: string;
  public sortingType: boolean;
  constructor() { }

  ngOnInit() {
  }
}
