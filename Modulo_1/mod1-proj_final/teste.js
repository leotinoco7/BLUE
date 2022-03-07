function dailyEvent() {
    let dailyEvent = Math.ceil(Math.random() * 10);
    if (dailyEvent == 1) {
        console.log(`Está muito frio la fora. Sua coberta ficou muito mais atrativa hoje.
        
        Você acorda 1h mais tarde.
        Saciedade - 10
        `);
        timeNow++;
        player.Saciedade -= 10;
    } else if (dailyEvent == 2) {
        console.log(`O dia estava muito quente e seu ar condicionado quebrou durante a noite. 
        Você acorda mais cedo suando.
        `);
        timeNow--;
        player.Vitalidade -= 30 * (mode / 2);
        player.Higiene -= 20 * (mode / 2);
    } else if (dailyEvent == 3) {
        console.log(`Choveu muito e acabou a luz na sua casa! Seu celular estava carregando
        mas acabou desligando! Você acordou 2 horas depois sem despertador
        Felicidade - ${10 * (mode / 2)}
        Saciedade - 20
        `);
        timenow += 2;
        player.Felicidade -= 10 * (mode / 2);
        player.Saciedade -= 20;
    } else if (dailyEvent == 4) {
        console.log(`Seu vizinho resolveu fazer um reparo em casa antes de ir pro trabalho,
        você acabou acordando mais cedo com o barulho da furadeira.
        Felicidade - ${10 * (mode / 2)} `);
        timenow--;
        player.Felicidade -= 10 * (mode / 2);
    } else if (dailyEvent == 5) {
        console.log(`Seu chefe te acorda pedindo um relatório urgente. 
        Será que ele percebeu que ainda eram 5h da manhã?
        
        Você não conseguiu voltar a dormir.
        Felicidade - ${20 * (mode / 2)}`);
        timenow -= 2;
        player.Felicidade -= 20 * (mode / 2);
    } else if (dailyEvent == 6) {
        console.log(`Os resultados da sua empresa foram excelentes! Você acorda com o e-mail
        que sua PLR virá praticamente dobrada
        Felicidade + ${20 / (mode / 2)}`);
        player.Felicidade += 20 / (mode / 2);
    } else if (dailyEvent == 7) {
        console.log(`Lembra aquele projeto que você enviou para o seu chefe? O diretor gostou bastante
        e te enviou um convite para uma reunião. Será que vem a promoção?
        Felicidade + ${20 / (mode / 2)}
        `);
        player.Felicidade += 20 / (mode / 2);
    } else if (dailyEvent == 8) {
        console.log(`Você recebeu uma cesta de café da manhã da sua empresa.
        Por acaso hoje é alguma data especial?

        Felicidade + ${10 / (mode / 2)}
        Saciedade + ${30 / (mode / 2)}
       `);
        player.Felicidade + 10 / (mode / 2);
        player.Saciedade + 30 / (mode / 2);
    } else if (dailyEvent == 9) {
        console.log(`O tempo estava muito bonito e você acordou mais cedo para tomar um banho de mar antes de trabalhar.
        Você se sente revigorado.
        Felicidade + ${10 / (mode / 2)}
        Higiene + ${10 / (mode / 2)}`);
        player.Felicidade + 10 / (mode / 2);
        player.Higiene + 10 / (mode / 2);
    } else if (dailyEvent == 10) {
        console.log(`Sua mãe ganhou na loto. Ela te ofereceu uma diária em um hotal 5 estrelas.
        
        Você aceita o convite?
            1)Sim        2)Não
        `);

        do {
            let resp = prompt(`R:`).toLowerCase();
            if (resp != 1 && resp != 2 && resp != 'sim' && resp != 'nao') {
                console.log(`Não entendi.`);
            }
        } while (resp != 1 && resp != 2 && resp != 'sim' && resp != 'nao');

        if (resp == 1 || resp == 'sim') {
            day++;
            player.Felicidade = 100;
            player.Vitalidade = 100;
            player.Higiene = 100;
            console.log(`Você passou um dia maravilhoso no hotel!

            Será que o seu chefe acreditou naquele atestado?

            Felicidade = 100
            Vitalidade = 100
            Higiene = 100`);
        } else {
            player.Felicidade -= 10 * (mode / 2);
            console.log(`Você até fica tentado...`);
            sleep(500);
            console.log(`Mas você leembra de suas obrigações e recusa o convite com certo arrependimento.
            
            Felicidade - ${10 * (mode / 2)}`);
        }
    }
}

function randomEvent() {
    do {
        let num = Math.ceil(Math.random() * 10);
        let lista = [];

        if (lista.indexOf(num) == -1) {
            lista.push(num);
        }
    } while (lista.indexOf(num) != -1);

    if (num == 1) {
        lista.splice(0);
        randomEvent = Math.ceil(Math.random() * 12);
        // EVENTOS BONS
        if (randomEvent == 1) {
            console.log(1);
        } else if (randomEvent == 2) {
            console.log(1);
        } else if (randomEvent == 3) {
            console.log(1);
        } else if (randomEvent == 4) {
            console.log(1);
        } else if (randomEvent == 5) {
            console.log(1);
        } else if (randomEvent == 6) {
        } //EVENTOS RUINS
        else if (randomEvent == 7) {
            console.log(1);
        } else if (randomEvent == 8) {
            console.log(1);
        } else if (randomEvent == 9) {
            console.log(1);
        } else if (randomEvent == 10) {
            console.log(1);
        } else if (randomEvent == 11) {
            console.log(1);
        } else if (randomEvent == 12) {
            console.log(1);
        }
    }
}
