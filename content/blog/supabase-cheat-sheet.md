---
title: "Cheat Sheet: Supabase"
description: 'Supabase is a backend as a service which lets you build applications with authentication, database and storage in no time.'
category: Cheat Sheet, BaaS, Supabase
date: 02/16/2024
navigation:
    title: 'Home'
    icon: '🏡'
---

# Cheat Sheet: Supabase

```bash
# List all projects
supabase projects list

# Link a project
supabase link

# Generate types
supabase gen types typescript --project-id "$PROJECT_REF" --schema public > database.types.ts
```

When you generated your typescript types, you can import the Database type into your components and/or type definitions file. Now you can also type the Supabase client.

```typescript
import type { Database } from '/database.types'
export type Users = Database["public"]["Tables"]["users"]["Row"];

const supabase = useSupabaseClient<Database>()
```