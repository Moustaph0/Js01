// Declaration des variables avec effectation 
let i =0;
while(i<=19){
    i +=1;
    if(i%2 == 0){
        // Affichage de tous les nombres pairs de 1 a 19
        console.log('Paire');
        continue;
    }
    // Affichage de tous les nombres impairs de 1 a 19
    console.log('Impaire');
}