
// 第一种封装方法，利用原型链来封装
// function snow(){
//     this.wrap = document.createElement('div');
//     document.body.appendChild(this.wrap);
    
//     this.offset = 0;
//     this.createSnowOffset = 0;
//     var _this = this;

//     window.addEventListener('mousemove',function(e){
//         // console.log(e);
//         var xPosition = e.clientX / document.body.clientWidth;
//         // console.log(xPosition);
//         _this.offset = (xPosition - 0.5) * (xPosition > 0.4 && xPosition < 0.6 ? 6 : 8);
//         // console.log(offset);
//         if(xPosition > 0.4 && xPosition < 0.6){
//             _this.createSnowOffset = 0;
//             return;
//         }else if(xPosition - 0.5 > 0){
//             _this.createSnowOffset = -document.body.clientWidth * 0.4;
//         }else{
//             _this.createSnowOffset = document.body.clientWidth * 0.4;
//         }
//     })
//     this.createSnow();
// }


// snow.prototype.createSnow = function (){
//     var _this = this;
//     setInterval(function() {
//         var snowP = document.createElement('div');
//         var size = parseInt(Math.random() * 4 )+4;
    
//         snowP.style.position = 'fixed';
//         snowP.style.top = -size + 'px';
//         snowP.style.left = parseInt(Math.random() * document.body.clientWidth) + _this.createSnowOffset + 'px';
//         snowP.style.width = size + 'px';
//         snowP.style.height = size + 'px';
//         snowP.style.borderRadius = '100%';
//         snowP.style.backgroundColor = '#fff';
        
//         _this.wrap.appendChild(snowP);
//         _this.move(snowP,Math.random() * 1.5 - 1);  
//     }, parseInt(Math.random() * 1000 + 400));
// }



// snow.prototype.move = function(ele,thisOffset) {
//     var _this = this;
//     var timer = setInterval(function() {
//         ele.style.top = parseFloat(ele.style.top) + 1 + 'px';
//         ele.style.left = parseFloat(ele.style.left) + _this.offset + thisOffset + 'px';
//         if(screen.height < ele.style.top) {
//             _this.wrap.removeChild(ele);
//             clearInterval(timer);
//         }
//     },parseInt(Math.random() * 15) + 30);
// }

// new snow();

// 第二种封装方法，利用类来封装

var snow = {
    wrap : document.createElement('div'),
    offset : 0,
    createSnowOffset : 0,
    createSnow : function() {
        var _this = this;
        setInterval(function() {
            var snowP = document.createElement('div');
            var size = parseInt(Math.random() * 4 )+4;
        
            snowP.style.zIndex = 100;
            snowP.style.position = 'fixed';
            snowP.style.top = -50 + 'px';
            snowP.style.left = parseInt(Math.random() * document.body.clientWidth) + _this.createSnowOffset + 'px';
            // snowP.style.width = size + 'px';
            // snowP.style.height = size + 'px';
            snowP.style.width = 50 + 'px';
            snowP.style.height = 50 + 'px';
            snowP.style.borderRadius = '100%';
            snowP.style.backgroundImage = "url(strew.png)";
            snowP.style.backgroundSize = '50px 50px';
            // snowP.style.backgroundColor = '#fff';
            
            _this.wrap.appendChild(snowP);
            _this.move(snowP,Math.random() * 1.5 - 1);  
        }, parseInt(Math.random() * 1500 + 400));
    },
    move : function(ele,thisOffset){
        var _this = this;
        var timer = setInterval(function() {
            ele.style.top = parseFloat(ele.style.top) + 1 + 'px';
            ele.style.left = parseFloat(ele.style.left) + _this.offset + thisOffset + 'px';
            if(screen.height < ele.style.top) {
                _this.wrap.removeChild(ele);
                clearInterval(timer);
            }
        },parseInt(Math.random() * 15) + 30);
    },
    init : function(){
        document.body.appendChild(this.wrap);
        var _this = this;
        window.addEventListener('mousemove',function(e){
            var xPosition = e.clientX / document.body.clientWidth;
            _this.offset = (xPosition - 0.5) * (xPosition > 0.4 && xPosition < 0.6 ? 4 : 8);
            console.log(1);
            if(xPosition > 0.4 && xPosition < 0.6){
                _this.createSnowOffset = 0;
                return;
            }else if(xPosition - 0.5 > 0){
                _this.createSnowOffset = -document.body.clientWidth * 0.4;
            }else{
                _this.createSnowOffset = document.body.clientWidth * 0.4;
            }
        })
        this.createSnow();
    }
}
snow.init();