CREATE OR REPLACE FUNCTION utils.f_validate_email (
  email TEXT
)
RETURNS BOOLEAN
AS $$
DECLARE
  v_pattern VARCHAR := '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
BEGIN
  IF email ~ v_pattern THEN
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;