// type PercentageParser<A extends string> = any

type MatchSymbol<T> = T extends `${infer F}${infer _}`
  ? F extends '+' | '-'
    ? F
    : ''
  : ''

type MatchUnit<T> = T extends `${infer _}%` ? '%' : ''

type MatchValue<T> = T extends `${MatchSymbol<T>}${infer V}${MatchUnit<T>}` ? V : ''

type PercentageParser<A extends string> = [MatchSymbol<A>, MatchValue<A>, MatchUnit<A>]
