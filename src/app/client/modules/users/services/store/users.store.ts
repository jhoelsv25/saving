import { User } from '@services/users/interfaces/user.interface';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { ToastService } from '@core/services/toast.service';
import { UserService } from '../api/user.service';
import { LoadingService } from '@core/services/loading.service';

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const UserStore = signalStore(
    { providedIn: 'root' },
    withState<UserState>(initialState),
    withMethods(
        (
            store,
            toast = inject(ToastService),
            loading = inject(LoadingService),
            userService = inject(UserService),
        ) => ({
            create: async (user: User) => {
                loading.start('Creando usuario...');
                try {
                    const newUser = await userService.create(user);
                    patchState(store, {
                        users: [...store.users(), newUser],
                        loading: false,
                        error: null,
                    });
                    toast.success('Usuario creado exitosamente');
                } catch (error) {
                    toast.error('Ocurrio un error al crear el usuario');
                }
            },
            getUsers: async () => {
                loading.start('Cargando usuarios...');
                try {
                    const users = await userService.getAll();

                    patchState(store, {
                        users: users || [],
                        loading: false,
                        error: null,
                    });
                } catch (error) {
                    toast.error('Ocurrio un error al cargar los usuarios');
                }
            },
            updateUser: async (id: string, user: User) => {
                loading.start('Actualizando usuario...');
                try {
                    const updatedUser = await userService.update(id, user);
                    patchState(store, {
                        users: store.users().map(u => (u.id === updatedUser.id ? updatedUser : u)),
                        loading: false,
                        error: null,
                    });
                    toast.success('Usuario actualizado exitosamente');
                } catch (error) {
                    toast.error('Ocurrio un error al actualizar el usuario');
                }
            },
            deleteUser: async (userId: string) => {
                loading.start('Eliminando usuario...');
                try {
                    await userService.delete(userId);
                    patchState(store, {
                        users: store.users().filter(u => u.id !== userId),
                        loading: false,
                        error: null,
                    });
                    toast.success('Usuario eliminado exitosamente');
                } catch (error) {
                    toast.error('Error deleting user');
                }
            },
        }),
    ),
);
