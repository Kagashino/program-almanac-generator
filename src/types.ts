export type VarDate = string | number

export type AlmanacActivity = {
  name: string,
  good: string,
  bad: string,
  weekend?: boolean
}

export type AlmanacEvents = {
  Weeks: Array<string>
  Activities: Array<AlmanacActivity>
  Specials?: Array<{
    date: string
    type: string
    name: string
    description: string
  }>
  Directions: Array<string>
  Tools: Array<string>
  Variables: Array<string>
  Drinks: Array<string>
}


export type AlmanacResult = {
  todayStr: string
  good: Array<AlmanacActivity>
  bad: Array<AlmanacActivity>
  direction: string
  drink: string[]
  rate: string
}
