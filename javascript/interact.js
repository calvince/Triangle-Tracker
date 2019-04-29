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