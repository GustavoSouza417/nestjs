CREATE CONSTRAINT ck_s_app_t_user_c_sex
CHECK (
  sex IN (
    'm', 'f', 'o'
  )
);

CREATE CONSTRAINT ck_s_app_t_user_c_birthdate
CHECK (
  birthdate <= CURRENT_DATE
  AND birthdate >= (CURRENT_DATE - INTERVAL '130 years')
);

CREATE CONSTRAINT ck_s_app_t_user_c_email
CHECK (
  f_validate_email(email)
);

CREATE CONSTRAINT ck_s_app_t_user_c_phone
CHECK (
  f_validate_phone(phone)
);