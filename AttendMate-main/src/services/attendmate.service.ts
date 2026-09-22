import { supabase } from "@/integrations/supabase/client";
import type {
  AppNotification,
  AttendanceGoal,
  AttendanceRecord,
  Profile,
  Subject,
  TimetableEntry,
} from "@/types";

/**
 * Data access layer. Every read/write goes through here so the storage
 * backend can be swapped without touching UI code.
 */

function unwrap<T>(res: { data: T | null; error: { message: string } | null }): T {
  if (res.error) throw new Error(res.error.message);
  return res.data as T;
}

export const profileService = {
  async get(userId: string): Promise<Profile | null> {
    const res = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
    return unwrap(res) as Profile | null;
  },
  async update(userId: string, patch: Partial<Profile>): Promise<Profile> {
    const res = await supabase
      .from("profiles")
      .update(patch)
      .eq("id", userId)
      .select("*")
      .single();
    return unwrap(res) as Profile;
  },
};

export const subjectService = {
  async list(): Promise<Subject[]> {
    const res = await supabase.from("subjects").select("*").order("created_at");
    return (unwrap(res) ?? []) as Subject[];
  },
  async create(input: Partial<Subject> & { name: string; user_id: string }): Promise<Subject> {
    const res = await supabase.from("subjects").insert(input).select("*").single();
    return unwrap(res) as Subject;
  },
  async update(id: string, patch: Partial<Subject>): Promise<Subject> {
    const res = await supabase.from("subjects").update(patch).eq("id", id).select("*").single();
    return unwrap(res) as Subject;
  },
  async remove(id: string): Promise<void> {
    const res = await supabase.from("subjects").delete().eq("id", id);
    if (res.error) throw new Error(res.error.message);
  },
};

export const attendanceService = {
  async list(): Promise<AttendanceRecord[]> {
    const res = await supabase
      .from("attendance_records")
      .select("*")
      .order("date", { ascending: true });
    return (unwrap(res) ?? []) as AttendanceRecord[];
  },
  async create(input: {
    user_id: string;
    subject_id: string;
    date: string;
    status: AttendanceRecord["status"];
    class_number?: number;
    notes?: string;
  }): Promise<AttendanceRecord> {
    const res = await supabase.from("attendance_records").insert(input).select("*").single();
    return unwrap(res) as AttendanceRecord;
  },
  async update(id: string, patch: Partial<AttendanceRecord>): Promise<AttendanceRecord> {
    const res = await supabase
      .from("attendance_records")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();
    return unwrap(res) as AttendanceRecord;
  },
  async remove(id: string): Promise<void> {
    const res = await supabase.from("attendance_records").delete().eq("id", id);
    if (res.error) throw new Error(res.error.message);
  },
};

export const timetableService = {
  async list(): Promise<TimetableEntry[]> {
    const res = await supabase
      .from("timetable_entries")
      .select("*")
      .order("day_of_week")
      .order("start_time");
    return (unwrap(res) ?? []) as TimetableEntry[];
  },
  async create(input: Omit<TimetableEntry, "id">): Promise<TimetableEntry> {
    const res = await supabase.from("timetable_entries").insert(input).select("*").single();
    return unwrap(res) as TimetableEntry;
  },
  async update(id: string, patch: Partial<TimetableEntry>): Promise<TimetableEntry> {
    const res = await supabase
      .from("timetable_entries")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();
    return unwrap(res) as TimetableEntry;
  },
  async remove(id: string): Promise<void> {
    const res = await supabase.from("timetable_entries").delete().eq("id", id);
    if (res.error) throw new Error(res.error.message);
  },
};

export const goalService = {
  async list(): Promise<AttendanceGoal[]> {
    const res = await supabase
      .from("attendance_goals")
      .select("*")
      .order("created_at", { ascending: false });
    return (unwrap(res) ?? []) as AttendanceGoal[];
  },
  async create(input: Omit<AttendanceGoal, "id" | "created_at">): Promise<AttendanceGoal> {
    const res = await supabase.from("attendance_goals").insert(input).select("*").single();
    return unwrap(res) as AttendanceGoal;
  },
  async remove(id: string): Promise<void> {
    const res = await supabase.from("attendance_goals").delete().eq("id", id);
    if (res.error) throw new Error(res.error.message);
  },
};

export const notificationService = {
  async list(): Promise<AppNotification[]> {
    const res = await supabase
      .from("notifications")
      .select("*")
      .order("created_at", { ascending: false });
    return (unwrap(res) ?? []) as AppNotification[];
  },
  async markRead(id: string, read = true): Promise<void> {
    const res = await supabase.from("notifications").update({ read }).eq("id", id);
    if (res.error) throw new Error(res.error.message);
  },
  async markAllRead(userId: string): Promise<void> {
    const res = await supabase
      .from("notifications")
      .update({ read: true })
      .eq("user_id", userId)
      .eq("read", false);
    if (res.error) throw new Error(res.error.message);
  },
  async remove(id: string): Promise<void> {
    const res = await supabase.from("notifications").delete().eq("id", id);
    if (res.error) throw new Error(res.error.message);
  },
};
