



var w1;
var w2;
var bias;
var iterations = 10000;
var slope;

function sigmoid(x){

return 1/(1+Math.exp(-x));

}



function train(){
  var learningRate = 0.2;

w1 = Math.random()*0.2
w2 = Math.random()*0.2
bias = Math.random()*0.2


for(let i = 0; i < iterations;i++){
if(iterations%100 === 0){
  console.log("TRAINED: "+iterations);
}
var rdn = Math.floor(Math.random()*trainingSet.length);
var point = trainingSet[rdn];
var target = point[2];
var m1 = point[0];
var m2 = point[1];

var z = m1*w1 + m2*w2 + bias;
var pred = sigmoid(z);

var cost = (pred - target)**2;
 slope = 2*(pred - target);

var w1d = m1;
var w2d = m2;
var biasd = 1;
var sigd = sigmoid(z)*(1-sigmoid(z));

w1 -= slope*learningRate*w1d*sigd
w2 -= slope*learningRate*w2d*sigd
bias -= slope*learningRate*biasd*sigd
}

return{w1:w1,w2:w2,bias:bias,slope:slope}
}
