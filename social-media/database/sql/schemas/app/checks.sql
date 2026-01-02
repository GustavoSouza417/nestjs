ALTER TABLE app.user
ADD CONSTRAINT ck_s_app_t_user_c_sex
CHECK (
  sex IN (
    'm', 'f', 'o'
  )
);

ALTER TABLE app.user
ADD CONSTRAINT ck_s_app_t_user_c_birthdate
CHECK (
  birthdate <= CURRENT_DATE
  AND birthdate >= (CURRENT_DATE - INTERVAL '130 years')
);

ALTER TABLE app.user
ADD CONSTRAINT ck_s_app_t_user_c_email
CHECK (
  utils.f_validate_email(email)
);

ALTER TABLE app.user
ADD CONSTRAINT ck_s_app_t_user_c_phone
CHECK (
  utils.f_validate_phone(phone)
);