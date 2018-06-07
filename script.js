


//trouver  le nombre total de messages
var nombre_messages=document.getElementsByClassName('avatar_image').length;


//afficher le nombre_message
document.getElementById('count').textContent= nombre_messages;









/*
La suppression
Deux parties à développer :
★L’écoute du signal
★L’action à réaliser


★L’écoute du signal
●Captez les clics de chaque picto poubelle.
Note:Pour vérifier que le clic à bien été capté, affichez
la phrase “clic détecté” dans laconsole.
*/


for(var x=0; x<document.getElementsByClassName('poubelle_image').length; x++) {
   document.getElementsByClassName('poubelle_image')[x].addEventListener("click",
     function(){
      fonction_supprimer_message_et_MAJ_compteur(this.parentNode);
      //appelle la fonction et lui envoie comme parametre
     }
   );
}


let  fonction_supprimer_message_et_MAJ_compteur =(quoi_supprimer)=>{
  //supprimer
  quoi_supprimer.remove();
  //j'en profite pour mettre a jour ma variable nombre_message
  nombre_messages=document.getElementsByClassName("avatar_image").length;
  //afficher le nb de messages
  document.getElementById('count').textContent= nombre_messages;

        // et je pense aussi  à afficher le compteur en rouge SEULEMENT SI  le nb de messages est zero
        if (document.getElementsByClassName('avatar_image').length===0) {
          document.getElementById('count').className = "texte_rouge_gras";
        }
}



/*
★L’action à réaliser:  Lorsque le clic sur la poubelle est capté,
supprimez l'intégralité du message (nom,prénom, avatar, texte,
picto poubelle) grâce au DOM puis mettez à jour le compteur.
Note:Attention au côté asynchrone des événements,
la suppression du message et la miseà jour du compteur devront dépendre de
l’action “click”Pour la mise à jour du compteur,
réutilisez ce que vous avez déjà mis en place
lors del’initialisation du compteur.●Dans l’action à déclencher,
ciblez l’élément HTML à l’origine du clic.Note:Attention!
Dans une fonction de callback, pour désigner l’élément à
l’origine del’évènement il existe un mot particulier!●Ciblez
l’élément HTML parent  qui représente
l’ensemble des ​informations dumessage.

●Supprimez cet élément
●Mettez à jour le compteur


*/
