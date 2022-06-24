class Converter{
    value1
    value2
    value3
    outvalue1
    outvalue2
    outvalue3
    constructor(kgtopd,kmtomi,fotoce,btsp_btn,nr_btn){
        this.firstvalue = document.getElementById(kgtopd);
        this.secondvalue = document.getElementById(kmtomi);
        this.thirdvalue = document.getElementById(fotoce);
        this.b_btn = document.getElementById(btsp_btn);
        this.n_btn = document.getElementById(nr_btn);

        const _t = this;
        this.b_btn.onclick = function(){
            _t.value1 = parseFloat(_t.firstvalue.value);
            _t.value2 = parseFloat(_t.secondvalue.value);
            _t.value3 = parseFloat(_t.thirdvalue.value);

            
                _t.kgs();
            
           
                _t.kilometer();
            
         
                _t.forenheit();
            
            
            _t.output();
        };  
        this.n_btn.onclick = function(){
            _t.clear();
        } 
    }
    

    kgs(){
        var kilograms = this.value1;
        var temp = kilograms* 2.2046;
        this.outvalue1 = kilograms + ' kilograms in pounds is ' + temp +'.'; 
    }
    kilometer(){
        var kilometers = this.value2;
        var temp = kilometers * 0.621371;
        this.outvalue2 = kilometers + ' kilometers in miles is ' + temp +'.';
    }
    forenheit(){
        var temparature = this.value3;
        var temp = (temparature-32) * 5/9;
        this.outvalue3 = temparature + '\xB0F is ' + temp + '\xB0C.';
    }
    output(){
        this.firstvalue.value = this.outvalue1;
        this.secondvalue.value = this.outvalue2;
        this.thirdvalue.value = this.outvalue3;
    }
    clear(){
        this.firstvalue.value = "";
        this.secondvalue.value = "";
        this.thirdvalue.value = "";
    }
}   

new Converter('kgtopound','kmtomiles','ftoc','btsp_btn','nrml_btn');