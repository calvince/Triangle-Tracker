class mainTriangle{
    constructor(a,b,c){
        this.dimen1 = a;
        this.dimen2 = b;
        this.dimen3 = c;
    }
    checkTriangle(){
        return this.dimen1 <=0 || this.dimen2 <=0 || this.dimen3 <=0;
    }
    isNotTriangle(){
        return this.dimen1 + this.dimen2 <= this.dimen3 || this.dimen1 + this.dimen3 <= this.dimen2 || this.dimen3 + this.dimen2 <= this.dimen1;
    }
    isEquilateral(){
        return this.dimen1 === this.dimen2 && this.dimen2 === this.dimen3;
    }
    isIsosceles(){
        return this.dimen1 === this.dimen2 || this.dimen2 === this.dimen3 || this.dimen1 === this.dimen3;
    }
    isScalene(){
        return !this.isEquilateral();
    }
}

function myFunction(){
    var sideA= parseFloat(document.getElementById('first').value);
    var sideB= parseFloat(document.getElementById('second').value);
    var sideC= parseFloat(document.getElementById('third').value);
    
    var newTriangle = new mainTriangle(sideA,sideB,sideC);
    // console.log(newTriangle);
    if(newTriangle.checkTriangle()){
        document.getElementById('tell').innerHTML = ('Have 0 value:' +' Cannot be a triangle. ');
    }
    else if(newTriangle.isNotTriangle()){
        document.getElementById('tell').innerHTML = ('NOT a triangle.');
    }
    else if(newTriangle.isEquilateral()){
        document.getElementById('tell').innerHTML = (' Equilateral triangle: ' + ' All sides equal');
    }
    else if(newTriangle.isIsosceles()){
        document.getElementById('tell').innerHTML = (' Iscosceles triangle ' + ' 2 sides are equal');
    }
    else{
        document.getElementById('tell').innerHTML = (' Scalene triangle ' + ' None of the sides equal');
    }
    
    

}
 function myReset(){
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementById('third').value = '';
 }
