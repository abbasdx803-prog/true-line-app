-- ============================================================
-- تصحيح صلاحيات جدول otp — يحل خطأ:
-- "new row violates row-level security policy for table otp"
-- ============================================================

-- صلاحية القراءة — ضرورية لأمرين:
-- 1) حتى يقدر Supabase "يرجّع" الصف بعد الإدخال (Prefer: return=representation)
-- 2) حتى تقدر دالة verifyOTP تبحث عن الرمز وتتحقق منه
create policy "otp: allow select" on public.otp
  for select using (true);

-- صلاحية التحديث — ضرورية حتى تقدر verifyOTP تعلّم الرمز "verified = true"
-- بعد التحقق الناجح منه
create policy "otp: allow update" on public.otp
  for update using (true) with check (true);
