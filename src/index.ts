import ProgrammerEvents from './programmerEvents'

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

/**
 * create daySeed based on this prime number: 11117
 * @param today Date
 * @param indexSeed number
 */
export const random = (today: Date, indexSeed: number): number => {
  const MOD = 11117;
  const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const offset = 100;
  let n = daySeed % MOD;
  for (let i = 0; i < offset + indexSeed; i++) {
    n = n * n % MOD;
  }
  return n;
};

/**
 * get date string
 * @param today
 * @param weeks
 */
export const getTodayStr = (today: Date, weeks: string[]): string => {
  const d = today;
  return `今天是${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 星期${weeks[d.getDay()]}`
};

/**
 * return true if weekend
 * @param today Date
 */
export const isWeekend = (today: Date): boolean => today.getDay() % 6 === 0;

/**
 * pick random events from list according to date;
 * @param today Date
 * @param list datasource
 * @param size number of event to pick
 */
export const pickRandomItems = (today: Date, list: any[], size: number) => {
  const picked = list.slice();
  for (let i = 0; i < list.length - size; i++) {
    const RANDOM_SEED = i;
    const index = random(today, RANDOM_SEED) % picked.length;
    picked.splice(index, 1);
  }
  return picked;
};

/**
 * generate rate start ★/☆
 * @param num rate count
 * @param max rate limit
 */
export function rate (num: number, max: number = 5): string {
  let stars = '';
  for (let i = 0; i < max; i++) {
    stars += i < num ? '★' : '☆'
  }
  return stars;
}

/**
 * 解析占位符
 * @param str { string }: 带有%v(variable)、%t(develop tool)、%l(lines of code)的文字
 * @param Assets
 * @param date
 */
export const fillRandom = (str: string, Assets: AlmanacEvents, date: Date): string => {
  const { Tools, Variables } = Assets;
  const VARIABLE_SEED = 12;
  const TOOL_SEED = 11;
  const LINE_SEED = 12;

  const VariableSeed = random(date, VARIABLE_SEED) % Variables.length;
  const toolSeed = random(date, TOOL_SEED) % Tools.length;
  const lineSeed = random(date, LINE_SEED) % 247 + 30
  return str.replace(/(%v|%t|%l)/, (result: string): string => {
    switch (result) {
      case '%v': return Variables[VariableSeed];
      case '%t': return Tools[toolSeed];
      case '%l': return `${lineSeed}`;
      default: return result;
    }
  })
};

/**
 * generate today's almanac by custom event.
 * @param Assets events configuration set.
 * @param date @default new Date()
 */
export const generateAlmanac = (Assets: AlmanacEvents, date = new Date()): AlmanacResult => {
  const { Activities, Directions, Drinks, Variables, Tools } = Assets;
  const GOOD_SEED = 98;
  const BAD_SEED = 87;
  const DIRECTION_SEED = 2;
  const RATE_SEED = 6;

  const today = new Date(date.getTime());
  const weekend = isWeekend(today);
  const filteredActivities = Activities.filter((i: AlmanacActivity) => !weekend || i.weekend);
  const goodCount = random(today, GOOD_SEED) % 3 + 2;
  const badCount = random(today, BAD_SEED) % 3 + 2;
  const directionSeed = random(today, DIRECTION_SEED) % Directions.length;
  const rateSeed = random(today, RATE_SEED) % 5 + 1;
  const events = pickRandomItems(today, filteredActivities, goodCount + badCount);
  events.forEach(e => {
    e.name = fillRandom(e.name, Assets, today)
  });
  return {
    todayStr: getTodayStr(today, Assets.Weeks),
    good: events.slice(0, goodCount),
    bad: events.slice(goodCount, goodCount + badCount),
    direction: Directions[directionSeed],
    drink: pickRandomItems(today, Drinks ,2),
    rate: rate(rateSeed)
  }
};

export const init = (date = new Date()): AlmanacResult => {
  return generateAlmanac(ProgrammerEvents as AlmanacEvents, date);
};
