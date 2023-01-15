export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
    graphql_public: {
        Tables: {
            [_ in never]: never;
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            graphql: {
                Args: {
                    operationName: string;
                    query: string;
                    variables: Json;
                    extensions: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never;
        };
    };
    public: {
        Tables: {
            exercise_instances: {
                Row: {
                    id: number;
                    workout_id: number;
                    user_id: string;
                    exercise_id: number;
                };
                Insert: {
                    id?: number;
                    workout_id: number;
                    user_id: string;
                    exercise_id: number;
                };
                Update: {
                    id?: number;
                    workout_id?: number;
                    user_id?: string;
                    exercise_id?: number;
                };
            };
            exercises: {
                Row: {
                    id: number;
                    created_at: string | null;
                    title: string;
                    user_id: string | null;
                };
                Insert: {
                    id?: number;
                    created_at?: string | null;
                    title: string;
                    user_id?: string | null;
                };
                Update: {
                    id?: number;
                    created_at?: string | null;
                    title?: string;
                    user_id?: string | null;
                };
            };
            profiles: {
                Row: {
                    id: string;
                    updated_at: string | null;
                    username: string | null;
                    full_name: string | null;
                    avatar_url: string | null;
                    website: string | null;
                };
                Insert: {
                    id: string;
                    updated_at?: string | null;
                    username?: string | null;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    website?: string | null;
                };
                Update: {
                    id?: string;
                    updated_at?: string | null;
                    username?: string | null;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    website?: string | null;
                };
            };
            sets: {
                Row: {
                    id: number;
                    created_at: string | null;
                    weight: number;
                    repetitions: number;
                    user_id: string;
                    exercise_instance_id: number;
                };
                Insert: {
                    id?: number;
                    created_at?: string | null;
                    weight: number;
                    repetitions: number;
                    user_id: string;
                    exercise_instance_id: number;
                };
                Update: {
                    id?: number;
                    created_at?: string | null;
                    weight?: number;
                    repetitions?: number;
                    user_id?: string;
                    exercise_instance_id?: number;
                };
            };
            workouts: {
                Row: {
                    id: number;
                    created_at: string;
                    title: string;
                    duration: number;
                    user_id: string;
                };
                Insert: {
                    id?: number;
                    created_at?: string;
                    title: string;
                    duration: number;
                    user_id: string;
                };
                Update: {
                    id?: number;
                    created_at?: string;
                    title?: string;
                    duration?: number;
                    user_id?: string;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            resistance_t: 'weighted' | 'assisted' | 'regular';
        };
    };
    storage: {
        Tables: {
            buckets: {
                Row: {
                    id: string;
                    name: string;
                    owner: string | null;
                    created_at: string | null;
                    updated_at: string | null;
                    public: boolean | null;
                };
                Insert: {
                    id: string;
                    name: string;
                    owner?: string | null;
                    created_at?: string | null;
                    updated_at?: string | null;
                    public?: boolean | null;
                };
                Update: {
                    id?: string;
                    name?: string;
                    owner?: string | null;
                    created_at?: string | null;
                    updated_at?: string | null;
                    public?: boolean | null;
                };
            };
            migrations: {
                Row: {
                    id: number;
                    name: string;
                    hash: string;
                    executed_at: string | null;
                };
                Insert: {
                    id: number;
                    name: string;
                    hash: string;
                    executed_at?: string | null;
                };
                Update: {
                    id?: number;
                    name?: string;
                    hash?: string;
                    executed_at?: string | null;
                };
            };
            objects: {
                Row: {
                    id: string;
                    bucket_id: string | null;
                    name: string | null;
                    owner: string | null;
                    created_at: string | null;
                    updated_at: string | null;
                    last_accessed_at: string | null;
                    metadata: Json | null;
                    path_tokens: string[] | null;
                };
                Insert: {
                    id?: string;
                    bucket_id?: string | null;
                    name?: string | null;
                    owner?: string | null;
                    created_at?: string | null;
                    updated_at?: string | null;
                    last_accessed_at?: string | null;
                    metadata?: Json | null;
                    path_tokens?: string[] | null;
                };
                Update: {
                    id?: string;
                    bucket_id?: string | null;
                    name?: string | null;
                    owner?: string | null;
                    created_at?: string | null;
                    updated_at?: string | null;
                    last_accessed_at?: string | null;
                    metadata?: Json | null;
                    path_tokens?: string[] | null;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            extension: {
                Args: { name: string };
                Returns: string;
            };
            filename: {
                Args: { name: string };
                Returns: string;
            };
            foldername: {
                Args: { name: string };
                Returns: string[];
            };
            get_size_by_bucket: {
                Args: Record<PropertyKey, never>;
                Returns: { size: number; bucket_id: string }[];
            };
            search: {
                Args: {
                    prefix: string;
                    bucketname: string;
                    limits: number;
                    levels: number;
                    offsets: number;
                    search: string;
                    sortcolumn: string;
                    sortorder: string;
                };
                Returns: {
                    name: string;
                    id: string;
                    updated_at: string;
                    created_at: string;
                    last_accessed_at: string;
                    metadata: Json;
                }[];
            };
        };
        Enums: {
            [_ in never]: never;
        };
    };
}
