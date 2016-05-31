var app = angular.module('converters', []);

app.controller('MainController', function ($scope) {
    var mc = this;
    mc.showing = 0;
    mc.result = 0;
    
    $scope.showCC = function(x){
        mc.showing = x;
    }

});

app.controller('MilesVSKm', function(){
    var mk = this;
    mk.res = 0;
    
    mk.calculation = function(con, num){
        if(con) {
            mk.res = (num * 1.60934).toFixed(3);
        } else mk.res = (num * 0.621371).toFixed(3);
    }
})

app.controller('FootVSMetr', function(){
    var fm = this;
    fm.res = 0;
    
    fm.calculation = function(con, num){
        if(con) {
               fm.res = (num * 0.3048).toFixed(3);
        } else fm.res = (num * 3.28084).toFixed(3);
    }
});
app.controller('InchesVSCentimeters', function(){
    var ic = this;
    ic.res = 0;
    
    ic.calculation = function(con, num){
        if(con) {
               ic.res = (num * 2.54).toFixed(3);
        } else ic.res = (num * 0.393701).toFixed(3);
    }
});

app.controller('SQFTvsSQMS', function(){
    var sq = this;
    sq.res = 0;
    
    sq.calculation = function(con, num){
        if(con) {
               sq.res = (num * 0.092903).toFixed(3);
        } else sq.res = (num * 10.7639).toFixed(3);
    }
});

app.controller('FahrenheitVSCelsius', function(){
    var fc = this;
    fc.res = 0;
    fc.calculation = function(con, num){
        if(con) {
               fc.res = ((num * 1.8) + 32).toFixed(1);
        } else fc.res = ((num - 32) / 1.8).toFixed(1);
    }
});

app.controller('PoundsVSKilograms', function(){
    var pk = this;
    pk.res = 0;
    
    pk.calculation = function(con, num){
        if(con) {
               pk.res = (num * 0.453592).toFixed(3);
        } else pk.res = (num * 2.20462).toFixed(3);
    }
});

app.controller('GallonVSLiter', function(){
    var gl = this;
    gl.res = 0;
    
    gl.calculation = function(con, num){
        if(con) {
               gl.res = (num * 3.78541).toFixed(3);
        } else gl.res = (num * 0,264172).toFixed(3);
    }
});



app.controller('BMI', function(){
    var bmi = this;
    var z=0;
    bmi.mes;
    
    bmi.calcul = function(h, m, mc) {
        z = (m/(h*h)*10000).toFixed(1);
        
        if(z < 18.5) bmi.mes = "Your result is lower than the norm"
        if(18.5 < z && z < 25) bmi.mes = "Your result is fine"
        if(z > 25) bmi.mes = "Your result is higher than the norm"        
        mc.result = z;
    }
});

app.controller('LoansAndPayments', function(){
    debugger
    var lp = this;
    var i = 0;
    
    lp.calcul = function(p, r, n, mc){
        r = (r+1)/100 + 1;
        i = Math.pow(r,n);
     mc.result = Math.round(i*p);   
    }
});