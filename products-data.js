/**
 * 聚源斋古典家具 - 产品数据库
 * 图片命名规范：images/products/JYZ_ [id].png (注意下划线后的空格)
 */

const productsData = [
    {
        id: "1",
        name: "实木架子",
        nameEn: "Solid Wood Shelf",
        category: "cabinet",
        categoryZh: "柜架类",
        size: "115 * 40 * 220 CM",
        material: "松木",
        craft: "传统榫卯 / 手工打磨",
        space: "茶室、展厅、民宿、公区、商业空间",
        stock: "请咨询",
        customizable: "支持定制",
        style: "中式古典 / 自然风",
        tags: ["架子", "松木", "展示", "收纳"],
        relatedCategories: ["table", "chair", "small"],
        image: "images/products/JYZ_ 1.png",
        description: "这款架子采用松木制作，造型朴素实用，适合用于书籍、器物、茶器或装饰品陈列，增强空间层次与木质氛围。"
    },
    {
        id: "2",
        name: "榆木二屉桌",
        nameEn: "Elm Two-Drawer Table",
        category: "table",
        categoryZh: "桌案类",
        size: "103 * 47 * 83 CM",
        material: "榆木",
        craft: "传统榫卯",
        space: "茶室、餐厅、书房、民宿公区",
        stock: "请咨询",
        customizable: "支持定制",
        image: "images/products/JYZ_ 2.png",
        description: "稳重实用的二屉桌，保留材质自然纹理，结合传统榫卯工艺，可作为日常使用与空间陈列的核心家具。"
    },
    {
        id: "3",
        name: "榆木二屉桌 (矮款)",
        category: "table",
        categoryZh: "桌案类",
        size: "103 * 47 * 82 CM",
        material: "榆木",
        image: "images/products/JYZ_ 3.png",
        description: "老榆木材质，经典二屉设计，尺寸比例协调，适配多种居家与商业场景。"
    },
    {
        id: "4",
        name: "中式榆木二屉桌",
        category: "table",
        categoryZh: "桌案类",
        size: "110 * 45 * 84 CM",
        material: "榆木",
        image: "images/products/JYZ_ 4.png",
        description: "造型沉稳，线条流畅，充分展现老榆木的温润质感。"
    },
    {
        id: "5",
        name: "榆木三屉桌",
        category: "table",
        categoryZh: "桌案类",
        size: "103 * 48 * 79 CM",
        material: "榆木",
        image: "images/products/JYZ_ 5.png",
        description: "增加了抽屉数量，提供更多收纳可能，榆木全实木制作，坚固耐用。"
    },
    {
        id: "6",
        name: "老榆木二屉桌",
        category: "table",
        categoryZh: "桌案类",
        size: "113 * 47 * 84 CM",
        material: "榆木",
        image: "images/products/JYZ_ 6.png",
        description: "经典中式书桌，榫卯结构精严，适合作为茶桌或工作台。"
    },
    {
        id: "7",
        name: "榆木高脚二屉桌",
        category: "table",
        categoryZh: "桌案类",
        size: "109 * 48 * 93 CM",
        material: "榆木",
        image: "images/products/JYZ_ 7.png",
        description: "较高的尺寸设计，适合作为玄关案台或靠墙景桌展示器物。"
    },
    {
        id: "8",
        name: "窄款二屉桌",
        category: "table",
        categoryZh: "桌案类",
        size: "99 * 48 * 85 CM",
        material: "榆木",
        image: "images/products/JYZ_ 8.png",
        description: "小巧精致，适配窄空间或玄关走廊。"
    },
    {
        id: "9",
        name: "四屉四门柜",
        nameEn: "Four-Door Storage Cabinet",
        category: "cabinet",
        categoryZh: "柜架类",
        size: "150 * 43 * 90 CM",
        material: "松木",
        image: "images/products/JYZ_ 9.png",
        description: "兼具收纳、展示与空间装饰功能。整体比例沉稳，适合客厅、玄关、茶室使用。"
    },
    {
        id: "10",
        name: "七屉大案桌",
        category: "table",
        categoryZh: "桌案类",
        size: "199 * 48 * 87 CM",
        material: "榆木",
        image: "images/products/JYZ_ 10.png",
        description: "近两米长的超大案桌，七个抽屉提供极大的收纳灵活性，是空间的主位担当。"
    },
    {
        id: "11",
        name: "一屉边桌",
        category: "table",
        categoryZh: "桌案类",
        size: "70 * 38 * 51 CM",
        material: "松木",
        image: "images/products/JYZ_ 11.png",
        description: "紧凑型一屉设计，适合作为床头边几或休闲空间的小茶几。"
    },
    {
        id: "12",
        name: "榆木椅子",
        category: "chair",
        categoryZh: "椅凳类",
        size: "55 * 33 * 90 CM",
        material: "榆木",
        image: "images/products/JYZ_ 12.png",
        description: "结构简洁稳固，适合茶室、餐厅、民宿使用，提供舒适的坐感。"
    },
    {
        id: "13",
        name: "实木老方凳",
        category: "chair",
        categoryZh: "椅凳类",
        size: "41 * 27 * 50 CM",
        material: "榆木",
        image: "images/products/JYZ_ 13.png",
        description: "传统方凳造型，结实便携，极具中式民俗风情。"
    },
    {
        id: "14",
        name: "装饰木墩",
        category: "small",
        categoryZh: "小件摆设",
        size: "24 * 24 * 50 CM",
        material: "榆木",
        image: "images/products/JYZ_ 14.png",
        description: "保留了树木的自然形态，可作为创意边几、凳子或艺术陈列台。"
    },
    {
        id: "15",
        name: "两门小柜",
        category: "cabinet",
        categoryZh: "柜架类",
        size: "75 * 40 * 85 CM",
        material: "松木",
        image: "images/products/JYZ_ 15.png",
        description: "精致的松木小柜，适合存放茶具或生活琐物。"
    },
    {
        id: "16",
        name: "手作大舵轮",
        category: "small",
        categoryZh: "小件摆设",
        size: "100 * 6 CM",
        material: "果木",
        image: "images/products/JYZ_ 16.png",
        description: "果木制大舵轮，极具设计干，适合作为墙面装饰或风格化陈置。"
    },
    {
        id: "17",
        name: "装饰小舵轮",
        category: "small",
        categoryZh: "小件摆设",
        size: "58 * 5 CM",
        material: "果木",
        image: "images/products/JYZ_ 17.png",
        description: "精美的小型舵轮装饰，适配书房、过道点缀。"
    },
    {
        id: "18",
        name: "双排大型架子",
        category: "cabinet",
        categoryZh: "柜架类",
        size: "120 * 30 * 200 CM",
        material: "松木",
        image: "images/products/JYZ_ 18.png",
        description: "双排设计，提供极大的展示面积，造型朴素而不失大气。"
    },
    {
        id: "19",
        name: "车轮改造圆凳",
        category: "chair",
        categoryZh: "椅凳类",
        size: "54 * 50 * 50 CM",
        material: "榆木",
        image: "images/products/JYZ_ 19.png",
        description: "利用旧车轮元素进行再设计，是旧木作品中的代表作。"
    },
    {
        id: "20",
        name: "短款老木凳",
        category: "chair",
        categoryZh: "椅凳类",
        size: "90 * 34 * 50 CM",
        material: "松木",
        image: "images/products/JYZ_ 20.png",
        description: "老木新做，保留了木材的岁月痕迹，稳重厚实。"
    },
    {
        id: "21",
        name: "长款老木凳",
        category: "chair",
        categoryZh: "椅凳类",
        size: "139 * 35 * 50 CM",
        material: "松木",
        image: "images/products/JYZ_ 21.png",
        description: "超长尺寸的老木凳，适合民宿公区或茶室长桌配套。"
    },
    {
        id: "22",
        name: "实木琴桌",
        category: "table",
        categoryZh: "桌案类",
        size: "158 * 70 * 50 CM",
        material: "榆木",
        image: "images/products/JYZ_ 22.png",
        description: "专门为抚琴或和风空间设计的低矮桌案，面板宽大。"
    },
    {
        id: "23",
        name: "蓝灰漆二屉桌",
        category: "table",
        categoryZh: "桌案类",
        size: "108 * 48 * 81 CM",
        material: "榆木",
        image: "images/products/JYZ_ 23.png",
        description: "特别的蓝灰色漆面处理，将古典造型与现代色彩审美结合。"
    },
    {
        id: "24",
        name: "随形小桌",
        category: "table",
        categoryZh: "桌案类",
        size: "80 * 37 * 47 CM",
        material: "榆木",
        image: "images/products/JYZ_ 24.png",
        description: "随形设计的精巧小桌，每一件的边缘曲线都独一无二。"
    },
    {
        id: "25",
        name: "带轮收纳架",
        category: "cabinet",
        categoryZh: "柜架类",
        size: "94 * 46 * 92 CM",
        material: "松木",
        image: "images/products/JYZ_ 25.png",
        description: "底部带有万向轮，移动方便，适合多种功能空间切换使用。"
    },
    {
        id: "26",
        name: "中式高凳",
        category: "chair",
        categoryZh: "椅凳类",
        size: "82 * 60 * 160 CM",
        material: "松木",
        image: "images/products/JYZ_ 26.png",
        description: "极具高度张力的凳子设计，可作为特定场景的陈列辅助。"
    },
    {
        id: "27",
        name: "民俗风柳木椅",
        category: "chair",
        categoryZh: "椅凳类",
        size: "38 * 26 * 67 CM",
        material: "柳木",
        image: "images/products/JYZ_ 27.png",
        description: "柳木编织感与实木框架结合，展现浓郁的乡村风情。"
    },
    {
        id: "28",
        name: "榆木小椅子",
        category: "chair",
        categoryZh: "椅凳类",
        size: "28 * 30 * 56 CM",
        material: "榆木",
        image: "images/products/JYZ_ 28.png",
        description: "迷你款榆木椅，既是儿童坐具，也是极佳的装饰小件。"
    },
    {
        id: "29",
        name: "柏木木桶盆",
        category: "small",
        categoryZh: "小件摆设",
        size: "31 * 20 CM",
        material: "柏木",
        image: "images/products/JYZ_ 29.png",
        description: "自然的柏木香气，传统箍桶工艺，为您带来自然回归感。"
    },
    {
        id: "30",
        name: "黑瓷坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "21 * 22 CM",
        material: "瓷",
        image: "images/products/JYZ_ 30.png",
        description: "质朴黑釉瓷坛，插花或干放皆能体现枯淡氛围。"
    },
    {
        id: "31",
        name: "粗瓷黑坛 (大)",
        category: "small",
        categoryZh: "小件摆设",
        size: "29 * 27 CM",
        material: "瓷",
        image: "images/products/JYZ_ 31.png",
        description: "更大规格的黑瓷坛，器形更加饱满稳重。"
    },
    {
        id: "32",
        name: "带鼻两色坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "22 * 30 CM",
        material: "瓷",
        image: "images/products/JYZ_ 32.png",
        description: "带有耳鼻装饰，双色釉面过渡平滑，具有民间艺术特色。"
    },
    {
        id: "33",
        name: "带鼻老陶罐",
        category: "small",
        categoryZh: "小件摆设",
        size: "23 * 30 CM",
        material: "陶",
        image: "images/products/JYZ_ 33.png",
        description: "陶土质感呼吸感强，为空间增添一份质朴的重感。"
    },
    {
        id: "34",
        name: "复古半身坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "22 * 30 CM",
        material: "陶",
        image: "images/products/JYZ_ 34.png",
        description: "老陶坛子，器面带有天然的使用痕迹与风化感。"
    },
    {
        id: "35",
        name: "老坛摆件",
        category: "small",
        categoryZh: "小件摆设",
        size: "24 * 38 CM",
        material: "陶",
        image: "images/products/JYZ_ 35.png",
        description: "修长的坛身设计，是极佳的落地装饰。"
    },
    {
        id: "36",
        name: "带麻绳玻璃球",
        category: "small",
        categoryZh: "小件摆设",
        size: "30 * 30 CM",
        material: "玻璃",
        image: "images/products/JYZ_ 36.png",
        description: "剔透的玻璃与粗朴的麻绳形成鲜明对比，具有工业与海洋风情。"
    },
    {
        id: "37",
        name: "装饰玻璃球",
        category: "small",
        categoryZh: "小件摆设",
        size: "30 * 30 CM",
        material: "玻璃",
        image: "images/products/JYZ_ 37.png",
        description: "大尺寸绿色玻璃球，光影下极富通透层次感。"
    },
    {
        id: "38",
        name: "袖珍黑瓷坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "10 * 13 CM",
        material: "瓷",
        image: "images/products/JYZ_ 38.png",
        description: "精巧的掌案小件，适合博古架或案头摆放。"
    },
    {
        id: "39",
        name: "带四鼻陶罐",
        category: "small",
        categoryZh: "小件摆设",
        size: "25 * 20 CM",
        material: "陶",
        image: "images/products/JYZ_ 39.png",
        description: "经典民俗陶艺，四鼻设计具有极强的传统气息。"
    },
    {
        id: "40",
        name: "平底饰陶坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "23 * 23 CM",
        material: "陶",
        image: "images/products/JYZ_ 40.png",
        description: "矮壮厚实的体量感，陶土原色展现自然大地气息。"
    },
    {
        id: "41",
        name: "白漆老坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "20 * 20 CM",
        material: "瓷",
        image: "images/products/JYZ_ 41.png",
        description: "特别的白漆装饰效果，在古典器形中融入现代艺术表达。"
    },
    {
        id: "42",
        name: "粗陶花盆",
        category: "small",
        categoryZh: "小件摆设",
        size: "25 * 40 CM",
        material: "陶",
        image: "images/products/JYZ_ 42.png",
        description: "适合种植大型盆栽，透气性好，质感厚重。"
    },
    {
        id: "43",
        name: "黑瓷储物坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "28 * 30 CM",
        material: "瓷",
        image: "images/products/JYZ_ 43.png",
        description: "釉面光亮，器型匀称，具有实用与观赏双重价值。"
    },
    {
        id: "44",
        name: "小嘴名酒坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "37 * 42 CM",
        material: "瓷",
        image: "images/products/JYZ_ 44.png",
        description: "经典的酒坛造型，可作为空间的大型视觉点缀。"
    },
    {
        id: "45",
        name: "老绿釉坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "23 * 31 CM",
        material: "瓷",
        image: "images/products/JYZ_ 45.png",
        description: "复古绿釉面，色彩沉稳而不失生机。"
    },
    {
        id: "46",
        name: "白釉老坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "23 * 31 CM",
        material: "瓷",
        image: "images/products/JYZ_ 46.png",
        description: "清雅的白瓷釉色，在光照下富有细腻的质感。"
    },
    {
        id: "47",
        name: "灰泥饰坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "16 * 30 CM",
        material: "瓷",
        image: "images/products/JYZ_ 47.png",
        description: "低饱和度的色彩，适配极简风格或现代中式空间。"
    },
    {
        id: "48",
        name: "极大型黑瓷坛",
        category: "small",
        categoryZh: "小件摆设",
        size: "60 * 80 CM",
        material: "瓷",
        image: "images/products/JYZ_ 48.png",
        description: "极大的视觉体量，适合商铺、会所或大型客厅的视觉焦点。"
    },
    {
        id: "49",
        name: "白边大型瓷缸",
        category: "small",
        categoryZh: "小件摆设",
        size: "54 * 92 CM",
        material: "瓷",
        image: "images/products/JYZ_ 49.png",
        description: "器口带有白边修饰，造型极具艺术震撼力。"
    },
    {
        id: "50",
        name: "手作转模子",
        category: "small",
        categoryZh: "小件摆设",
        size: "63 * 15 * 8 CM",
        material: "榆木",
        image: "images/products/JYZ_ 50.png",
        description: "老木民俗构件，保留了原始的使用纹路，是挂墙装饰的首选。"
    },
    {
        id: "51",
        name: "中式小茶碗",
        category: "small",
        categoryZh: "小件摆设",
        size: "14.5 * 6 CM",
        material: "瓷",
        image: "images/products/JYZ_ 51.png",
        description: "简单的手作瓷碗，为您还原生活本真的温度。"
    },
    {
        id: "52",
        name: "竹编收纳簸箕",
        category: "small",
        categoryZh: "小件摆设",
        size: "46 * 40 * 40 CM",
        material: "竹编",
        image: "images/products/JYZ_ 52.png",
        description: "纯手工竹编，具有良好的通风透气性，实用且富有乡野雅趣。"
    },
    {
        id: "53",
        name: "桐木制小木佛",
        category: "small",
        categoryZh: "小件摆设",
        size: "16 * 8 * 24 CM",
        material: "桐木",
        image: "images/products/JYZ_ 53.png",
        description: "由老师傅手工打磨的木佛像，桐木轻且稳定，神态柔和。"
    },
    {
        id: "54",
        name: "风化老石槽",
        category: "small",
        categoryZh: "小件摆设",
        size: "40 * 26 * 18 CM",
        material: "石头",
        image: "images/products/JYZ_ 54.png",
        description: "沉睡岁月的石槽，适合造景、蓄水或盆栽收藏。"
    }
];

// 为缺失属性的产品自动补全默认值
productsData.forEach(p => {
    if (!p.craft) p.craft = "手工制作 / 传统工艺";
    if (!p.space) p.space = "茶室、民宿、商业、住宅";
    if (!p.stock) p.stock = "现货咨询 / 预约定制";
    if (!p.customizable) p.customizable = "支持定制";
    if (!p.style) p.style = "中式古典 / 民俗风情";
    if (!p.tags) p.tags = [p.name, p.material, p.categoryZh];
    if (!p.relatedCategories) {
        const catMap = {
            'table': ["chair", "cabinet", "small"],
            'chair': ["table", "cabinet", "small"],
            'cabinet': ["table", "chair", "small"],
            'small': ["table", "cabinet", "chair"]
        };
        p.relatedCategories = catMap[p.category] || ["table", "chair"];
    }
});

if (typeof window !== 'undefined') {
    window.productsData = productsData;
}
