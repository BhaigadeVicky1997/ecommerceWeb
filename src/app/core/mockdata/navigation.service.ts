import { Injectable } from '@angular/core';
import { NavigationData } from '../core-models/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private navigationData: NavigationData[] = [
    { id: 1, path: '/auth/login', name: 'login' },
    { id: 2, path: '/auth/signup', name: 'signup' },
    { id: 3, path: '/features', name: 'cart' },
    { id: 4, path: '/features/payment', name: 'payment' },
    { id: 1, path: '/features/myaccount', name: 'myaccount' },
    { id: 1, path: '/auth/login', name: 'login' },
    { id: 1, path: '/auth/login', name: 'login' },
  ]

  getNavData() {
    return this.navigationData;
  }
}
