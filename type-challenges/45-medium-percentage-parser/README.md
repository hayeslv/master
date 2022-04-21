实现PercentageParser<T extends string>。

根据`/^（\+\\-）？（\d*）？(\%)?$/` 规律性匹配T并获得三个匹配。



结构应该是：[‘正负’、‘数字’、‘单位`]

如果未捕获，则默认为空字符串。

For example:
```ts
type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'
type R1 = PercentageParser<PString1>  // expected ['', '', '']
type R2 = PercentageParser<PString2>  // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>  // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>  // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>  // expected ["", "85", ""]
```