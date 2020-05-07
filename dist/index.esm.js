var ProgrammerEvents = {
    Weeks: ['日', '一', '二', '三', '四', '五', '六'],
    Activities: [
        { name: '写单元测试', good: '写单元测试将减少出错', bad: '写单元测试会降低你的开发效率' },
        { name: '洗澡', good: '你几天没洗澡了？', bad: '会把设计方面的灵感洗掉', weekend: true },
        { name: '锻炼一下身体', good: '是时候舒展下僵硬的肌肉了', bad: '能量没消耗多少，吃得却更多', weekend: true },
        { name: '抽烟', good: '抽烟有利于提神，增加思维敏捷，但吸烟仍然有害健康', bad: '吸烟有害健康', weekend: true },
        { name: '白天上线', good: '今天白天上线是安全的', bad: '可能导致灾难性后果' },
        { name: '重构', good: '代码质量得到提高', bad: '你很有可能会陷入泥潭' },
        { name: '使用%t', good: '你看起来更有品位', bad: '别人会觉得你在装逼' },
        { name: '跳槽', good: '该放手时就放手', bad: '鉴于当前的经济形势，你的下一份工作未必比现在强' },
        { name: '招人', good: '你面前这位有成为牛人的潜质', bad: '这人会写程序吗？' },
        { name: '面试', good: '面试官今天心情很好', bad: '面试官不爽，会拿你出气' },
        { name: '提交辞职申请', good: '公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋', bad: '鉴于当前的经济形势，你的下一份工作未必比现在强' },
        { name: '申请加薪', good: '老板今天心情很好', bad: '公司正在考虑裁员' },
        { name: '晚上加班', good: '晚上是程序员精神最好的时候', bad: '身心憔悴，早点休息', weekend: true },
        { name: '在妹子面前吹牛', good: '改善你矮穷挫的形象', bad: '会被识破', weekend: true },
        { name: '舰娘大型建造', good: '双大武B，点击就送', bad: '金刚四傻，点击就送', weekend: true },
        { name: '写技术文章', good: '新的水文即将诞生', bad: '你的博文会被抄袭', weekend: true },
        { name: '命名变量\"%v\"', good: '变量名萌萌哒', bad: '这个变量永远引用不到' },
        { name: '写超过%l行的方法', good: '你的代码组织的很好，长一点没关系', bad: '你的代码将混乱不堪，你自己都看不懂' },
        { name: '提交代码', good: '遇到冲突的几率是最低的', bad: '你遇到的一大堆冲突会让你觉得自己是不是时间穿越了' },
        { name: '代码复审', good: '发现重要问题的几率大大增加', bad: '你什么问题都发现不了，白白浪费时间' },
        { name: '开会', good: '写代码之余放松一下打个盹，有益健康', bad: '小心被扣屎盆子背黑锅' },
        { name: '打DOTA', good: '你将有如神助', bad: '你会被虐的很惨', weekend: true },
        { name: '晚上上线', good: '晚上是程序员精神最好的时候', bad: '你白天已经筋疲力尽了' },
        { name: '修复BUG', good: '你今天对BUG的嗅觉大大提高', bad: '新产生的BUG将比修复的更多' },
        { name: '设计评审', good: '设计评审会议将变成头脑风暴', bad: '人人筋疲力尽，评审就这么过了' },
        { name: '需求评审', good: '这个需求很简单', bad: '公司需要一个能根据手机外壳变化APP皮肤的功能' },
        { name: '上微博', good: '今天发生的事不能错过', bad: '今天的微博充满负能量', weekend: true },
        { name: '上AB站', good: '还需要理由吗？', bad: '发现弹幕评论都是键盘侠', weekend: true },
        { name: '玩冒险岛Online', good: '砸出二十五星神装', bad: '除非你想把电脑砸了', weekend: true }
    ],
    Specials: [
        { date: '0214', type: 'bad', name: '待在男（女）友身边', description: '脱团火葬场，入团保平安。' }
    ],
    Directions: ['北方', '东北方', '东方', '东南方', '南方', '西南方', '西方', '西北方'],
    Tools: ['Eclipse写程序', 'MSOffice写文档', '记事本写程序', 'Windows98', 'Linux', 'MacOS', 'IE', 'Android设备', 'iOS设备'],
    Variables: ['jieguo', 'huodong', 'pay', 'expire', 'zhangdan', 'every', 'free', 'i1', 'a', 'virtual', 'ad', 'spider', 'mima', 'pass', 'ui'],
    Drinks: ['水', '胡椒博士', '红茶', '绿茶', '咖啡', '奶茶', '可乐', '鲜奶', '豆奶', '果汁', '果味汽水', '苏打水', '运动饮料', '酸奶', '黑松沙士']
};

