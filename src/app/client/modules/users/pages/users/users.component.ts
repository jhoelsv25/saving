import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { DataSourceComponent } from '@components/data-source/data-source.component';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { UserFormComponent } from '@services/users/components/user-form/user-form.component';
import { userColumns } from '@services/users/data/user.column';
import { UserStore } from '@services/users/services/store/users.store';

@Component({
    selector: 'app-users',
    imports: [HeaderDetailComponent, DataSourceComponent, UserFormComponent],
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent implements OnInit {
    private userStore = inject(UserStore);
    public data = computed(() => this.userStore.users());
    public columns = computed(() => userColumns);
    public showModal = signal<boolean>(false);

    ngOnInit(): void {
        this.userStore.getUsers();
    }
    public onCloseModal() {
        this.showModal.set(false);
    }

    public onOpenModal() {
        console.log('Abrir modal');
        this.showModal.set(true);
    }
}
