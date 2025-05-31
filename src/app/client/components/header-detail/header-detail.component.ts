import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'header-detail',
    imports: [],
    templateUrl: './header-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDetailComponent {
    public title = input<string>();
    public description = input<string>();
    public filterOptions = input<any[]>();

    filterChange = output<string>();
    search = output<string>();
    create = output<void>();
    onFilterChange(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;
        this.filterChange.emit(value);
    }

    onSearch(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.search.emit(value);
    }

    onCreate(): void {
        this.create.emit();
    }
}