/**
 * create daySeed based on this prime number: 11117
 * @param today Date
 * @param indexSeed number
 */
var random = function (today, indexSeed) {
    var MOD = 11117;
    var daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    var offset = 100;
    var n = daySeed % MOD;
    for (var i = 0; i < offset + indexSeed; i++) {
        n = n * n % MOD;
    }
    return n;
};
/**
 * get date string
 * @param today
 * @param weeks
 */
var getTodayStr = function (today, weeks) {
    var d = today;
    return "\u4ECA\u5929\u662F" + d.getFullYear() + "\u5E74" + (d.getMonth() + 1) + "\u6708" + d.getDate() + "\u65E5 \u661F\u671F" + weeks[d.getDay()];
};
/**
 * return true if weekend
 * @param today Date
 */
var isWeekend = function (today) { return today.getDay() % 6 === 0; };
/**
 * pick random events from list according to date;
 * @param today Date
 * @param list datasource
 * @param size number of event to pick
 */
var pickRandomItems = function (today, list, size) {
    var picked = list.slice();
    for (var i = 0; i < list.length - size; i++) {
        var RANDOM_SEED = i;
        var index = random(today, RANDOM_SEED) % picked.length;
        picked.splice(index, 1);
    }
    return picked;
};
/**
 * generate rate start ★/☆
 * @param num rate count
 * @param max rate limit
 */
function rate(num, max) {
    if (max === void 0) { max = 5; }
    var stars = '';
    for (var i = 0; i < max; i++) {
        stars += i < num ? '★' : '☆';
    }
    return stars;
}
/**
 * 解析占位符
 * @param str { string }: 带有%v(variable)、%t(develop tool)、%l(lines of code)的文字
 * @param Assets
 * @param date
 */
var fillRandom = function (str, Assets, date) {
    var Tools = Assets.Tools, Variables = Assets.Variables;
    var VARIABLE_SEED = 12;
    var TOOL_SEED = 11;
    var LINE_SEED = 12;
    var VariableSeed = random(date, VARIABLE_SEED) % Variables.length;
    var toolSeed = random(date, TOOL_SEED) % Tools.length;
    var lineSeed = random(date, LINE_SEED) % 247 + 30;
    return str.replace(/(%v|%t|%l)/, function (result) {
        switch (result) {
            case '%v': return Variables[VariableSeed];
            case '%t': return Tools[toolSeed];
            case '%l': return "" + lineSeed;
            default: return result;
        }
    });
};
/**
 * generate today's almanac by custom event.
 * @param Assets events configuration set.
 * @param date @default new Date()
 */
var generateAlmanac = function (Assets, date) {
    if (date === void 0) { date = new Date(); }
    var Activities = Assets.Activities, Directions = Assets.Directions, Drinks = Assets.Drinks, Variables = Assets.Variables, Tools = Assets.Tools;
    var GOOD_SEED = 98;
    var BAD_SEED = 87;
    var DIRECTION_SEED = 2;
    var RATE_SEED = 6;
    var today = new Date(date.getTime());
    var weekend = isWeekend(today);
    var filteredActivities = Activities.filter(function (i) { return !weekend || i.weekend; });
    var goodCount = random(today, GOOD_SEED) % 3 + 2;
    var badCount = random(today, BAD_SEED) % 3 + 2;
    var directionSeed = random(today, DIRECTION_SEED) % Directions.length;
    var rateSeed = random(today, RATE_SEED) % 5 + 1;
    var events = pickRandomItems(today, filteredActivities, goodCount + badCount);
    events.forEach(function (e) {
        e.name = fillRandom(e.name, Assets, today);
    });
    return {
        todayStr: getTodayStr(today, Assets.Weeks),
        good: events.slice(0, goodCount),
        bad: events.slice(goodCount, goodCount + badCount),
        direction: Directions[directionSeed],
        drink: pickRandomItems(today, Drinks, 2),
        rate: rate(rateSeed)
    };
};
var init = function (date) {
    if (date === void 0) { date = new Date(); }
    return generateAlmanac(ProgrammerEvents, date);
};

export { fillRandom, generateAlmanac, getTodayStr, init, isWeekend, pickRandomItems, random, rate };
