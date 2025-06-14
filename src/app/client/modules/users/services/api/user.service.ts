import { inject, Injectable } from '@angular/core';
import { User, UserCreate } from '@services/users/interfaces/user.interface';
import { SupabaseService } from '@supbase/supabase.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly supabase = inject(SupabaseService);

    async create(data: UserCreate): Promise<User> {
        try {
            const { data: createdUser, error } = await this.supabase.client
                .from('users')
                .insert(data)
                .select()
                .single();

            if (error) {
                throw new Error(`Error creating user: ${error.message}`);
            }

            return createdUser as User; // Aseguramos que el tipo sea `User`
        } catch (error) {
            throw new Error(`Error creating user: ${error}`);
        }
    }

    async getAll(): Promise<User[]> {
        try {
            const { data, error } = await this.supabase.client.from('users').select();
            if (error) {
                throw new Error(`Error fetching users: ${error.message}`);
            }
            return data || [];
        } catch (error) {
            throw new Error(`Error fetching users: ${error}`);
        }
    }
    async getById(id: string): Promise<User | null> {
        try {
            const { data, error } = await this.supabase.client
                .from('users')
                .select()
                .eq('id', id)
                .single();
            if (error) {
                throw new Error(`Error fetching user by ID: ${error.message}`);
            }
            return data || null;
        } catch (error) {
            throw new Error(`Error fetching user by ID: ${error}`);
        }
    }
    async update(id: string, data: Partial<User>): Promise<User> {
        try {
            const { data: updatedUser, error } = await this.supabase.client
                .from('users')
                .update(data)
                .eq('id', id)
                .select()
                .single();
            if (error) {
                throw new Error(`Error updating user: ${error.message}`);
            }
            return updatedUser;
        } catch (error) {
            throw new Error(`Error updating user: ${error}`);
        }
    }
    async delete(id: string): Promise<void> {
        try {
            const { error } = await this.supabase.client.from('users').delete().eq('id', id);
            if (error) {
                throw new Error(`Error deleting user: ${error.message}`);
            }
        } catch (error) {
            throw new Error(`Error deleting user: ${error}`);
        }
    }
}
