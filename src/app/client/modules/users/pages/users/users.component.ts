import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { DataSourceComponent } from '@components/data-source/data-source.component';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { userColumns } from '@services/users/data/user.column';

@Component({
    selector: 'app-users',
    imports: [HeaderDetailComponent, DataSourceComponent],
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
    public columns = computed(() => userColumns);
}
