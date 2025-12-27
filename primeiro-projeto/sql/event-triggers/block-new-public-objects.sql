CREATE OR REPLACE FUNCTION utils.f_block_new_public_objects ()
RETURNS event_trigger
LANGUAGE plpgsql
AS $$
DECLARE
  obj record;
BEGIN
  FOR obj IN
    SELECT *
    FROM pg_event_trigger_ddl_commands ()
  LOOP
      IF obj.schema_name = 'public' THEN
        RAISE EXCEPTION '
          Criação de objetos no schema "public" não é permitida. Objeto: %, Tipo: %
        ', obj.object_identity, obj.object_type;
      END IF;
  END LOOP;
END;
$$;

CREATE EVENT TRIGGER tr_e_block_new_public_objects
ON ddl_command_end
EXECUTE FUNCTION utils.f_block_new_public_objects ();