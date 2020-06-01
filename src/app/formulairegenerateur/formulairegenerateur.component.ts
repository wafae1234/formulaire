import { FrorminputService } from './shared/frorminput.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulairegenerateur',
  templateUrl: './formulairegenerateur.component.html',
  styleUrls: ['./formulairegenerateur.component.css']
})
export class FormulairegenerateurComponent implements OnInit {

  title = 'fromulaire-generateur';
  generateurForm: FormGroup; 
  nprojet;
  submitted=false;

  constructor(private formbuilder:FormBuilder,public service:FrorminputService){

    
  }

  ngOnInit(){

  this.generateurForm = this.formbuilder.group({

    nomprojet: ['', Validators.required],
    nompackage: ['', Validators.required],
    typebasededonne: ['', Validators.required],
    lienserveur: ['', Validators.required],
    portbd: ['', Validators.required],
    nomutilisateur: ['', Validators.required],
    motdepasseutilisateur:['', [Validators.required, Validators.minLength(8)]],
    acceptation: [false, Validators.requiredTrue]

  })
  }

  // getter pour un accès facile aux champs de formulaire
  get f() { return this.generateurForm.controls; }
  

  onSubmit() {
    
    this.submitted = true;
    this.service.envoyerformulaire(this.f.nomprojet.value,this.f.nompackage.value,this.f.typebasededonne.value,this.f.lienserveur.value,this.f.portbd.value,this.f.nomutilisateur.value,this.f.motdepasseutilisateur.value).subscribe(value => console.log(value));
    // stop here if form is invalid
    if (this.generateurForm.invalid) {
        return;
    }

    //console.log(this.f.nomprojet.value,this.f.nompackage.value,this.f.typebasededonne.value,this.f.lienserveur.value,this.f.portbd.value,this.f.nomutilisateur.value,this.f.motdepasseutilisateur.value);
    
 
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.generateurForm.value, null, 4));
}

  onReset() {
    this.submitted = false;
    this.generateurForm.reset();
}

}