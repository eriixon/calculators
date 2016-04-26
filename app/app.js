var app = angular.module('calculators', []);

app.controller('MainController', function ($scope) {
    var mc = this;
    mc.showing = 0;
    mc.result = 0;
    
    $scope.showCC = function(x){
        mc.showing = x;
    }
    
    mc.calcul = function(x, y){
        mc.result = (x * y).toFixed(3);
    }
    mc.temp = function(x,y){
    if (x === 1) mc.result = ((y * 1.8) + 32).toFixed(1);
    if (x ===2 ) mc.result = ((y - 32) / 1.8).toFixed(1);
    }
});

app.controller('MilesVSKm', function(){
    var mk = this;
})

app.controller('FahrenheitVSCelsius', function(){
    var fc = this;
});

app.controller('PoundsVSKilograms', function(){
    var pk = this;
});

app.controller('FootVSMetr', function(){
    var fm = this;
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