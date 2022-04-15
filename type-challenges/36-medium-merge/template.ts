// type Merge<F, S> = any;

// type Merge<F, S> = {
//   [P in keyof F | keyof S]: P extends keyof S 
//     ? S[P]
//     : P extends keyof F 
//       ? F[P]
//       : never
// };

type Merge<F, S, K extends keyof F & keyof S = keyof F & keyof S> = Omit<Omit<F, K> & Omit<S, K> & Pick<S, K>, never>;