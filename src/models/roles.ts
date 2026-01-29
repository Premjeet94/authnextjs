export const USER_ROLES = {
  USER: "user",
  ADMIN: "admin",
  MODERATOR: "moderator",
  SUPER_ADMIN: "super_admin",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];