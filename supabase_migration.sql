-- ============================================================
-- True LINE — ملف الترحيل (Migration) لنظام Supabase Auth
-- شغّل هذا كامل مرة واحدة من: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1) جدول profiles: يخزّن بيانات البروفايل فقط — بدون أي باسورد إطلاقاً.
--    الباسورد يديره Supabase Auth داخلياً بجدول auth.users المشفّر.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  phone text,
  company text,
  country text,
  city text,
  bio text,
  description text,
  avatar_url text,
  profile_image_url text,
  role text not null default 'user',  -- 'user' أو 'admin'
  created_at timestamptz default now()
);

-- 2) عند إنشاء أي مستخدم جديد بـ Supabase Auth (Sign Up)، ينشئ تلقائياً
--    صف مطابق بجدول profiles — بدون أي كود إضافي بالفرونت إند.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 3) تفعيل RLS على profiles
alter table public.profiles enable row level security;

-- كل مستخدم يشوف بروفايله بس (وليس بروفايلات الآخرين)
create policy "profiles: read own" on public.profiles
  for select using (auth.uid() = id);

-- كل مستخدم يعدّل بروفايله بس (ما يقدر يعدّل role نفسه لأدمن!)
create policy "profiles: update own" on public.profiles
  for update using (auth.uid() = id)
  with check (auth.uid() = id and role = (select role from public.profiles where id = auth.uid()));

-- ============================================================
-- 4) تفعيل RLS على باقي الجداول (videos, images, portfolio, otp)
--    عدّل حسب أسماء الجداول الفعلية عندك إذا كانت مختلفة
-- ============================================================

alter table public.videos enable row level security;
alter table public.images enable row level security;
alter table public.portfolio enable row level security;
alter table public.otp enable row level security;

-- القراءة العامة مسموحة للفيديوهات والصور (محتوى معروض بالتطبيق)
create policy "videos: public read" on public.videos
  for select using (true);

create policy "images: public read" on public.images
  for select using (true);

-- الإضافة/الحذف محصورة بالأدمن فقط (يتحقق من عمود role بجدول profiles)
create policy "videos: admin write" on public.videos
  for insert with check (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "videos: admin delete" on public.videos
  for delete using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "images: admin write" on public.images
  for insert with check (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "images: admin delete" on public.images
  for delete using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- portfolio: كل مستخدم يشوف ويعدّل مشاريعه بس (مربوطة بـ user_id)
create policy "portfolio: owner read" on public.portfolio
  for select using (auth.uid() = user_id);

create policy "portfolio: owner write" on public.portfolio
  for insert with check (auth.uid() = user_id);

create policy "portfolio: owner delete" on public.portfolio
  for delete using (auth.uid() = user_id);

-- otp: يسمح فقط بالإدخال (INSERT) من أي زائر (قبل تسجيل الدخول)
-- ما نسمح بالقراءة العامة — التحقق يصير عبر مقارنة الكود بالباك إند لاحقاً
create policy "otp: allow insert" on public.otp
  for insert with check (true);

-- ============================================================
-- 5) لجعل أول مستخدم أدمن (شغّلها يدوياً بعد ما تسجّل حسابك،
--    أو أي إيميل تريده أدمن):
-- ============================================================
-- update public.profiles set role = 'admin' where email = 'abbasdx803@gmail.com';
