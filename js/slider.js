(function () {
    const _SLIDER_TEMPLATE = ` 
                <div class="viewport">
                     <ul class="slidewrapper">
                         <li class="slide"><img src="./assets/img/slider/1.jpg" alt=""></li>
                         <li class="slide"><img src="./assets/img/slider/2.jpg" alt=""></li>
                         <li class="slide"><img src="./assets/img/slider/3.jpg" alt=""></li>
                         <li class="slide"><img src="./assets/img/slider/4.jpg" alt=""></li>
                     </ul>
                     <div class="prev-next-btns">
                          <div class="prev-btn">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          </div>
                          <div class="next-btn">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                          </div>
                     </div>
                </div>
                <div class="slider_text">KODAK CAMERA</div>`;

    class Slider{
        constructor(options){
            this._rootElement = document.querySelector(options.targetElement);
            this._slideInterval = 2000;
            this._translateWidth = 0;
            this._startSlide = null;
            this._slideNow = 1;
            this._init();
        }

        _render(){
            this._rootElement.innerHTML = _SLIDER_TEMPLATE;
            this._vieportElement= this._rootElement.querySelector('.viewport');
            this._slideWrapperElement= this._rootElement.querySelector('.slidewrapper');
            this._slideElement = this._rootElement.querySelectorAll('.slide');
            this._BtnElement = this._rootElement.querySelector('.prev-next-btns');

            this._slideCount = this._slideElement.length;
        }

        _nextSlide(){
            this._translateWidth = -this._vieportElement.offsetWidth * this._slideNow;
            if(this._slideNow<this._slideCount){

                this._slideWrapperElement.style.cssText =
                    'transform: translate(' + this._translateWidth + 'px, 0)';
                this._slideNow++;
            }else{
                this._slideNow = 1;
                this._slideWrapperElement.style.cssText =
                    'transform: translate(0, 0)';
            }
        }

        _prevSlide(){
            this._translateWidth = -this._vieportElement.offsetWidth * (this._slideCount - 1);
            if(this._slideNow == 1){
                this._slideWrapperElement.style.cssText =
                    'transform: translate(' + this._translateWidth + 'px, 0)';
            }else{
                this._translateWidth = -this._vieportElement.offsetWidth * (this._slideNow - 2);
                this._slideWrapperElement.style.cssText =
                    'transform: translate(' + this._translateWidth + 'px, 0)';
                this._slideNow--;
            }
        }

        _addEvent(){
            this._vieportElement.addEventListener('mouseenter', () =>{
                this._stopInterval();
                });
            this._vieportElement.addEventListener('mouseleave', () =>{
                this._starInterval();
            });
            this._BtnElement.addEventListener('click', (e) => {
                if(e.target.classList.contains('next-btn') || e.target.classList.contains('fa-arrow-right')){
                    this._nextSlide()
                }
                if(e.target.classList.contains('prev-btn') || e.target.classList.contains('fa-arrow-left')){

                    this._prevSlide();
                }
            })
        }

        _starInterval(){
            this._startSlide  = setInterval(() =>{
                this._nextSlide();
                }, this._slideInterval);
        }

        _stopInterval(){
            clearInterval(this._startSlide);
            this._startSlide = null;
        }

        _init(){
            this._render();
            this._starInterval();
            this._addEvent();

        }
    }

    window.Slider = Slider;
})();

(function () {

    const slider = new Slider({
        targetElement: '.slider',
    });


})();
