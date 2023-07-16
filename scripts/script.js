// const listeMots = ["Maman", "Famille", "interlocution"];
// const listePhrase = ["Annie, are you OK?", "Smooth criminal is hitting", "Mickel Jackson is a Pop Star"];
// let choixDeJeu = prompt("Voulez-vous jouer avec des mots out des phrase, (0) pour Mots et (1) pour Phrase: ");
// let score = 0;


// //functions
// const modeDeJeu = (choix) => {
//     return (choix === 0) ? listeMots : listePhrase;
// }

// const jeu = (liste) => {
//     for (let i = 0; i < liste.length; i++) {
//         let motUtilisateur = prompt(`Entrer: ${liste[i]}`);
//         if (liste[i] === motUtilisateur) {
//             score++;
//         }
//         else {
//             i--;
//         }
//     }
//     return score;
// }

// //test
// let partie = jeu(modeDeJeu(parseInt(choixDeJeu)));

// console.log(" votre score est: ", score);
