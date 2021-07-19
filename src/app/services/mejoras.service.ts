import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MejorasService {
  colection: Observable<any>;
  mejoras: Array<any>;
  error: boolean;
  constructor(private afs: AngularFirestore) {
    
   }

   getMejoras(){
     return new Promise((resolve,reject)=>{
       this.afs.collection("mejoras")
       .valueChanges()
       .subscribe(
         (data) => resolve(data),
         (error) => reject(error)
       )
     })
   }

   getEsteticas(){
    return new Promise((resolve,reject)=>{
      this.afs.collection("esteticas")
      .valueChanges()
      .subscribe(
        (data) => resolve(data),
        (error) => reject(error)
      )
    })
   }
}
