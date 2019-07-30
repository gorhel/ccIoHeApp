import { Utilisateur, UtilisateurService } from './../../services/utilisateur.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.page.html',
  styleUrls: ['./utilisateur-details.page.scss'],
})
export class UtilisateurDetailsPage implements OnInit {

  utilisateur: Utilisateur = {
    nom:'',
    prenom:''
  };

  utilisateurId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private utilisateurService: UtilisateurService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.utilisateurId = this.route.snapshot.params['id'];
    if(this.utilisateurId){
      this.loadUtilisateur();
    }
  }

  async loadUtilisateur(){
    const loading = await this.loadingController.create({
      message: 'Chargement de la liste des utilisateurs'
    });
    await loading.present();

    this.utilisateurService.getUtilisateur(this.utilisateurId).subscribe(res =>{
      loading.dismiss();
      this.utilisateur = res;
    });
  }

  async saveUtilisateur(){
    const loading = await this.loadingController.create({
      message: 'Sauvegarde ...'
    });
    await loading.present();

    if(this.utilisateurId){
      this.utilisateurService.updateUtilisateur(this.utilisateur, this.utilisateurId).then(() => {
        loading.dismiss();
        //this.nav.back('home');
      });
    } else {
      this.utilisateurService.addUtilisateur(this.utilisateur).then(()=> {
        loading.dismiss();
<<<<<<< HEAD
        //this.nav.back('home');
=======
<<<<<<< HEAD
        //this.nav.back('home');
=======
>>>>>>> 09db060ca5e386826400171a44f14c2fb5f2184f
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
      });
    }
  }
}
