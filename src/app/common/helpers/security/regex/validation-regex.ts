/* eslint-disable max-len */
export const ONLY_LETTERS_REGEX = /^[A-ZÁÉÍÓÚÑ\s]+$/i;

export const TWO_BLANKS_REGEX = /\s\s+/;

export const SQL_INJECTION_REGEX =
  /('(''|[^'])*')|(\b(ALTER|alter|Alter|CREATE|create|Create|DELETE|delete|Delete|DROP|drop|Drop|EXEC(UTE){0,1}|exec(ute){0,1}|Exec(ute){0,1}|INSERT( +INTO){0,1}|insert( +into){0,1}|Insert( +into){0,1}|MERGE|merge|Merge|SELECT|Select|select|UPDATE|update|Update|UNION( +ALL){0,1}|union( +all){0,1}|Union( +all){0,1})\b)/;
