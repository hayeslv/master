// type AnyOf<T extends readonly any[]> = any
type AnyOfFalse = 0 | "" | false | [] | { [key: string]: never }
type AnyOf<T extends readonly any[]> = T[number] extends AnyOfFalse ? false : true