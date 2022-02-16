function comer() {
    // Ação de comer
    GetTime(3);
    player.Saciedade += 60 / mode + 60;
    player.Higiene += 45 / mode + 15;
    player.Felicidade += 5;
    console.log(`
    Você faz a sua comida. 
    Levou 3h para fazer e comer, mas ela é muito mais Saudável.
    Saciedade + ${60 / mode + 20}
    Higiene + ${45 / mode}
    Felicidade - 10
    Vitalidade - 15
                    `);
}

function fastfood() {
    // Ação de comer fastfood
    GetTime(1);
    player.Saciedade += 60 / mode + 30;
    player.Higiene -= 10 * mode - 5;
    player.Felicidade += 25;
    console.log(`
    Você pediu para entregarem a Comida. 
    Levou só 1h para chegar e comer, não é tão saudável quanto a comida caseira.
    Pelo menos foi mais rápido
    Saciedade + ${60 / mode + 20}
    Higiene - ${10 * mode}
    Felicidade + 20
    Vitalidade - 5
                    `);
}

function estudar() {
    // Ação de estudar
    GetTime(2);
    player.Felicidade -= 10 * mode - 5;
    player.Vitalidade -= 5 * mode - 5;
    player.Projeto += 10;
    console.log(`
    Você tirou um tempo para se dedicar ao Projeto. 
    Foram 2h intensas de estudo. 
    Sua cabeça estava latejando ao final mas houve algum progresso.
    
    Projeto + 10%

    Felicidade - ${10 * mode + 5}
    Vitalidade - ${10 * mode + 5}
    Saciedade - 20
    Higiene - 20
                    `);
}

function serie() {
    // Ação de assistir série
    GetTime(2);
    player.Felicidade += 45 / mode + 10;
    player.Vitalidade -= 5 * mode - 5;
    console.log(`
    Você tirou um tempo para assistir Game of Thrones. 
    
    Você nem percebeu as duas horas passando. 
    
    
    Felicidade + ${45 / mode}
    Vitalidade - ${5 * mode + 5}
    Saciedade - 20
    Higiene - 20
    `);
}

function trabalhar() {
    // Ação de trabalhar
    GetTime(2);
    player.Felicidade -= 10 * mode - 5;
    player.Vitalidade -= 8 * mode - 10;
    player['Horas Trabalhadas:'] += 2;
    console.log(`
    Você se empenha no seu trablaho. 
    
    Foram 2 Horas de produtividade máxima. 

    
    Felicidade - ${10 * mode + 5}
    Vitalidade - ${8 * mode}
    Saciedade - 20
    Higiene - 20
    `);
}

function passear() {
    // Ação de passear
    GetTime(2);
    player.Felicidade += 45 / mode + 10;
    player.Vitalidade -= 5 * mode - 10;
    console.log(`
    Você vai dar uma volta no Parque perto de sua casa. 
    
    Foram 2 Horas de um belo Passeio. 

    
    Felicidade + ${45 / mode}
    Vitalidade - ${5 * mode}
    Saciedade - 20
    Higiene - 20
    `);
}

function exercicio() {
    // Ação de se exercitar
    GetTime(2);
    player.Felicidade += 45 / mode + 10;
    player.Vitalidade -= 5 * mode - 10;
    player.Higiene += 30 / mode + 10;
    console.log(`
    Você vai para a Academia.
    
    Foram 2 Horas com o trajeto, mas você se sente muito bem.

    
    Felicidade + ${45 / mode}
    Vitalidade - ${5 * mode}
    Higiene + ${30 / mode}
    Saciedade - 20
    
    `);
}

function banho() {
    // Ação de tomar banho
    GetTime(1);
    player.Felicidade += 30 / mode + 5;
    player.Higiene += 60 / mode + 5;
    player.Vitalidade += 60 / mode + 5;
    console.log(`
    Você Toma AQUELE banho de Banheira.
    
    1 Hora depois, você se sente novo.


    Felicidade + ${30 / mode}
    Vitalidade + ${60 / mode}
    Higiene + ${60 / mode}
    Saciedade - 10
    
    `);
}
