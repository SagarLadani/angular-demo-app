import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key, value) {
    let data = localStorage.setItem(key, JSON.stringify(value));

    return data
  }

  get(key) {
    let value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
  }

  remove(key) {
    return localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }

}
