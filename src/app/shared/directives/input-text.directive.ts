import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
    selector: 'input[appInputText], textarea[appInputText]',
})
export class InputTextDirective {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);

    ngOnInit(): void {
        const el = this.el.nativeElement;

        // Clases DaisyUI para input básico
        this.renderer.addClass(el, 'input');
        this.renderer.addClass(el, 'input-bordered');
        this.renderer.addClass(el, 'w-full');
        this.renderer.addClass(el, 'text-sm');
    }
}
