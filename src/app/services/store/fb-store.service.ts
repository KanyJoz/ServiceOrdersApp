import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class FbStoreService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Order, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  getAll(collectionName: string): Observable<Order[]> {
    return this.afs.collection(collectionName).valueChanges() as Observable<Order[]>;
  }

  getCompleted(collectionName: string): Observable<Order[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('state', '==', 'Completed');
      return query;
    }).valueChanges() as Observable<Order[]>;
  }

  getCancelled(collectionName: string): Observable<Order[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('state', '==', 'Cancelled');
      return query;
    }).valueChanges() as Observable<Order[]>;
  }

  getFilteredAll(collectionName: string, filterString: string): Observable<Order[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('category', '==', filterString);
      return query;
    }).valueChanges() as Observable<Order[]>;
  }

  getFilteredCompleted(collectionName: string, filterString: string): Observable<Order[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('state', '==', 'Cancelled').where('category', '==', filterString);
      return query;
    }).valueChanges() as Observable<Order[]>;
  }

  getFilteredCancelled(collectionName: string, filterString: string): Observable<Order[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('state', '==', 'Cancelled').where('category', '==', filterString);
      return query;
    }).valueChanges() as Observable<Order[]>;
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  async update(collectionName: string, id: string, data: any): Promise<string> {
    await this.afs.collection(collectionName).doc(id).update(data);
    return id;
  }

  async delete(collectionName: string, id: string): Promise<string> {
    await this.afs.collection(collectionName).doc(id).delete();
    return id;
  }
}
