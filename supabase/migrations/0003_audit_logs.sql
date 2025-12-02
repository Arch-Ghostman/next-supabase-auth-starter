create table if not exists audit_logs (
  id bigserial primary key,
  user_id uuid not null,
  action text not null,
  created_at timestamp with time zone default now()
);
