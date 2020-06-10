import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FrorminputService {
  private fUrl="http://localhost:8080/form";
  private variable;

  constructor(private http: HttpClient) {}
    public envoyerformulaire(nomprojet:string,nompackage:string,typebasededonne:string,lienserveur:string,port:string,databaseName:string,nomutilisateur:string,motdepasse:string)
    { 
      this.variable={nomprjet:nomprojet,nompackage:nompackage,typebasededonne:typebasededonne,lienserveur:lienserveur,port:port,databaseName:databaseName,nomutilisateur:nomutilisateur,motdepasse:motdepasse};
      console.log(this.variable);
      return this.http.post<any>(this.fUrl,this.variable);
    }
}
