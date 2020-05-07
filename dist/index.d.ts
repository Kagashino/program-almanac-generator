export declare type AlmanacActivity = {
    name: string;
    good: string;
    bad: string;
    weekend?: boolean;
};
export declare type AlmanacEvents = {
    Weeks: Array<string>;
    Activities: Array<AlmanacActivity>;
    Specials?: Array<{
        date: string;
        type: string;
        name: string;
        description: string;
    }>;
    Directions: Array<string>;
    Tools: Array<string>;
    Variables: Array<string>;
    Drinks: Array<string>;
};
export declare type AlmanacResult = {
    todayStr: string;
    good: Array<AlmanacActivity>;
    bad: Array<AlmanacActivity>;
    direction: string;
    drink: string[];
    rate: string;
};
/**
 * create daySeed based on this prime number: 11117
 * @param today Date
 * @param indexSeed number
 */
export declare const random: (today: Date, indexSeed: number) => number;
/**
 * get date string
 * @param today
 * @param weeks
 */
export declare const getTodayStr: (today: Date, weeks: string[]) => string;
/**
 * return true if weekend
 * @param today Date
 */
export declare const isWeekend: (today: Date) => boolean;
/**
 * pick random events from list according to date;
 * @param today Date
 * @param list datasource
 * @param size number of event to pick
 */
export declare const pickRandomItems: (today: Date, list: any[], size: number) => any[];
/**
 * generate rate start ★/☆
 * @param num rate count
 * @param max rate limit
 */
export declare function rate(num: number, max?: number): string;
/**
 * 解析占位符
 * @param str { string }: 带有%v(variable)、%t(develop tool)、%l(lines of code)的文字
 * @param Assets
 * @param date
 */
export declare const fillRandom: (str: string, Assets: AlmanacEvents, date: Date) => string;
/**
 * generate today's almanac by custom event.
 * @param Assets events configuration set.
 * @param date @default new Date()
 */
export declare const generateAlmanac: (Assets: AlmanacEvents, date?: Date) => AlmanacResult;
export declare const init: (date?: Date) => AlmanacResult;
