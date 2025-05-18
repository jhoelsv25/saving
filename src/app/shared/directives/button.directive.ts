import { Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
    selector: 'button[appButton]',
})
export class ButtonDirective {
    public color = input<'primary' | 'secondary' | 'danger'>('primary');
    public variant = input<'solid' | 'outline' | 'ghost'>('solid');
    public size = input<'xs' | 'sm' | 'md' | 'lg'>('md');

    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    ngOnInit(): void {
        const el = this.el.nativeElement;

        this.addClasses([
            'font-medium',
            'rounded-xl',
            'transition-colors',
            'duration-200',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-offset-2',
        ]);

        const colorMap = {
            primary: {
                solid: ['bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-500'],
                outline: [
                    'border',
                    'border-blue-600',
                    'text-blue-600',
                    'hover:bg-blue-50',
                    'focus:ring-blue-500',
                ],
                ghost: ['text-blue-600', 'hover:bg-blue-100', 'focus:ring-blue-300'],
            },
            secondary: {
                solid: ['bg-gray-600', 'text-white', 'hover:bg-gray-700', 'focus:ring-gray-500'],
                outline: [
                    'border',
                    'border-gray-600',
                    'text-gray-600',
                    'hover:bg-gray-50',
                    'focus:ring-gray-500',
                ],
                ghost: ['text-gray-600', 'hover:bg-gray-100', 'focus:ring-gray-300'],
            },
            danger: {
                solid: ['bg-red-600', 'text-white', 'hover:bg-red-700', 'focus:ring-red-500'],
                outline: [
                    'border',
                    'border-red-600',
                    'text-red-600',
                    'hover:bg-red-50',
                    'focus:ring-red-500',
                ],
                ghost: ['text-red-600', 'hover:bg-red-100', 'focus:ring-red-300'],
            },
        };

        this.addClasses(colorMap[this.color()][this.variant()]);

        // 📏 Size
        const sizeMap = {
            xs: ['text-xs', 'px-2', 'py-1'],
            sm: ['text-sm', 'px-3', 'py-1.5'],
            md: ['text-base', 'px-4', 'py-2'],
            lg: ['text-lg', 'px-5', 'py-3'],
        };

        this.addClasses(sizeMap[this.size()]);
    }

    private addClasses(classes: string[]) {
        classes.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }
}
