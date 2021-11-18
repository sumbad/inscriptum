/**
 * Utilitarian types
 */

export type Unpacked<T> = T extends Promise<infer U2> ? U2 : T;
