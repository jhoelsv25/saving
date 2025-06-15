import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private supabase: SupabaseClient;
    private readonly SUPABASE_URL = environment.supabaseUrl;
    private readonly SUPABASE_KEY = environment.supabaseKey;
    constructor() {
        console.log('SupabaseService initialized with URL:', this.SUPABASE_URL);
        console.log('SupabaseService initialized with Key:', this.SUPABASE_KEY);
        this.supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);
    }

    get client() {
        return this.supabase;
    }
}
