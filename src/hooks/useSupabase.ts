import { useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export const useSupabaseQuery = <T>(table: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: queryError } = await supabase.from(table).select();

      if (queryError) throw queryError;
      setData(data as T[]);
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Query failed");
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [table]);

  return { data, loading, error, execute };
};
