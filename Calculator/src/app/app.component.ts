import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:string = '';
  result:string = '';
  title = 'Calculator';


  clear(){
    if(this.input!=""){
      this.input=this.input.substr(0, this.input.length-1)
    }
  }

  allClear(){
    this.input = "";
    this.result = "";
  }
  

  pressNum(num: string){
  //alert("Pressed Number:"+num)

    if(num=="."){
      alert("1")
     // alert("this.input: "+this.input)
      if(this.input!=""){
        //alert("2")

        const lastNum=this.getLastOperand();
        alert("lastnum: "+lastNum)
        console.log(lastNum.lastIndexOf("."))
        
        if(lastNum.lastIndexOf(".")>=0){
          return;
        }
      }
    }
  if(num=="0"){

    if(this.input!="0"){
      return;
    }
    const PrevKey= this.input[this.input.length-1];
    if(PrevKey==='/' || PrevKey==='*' || PrevKey==='+' || PrevKey==='-'){
      return;
    }

  }
  this.input=this.input+num;
  this.calcResult();
  }

  getLastOperand(){
    
    let pos:number;
    console.log("Current: "+this.input)
    pos=this.input.toString().lastIndexOf("+")

    if(this.input.toString().lastIndexOf("-")>pos){
      pos=this.input.lastIndexOf("-"); 
    }
    if(this.input.toString().lastIndexOf("*")>pos){
      pos=this.input.lastIndexOf("*"); 
    }
    if(this.input.toString().lastIndexOf("/")>pos){
      pos=this.input.lastIndexOf("/"); 
    }
    console.log("pos: "+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }

  //this method is for getting last pressed key
  pressOperator(op: string){
    const lastKey=this.input[this.input.length-1];
    if(lastKey === '+' || lastKey === '-' || lastKey === '/' || lastKey === '*'){
      return;
    }

    this.input= this.input+op
  }

  calcResult(){

    var formula = this.input;
    var lastKey = formula[formula.length-1];

    if(lastKey === ''){
      formula = formula.substr(0,formula.length-1);
    }

    lastKey = formula[formula.length-1];

    if(lastKey === '+' || lastKey === '-'  || lastKey === '/'  || lastKey === '*' ){
      formula = formula.substr(0,formula.length-1);
    }
    console.log("formula: "+formula)
    this.result = eval(formula);
  }

  getResult(){
    this.calcResult();
    this.input = this.result;

    if(this.input == "0")
    this.input = "";
  }
  
   

}
