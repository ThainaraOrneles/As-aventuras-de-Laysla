class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY
    this.yInicio = height - this.altura - this.variacaoY;
    this.y = this.yInicio;
    this.velPulo = 0;
    this.gravidade = 3;
    this.alturaDoPulo = -30;
    this.pulos = 0;
    this.invencivel = false;
  }
  pula() {
    if(this.pulos < 2){
      this.velPulo = this.alturaDoPulo;
      this.pulos++;
    }
   
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velPulo;
    this.velPulo = this.velPulo + this.gravidade;
    if(this.y > this.yInicio){
      this.y = this.yInicio;
      this.pulos = 0;
    }
  }
ficaInvencivel(){
  this.invencivel = true;
  setTimeout(() => {this.invencivel = false}, 1000)
}
estaColidindo(inimigo) {
    if(this.invencivel){
      return false;
    }
    const precisao = .7
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisao, 
      inimigo.altura * precisao
    ); 
    return colisao;
  }  
  
}