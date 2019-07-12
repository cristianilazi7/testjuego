import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  word = 'camello';
  num_fail = 0;
  img = 9+'.png';
  arrayW = [];
  arrayShow = [];
  swtb = false;
  wordRplace = "";
  staticAlertWinnClosed = true;
  staticAlertLoserClosed = true;

  constructor(private router: Router) {
    this.setWord();
    this.img = this.num_fail+'.png';
   this.arrayW = this.word.toUpperCase().split("");
   this.num_fail=0;
  this.wordRplace = this.create_spaces(this.word)
   }

  ngOnInit() {
  }

  setWord(){
    if (sessionStorage.length > 0) {
      // We have items
      // Read item:
    let item = JSON.parse(sessionStorage.getItem('ahorcado')); 
    this.word = item.secret_word;
    //console.log(this.word);

    } else {
      this.router.navigate(['']);
      // No items
    }
  }

  replaceChart(word:any,chr:any,index:any):any{
    if(index > word.length-1) return word;
    return word.substr(0,index) + chr + word.substr(index+1);
  }

  create_spaces(word:any):any{
    var sapce = "";
    for (let index = 0; index < word.length; index++) {
       sapce += '_ ';
       this.arrayShow[index] = '_';
    }
   // console.log(sapce)
    return sapce;
  }

  chageWord():any{
    var sapce = "";    
    this.arrayShow.forEach(element => {
      sapce += element+' '
    });
    //console.log(sapce)
    return sapce;
  }

  forward_img(letra:any){
    var swt = false;
    //console.log(this.arrayW)
    for( var i = 0; i < this.arrayW.length; i++){
      // console.log(this.arrayW[i]);
      if ( this.arrayW[i] == letra) {
        this.arrayW[i]='*';
        this.arrayShow[i] = letra
        
        swt = true;        
      }
   }

    if(!swt){
      this.num_fail++
    if(this.num_fail<10)
    this.img = this.num_fail+'.png'
    }else{
      this.wordRplace = this.chageWord();
    }
    
    if(this.num_fail == 9){
     // console.log("GAME OVER");
      this.swtb = true;
      this.staticAlertLoserClosed = false;
    }
    var info = 0

    this.arrayShow.forEach(element => {
      if(element == '_')
      info++
    });
    if(info==0){
      //console.log("winner");
      this.swtb = true;
      this.staticAlertWinnClosed = false
    }

    
  }
}
