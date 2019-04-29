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

function myMainFunction(){
    var sideA= parseFloat(document.getElementById('A').value);
    var sideB= parseFloat(document.getElementById('B').value);
    var sideC= parseFloat(document.getElementById('C').value);
    
    var newTriangle = new mainTriangle(sideA,sideB,sideC);
    // console.log(newTriangle);
    if(newTriangle.checkTriangle()){
        document.getElementById('tell').innerHTML = 'Cannot be a triangle.';
    }
    
    

}
