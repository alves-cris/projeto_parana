// Banco de dados das Exposições (onde os alunos vão escrever os textos e colocar links de imagens)
const exhibitData = {
    'raizes-negras': {
        title: "Raízes Negras e a Identidade Paranaense",
        content: `
            <p><strong>A força que moldou o estado:</strong> Muitas vezes invisibilizada, a presença negra no Paraná remonta ao período colonial, com forte atuação nas rotas do tropeirismo, na agricultura e na construção das cidades.</p>
            <p>Da herança cultural da Lapa à força das comunidades quilombolas contemporâneas, a identidade paranaense é profundamente marcada pela resistência, culinária, religiosidade e manifestações artísticas da população negra.</p>
            <p><em>Espaço para os alunos: Insiram aqui entrevistas, fotos da Congada da Lapa ou registros da culinária Afro-paranaense.</em></p>
        `
    },
    'diaspora-europeia': {
        title: "A Diáspora Europeia e Asiática",
        content: `
            <p><strong>Um mosaico de sotaques:</strong> O Paraná tornou-se o destino de milhares de imigrantes poloneses, ucranianos, alemães, italianos, japoneses e de diversas outras nacionalidades a partir do século XIX.</p>
            <p>Esses fluxos transformaram a arquitetura local, os hábitos alimentares e as técnicas agrícolas, criando colônias que mantêm vivas suas tradições até os dias atuais, integrando-se e modificando a cultura da região.</p>
            <p><em>Espaço para os alunos: Adicionem mapas de imigração, fotos das casas de troncos eslavas ou das festas tradicionais.</em></p>
        `
    },
    'conquista-norte-oeste': {
        title: "A Conquista do Norte e Oeste: Migrações Internas",
        content: `
            <p><strong>A fronteira agrícola em movimento:</strong> Ao longo do século XX, paulistas, mineiros, gaúchos e catarinenses redesenharam o mapa demográfico do Paraná.</p>
            <p>A promessa da "terra roxa" fértil no Norte e a expansão no Oeste criaram cidades planejadas quase do dia para a noite, impulsionando a economia e gerando um caldeirão cultural único que mistura o sertanejo ao gaúcho.</p>
            <p><em>Espaço para os alunos: Relatos de pioneiros que chegaram em caminhões de mudança, fotos da derrubada da mata e fundação das cidades.</em></p>
        `
    },
    'fronteiras-chamas': {
        title: "Fronteiras em Chamas: Conflitos e Território",
        content: `
            <p><strong>Terra de disputas intensas:</strong> A construção das fronteiras paranaenses não foi pacífica. O território foi palco de episódios sangrentos como a Guerra do Contestado e a Revolta dos Posses no Sudoeste.</p>
            <p>Esses conflitos envolveram disputas de limites estaduais, direitos indígenas, posses de terras por grandes companhias ferroviárias e a luta de pequenos agricultores pela sobrevivência.</p>
            <p><em>Espaço para os alunos: Linhas do tempo sobre o Contestado, mapas antigos de disputas territoriais e biografias de líderes comunitários.</em></p>
        `
    },
    'motores-parana': {
        title: "Os Motores do Paraná: Mate, Madeira e Café",
        content: `
            <p><strong>Os ciclos econômicos:</strong> A economia paranaense foi impulsionada por três grandes gigantes em épocas distintas. O Erva-Mate no século XIX gerou a emancipação política; a Extração de Madeira abriu caminhos ferroviários; e o Café (o "ouro verde") transformou o Norte em uma das regiões mais ricas do país.</p>
            <p>Cada ciclo econômico trouxe consigo novos fluxos de pessoas, ferrovias e riquezas que financiaram os primeiros teatros, artes e indústrias do estado.</p>
            <p><em>Espaço para os alunos: Gráficos de exportação da época, fotos das antigas serrarias ou das grandes geadas que afetaram o café.</em></p>
        `
    }
};

// Função para abrir a sala do museu
function openExhibit(id) {
    const modal = document.getElementById('exhibit-modal');
    const titleElement = document.getElementById('modal-title');
    const bodyElement = document.getElementById('modal-body');

    if (exhibitData[id]) {
        titleElement.innerHTML = exhibitData[id].title;
        bodyElement.innerHTML = exhibitData[id].content;
        modal.style.display = "block";
    }
}

// Função para fechar a sala do museu
function closeExhibit() {
    const modal = document.getElementById('exhibit-modal');
    modal.style.display = "none";
}

// Fechar se o usuário clicar fora da caixa do museu
window.onclick = function(event) {
    const modal = document.getElementById('exhibit-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
