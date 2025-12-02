create table if not exists profiles (
  id uuid primary key,
  email text not null unique,
  created_at timestamp with time zone default now()
);
