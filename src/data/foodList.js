const rawFoodList = [
    {
      name: "牛肉麵",
      style: "中式",
      type: ["麵", "湯的"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主", "熱食"]
    },
    {
      name: "炒飯",
      style: "中式",
      type: ["飯類"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便", "快速吃"]
    },
    {
      name: "壽司",
      style: "日式",
      type: ["飯類", "冷食"],
      price: "中價",
      flavor: "清淡",
      preference: ["外帶方便", "連鎖店"]
    },
    {
      name: "燒肉",
      style: "日式",
      type: ["燒烤", "肉類"],
      price: "高價",
      flavor: "重口味",
      preference: ["內用為主", "多人共享"]
    },
    {
      name: "拉麵",
      style: "日式",
      type: ["麵", "湯的"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主", "熱食"]
    },
    {
      name: "雞排",
      style: "台式",
      type: ["炸物"],
      price: "平價",
      flavor: "重口味",
      preference: ["外帶方便", "夜市"]
    },
    {
      name: "義大利麵",
      style: "西式",
      type: ["麵", "醬汁類"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "燉飯",
      style: "西式",
      type: ["飯類", "醬汁類"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "滷味",
      style: "台式",
      type: ["湯的", "滷製"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便", "夜市"]
    },
    {
      name: "韓式拌飯",
      style: "韓式",
      type: ["飯類", "拌飯"],
      price: "中價",
      flavor: "中等",
      preference: ["外帶方便", "連鎖店"]
    },
    {
      name: "蚵仔煎",
      style: "台式",
      type: ["煎類", "海鮮"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "熱食"]
    },
    {
      name: "牛排",
      style: "西式",
      type: ["肉類", "排餐"],
      price: "高價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "便當",
      style: "台式",
      type: ["飯類", "盒餐"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "水餃",
      style: "中式",
      type: ["麵", "煮類"],
      price: "平價",
      flavor: "清淡",
      preference: ["快速吃"]
    },
    {
      name: "小火鍋",
      style: "中式",
      type: ["湯的", "鍋物"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "壽喜燒",
      style: "日式",
      type: ["鍋物", "肉類"],
      price: "高價",
      flavor: "重口味",
      preference: ["內用為主", "多人共享"]
    },
    {
      name: "蛋包飯",
      style: "日式",
      type: ["飯類", "蛋類"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "炒麵",
      style: "中式",
      type: ["麵"],
      price: "平價",
      flavor: "重口味",
      preference: ["外帶方便"]
    },
    {
      name: "泰式打拋豬",
      style: "泰式",
      type: ["飯類", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "越南河粉",
      style: "越式",
      type: ["湯的", "麵"],
      price: "中價",
      flavor: "清淡",
      preference: ["內用為主"]
    },
    {
      name: "炒河粉",
      style: "越式",
      type: ["麵", "炒類"],
      price: "中價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "咖哩飯",
      style: "日式",
      type: ["飯類", "醬汁類"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "三明治",
      style: "西式",
      type: ["麵包", "冷食"],
      price: "平價",
      flavor: "清淡",
      preference: ["外帶方便"]
    },
    {
      name: "潛艇堡",
      style: "西式",
      type: ["麵包", "肉類"],
      price: "中價",
      flavor: "中等",
      preference: ["連鎖店", "外帶方便"]
    },
    {
      name: "焗烤飯",
      style: "西式",
      type: ["飯類", "焗烤"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "涼麵",
      style: "台式",
      type: ["冷食", "麵"],
      price: "平價",
      flavor: "清淡",
      preference: ["外帶方便"]
    },
    {
      name: "燒臘飯",
      style: "港式",
      type: ["飯類", "燒烤"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "蛋餅",
      style: "台式",
      type: ["早餐", "蛋類"],
      price: "平價",
      flavor: "中等",
      preference: ["早午餐", "外帶方便"]
    },
    {
      name: "義大利燉菜",
      style: "西式",
      type: ["蔬菜", "燉菜"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "港式飲茶",
      style: "港式",
      type: ["點心", "多樣選擇"],
      price: "高價",
      flavor: "中等",
      preference: ["多人共享"]
    },
    {
      name: "鹽水雞",
      style: "台式",
      type: ["涼拌", "肉類"],
      price: "平價",
      flavor: "清淡",
      preference: ["夜市", "外帶方便"]
    },
    {
      name: "蔥油餅",
      style: "台式",
      type: ["煎類", "餅類"],
      price: "平價",
      flavor: "中等",
      preference: ["路邊攤", "快速吃"]
    },
    {
      name: "關東煮",
      style: "日式",
      type: ["湯的", "多樣選擇"],
      price: "平價",
      flavor: "清淡",
      preference: ["超商", "連鎖店"]
    },
    {
      name: "麻辣燙",
      style: "中式",
      type: ["湯的", "麻辣"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主", "熱食"]
    },
    {
      name: "炒烏龍麵",
      style: "日式",
      type: ["麵", "炒類"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "湯包",
      style: "中式",
      type: ["點心", "湯的"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主", "熱食"]
    },
    {
      name: "章魚燒",
      style: "日式",
      type: ["點心", "海鮮"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "快速吃"]
    },
    {
      name: "豬血糕",
      style: "台式",
      type: ["點心", "滷製"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "外帶方便"]
    },
    {
      name: "燒餅油條",
      style: "中式",
      type: ["早餐", "麵點"],
      price: "平價",
      flavor: "中等",
      preference: ["早午餐", "內用為主"]
    },
    {
      name: "天婦羅定食",
      style: "日式",
      type: ["炸物", "定食"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "綠咖哩雞",
      style: "泰式",
      type: ["飯類", "咖哩"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "生魚片蓋飯",
      style: "日式",
      type: ["飯類", "冷食"],
      price: "高價",
      flavor: "清淡",
      preference: ["內用為主"]
    },
    {
      name: "雞絲麵",
      style: "中式",
      type: ["湯的", "麵"],
      price: "平價",
      flavor: "清淡",
      preference: ["快速吃"]
    },
    {
      name: "燴飯",
      style: "中式",
      type: ["飯類", "醬汁類"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "胡椒餅",
      style: "台式",
      type: ["烘焙", "肉類"],
      price: "平價",
      flavor: "重口味",
      preference: ["夜市", "快速吃"]
    },
    {
      name: "炒米粉",
      style: "台式",
      type: ["麵", "炒類"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "香腸飯",
      style: "台式",
      type: ["飯類", "肉類"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便", "快速吃"]
    },
    {
      name: "海南雞飯",
      style: "星馬料理",
      type: ["飯類", "雞肉"],
      price: "中價",
      flavor: "清淡",
      preference: ["連鎖店", "內用為主"]
    },
    {
      name: "墨西哥捲餅",
      style: "異國料理",
      type: ["麵餅", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["外帶方便"]
    },
    {
      name: "蒸餃",
      style: "中式",
      type: ["點心", "麵點"],
      price: "平價",
      flavor: "中等",
      preference: ["連鎖店", "內用為主"]
    },
    {
      name: "滷肉飯",
      style: "台式",
      type: ["飯類", "滷製"],
      price: "平價",
      flavor: "濃郁",
      preference: ["外帶方便", "快速吃"]
    },
    {
      name: "蔥抓餅",
      style: "台式",
      type: ["煎類", "餅類"],
      price: "平價",
      flavor: "中等",
      preference: ["路邊攤", "夜市"]
    },
    {
      name: "咖哩烏龍麵",
      style: "日式",
      type: ["麵", "湯的"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "炒青菜",
      style: "中式",
      type: ["蔬菜", "炒類"],
      price: "平價",
      flavor: "清淡",
      preference: ["搭配主食"]
    },
    {
      name: "韓式炸雞",
      style: "韓式",
      type: ["炸物", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["外帶方便", "多人共享"]
    },
    {
      name: "雞腿便當",
      style: "台式",
      type: ["飯類", "盒餐"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "印度烤餅",
      style: "異國料理",
      type: ["烤餅", "蔬菜"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "韓式石鍋拌飯",
      style: "韓式",
      type: ["飯類", "拌飯"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "越式法國麵包",
      style: "越式",
      type: ["麵包", "肉類"],
      price: "中價",
      flavor: "清淡",
      preference: ["外帶方便"]
    },
    {
      name: "粥品",
      style: "中式",
      type: ["湯的", "飯類"],
      price: "平價",
      flavor: "清淡",
      preference: ["早餐", "內用為主"]
    },
    {
      name: "湯圓",
      style: "中式",
      type: ["甜點", "湯的"],
      price: "平價",
      flavor: "中等",
      preference: ["熱食", "小吃"]
    },
    {
      name: "起司牛肉堡",
      style: "美式",
      type: ["漢堡", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["連鎖店", "外帶方便"]
    },
    {
      name: "酸辣湯",
      style: "中式",
      type: ["湯的", "開胃"],
      price: "平價",
      flavor: "重口味",
      preference: ["搭配主食"]
    },
    {
      name: "蘿蔔糕",
      style: "台式",
      type: ["煎類", "早餐"],
      price: "平價",
      flavor: "中等",
      preference: ["早午餐", "外帶方便"]
    },
    {
      name: "酥皮濃湯",
      style: "西式",
      type: ["湯的", "烘焙"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "綜合水果盤",
      style: "台式",
      type: ["水果", "冷食"],
      price: "平價",
      flavor: "清淡",
      preference: ["餐後甜點"]
    },
    {
      name: "墨西哥玉米脆片",
      style: "異國料理",
      type: ["炸物", "點心"],
      price: "中價",
      flavor: "重口味",
      preference: ["多人共享"]
    },
    {
      name: "鹹酥雞便當",
      style: "台式",
      type: ["炸物", "飯類"],
      price: "平價",
      flavor: "重口味",
      preference: ["外帶方便", "快速吃"]
    },{
      name: "鴨肉飯",
      style: "台式",
      type: ["飯類", "肉類"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "涼拌米粉",
      style: "台式",
      type: ["米粉", "冷食"],
      price: "平價",
      flavor: "清淡",
      preference: ["快速吃"]
    },
    {
      name: "熱壓吐司",
      style: "西式",
      type: ["麵包", "早餐"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "炒泡麵",
      style: "台式",
      type: ["麵", "炒類"],
      price: "平價",
      flavor: "重口味",
      preference: ["夜市"]
    },
    {
      name: "炸豆腐",
      style: "台式",
      type: ["炸物", "豆製品"],
      price: "平價",
      flavor: "中等",
      preference: ["小吃", "熱食"]
    },
    {
      name: "泰式綠咖哩雞",
      style: "泰式",
      type: ["飯類", "咖哩"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "漢堡排定食",
      style: "日式",
      type: ["肉類", "定食"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "章魚燒",
      style: "日式",
      type: ["點心", "海鮮"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "快速吃"]
    },
    {
      name: "韓式豆腐鍋",
      style: "韓式",
      type: ["湯的", "鍋物"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "豆漿油條",
      style: "中式",
      type: ["早餐", "炸物"],
      price: "平價",
      flavor: "中等",
      preference: ["早午餐", "快速吃"]
    },
    {
      name: "滷雞腿便當",
      style: "台式",
      type: ["飯類", "滷製"],
      price: "平價",
      flavor: "濃郁",
      preference: ["外帶方便"]
    },
    {
      name: "炒烏龍麵",
      style: "日式",
      type: ["麵", "炒類"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "照燒雞排丼",
      style: "日式",
      type: ["飯類", "肉類"],
      price: "中價",
      flavor: "中等",
      preference: ["連鎖店", "快速吃"]
    },
    {
      name: "海南雞飯",
      style: "東南亞",
      type: ["飯類", "蒸煮"],
      price: "中價",
      flavor: "清淡",
      preference: ["外帶方便"]
    },
    {
      name: "沙茶羊肉",
      style: "台式",
      type: ["肉類", "炒類"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "四神湯",
      style: "中式",
      type: ["湯的", "藥膳"],
      price: "平價",
      flavor: "中等",
      preference: ["熱食"]
    },
    {
      name: "關東煮",
      style: "日式",
      type: ["湯的", "多樣選擇"],
      price: "平價",
      flavor: "清淡",
      preference: ["便利商店", "外帶方便"]
    },
    {
      name: "美式炸雞桶",
      style: "美式",
      type: ["炸物", "肉類"],
      price: "高價",
      flavor: "重口味",
      preference: ["多人共享", "連鎖店"]
    },
    {
      name: "花雕雞麵",
      style: "中式",
      type: ["湯的", "麵"],
      price: "中價",
      flavor: "濃郁",
      preference: ["內用為主"]
    },
    {
      name: "肉圓",
      style: "台式",
      type: ["炸物", "點心"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "外帶方便"]
    },
    {
      name: "香菇雞湯",
      style: "中式",
      type: ["湯的", "藥膳"],
      price: "中價",
      flavor: "清淡",
      preference: ["熱食", "內用為主"]
    },
    {
      name: "蔥抓餅",
      style: "台式",
      type: ["煎類", "點心"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便", "快速吃"]
    },
    {
      name: "燒餅油條",
      style: "中式",
      type: ["早餐", "麵食"],
      price: "平價",
      flavor: "中等",
      preference: ["早午餐", "外帶方便"]
    },
    {
      name: "廣東炒麵",
      style: "港式",
      type: ["麵", "炒類"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "豬血湯",
      style: "台式",
      type: ["湯的", "小吃"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "快速吃"]
    },
    {
      name: "鍋燒意麵",
      style: "台式",
      type: ["湯的", "麵"],
      price: "中價",
      flavor: "中等",
      preference: ["熱食", "內用為主"]
    },
    {
      name: "炸醬麵",
      style: "中式",
      type: ["麵", "乾拌"],
      price: "平價",
      flavor: "中等",
      preference: ["外帶方便"]
    },
    {
      name: "韓式炸雞",
      style: "韓式",
      type: ["炸物", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["多人共享", "熱食"]
    },
    {
      name: "沙威瑪",
      style: "中東",
      type: ["肉類", "夾餅"],
      price: "平價",
      flavor: "重口味",
      preference: ["外帶方便", "夜市"]
    },
    {
      name: "燙青菜",
      style: "台式",
      type: ["蔬菜", "熱食"],
      price: "平價",
      flavor: "清淡",
      preference: ["小吃", "內用為主"]
    },
    {
      name: "香酥雞腿",
      style: "台式",
      type: ["炸物", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["便當", "外帶方便"]
    },
    {
      name: "海鮮粥",
      style: "台式",
      type: ["粥品", "海鮮"],
      price: "中價",
      flavor: "中等",
      preference: ["熱食", "內用為主"]
    },
    {
      name: "羊肉燴飯",
      style: "中式",
      type: ["飯類", "肉類"],
      price: "中價",
      flavor: "重口味",
      preference: ["內用為主"]
    },
    {
      name: "蔬菜咖哩",
      style: "日式",
      type: ["飯類", "醬汁類"],
      price: "中價",
      flavor: "清淡",
      preference: ["內用為主", "素食"]
    },
    {
      name: "印度烤餅",
      style: "印度",
      type: ["麵食", "烤類"],
      price: "中價",
      flavor: "中等",
      preference: ["多人共享"]
    },
    {
      name: "馬鈴薯燉肉",
      style: "日式",
      type: ["肉類", "燉菜"],
      price: "中價",
      flavor: "中等",
      preference: ["內用為主"]
    },
    {
      name: "韓式冷麵",
      style: "韓式",
      type: ["麵", "冷食"],
      price: "中價",
      flavor: "清淡",
      preference: ["內用為主"]
    },
    {
      name: "地瓜球",
      style: "台式",
      type: ["炸物", "點心"],
      price: "平價",
      flavor: "中等",
      preference: ["夜市", "快速吃"]
    },
    {
      name: "關東雞肉串",
      style: "日式",
      type: ["烤類", "肉類"],
      price: "平價",
      flavor: "重口味",
      preference: ["小吃", "外帶方便"]
    }
    ]

const seen = new Set()
const foodList = rawFoodList.filter(item => {
  if (seen.has(item.name)) return false
  seen.add(item.name)
  return true
})

   
    
  
export default foodList
  