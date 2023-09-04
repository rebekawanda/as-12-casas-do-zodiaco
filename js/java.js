function MudaDesenho(){
    const texto = document.querySelector("h1");
    const textos = document.querySelector("h6");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if((valor=="gemeos") || (valor=="Gemeos") || (valor=="gêmeos") || (valor=="Gêmeos")){
        texto.innerHTML = "Gêmeos ♊︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de gêmeos. Natural da Grécia. Possui duas personalidades, do bem e do mal. Tem experiências de lutas contínuas com seu lado mal instalado em seu corpo.";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="escorpiao") || (valor=="escorpião") || (valor=="Escorpião") || (valor=="Escorpiao")){
        texto.innerHTML = "Escorpião ♏︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de escorpião. Natural da Grécia. Como o Aiolia, é espontâneo e tem forte espírito de justiça. Tem muito orgulho por ser um Cavaleiro de Ouro.";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
    }
    
    else if((valor=="peixes") || (valor=="Peixes")){
        texto.innerHTML = "Peixes ♓︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de peixes. Natural da Suécia. É o mais belo de todas as 88 constelações e acredita fielmente que a força é a justiça.";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="aquario") || (valor=="Aquario") || (valor=="Aquário") || (valor=="aquário")){
        texto.innerHTML = "Aquário ♒︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de aquário. Natural da França. Por trás de sua aparente frieza, esconde uma alma quente. Em vez de julgar o bem e o mal, continua a lutar sem perder o foco.";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="aries") || (valor=="Aries") || (valor=="áries") || (valor=="Áries")){
        texto.innerHTML = "Áries ♈︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de Áries. Natural do Tibete. Elegante e tem personalidade pacífica. É o único capaz de restaurar armaduras.";
        imagem.setAttribute("src","img/aries.png") ;
        imagem.setAttribute("width","300px");
    }
    else if((valor=="capricornio")|| (valor=="capricórnio") || (valor=="Capricórnio") || (valor=="Capricornio")){
        texto.innerHTML = "Capricórnio ♑︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de capricórnio. Natural da Espanha. No passado, recebeu a vida do Papa (Saga) e teve um confronto direto com Aiolos.";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="libra") || (valor=="Libra")){
        texto.innerHTML = "Libra ♎︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de libra. Natural da China. Um dos únicos dois sobreviventes da última Guerra Santa, é chamado respeitosamente por todos de Velho Mestre.";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="sagitario") || (valor=="Sagitario") || (valor=="sagitário") || (valor=="Sagitário")){
        texto.innerHTML = "Sagitário ♐︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de sagitário. Natural da Grécia. É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena.";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="virgem") || (valor=="Virgem")){
        texto.innerHTML = "Virgem ♍︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de virgem. Natural da Índia. É o mais sensato entre os Cavaleiros de Ouro. Não se abala com qualquer coisa e avalia tudo com muita calma.";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="touro") || (valor=="Touro")){
        texto.innerHTML = "Touro ♉︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de touro. Natural do Brasil. Possui físico admirável que não sofre impacto nenhum dos oponentes. Assim como Aeolia, concentra os golpes com os punhos.";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="cancer") || (valor=="câncer") || (valor=="Cancer") || (valor=="Câncer")){
        texto.innerHTML = "Câncer ♋︎";
        textos.innerHTML = "Cavaleiro de Ouro do signo de câncer. Natural da Itália. Manipula o buraco que liga ao submundo.";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="leao") || (valor=="Leao") || (valor=="Leão") || (valor=="leão")){
        texto.innerHTML = "Leão ♌︎";
        textos.innerHTML = "Paradigma do Cavaleiro - Leão de Ouro adormecido. É o herói desta obra. Cavaleiro de Ouro do signo de Leão. Natural da Grécia. Tem a personalidade mais correta entre os Cavaleiros de Ouro e não gosta de trapaças.";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        textos.innerHTML = " ";
        imagem.setAttribute("src","img/erro.png");
        imagem.setAttribute("width","250px");
    }
}