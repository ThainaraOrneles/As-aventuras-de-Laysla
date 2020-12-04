function preload() { 
  imagemCenario = loadImage('Imagem/cenario/floresta.png');
  imagemGameOver = loadImage('Imagem/assets/game-over.png');
  imagemPersonagem = loadImage('Imagem/Personagem/correndo.png');
  imagemInimigo = loadImage('Imagem/inimigos/gotinha.png');
  imagemVoador = loadImage('Imagem/inimigos/gotinha-voadora.png');
  imagemTroll = loadImage('Imagem/inimigos/troll.png');
  imagemTelaInicial = loadImage('Imagem/assets/telaInicial.png');
  imagemVida = loadImage('Imagem/assets/coracao.png');
  SomDoJogo = loadSound('Sons/trilha_jogo.mp3');
  SomDoPulo = loadSound('Sons/somPulo.mp3');
  fonte = loadFont('Imagem/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');
}