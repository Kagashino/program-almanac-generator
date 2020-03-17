import { generateAlmanac, init } from "../dist/index.js"

const getSymbolTag = o => Object.prototype.toString.call(o)

describe("Almanac Event", ()=>{
	test("it should return ", ()=>{
		const result = init()
		expect(typeof result).toBe('object')
		expect(getSymbolTag(result.todayStr)).toBe('[object String]') 
		expect(getSymbolTag(result.good)).toBe('[object Array]') 
		expect(getSymbolTag(result.bad)).toBe('[object Array]') 
		expect(getSymbolTag(result.direction)).toBe('[object String]') 
		expect(getSymbolTag(result.drink)).toBe('[object Array]') 
		expect(getSymbolTag(result.rate)).toBe('[object String]') 
	})

	test("it should return fixed event according to date", ()=>{
		const day_2020_3_17 = new Date('2020/3/17')
		const result = init(day_2020_3_17)
		expect(result).toEqual({
		    "todayStr": "今天是2020年3月17日 星期二",
		    "good": [
		        {
		            "name": "写单元测试",
		            "good": "写单元测试将减少出错",
		            "bad": "写单元测试会降低你的开发效率"
		        },
		        {
		            "name": "洗澡",
		            "good": "你几天没洗澡了？",
		            "bad": "会把设计方面的灵感洗掉",
		            "weekend": true
		        },
		        {
		            "name": "抽烟",
		            "good": "抽烟有利于提神，增加思维敏捷，但吸烟仍然有害健康",
		            "bad": "吸烟有害健康",
		            "weekend": true
		        },
		        {
		            "name": "面试",
		            "good": "面试官今天心情很好",
		            "bad": "面试官不爽，会拿你出气"
		        }
		    ],
		    "bad": [
		        {
		            "name": "提交辞职申请",
		            "good": "公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋",
		            "bad": "鉴于当前的经济形势，你的下一份工作未必比现在强"
		        },
		        {
		            "name": "提交代码",
		            "good": "遇到冲突的几率是最低的",
		            "bad": "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了"
		        },
		        {
		            "name": "开会",
		            "good": "写代码之余放松一下打个盹，有益健康",
		            "bad": "小心被扣屎盆子背黑锅"
		        },
		        {
		            "name": "需求评审",
		            "good": "这个需求很简单",
		            "bad": "公司需要一个能根据手机外壳变化APP皮肤的功能"
		        }
		    ],
		    "direction": "西南方",
		    "drink": [
		        "可乐",
		        "苏打水"
		    ],
		    "rate": "★☆☆☆☆"
		})
	})
})