export class counterservice{
    activetoInActivecounter=0;
  InActivetoActivecounter=0;
  
  activetoInActive(){
    this.activetoInActivecounter++;
    console.log(this.activetoInActivecounter);
  }

  inactivetoActive(){
    this.InActivetoActivecounter++;
    console.log(this.InActivetoActivecounter);
  }
}