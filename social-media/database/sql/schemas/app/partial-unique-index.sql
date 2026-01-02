CREATE UNIQUE INDEX puq_s_app_t_user_c_email
ON app.user (email)
WHERE is_deleted IS FALSE;

CREATE UNIQUE INDEX puq_s_app_t_user_c_phone
ON app.user (phone)
WHERE is_deleted IS FALSE;