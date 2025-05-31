import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    input,
    output,
    signal,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeFormatPipe } from '@shared/pipes/time-format.pipe';
function dataTransform(data: any[]) {
    return data.map(item => {
        return {
            ...item,
            selected: false,
            showControls: false,
        };
    });
}
interface Btn {
    name: string;
    icon: string;
    status?: string;
}
interface Column {
    value: string;
    name: string;
}

@Component({
    selector: 'data-source',
    imports: [CommonModule, FormsModule, TimeFormatPipe],
    templateUrl: './data-source.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSourceComponent {
    public actionTemplate = input<TemplateRef<any>>();
    public multiple = input<boolean>(true);
    public data = input.required({ transform: dataTransform });
    public columns = input.required<any[]>();
    public newAction = input<Btn>();
    public btnDetail = output<any>();
    public btnDelete = output<any>();
    public showControls = input<boolean>(true);
    public dataSelected = output<string[]>();
    public masterSelected = signal<boolean>(false);
    public _dataTransform = signal<any[]>([]);
    public show(id: string) {
        this._dataTransform.update(prev =>
            prev.map(item => ({ ...item, showControls: item.id === id })),
        );
    }

    //RECIBIR  DATOS POR INPUT Y TRANSFORMARLOS EN UNA VARIABLE REACTIVA
    ngOnChanges(changes: SimpleChanges): void {
        const { data } = changes;
        if (data) {
            this._dataTransform.set(this.data());
        }
    }

    checkUncheckAll() {
        if (this.multiple()) {
            const isSelected = this.masterSelected();
            this._dataTransform.update(prev =>
                prev.map(item => ({ ...item, selected: isSelected })),
            );
            this.getChekedItemList();
        }
    }

    private isSelectedOne(id: string): void {
        this._dataTransform.update(prev =>
            prev.map(prevItem => ({
                ...prevItem,
                selected: prevItem.id === id ? !prevItem.selected : prevItem.selected,
            })),
        );
    }

    itemSelected(id: string) {
        if (this.multiple()) {
            // Selección múltiple
            this.isSelectedOne(id);
            this.getChekedItemList();
        } else {
            // Selección única
            this.dataSelected.emit([id]);
        }
    }

    private getChekedItemList() {
        const selectedItems = this._dataTransform()
            .filter(item => item.selected)
            .map(item => item.id);
        const allItems = this._dataTransform().length;
        const selectedItemsLength = selectedItems.length;
        if (selectedItemsLength === allItems) {
            this.masterSelected.set(true);
        } else {
            this.masterSelected.set(false);
        }
        this.dataSelected.emit(selectedItems);
    }

    delete(data: any) {
        this.btnDelete.emit(data);
    }

    detail(data: any) {
        this.btnDetail.emit(data);
    }

    @HostListener('document:click', ['$event'])
    onClick(event: any) {
        const target = event.target.closest('.controls');
        if (!target) {
            this._dataTransform.update(prev =>
                prev.map(item => ({ ...item, showControls: false })),
            );
        }
    }
}
