const perguntas = [
    {
        id: "geometria-plana-q1",
        informacoes: "(ENEM 2020) Um vidraceiro precisa construir tampos de vidro com formatos diferentes,\
         porém com medidas de áreas iguais. Para isso, pede a um amigo que o ajude a determinar uma fórmula para o cálculo do raio R de um tampo de vidro circular com área equivalente à de um tampo de vidro quadrado de lado L.",
        img: "../../imagens/Geometria-plana/Q01-geometria-plana.png",
        pergunta: "A fórmula correta é",
        opcoes: ["\\[R = \\frac{L}{\\sqrt{\\pi}}\\]", "\\[R = \\frac{L}{\\sqrt{2\\pi}} \\]", "\\[R = \\frac{L^2}{2\\pi}\\]", "\\[R = \\sqrt{ \\frac{2L}{\\pi}} \\]", "\\[R = 2\\sqrt{ \\frac{L}{\\pi}} \\]"],
        correta: "\\[R = \\frac{L}{\\sqrt{\\pi}}\\]",
        explicacao: "A fórmula da área do quadrado é \\(L^2 \\) , \
        Já a fórmula da área do círculo é \\() \\pi \\times r^2 \\)   \
        Como o enunciado diz que precisamos achar uma área equivalente para as duas equações, então precisamos igualá- las, logo: \\[L^2 = \\pi \\times R^2\\]\
        Dividindo ambos os lados por '\\(\\pi \\)' ou o passamos para o outro lado.\
        \\[R^2 =\\frac{L^2}{\\pi} \\]  \
        Agora, fazendo a raiz quadrada de todos os termos:\
        \\[R = \\frac{\\sqrt{L^2}}{\\sqrt{\\pi}}\\] \
        A fórmula final fica:\
        \\[R = \\frac{L}{\\sqrt{\\pi}}\\] "
    },
    {
        id: "geometria-plana-q28",
        informacoes: "(ENEM 2019) uma administração municipal encomendou a pintura de dez placas de sinalização para colocar\
        em seu pátio de estacionamento. O profissional contratado para o serviço inicial\
        pintará o fundo de dez placas e cobrará um valor de acordo com a área total dessas placas. O\
        formato de cada placa é um círculo de diâmetro d = 40 cm, que tangencia lados de um retângulo,\
        sendo que o comprimento total da placa é h = 60 cm, conforme lustrado na figura. Use 3,14 como\
        aproximação para π.",
        img: "../../imagens/Geometria-plana/Q28-geometria-plana.png",
        pergunta: "Qual é a soma das medidas das áreas, em centímetros quadrados, das dez placas?",
        opcoes: ["16 628cm²", "22 280cm²", "28 560cm²", "41 120cm²", "66 240cm²"],
        correta: "22 280cm²",
        explicacao: "Observando a Imagem podemos perceber que temos um quadrado e a metade de um circulo, veja na imagem a seguir <br> \
         <img src='../../imagens/Geometria-plana/respostas/q28.png' class='imagem-resolucao'><br> \
         Iremos ultilizar as seguintes formulas: <br> Quadrado: \\(A = L^2\\) <br> Circulo: \\(A = \\pi \\times r^2\\) Obs: apos calcularmos a area do circulo dividiremos por '2' para achar sua metade! \
         1º passo: achar a area do quadrado, vamos chamar de 'A1':  <br>\
            \\[A1 = 40^2\\]  \\[A1 = 1600cm\\]      \
        2º passo:Achar a metade da area do circulo, iremos chamar de 'A2':\
        como o raio ('r') é metade do Diâmetro ('d') logo o raio será 20cm.\
             \\[A2 = 3,14 \\times 20^2\\]     \
             \\[A2 = 3,14 \\times 400\\]     \
             \\[A2 = 1256cm^2\\]\
             \\[A2 = 628\\]         \
         3º passo: somamos os resultados e apos isso multiplicamos pelo numero de placas, que de acordo com o enunciado são '10' placas \
         \\[A = 1600 + 628\\] \
         \\[A = 2228\\] agora multiplicamos: \\[A = 2228 \\times 10\\] \
         \\[A = 22 280\\] \
         Resposta: 22 280cm²  \
    "},
    {
        id: "geometria-plana-q29",
        informacoes: "(ENEM 2019) Construir figuras de diversos tipos, apenas dobrando e cortando papel, sem cola e sem\
        tesoura, é a arte do origami (ori = dobrar; kami = papel), que tem um significado altamente\
        simbólico no Japão. A base do origami é o conhecimento do mundo por base do tato. Uma\
        jovem resolveu construir um cisne usando técnica do origami, utilizando uma folha de papel de Assim, começou por\
        dobrar a folha conforme a figura.",
        img: "../../imagens/Geometria-plana/Q29-geometria-plana.png",
        pergunta: "Após essa primeira dobradura, a medida do segmento AE é",
        opcoes: ["2√22 cm", "6√3 cm", "12 cm", "6√5 cm", "12√2 cm"],
        correta: "6√5 cm",
        explicacao: "Como pelo enunciado temos que o papel retangular possui dimensões de 18 cm de comprimento por 12 cm de largura.<br>\
        Daí, ao realizar a primeira dobradura padrão do modelo do cisne, forma-se um triângulo retângulo ADE, onde um dos catetos corresponde à largura da folha (AD = 12)<br>\
        e o outro cateto corresponde à diferença entre o comprimento total e a largura (18 - 12 = 6 cm) para o segmento DE.\
        <br>Com isso, já temos os valores dos segmentos AD e DE. Agora vamos aplicar o Teorema de Pitágoras para encontrar o valor do segmento AE.\
        \\[(AE)^2 = (AD)^2 + (DE)^2\\]  Substituindo AD = 12 e DE = 6, segue que: \\[ (AE)^2 = 12^2 + 6^2\\]\
        \\[(AE)^2 = 144 + 36\\]   \\[(AE)^2 = 180\\] \\[AE = \\sqrt{180}\\] \
        Agora, simplificando o radical, ficamos com:\
        \\[AE = \\sqrt{36 \\times 5}\\] \\[AE = 6\\sqrt{5}\\]\
        Alternativa Correta: Letra D\
"
    },
    {
        id: "geometria-plana-q36",
        informacoes: "(ENEM 2022) Uma empresa de engenharia projetou uma casa com a forma de um retângulo para um de seus\
        clientes. Esse cliente solicitou a inclusão de uma varanda em forma de L. A figura apresenta a\
        planta baixa desenhada pela empresa, já com a varanda incluída, cujas medidas, indicadas em\
        centímetro, representam os valores das dimensões da varanda na escala de 1 : 50.",
        img: "../../imagens/Geometria-plana/Q36 -geometria-plana.png",
        pergunta: "A medida real da área da varanda, em metro quadrado, é",
        opcoes: ["33,40", "66,80", "89,24", "133,60", "534,40"],
        correta: "33,40",
        explicacao: "Para calcular a medida real real da varanda, precisamos dividir a figura em dois retângulos, onde calculamos a área de cada retângulo e depois somamos.<br>\
        Além disso, como pelo enunciado, temos que a escala do desenho é de 1:50, isso significa que 1 cm no papel equivale a 50 cm na realidade.<br>\
        Então, precisamos primeiro converter as dimensões antes de calcular a área.<br> \
        Logo, as medidas reais ficam:\
        A altura e comprimento do primeiro retângulo ficam:<br>\
        \\(B1 = 16 \\times 50\\) \\(B1 = 800cm\\)<br>\
        \\(H1 = 5 \\times 50\\)    \\(H1 = 250cm\\)<br>\
        Convertendo para metros, chegamos que as medidas do primeiro retângulo são: <br>\
        \\(B1 = 8m\\)	  e    \\(H1 = 2.5m\\)\
        Logo, calculando a área do primeiro retângulo:<br> \
        \\[R1 = 8 \\times 2,5 \\] \\[R1 = 20m^2\\]\
        Agora, precisamos fazer o mesmo com o segundo retângulo.\
        Convertendo as dimensões,<br> \
        \\(B2 = 4 \\times 50\\)   \\(B2 = 200cm\\)<br>\
        \\(H2 = 13,4 \\times 50\\)   \\(H2 = 670cm\\)<br>\
        Convertendo para metros, chegamos que as medidas do segundo retângulo são: <br>\
        \\(B2 = 2m\\)	  e    \\(H2 = 6.7m\\) <br>\
        Agora, calculando a área do segundo retângulo:\
        \\[R2 =2 \\times 6,7\\]\
        \\[R2 = 13,4m^2\\]\
        Por fim, a área da varanda é a soma das áreas dos dois retângulos:\
        \\[AV = 20 + 13,4\\]\
        \\[AV = 33,4m^2\\]\
        Alternativa Correta: Letra A.\
"
    },
    {
        id: "geometria-plana-q4",
        informacoes: "(ENEM 2020) Uma empresa deseja construir um edifício residencial de 12 pavimentos, num lote\
        retangular de lados medindo 22 e 26 m. Em 3 dos lados do lote serão construídos muros. A frente\
        do prédio será sobre o lado do lote de menor comprimento. Sabe-se que em cada pavimento\
        32 m2 serão destinados à área comum (hall de entrada, elevadores e escada), e o restante da\
        área será destinado às unidades habitacionais. A legislação vigente exige que prédios sejam\
        construídos mantendo distâncias mínimas dos limites dos lotes onde se encontram.",
        img: "../../imagens/Geometria-plana/Q4-geometria-plana.png",
        pergunta: "Em obediência à legislação, o prédio ficará 5 m afastado da rua onde terá sua entrada, 3 m de\
        distância do muro no fundo do lote e 4 m de distância dos muros nas laterais do lote, como mostra a figura. A área total, em metro quadrado, destinada às unidades habitacionais desse edifício será de",
        opcoes: ["2 640", "3 024", "3 840", "6 480", "6 864"],
        correta: "2 640",
        explicacao: "A fórmula da área do retângulo é \\(B.h\\) <br> \
        B: é a base do retângulo <br> \
        h: é a altura do retângulo <br> \
        Pelo enunciado e imagem da questão o prédio tem 22m de altura e 26m de base. Porém, as unidades habitacionais ficam 5 metros de distância da rua e 3 m de distância do muro no fundo do lote.\
        Logo, precisamos retirar esses valores da Base inicial: \
        \\[B = 26 - 5 - 3 = 18 \\] Portanto, a nossa base B é 18. \
        Porém, as unidades habitacionais ficaram 4m de distância dos muros nas laterais do lote. \
        Logo, a altura h fica: \\[22- 4- 4 = 14\\]\
        Portanto, a nossa altura h é 14. \
        Agora, substituindo na fórmula da área do retângulo:\
        \\[A = B \\times h\\]  \
        \\[A = 18 \\times 14\\] \
        \\[A = 252m^2\\] \
        Logo, a área total é \\(252m^2\\). \
        Porém, o enunciado ainda diz que \\(32m^2\\) serão destinados à área comum. Então, a área fica:\
        \\[252m^2 - 32m^2 = 220m^2\\] Essa é a área total de um pavimento.<br>\
        Porém a questão ainda diz que o edifício residencial terá 12 pavimentos.\
        Logo, multiplicamos a área de um pavimento por 12: \
        \\[220m^2 \\times 12 = 2640m^2 \\]\
        Logo, A área total, em metro quadrado, destinada às unidades habitacionais desse edifício será de \\(2640m^2\\)."
    },
    {
        id: "geometria-plana-q18",
        informacoes: "(ENEM 2013) Para o reflorestamento de uma área, deve-se cercar totalmente, com tela, os lados de um\
        terreno, exceto o lado margeado pelo rio, conforme a figura.",
        img: "../../imagens/Geometria-plana/Q18-geometria-plana.png",
        pergunta: "Cada rolo de tela que será comprado para confecção da cerca contém 48 metros de comprimento.\n \
        A quantidade mínima de rolos que deve ser comprada para cercar esse terreno é",
        opcoes: ["6", "7", "8", "11", "12"],
        correta: "8",
        explicacao: "Como o enunciado diz que cercar totalmente, com tela, os lados de um terreno. Então, precisamos calcular o perímetro do terreno.\
        Pela imagem, os lados do terreno medem 81m, 190m e 81m, respectivamente. Somando tudo: \\[81 + 190 + 81 = 352\\] \
        Portanto, o perímetro total do terreno é de 352m.\
        Ainda pelo enunciado, cada rolo de tela mede 48m. Então dividimos o perímetro pela quantidade de rolos de tela.\
        \\[\\frac{352}{48} = 7,33\\] \
        Portanto, a quantidade mínima de rolos que deve ser comprada para cercar esse terreno é de 8 rolos."
    },
    {
        id: "geometria-plana-q19",
        informacoes: "(ENEM 2013) Em um sistema de dutos, três canos iguais, de raio externo 30 cm, são soldados entre si e colocados dentro de um cano de raio maior, de\
        medida R. Para posteriormente ter fácil manutenção, é necessário haver uma distância de 10 cm entre os canos soldados e o cano de raio\
        maior. Essa distância é garantida por um espaçador de metal, conforme a figura.",
        img: "../../imagens/Geometria-plana/Q19-geometria-plana.png",
        pergunta: "Utilize 1,7 como aproximação para \\(\\pi \\). O valor de R, em centímetros, é igual a",
        opcoes: ["64,0", "65,5", "74,0", "81,0", "91,0"],
        correta: "74,0",
        explicacao: "A figura mostra três canos pequenos de raio 30cm que estão soldados entre si.   \
        Definição: quando três círculos iguais se encostam, os seus centros formam um triângulo equilátero, de lado medindo \\(2 \\times R\\).\
        Como o raio de cada cano mede 30cm, logo os lados do triângulo medem 60cm. Agora, precisamos achar a altura do triângulo.\
        A fórmula da altura de um triângulo equilátero é \\(\\frac{L\\sqrt{3}}{2}\\) \
        \\[h = \\frac{60 \\times 1,7}{2}\\] \
        \\[h = \\frac{102}{2}\\] \
        \\[h = 51cm\\] \
        O centro do cano maior coincide com o baricentro (centro geométrico) do triângulo equilátero. Pela propriedade do baricentro, a distância do centro até qualquer um dos vértices equivale\\( \\frac{2}{3}\\) da altura h \
        \\[d = \\frac{2}{3} \\times 51\\] \
        \\[d = 34cm\\] \
        Agora, somamos a distância do centro do triângulo até o centro do cano pequeno, o raio do cano pequeno e a distância do espaçador.\
        \\[R = 30 + 34 + 10\\] \
        \\[R = 30 + 34 + 10\\] "
    },
    {
        id: "geometria-plana-q27",
        img: "../../imagens/Geometria-plana/Q27-geometria-plana.png",
        pergunta: "(ENEM 2018)Um brinquedo chamado pula-pula, quando visto de cima, consiste de uma cama elástica com contorno em formato de um hexágono regular.\n \
        Se a área do círculo inscrito no hexágono é 3 metros quadrados, então a área do hexágono, em metro quadrado,  ",
        opcoes: ["9", "6√3", "9√2", "12", "12√3"],
        correta: "6√3",
        explicacao: "Pelo enunciado, nós temos um círculo inscrito num hexágono regular.\
        Onde a área do círculo inscrito é \\(3 \\times \\pi m^2\\) <br>\
        utilizaremos as seguintes fórmulas: <br>\
        circulo: \\(A = \\pi \\times r^2\\) <br> \
        altura do triângulo equilatero:\\( h = \\frac{L \\sqrt{3}}{2} \\)\
        e area do triângulo equilátero: \\(A = \\frac{L^2 \\sqrt{3}}{4}\\) \
        1º passo: precisamos encontrar o raio 'r' desse círculo. \
        Como a fórmula da área do círculo é \\(\\pi \\times r^2\\) nós precisamos substituir o valor da área na fórmula para encontrar o valor de r.\
        \\[ 3 \\times \\pi = \\pi \\times r^2\\]  \
        \\[3 \\times \\cancel{\\pi} = \\cancel{\\pi} \\times r^2\\] passando a potencia para o outro lado e fazendo a raiz quadrada fica:  \
        \\[ r = \\sqrt{3}\\]  \
        2º passo: agora igualamos o resultado que achamos com a formula da altura do triângulo equilatero, então:\
        \\[\\sqrt{3} = \\frac{L\\sqrt{3}}{2}\\] agora cancelamos as raizes e passamos o '2' para o outro lado.\
        \\[ \\cancel{\\sqrt{3}} = \\frac{L  \\cancel{\\sqrt{3}}}{2}\\] \
        \\[L = 2\\] \
        3ºpasso: iremos ultilizar a ultima formula que é a formula da area do triãngulo equilatero. \
        \\[A = 6 \\times \\frac{2^2 \\sqrt{3}}{4}\\] \
        \\[A = 6 \\times \\frac{4 \\sqrt{3}}{4}\\] \
        \\[A = \\frac{24 \\sqrt{3}}{4}\\] \
        \\[A = 6 \\sqrt{3}\\] \
        Resposta: \\[A = 6 \\sqrt{3}m^2\\] \
"
    },
    {
        id: "geometria-plana-q26",
        informacoes: "(ENEM 2018) Uma pessoa possui um terreno em forma de um pentágono, como ilustrado na figura.\
        Sabe-se que a diagonal AD mede 50 m e é paralela ao lado BC, que mede 29 m. A distância\
        do ponto B a AD é de 8 m e a distância do ponto E a AD é de 20 m.",
        img: "../../imagens/Geometria-plana/Q26-geometria-plana.png",
        pergunta: "A área, em metro quadrado, deste terreno é igual a ",
        opcoes: ["658", "700", "816", "1 132", "1 632"],
        correta: "816",
        explicacao: "Pela figura e traçando as diagonais, notamos que formamos um trapézio de altura h = 8, base maior B = 50 e base menor b = 29. E um triângulo de base b = 50 e altura h = 20.\
        <img src='../../imagens/Geometria-plana/respostas/q26.png' class='imagem-resolucao'><br> \
        Para achar a área total do pentágono, iremos fazer a soma das áreas do trapézio e do triângulo. <br> \
        Para calcular a área do trapézio, a fórmula é \\( \\frac{(B + b) \\times h}{2} \\)  <br> \
        Substituindo os valores: \
        \\[ At = \\frac{(50 + 29) \\times 8}{2} \\]  \
        \\[ At = \\frac{79 \\times 8}{2} \\]  \
        \\[ At = \\frac{623}{2} \\]  \
        \\[ At = 632m\\]  \
        Agora, para calcular a área do triângulo, a fórmula é \\( \\frac{B \\times h}{2}\\)  \
        Substituindo os valores: \
        \\[Ag = \\frac{50 \\times 20}{2}\\] \
        \\[Ag = \\frac{1000}{2}\\] \
        \\[Ag = 500m\\] \
        Agora, somando as áreas do trapézio e do triângulo:\
        \\[A = 632 + 500\\] \
        \\[A = 1132\\] \
        "
    },
    {
        id: "geometria-plana-q30",
        informacoes: "(ENEM 2019) No trapézio isóscele mostrado na figura a seguir, M é o ponto médio do segmento BC, e os pontos\
        P e Q são obtidos dividindo o segmento AD em três partes iguais.",
        img: "../../imagens/Geometria-plana/Q30-geometria-plana.png",
        pergunta: "Pelos pontos B, M, C, P e Q são traçados segmentos de reta, determinando cinco\
        triângulos internos ao trapézio, conforme a figura.\
        A razão entre BC e AD que determina áreas iguais para os cinco triângulos mostrados na figura é ",
        opcoes: ["1/3", "2/3", "2/5", "3/5", "5/6"],
        correta: "2/3",
        explicacao: "Como os cinco triângulos internos têm a mesma altura h, que é a altura do trapézio.<br>\
        Para que os triângulos tenham áreas iguais com a mesma altura, as bases deles também precisam ser iguais.<br>\
        Agora, fazendo a divisão dos segmentos:<br>\
        O segmento superior BC é dividido em 2 partes iguais pelo Ponto Médio M. Logo BC mede 2x.<br>\
        Já o segmento inferior AD é dividido em 3 partes iguais por P e Q. Logo AD mede 3X.<br>\
        Daí, a relação entre BC e AD fica:\
        \\[\\frac{BC}{AD} = \\frac{2X}{3X\\]\
        \\[\\frac{BC}{AD} = \\frac{2}{3\\]\
        Alternativa Correta: Letra B.\
        "
    },
    {
        id: "geometria-plana-q47",
        informacoes: "(ENEM 2013) O proprietário de um terreno retangular medindo 10 m por 31,5 m deseja instalar\
        lâmpadas nos pontos C e D, conforme ilustrado na figura:",
        img: "../../imagens/Geometria-plana/Q47-geometria-plana.png",
        pergunta: "Cada lâmpada ilumina uma região circular de 5 m de raio.\
        Os segmentos AC e BD medem 2,5 m. O valor em m2 mais aproximado da área do terreno\
        iluminada pelas lâmpadas é (Aproxime √3 para 1,7 e π para 3.)",
        opcoes: ["30", "34", "50", "61", "69"],
        correta: "61",
        explicacao: "<img src='../../imagens/Geometria-plana/respostas/q47.png' class='imagem-resolucao'><br> \
        No enunciado temos as seguintes informações: <br>\
        AC e BD medem 2,5 que é a parte Amarela na imagem acima.<br>\
        A região circular que cada lâmpada vai iluminar é 5m que é a area marcada de azul.<br>\
        primeiro temos que achar a area que esta marcada de verde, se olharmos bem ficou um triângulo retangulo então podemos usar a fórmula de Pitáguras, Iremos chamar aquela parte de AB, então:\
        \\[AB = \\sqrt{25 - 2,5^2}\\]\
        \\[AB = \\sqrt{25 - 6,25}\\]\
        \\[AB = \\sqrt{18,75}\\]\
        \\[AB = \\frac{\\sqrt{1875}}{\\sqrt{100}}\\]\
        \\[AB = \\frac{\\sqrt{1875}}{10}\\]\
        agora temos que fatorar o 1875 que vai ficar 25² vezes 3\
        \\[AB = \\frac{\\sqrt{25^2 \\times 3}}{10}\\]\
        \\[AB = \\frac{25\\sqrt{3}}{10}\\]\
        simplificando:\
        \\[AB = \\frac{5\\sqrt{3}}{2}\\]\
        agora vamos calcular a area desse triângulo: \
        \\[A = \\frac{5}{2} \\times \\frac{5\\sqrt{3}}{2} \\times \\frac{1}{2} \\]\
        \\[A = \\frac{25\\sqrt{3}}{8}\\]\
        Achamos a area do Triângulo vamos entender oque foi esses valores, o \\(\\frac{5}{2}\\) é mesma coisa que 2,5.<br>\
        O \\(\\frac{1}{2}\\) é da formula do Triângulo, pois ele é dividido por 2 para achar sua area. <br>\
          \
        \
        "
    },
    {
        id: "geometria-plana-q53",
        informacoes: "Uma metalúrgica recebeu uma encomenda para fabricar, em grande quantidade, uma peça com o\
        formato de um prisma reto com base triangular, cujas dimensões da base são 6 cm, 8 cm e 10 cm\
        e cuja altura é 10 cm. Tal peça deve ser vazada de tal maneira que a perfuração na forma de um\
        cilindro circular reto seja tangente às suas faces laterais, conforme mostra a figura.",
        img: "../../imagens/Geometria-plana/Q53-geometria-plana.png",
        pergunta: "O raio da perfuração da peça é igual a",
        opcoes: ["1cm", "2cm", "3cm", "4cm", "5cm"],
        correta: "2cm",
        explicacao: ""
    },
    {
        id: "geometria-plana-q54",
        informacoes: "Membros de uma família estão decidindo como irão dispor duas camas em um dos quartos da\
        casa. As camas têm 0,80 m de largura por 2 m de comprimento cada. As figuras abaixo expõem os\
        esboços das ideias sugeridas por José, Rodrigo e Juliana, respectivamente. Em todos os esboços,\
        as camas ficam afastadas 0,20 m das paredes e permitem que a porta seja aberta em pelo menos 90°.",
        img: "../../imagens/Geometria-plana/Q54-geometria-plana.png",
        pergunta: "José, Rodrigo e Juliana concordaram que a parte listrada em cada caso será de difícil circulação, e a área branca é de livre circulação.\
        Entre essas propostas, a(s) que deixa(m) maior área livre para circulação é(são)",
        opcoes: ["a proposta de Rodrigo.", "a proposta de Juliana.", "as propostas de Rodrigo e Juliana.", "as propostas de José e Rodrigo.", "as propostas de José, Rodrigo e Juliana."],
        correta: "as propostas de José e Rodrigo.",
        explicacao: ""
    },
    
];


const quizatual = "geometria-plana";

// Sorteio das perguntas
const sorteadas = [];
while (sorteadas.length < 5) {
    let numero = Math.floor(
        Math.random() * perguntas.length
    );
    if (!sorteadas.includes(numero)) {
        sorteadas.push(numero);
    }
}
console.log(sorteadas);
console.log(quizatual);

/*
{
    informacoes: "",
    img: ".png",
    pergunta: "",
    opcoes: ["", "", "", "", ""],
    correta: "",
    explicacao: ""
},*/