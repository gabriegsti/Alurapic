import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

// O Selector é definido entre colchetes para que a diretiva possa ser usada como se fosse um atributo. 
@Directive({
    selector: '[apDarkenOnHover]'

})
export class DarkenOnHoverDirective {
    
    @Input() brightness = '70%';
  
  
    //ElementRef é para dizer para o Angular que vamos pegar o elemento do DOM
    constructor(
        private el: ElementRef, 
        private render: Renderer
        ){}
        
        @HostListener('mouseover')
        darkenOn(){
            this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})` );
        }
        
        @HostListener('mouseleave')
        darkenOff(){
            this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
        }
    


}