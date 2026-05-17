/**
 * 聚源斋古典家具 - 全站交互脚本 (含多语言支持)
 */

const translations = {
    zh: {
        title: {
            index: "聚源斋古典家具 | 实木家具定制与批发",
            about: "关于我们 | 聚源斋古典家具",
            products: "产品中心 | 聚源斋古典家具",
            productDetail: "老榆木长桌 | 聚源斋古典家具产品详情",
            custom: "定制服务 | 聚源斋古典家具",
            craft: "材料与工艺 | 聚源斋古典家具",
            contact: "联系我们 | 聚源斋古典家具",
            cases: "案例展示 | 聚源斋古典家具",
            caseFurniture: "家具定制案例 | 聚源斋古典家具",
            caseRenovation: "装修与空间配套案例 | 聚源斋古典家具"
        },
        nav: {
            home: "首页",
            about: "关于我们",
            products: "产品中心",
            cases: "案例展示",
            custom: "定制服务",
            process: "定制流程",
            materials: "材料与工艺",
            contact: "联系我们"
        },
        hero: {
            title: "聚源斋古典家具",
            subtitle: "Juyuanzhai Classical Furniture",
            desc: "聚源斋古典家具专注老榆木、松木等天然实木家具，融合中式传统榫卯结构与现代空间审美，为住宅、民宿、茶室、展厅及商业空间提供家具选购、定制与批发服务。",
            viewBtn: "查看产品",
            customBtn: "咨询定制"
        },
        home: {
            casesHeader: "生产案例",
            casesSub: "展示聚源斋在家具定制与空间装修配套方面的真实成果",
            furnitureCaseTitle: "家具定制案例",
            furnitureCaseDesc: "为私人别墅、高档茶室及艺术展厅量身打造的实木家具案例。从老榆木长桌到全屋中式柜架配套，每一件作品都体现了极高的木作水准。",
            renovationCaseTitle: "装修配套案例",
            renovationCaseDesc: "面向民宿、酒店、商业空间提供的全套装修与家具配套服务。我们不仅提供家具，更参与到空间的整体美学构建中，呈现完整的东方生活美学。",
            viewCaseBtn: "查看案例",
            introTitle: "以真实木材与传统结构，延续东方家具之美",
            introDesc1: "聚源斋古典家具是一家专注于中国传统实木家具、古典家具与旧木再造家具的实体家具品牌。我们以老榆木、松木等天然实木为主要材料，结合中式传统榫卯结构、手工打磨工艺与现代空间审美，为不同类型的空间提供稳定、耐用且具有文化质感的家具产品。",
            introDesc2: "从住宅、民宿、茶室到展厅、商业空间和设计项目，聚源斋希望通过真实的材料、扎实的结构和自然的木纹，让传统木作在当代生活中延续新的价值。",
            learnMore: "了解更多",
            advTitle: "核心优势",
            advSub: "真实的材料与可靠的服务，让选择更简单",
            adv1Title: "实体展厅",
            adv1Desc: "客户可到店查看家具实物、木材质感、结构细节与空间搭配效果。",
            adv2Title: "工厂直供",
            adv2Desc: "支持现货选购、家具定制、批量采购与批发合作，减少中间环节，提高采购效率。",
            adv3Title: "天然实木",
            adv3Desc: "主要采用老榆木、松木等天然实木材料，保留自然木纹、温润质感和长期使用价值。",
            adv4Title: "榫卯结构",
            adv4Desc: "延续中式传统木作结构，使家具更加稳固、耐用，并具有传统工艺价值。",
            adv5Title: "支持定制",
            adv5Desc: "可根据空间尺寸、使用需求、材质偏好和风格方向进行家具定制与配套。",
            adv6Title: "空间适配",
            adv6Desc: "适用于住宅、民宿、茶室、酒店、公区、展厅、博物馆、文创空间和商业空间。",
            catTitle: "产品中心",
            catSub: "探索桌案、椅凳、柜架、门窗屏风、旧木改造与空间配套家具",
            cat1Title: "桌案类",
            cat1Desc: "餐桌、茶桌、书桌、画案",
            cat2Title: "椅凳类",
            cat2Desc: "圈椅、官帽椅、长凳、餐椅",
            cat3Title: "柜架类",
            cat3Desc: "边柜、书柜、展示柜、收纳柜",
            cat4Title: "门窗屏风",
            cat4Desc: "老门板、窗棂、屏风、隔断",
            cat5Title: "旧木改造",
            cat5Desc: "老门板桌、再生木家具",
            cat6Title: "小件摆设",
            cat6Desc: "木器、古旧摆件、装饰件",
            viewBtn: "查看详情",
            stepsTitle: "定制流程",
            stepsSub: "简单四步，开启您的专属空间家具配套",
            step1Title: "提交需求",
            step1Desc: "客户提供空间尺寸、使用场景、家具类型、参考图片或风格方向。",
            step2Title: "沟通方案",
            step2Desc: "根据材质、结构、尺寸、用途、预算和工期进行详细沟通。",
            step3Title: "确认细节",
            step3Desc: "确认家具尺寸、材质、颜色、表面处理、数量、价格和交付方式。",
            step4Title: "制作交付",
            step4Desc: "根据确认方案进行制作、打磨、检查、包装与发货。",
            ctaTitle: "想了解现货、定制或批发合作？",
            ctaDesc: "欢迎通过微信、电话或表单联系我们，也可以预约到店查看家具实物、木材质感与空间陈列效果。",
            contactBtn: "联系我们"
        },
        about: {
            heroTitle: "关于聚源斋",
            heroSub: "一家专注实木家具、古典家具与旧木再造家具的实体家具品牌",
            section1Title: "品牌介绍",
            brandDesc1: "聚源斋古典家具是一家专注于中国传统实木家具、古典家具、旧木再造家具与空间配套家具的实体家具品牌。品牌以老榆木、松木等天然实木为主要材料，结合中式传统榫卯结构与手工打磨工艺，持续探索传统家具在当代生活空间中的使用方式。",
            brandDesc2: "我们不仅提供单件家具选购，也面向住宅、民宿、茶室、展厅、商业空间、设计项目及批发客户提供家具定制、空间配套和批量采购服务。通过真实木材、稳定结构和自然质感，聚源斋希望让家具既能满足日常使用，也能成为空间中具有温度和记忆感的组成部分。",
            brandDesc3: "目前，聚源斋在山东与北京设有实体展厅，拥有成熟的设计与生产团队，为全国各地的个人客户、民宿主、设计师及商业采购方提供高质量的家具配套方案。",
            philosophyTitle: "品牌理念",
            phil1Title: "材真质朴",
            phil1Desc: "我们坚持使用真实的木材，保留木材自然的纹理、色泽甚至风化后的痕迹，让家具展现出自然且质朴的力量。",
            phil2Title: "结构为骨",
            phil2Desc: "榫卯不仅是技术，更是中国家具的灵魂。我们坚持在核心连接处使用垂直或咬合的榫卯结构，确保家具稳固与耐用。",
            phil3Desc: "我们热爱旧木材的温度。通过对老门板、老房梁的二次设计与改造，让历经时光的木头在当代空间中焕发新生。",
            advantageTitle: "为什么选择聚源斋？",
            adv1: "自有仓库与生产团队，确保交期与质量。",
            adv2: "深耕古典家具行业多年，经验丰富的木工师傅。",
            adv3: "支持从单件到整屋、从民用到商用的全链条定制。",
            adv4: "诚实透明的定价，完善的物流与售后支持。"
        },
        products: {
            headerTitle: "产品中心",
            headerDesc: "实木家具、旧木再造家具与空间配套产品",
            filterAll: "全部",
            filterTable: "桌案类",
            filterChair: "椅凳类",
            filterCabinet: "柜架类",
            filterScreen: "门窗屏风",
            filterReclaimed: "旧木改造",
            filterSmall: "小件摆设",
            cardSpace: "适用空间",
            cardCustom: "是否定制",
            viewBtn: "查看详情"
        },
        detail: {
            breadcrumb: "产品详情",
            name: "老榆木长桌",
            subtitle: "JYZ-TB-001 | 简洁沉稳，自然厚重",
            labelID: "产品编号",
            labelCat: "产品分类",
            labelMaterial: "主要材质",
            labelStructure: "工艺结构",
            labelSize: "常规尺寸",
            labelColor: "颜色/处理",
            labelSpace: "适用空间",
            labelStock: "是否现货",
            labelCustom: "支持定制",
            labelPurchase: "采购方式",
            materialValue: "老榆木",
            structureValue: "榫卯结构 / 手工打磨",
            sizeValue: "2200*900*750mm (可定制)",
            colorValue: "深棕色 / 原木色 / 可定制",
            spaceValue: "茶室、餐厅、民宿、公区、展厅",
            stockValue: "请联系咨询",
            customValue: "支持尺寸、颜色、表面处理和批量定制",
            purchaseValue: "单件选购 / 批量采购 / 项目配套",
            btnWechat: "微信咨询",
            btnQuote: "获取报价",
            btnSample: "预约看样",
            btnCustom: "定制需求",
            tabHeader: "详情说明",
            introTitle: "产品简介",
            introDesc: "这款老榆木长桌采用天然老榆木制作，整体造型简洁沉稳，保留木材自然纹理与厚重质感。桌面纹理清晰，结构稳定，适合作为茶室、餐厅、民宿公区或展陈空间中的主家具使用。",
            materialTitle: "材质说明",
            materialDesc: "老榆木纹理清晰，质地坚韧，具有自然质朴的视觉效果。经过长期使用或自然风化的老榆木，常常带有独特的色差、纹路和时间痕迹，使每件家具都呈现不同的细节变化。",
            craftTitle: "工艺与结构",
            craftDesc: "产品采用中式传统榫卯结构，使桌面、桌腿与支撑构件之间形成稳定连接。经过手工打磨和表面处理后，家具在保留木材自然质感的同时，也更适合日常使用。",
            sceneTitle: "适用场景",
            scene1Title: "茶室空间",
            scene1Desc: "适合作为主茶桌，营造安静、沉稳、自然的空间氛围。",
            scene2Title: "餐厅空间",
            scene2Desc: "可作为多人餐桌使用，兼具实用性与装饰性。",
            scene3Title: "民宿公区",
            scene3Desc: "适合用于接待、休闲、阅读和公共交流区域。",
            customTitle: "定制说明",
            customDesc: "本产品支持尺寸、颜色、表面处理和批量采购定制。客户可提供空间尺寸、参考图片或使用需求，我们会根据实际空间比例、使用人数和风格方向进行沟通。",
            careTitle: "交付与保养",
            careDesc: "产品可根据客户需求安排物流发货或到店自提。大件家具建议提前确认收货地址、楼层、电梯尺寸和搬运条件。日常使用中应避免长时间暴晒和过度潮湿，可用柔软干布进行清洁。",
            relatedTitle: "相关产品推荐",
            relatedProductsTitle: "相关产品推荐",
            relatedProductsDesc: "根据材质、空间、风格和搭配关系，为您推荐更多可参考的家具产品。",
            labelMaterialName: "材质",
            labelSpaceName: "适用空间",
            btnViewDetails: "查看详情"
        },
        custom: {
            heroTitle: "定制服务",
            heroSub: "从单件家具到完整空间配套",
            introDesc: "聚源斋古典家具支持家具定制、空间配套、批量采购与批发合作。我们可以根据客户的空间尺寸、使用需求、材质偏好、颜色要求和风格方向，提供相应的家具选品与定制方案。",
            adv1Title: "尺寸定制",
            adv1Desc: "根据空间尺寸和使用需求调整家具长宽高、比例和结构。",
            adv2Title: "材质选择",
            adv2Desc: "提供老榆木、松木等实木材料选定。",
            adv3Title: "颜色效果",
            adv3Desc: "支持不同颜色、做旧效果和表面处理方式。"
        },
        craft: {
            heroTitle: "材料与工艺",
            heroSub: "老榆木、松木、榫卯结构与旧木再造",
            headerDesc: "聚源斋重视家具材料本身的真实质感与结构稳定性。我们主要采用老榆木、松木等天然实木材料，通过传统榫卯结构、手工打磨和表面处理，使家具在使用中兼具耐用性、审美性和时间感。",
            material1Title: "优质实木",
            material1Desc: "坚持使用老榆木、松木等天然木材。老榆木纹理清晰、木性稳定；松木质感温和、自然厚重。",
            craft1Title: "传统榫卯",
            craft1Desc: "沿用中式传统榫卯结构，不靠铁钉连接，通过构件咬合确保家具历久弥新、稳固安全。",
            craft2Title: "旧木再造",
            craft2Desc: "赋予老门板、旧房梁第二次生命。通过清洗、修整、设计，让带有时间痕迹的旧木转变为独一无二的现代家具。"
        },
        contact: {
            heroSub: "咨询现货、定制、批发合作或预约到店参观",
            headerDesc: "如果您想了解聚源斋古典家具的现货产品、家具定制、批发合作或空间配套服务，欢迎通过微信、电话或到店参观的方式与我们联系。",
            wechatTitle: "微信咨询",
            wechatDesc: "扫一扫下方二维码，添加设计顾问微信",
            labelPhone: "电话咨询",
            labelAddr: "店铺地址",
            formTitle: "在线咨询表单",
            formDesc: "请填写您的需求信息，我们将尽快与您联系。",
            labelName: "您的姓名 *",
            placeholderName: "请输入姓名",
            placeholderPhone: "请输入电话号码",
            labelType: "需求类型",
            opt1: "现货咨询",
            opt2: "家具定制",
            opt3: "批发合作",
            opt4: "到店参观",
            labelDemand: "详细需求描述",
            placeholderDemand: "请描述您的具体定制需求或咨询意向...",
            btnSubmit: "提交咨询"
        },
        search: {
            placeholder: "搜索产品或信息...",
            noResults: "未找到相关结果"
        },
        cases: {
            headerTitle: "案例展示",
            headerSub: "从单件家具定制到完整空间配套",
            headerDesc: "聚源斋古典家具为住宅、民宿、茶室、展厅、商业空间和设计项目提供实木家具选购、定制与空间配套服务。通过案例展示，您可以了解不同空间中实木家具、旧木再造家具与中式木作元素的实际应用效果。",
            filterAll: "全部案例",
            filterFurniture: "家具定制案例",
            filterSpace: "装修/空间配套案例",
            ctaTitle: "有类似项目需求？",
            ctaDesc: "如果您正在规划住宅、民宿、茶室、展厅或商业空间，欢迎联系我们沟通家具定制、空间配套与批发采购需求。",
            ctaBtn: "提交项目需求",
            
            // Detail Furniture
            furnitureType: "家具定制案例",
            furnitureTitle: "老榆木茶桌定制案例",
            furnitureSub: "根据私人茶室空间尺寸与使用需求完成的实木茶桌定制项目",
            labelProjType: "项目类型",
            valProjFurniture: "家具定制",
            labelProjSpace: "项目空间",
            valPrivateTea: "私人茶室",
            labelMainProd: "主要产品",
            valTeaTable: "老榆木茶桌",
            labelMaterial: "使用材质",
            valElm: "老榆木",
            labelStructure: "工艺结构",
            valJoinery: "榫卯结构 / 手工打磨 / 表面做旧处理",
            labelCustom: "定制内容",
            valCustomContent: "尺寸、颜色、表面处理、空间比例",
            labelUseScene: "适用场景",
            valUseSceneFurniture: "茶室、民宿、公区、会客空间",
            labelService: "服务方式",
            valServiceFurniture: "需求沟通 / 定制制作 / 物流交付",
            
            reqTitle: "客户需求",
            reqDesc: "客户希望为私人茶室定制一张实木茶桌。空间整体风格偏自然、沉稳，要求家具能够与茶具、木质屏风和墙面材质形成协调关系。由于茶室面积有限，茶桌需要在满足使用功能的同时，保持合适的比例，不让空间显得拥挤。",
            ideaTitle: "设计与定制思路",
            ideaDesc: "本案例围绕“尺寸适配、材质质感和空间氛围”展开。我们根据茶室的实际尺寸调整茶桌比例，使桌面能够满足泡茶、摆放器具和多人围坐需求。同时选择纹理较自然的老榆木材料，保留木材本身的色差和纹理变化，使茶桌成为空间中的视觉中心，但不过度抢占空间。",
            craftTitle: "材质与工艺",
            craftDesc: "茶桌采用老榆木制作。老榆木纹理清晰，质地坚韧，适合制作桌案类家具。结构上采用中式传统榫卯结构，提升整体稳定性。表面经过手工打磨和做旧处理，保留自然木纹与温润触感，使家具更适合茶室这种安静、缓慢的使用场景。",
            effectTitle: "完成效果",
            effectDescFurniture: "完成后的老榆木茶桌在比例上与茶室空间保持协调，既满足日常泡茶和会客使用，也增强了空间的木质氛围。",
            videoTitle: "视频展示",
            videoPlaceholder: "项目空间实景展示视频",
            optTitle: "可参考的定制内容",
            optItem1: "尺寸比例定制",
            optItem2: "材质选择",
            optItem3: "表面颜色调整",
            optItem4: "做旧效果处理",
            optItem5: "与空间风格搭配",
            optItem6: "批量家具定制",
            ctaSubTitleFurniture: "想定制类似家具？",
            ctaSubDescFurniture: "如果您有茶桌、餐桌、书桌、展示柜或旧木改造家具的定制需求，可以提供空间尺寸、参考图片和使用需求，我们会根据实际情况沟通家具方案。",
            ctaSubBtnFurniture: "提交定制需求",
            
            // Detail Renovation
            renovationType: "装修/空间配套案例",
            renovationTitle: "茶室空间家具配套案例",
            renovationSub: "围绕实木家具、木质屏风与展示柜完成的茶室空间配套项目",
            valProjSpaceType: "空间家具配套",
            valProjSpaceRoom: "中式茶室",
            valMainProdsSpace: "茶桌、长凳、木质屏风、展示柜",
            valMaterialsSpace: "老榆木、松木、旧木构件",
            labelServiceSpace: "服务内容",
            valServiceSpace: "家具选品、尺寸建议、空间搭配、木质氛围营造",
            labelKeywords: "空间关键词",
            valKeywords: "自然、沉稳、东方气质、安静、质朴",
            labelSuitable: "适用参考",
            valSuitable: "茶室、民宿、会所、展厅、商业空间",
            
            bgTitle: "项目背景",
            bgDesc: "本项目为一个茶室空间提供家具配套与木质氛围营造建议。客户希望空间整体呈现自然、沉稳、安静的东方气质，同时满足泡茶、会客、展示和日常使用功能。",
            analysisTitle: "空间需求分析",
            analysisDesc: "茶室空间的核心需求包括三个方面：第一，满足泡茶与会客的基本功能；第二，通过实木家具和木质构件形成安静、自然的空间氛围；第三，整体环境协调美观。",
            solutionTitle: "家具与空间配套方案",
            solutionDesc: "本项目以老榆木茶桌作为空间中心，搭配长凳、木质屏风和实木展示柜。整体搭配强调材质统一、色调协调和空间比例适中。",
            materialAtmTitle: "材料与氛围",
            materialAtmDesc: "空间主要采用老榆木、松木和旧木构件。通过不同木材之间的色调与纹理变化，空间形成了自然但不杂乱的层次。",
            effectDescSpace: "完成后的茶室空间在使用功能与空间氛围之间形成了较好的平衡。整体效果自然、安静、耐看，适合长期使用和日常接待。",
            ctaSubTitleSpace: "想做类似空间配套？",
            ctaSubDescSpace: "如果您正在规划茶室、民宿、展厅、会所或商业空间，欢迎提供空间照片、尺寸和风格参考，我们可以沟通整体方案。",
            ctaSubBtnSpace: "提交项目需求",
            
            // Items
            item1Name: "老榆木茶桌定制案例",
            item1Space: "私人茶室",
            item1Material: "老榆木",
            item1Desc: "根据茶室空间尺寸定制老榆木茶桌，保留自然木纹与厚重质感。",
            item2Name: "旧门板长桌定制案例",
            item2Space: "民宿公区",
            item2Material: "旧门板 / 老木料",
            item2Desc: "将带有时间痕迹的旧门板重新设计为长桌，用于民宿接待与公共交流空间。",
            item3Name: "实木展示柜定制案例",
            item3Space: "文创展陈空间",
            item3Material: "老榆木 / 松木",
            item3Desc: "根据展陈需求定制实木展示柜，兼顾收纳、陈列与空间氛围营造。",
            item4Name: "茶室空间家具配套案例",
            item4Space: "中式茶室",
            item4Material: "老榆木 / 木质屏风",
            item4Desc: "围绕茶桌、长凳、屏风进行搭配，营造自然、沉稳、有东方气质的茶室空间。",
            item5Name: "民宿公共空间配套案例",
            item5Space: "民宿公区",
            item5Material: "松木 / 老榆木",
            item5Desc: "通过原木家具与装饰木器，为民宿公区营造温暖、自然、有记忆感的空间体验。",
            item6Name: "商业展厅空间配套案例",
            item6Space: "品牌展厅",
            item6Material: "老榆木 / 展示架",
            item6Desc: "提供家具陈列与木质氛围营造方案，使产品展示与空间美感相结合。",
            
            viewDetails: "查看详情",
            breadcrumb: "案例展示",
            breadcrumbFurniture: "家具定制案例",
            breadcrumbSpace: "装修与空间配套案例",
            
            imgCaptionOverall: "整体效果",
            imgCaptionTexture: "桌面纹理",
            imgCaptionDetail: "结构细节",
            imgCaptionSpace: "空间搭配",
            imgCaptionRenovationOverall: "空间整体",
            imgCaptionRenovationArrangement: "家具搭配",
            imgCaptionRenovationZoning: "屏风与分区",
            imgCaptionRenovationCabinet: "展示柜细节"
        },
        footer: {
            brand: "聚源斋古典家具",
            desc: "聚源斋古典家具专注中国传统实木家具、旧木再造家具与空间配套服务，支持现货选购、家具定制、批发合作与到店参观。",
            navHeader: "快速导航",
            contactHeader: "联系方式",
            fPhone: "电话：18911238405",
            fAddr: "地址：北京店：北京市朝阳区高碑店古典家具街246号聚源斋",
            fHours: "时间：请填写营业时间",
            copyright: "© 2024 聚源斋古典家具 版权所有"
        }
    },
    en: {
        title: {
            index: "Juyuanzhai | Custom Real Wood Furniture & Wholesale",
            about: "About Us | Juyuanzhai Classical Furniture",
            products: "Products | Juyuanzhai Classical Furniture",
            productDetail: "Old Elm Long Table | Product Details",
            custom: "Custom Services | Juyuanzhai Classical Furniture",
            craft: "Materials & Craft | Juyuanzhai Classical Furniture",
            contact: "Contact Us | Juyuanzhai Classical Furniture",
            cases: "Cases | Juyuanzhai Classical Furniture",
            caseFurniture: "Custom Furniture Case | Juyuanzhai Classical Furniture",
            caseRenovation: "Interior & Space Project | Juyuanzhai Classical Furniture"
        },
        nav: {
            home: "Home",
            about: "About",
            products: "Products",
            cases: "Cases",
            custom: "Custom",
            process: "Process",
            materials: "Materials",
            contact: "Contact"
        },
        hero: {
            title: "Juyuanzhai Furniture",
            subtitle: "Traditional Solid Wood & Reclaimed Wood Design",
            desc: "Specializing in old elm, pine, and natural hardwoods, we blend traditional Chinese joinery with modern aesthetics for homes, hotels, teahouses, and commercial showrooms.",
            viewBtn: "View Products",
            customBtn: "Consult Design"
        },
        home: {
            casesHeader: "Production Cases",
            casesSub: "Real results in custom furniture and interior decoration projects.",
            furnitureCaseTitle: "Bespoke Furniture",
            furnitureCaseDesc: "High-end solid wood pieces for private villas, upscale teahouses, and art galleries. Every piece reflects masterful craftsmanship.",
            renovationCaseTitle: "Interior Styling",
            renovationCaseDesc: "Full furniture packages for B&Bs, hotels, and retail spaces. We help build a complete Eastern aesthetic for your space.",
            viewCaseBtn: "View Cases",
            introTitle: "Continuing Eastern Beauty through Authentic Wood",
            introDesc1: "Juyuanzhai is a professional furniture brand focused on traditional Chinese solid wood and reclaimed wood redesign. We use materials like old elm and pine, combined with traditional joinery.",
            introDesc2: "From residences to commercial spaces, we aim to provide lasting cultural value through natural wood grain and robust traditional structures.",
            learnMore: "Learn More",
            advTitle: "Core Advantages",
            advSub: "Genuine materials and reliable service for a worry-free choice.",
            adv1Title: "Showrooms",
            adv1Desc: "Visit our showrooms to see real pieces, textures, and spatial matches.",
            adv2Title: "Factory Direct",
            adv2Desc: "In-stock items, custom orders, and wholesale available directly from the source.",
            adv3Title: "Real Wood",
            adv3Desc: "Using old elm and pine to preserve natural beauty and long-term value.",
            adv4Title: "Traditional Joinery",
            adv4Desc: "Mortise and tenon structures ensure durability and artistic value.",
            adv5Title: "Customization",
            adv5Desc: "Tailored to your dimensions, material preference, and style direction.",
            adv6Title: "Space Versatility",
            adv6Desc: "Perfect for villas, hotels, teahouses, museums, and commercial hubs.",
            catTitle: "Product Center",
            catSub: "Explore tables, chairs, cabinets, screens, and reclaimed wood designs.",
            cat1Title: "Tables",
            cat1Desc: "Dining, Tea, and Study desks.",
            cat2Title: "Chairs",
            cat2Desc: "Armchairs, Dining chairs, and Benches.",
            cat3Title: "Cabinets",
            cat3Desc: "Sideboards, Bookcases, and Display units.",
            cat4Title: "Screens & Doors",
            cat4Desc: "Antique door panels and room dividers.",
            cat5Title: "Reclaimed Wood",
            cat5Desc: "Redesigned antique door tables and reclaimed pieces.",
            cat6Title: "Ornaments",
            cat6Desc: "Wooden crafts and antique decorations.",
            viewBtn: "View Details",
            stepsTitle: "Order Process",
            stepsSub: "Four simple steps to your custom spatial furniture package.",
            step1Title: "Requirements",
            step1Desc: "Provide dimensions, usage scenarios, styles, or reference images.",
            step2Title: "Consultation",
            step2Desc: "Discuss materials, structure, budget, lead time, and design details.",
            step3Title: "Confirmation",
            step3Desc: "Confirm final dimensions, color, price, and terms of delivery.",
            step4Title: "Production",
            step4Desc: "Bespoke production, hand-polishing, inspection, and safe shipping.",
            ctaTitle: "Interested in In-stock or Wholesale?",
            ctaDesc: "Contact us via WhatsApp, phone, or form, or book a showroom visit.",
            contactBtn: "Contact Us"
        },
        about: {
            heroTitle: "About Juyuanzhai",
            heroSub: "Specializing in solid wood, classical, and reclaimed wood furniture.",
            section1Title: "Our Brand",
            brandDesc1: "Juyuanzhai Classical Furniture is dedicated to traditional Chinese joinery and solid wood customization. We bridge ancient craftsmanship with modern life.",
            brandDesc2: "At our core is respect for 'Real Wood'. We utilize aged elm, pine, and hardwoods with historical character, ensuring each piece is robust and aesthetically pleasing.",
            brandDesc3: "With showrooms in Shandong and Beijing, our design and production teams provide high-quality furniture solutions to clients and designers worldwide.",
            philosophyTitle: "Our Philosophy",
            phil1Title: "Authenticity",
            phil1Desc: "We insist on real wood, preserving natural grain and weathering marks to show the beauty of nature.",
            phil2Title: "Structure as Soul",
            phil2Desc: "Joinery is not just tech; it's the soul. We use traditional interlocking joints to ensure maximum stability.",
            phil3Desc: "We love the warmth of old timber. By redesigning antique door panels, we bring history into modern living.",
            advantageTitle: "Why Choose Us?",
            adv1: "In-house warehouse and team ensuring lead time and quality.",
            adv2: "Experienced master carpenters with decades in the industry.",
            adv3: "Full-link customization from single pieces to whole-house projects.",
            adv4: "Transparent pricing with reliable logistics support."
        },
        products: {
            headerTitle: "Product Gallery",
            headerDesc: "Solid wood, reclaimed wood designs and spatial furniture packs.",
            filterAll: "All",
            filterTable: "Tables",
            filterChair: "Chairs",
            filterCabinet: "Cabinets",
            filterScreen: "Screens",
            filterReclaimed: "Reclaimed",
            filterSmall: "Small Items",
            cardSpace: "Space",
            cardCustom: "Customizable",
            viewBtn: "View Details"
        },
        detail: {
            breadcrumb: "Product Details",
            name: "Old Elm Long Table",
            subtitle: "JYZ-TB-001 | Elegant, Minimal, Authentic",
            labelID: "Model Code",
            labelCat: "Category",
            labelMaterial: "Material",
            labelStructure: "Craftsmanship",
            labelSize: "Standard Size",
            labelColor: "Color/Finish",
            labelSpace: "Target Space",
            labelStock: "In-Stock",
            labelCustom: "Customizable",
            labelPurchase: "Procurement",
            materialValue: "Old Elm",
            structureValue: "Mortise & Tenon / Hand-Polished",
            sizeValue: "2200*900*750mm (Bespoke Available)",
            colorValue: "Walnut / Natural / Custom",
            spaceValue: "Tea Room, Dining, Hotel, Showroom",
            stockValue: "Inquire for current stock",
            customValue: "Available in bespoke sizes and finishes",
            purchaseValue: "Retail / Wholesale / Project Contract",
            btnWechat: "WhatsApp/WeChat",
            btnQuote: "Request Quote",
            btnSample: "Book Tour",
            btnCustom: "Bespoke Request",
            tabHeader: "Information",
            introTitle: "Introduction",
            introDesc: "This long table features authentic old elm wood with a minimalist yet profound design. It preserves the natural grain and weight of the solid timber.",
            materialTitle: "Material Profile",
            materialDesc: "Aged elm possesses a distinct rugged grain and tough texture. Naturally weathered elm carries unique patinas, making every piece uniquely personal.",
            craftTitle: "Craft & Structure",
            craftDesc: "Built with traditional Chinese mortise and tenon joinery, ensuring a stable connection. Hand-polished to preserve natural tactile quality.",
            sceneTitle: "Usage Scenarios",
            scene1Title: "Zen Tea Room",
            scene1Desc: "An ideal main tea table that fosters a quiet, natural atmosphere.",
            scene2Title: "Dining Area",
            scene2Desc: "A spacious dining table blending functionality with artistic decor.",
            scene3Title: "B&B Public Lounge",
            scene3Desc: "Suited for reception, leisure, and communal reading zones.",
            customTitle: "Bespoke Guide",
            customDesc: "We offer customization in dimensions, finishes, and wood types. Bulk orders are supported with tailored spatial proportions.",
            careTitle: "Delivery & Care",
            careDesc: "Avoid direct sunlight and extreme humidity. Wipe with a dry soft cloth.",
            relatedTitle: "Recommended Designs",
            relatedProductsTitle: "Related Products",
            relatedProductsDesc: "Recommended furniture based on material, space, style, and compatibility.",
            labelMaterialName: "Material",
            labelSpaceName: "Suitable Space",
            btnViewDetails: "View Details"
        },
        custom: {
            heroTitle: "Bespoke Services",
            heroSub: "From single pieces to full-house projects",
            introDesc: "Juyuanzhai supports furniture customization, spatial matching, and wholesale partnerships. We offer tailored designs based on your floor plan.",
            adv1Title: "Size Customization",
            adv1Desc: "Adjust dimensions to fit your specific spatial requirements.",
            adv2Title: "Material Choice",
            adv2Desc: "Choose from various natural woods including old elm and pine.",
            adv3Title: "Color & Finish",
            adv3Desc: "Select from different stains and hand-polished results."
        },
        craft: {
            heroTitle: "Wood & Craft",
            heroSub: "Old Elm, Pine, Joinery and Reclaimed Design",
            headerDesc: "We value the authentic texture and structural integrity of wood. Using traditional joinery and hand-finishing for longevity.",
            material1Title: "Quality Timber",
            material1Desc: "Authentic old elm with stable nature; Pine with warm, friendly texture.",
            craft1Title: "Traditional Joinery",
            craft1Desc: "Nail-free construction using interlocking systems to ensure lifelong stability.",
            craft2Title: "Reclaimed Wood",
            craft2Desc: "Giving second life to antique door panels and old beams."
        },
        contact: {
            heroSub: "Inquire about stock, customization or book a visit",
            headerDesc: "Feel free to reach out via WeChat, phone, or showroom visit.",
            wechatTitle: "Chat with Us",
            wechatDesc: "Scan the QR code to add our design consultant.",
            labelPhone: "Direct Line",
            labelAddr: "Showroom",
            formTitle: "Quick Inquiry Form",
            formDesc: "Leave us a message, and we'll get back to you soon.",
            labelName: "Name *",
            placeholderName: "Your name",
            placeholderPhone: "Phone number",
            labelType: "Interest",
            opt1: "Retail Inquiry",
            opt2: "Bespoke Order",
            opt3: "Wholesale",
            opt4: "Visit Request",
            labelDemand: "Message",
            placeholderDemand: "Describe your custom needs...",
            btnSubmit: "Send Message"
        },
        search: {
            placeholder: "Search products...",
            noResults: "No results found"
        },
        cases: {
            headerTitle: "Cases",
            headerSub: "From custom furniture to complete spatial furnishing solutions",
            headerDesc: "Juyuanzhai Classical Furniture provides solid wood furniture selection, custom furniture, and spatial furnishing solutions for residences, homestays, tea rooms, showrooms, commercial spaces, and design projects. Through these cases, you can see how solid wood furniture, reclaimed wood pieces, and traditional Chinese woodwork elements are applied in real spaces.",
            filterAll: "All Cases",
            filterFurniture: "Custom Furniture",
            filterSpace: "Interior & Space Projects",
            ctaTitle: "Have a similar project in mind?",
            ctaDesc: "If you are planning a residence, homestay, tea room, showroom, or commercial space, feel free to contact us for custom furniture, spatial furnishing, and wholesale cooperation.",
            ctaBtn: "Submit Project Inquiry",

            // Detail Furniture
            furnitureType: "Custom Furniture Case",
            furnitureTitle: "Custom Elm Wood Tea Table Case",
            furnitureSub: "A custom solid wood tea table designed according to the dimensions and usage needs of a private tea room.",
            labelProjType: "Project Type",
            valProjFurniture: "Custom Furniture",
            labelProjSpace: "Space",
            valPrivateTea: "Private Tea Room",
            labelMainProd: "Main Product",
            valTeaTable: "Elm Wood Tea Table",
            labelMaterial: "Material",
            valElm: "Elm Wood",
            labelStructure: "Craftsmanship",
            valJoinery: "Mortise-and-tenon structure / Hand polishing / Aged surface finish",
            labelCustom: "Customization",
            valCustomContent: "Size, color, surface finish, spatial proportion",
            labelUseScene: "Suitable Spaces",
            valUseSceneFurniture: "Tea rooms, homestays, public areas, reception spaces",
            labelService: "Service Scope",
            valServiceFurniture: "Requirement discussion / Custom production / Delivery",

            reqTitle: "Client Requirements",
            reqDesc: "The client needed a custom solid wood tea table for a private tea room. The overall space was intended to feel natural and calm, with the table coordinating well with tea ware, wooden screens, and wall materials. As the room was limited in size, the table needed to provide practical use while maintaining an appropriate proportion without making the space feel crowded.",
            ideaTitle: "Design & Customization Approach",
            ideaDesc: "This case focused on size adaptation, material texture, and spatial atmosphere. We adjusted the table proportions according to the actual room dimensions, ensuring enough surface area for tea preparation, utensils, and seating. Elm wood with natural grain patterns was selected to preserve color variations and texture, allowing the table to become a visual anchor without overwhelming the space.",
            craftTitle: "Materials & Craftsmanship",
            craftDesc: "The tea table was made from elm wood, known for its clear grain, durable texture, and suitability for table furniture. A traditional Chinese mortise-and-tenon structure was used to enhance stability. The surface was hand-polished and finished with an aged treatment, preserving the natural grain and warm tactile quality, making it well-suited for the quiet and slow-paced atmosphere of a tea room.",
            effectTitle: "Final Result",
            effectDescFurniture: "The finished elm wood tea table achieved a balanced proportion within the tea room. It supports daily tea preparation and reception use while enhancing the overall wooden atmosphere of the space.",
            videoTitle: "Video Showcase",
            videoPlaceholder: "Project Spatial Showcase Video",
            optTitle: "Customizable Options",
            optItem1: "Size and proportion",
            optItem2: "Material selection",
            optItem3: "Surface color adjustment",
            optItem4: "Aged finish treatment",
            optItem5: "Coordination with interior style",
            optItem6: "Batch custom furniture orders",
            ctaSubTitleFurniture: "Want to customize a similar piece?",
            ctaSubDescFurniture: "If you need a custom tea table, dining table, desk, display cabinet, or reclaimed wood furniture piece, you can provide space dimensions, reference images, and usage needs. We will discuss a suitable furniture solution based on your project.",
            ctaSubBtnFurniture: "Submit Custom Requirements",

            // Detail Renovation
            renovationType: "Interior & Space Project",
            renovationTitle: "Tea Room Furniture & Spatial Furnishing Case",
            renovationSub: "A tea room furnishing project centered on solid wood furniture, wooden screens, and display cabinets.",
            valProjSpaceType: "Spatial Furnishing",
            valProjSpaceRoom: "Chinese Tea Room",
            valMainProdsSpace: "Tea table, benches, wooden screen, display cabinet",
            valMaterialsSpace: "Elm wood, pine wood, reclaimed wooden components",
            labelServiceSpace: "Service Scope",
            valServiceSpace: "Furniture selection, size suggestions, spatial coordination, wooden atmosphere building",
            labelKeywords: "Keywords",
            valKeywords: "Natural, calm, Eastern aesthetic, quiet, grounded",
            labelSuitable: "Suitable References",
            valSuitable: "Tea rooms, homestays, clubs, showrooms, commercial spaces",

            bgTitle: "Project Background",
            bgDesc: "This project provided furniture selection and wooden atmosphere suggestions for a tea room. The client wanted the space to feel natural, calm, and distinctly Eastern while supporting tea preparation, reception, display, and daily use.",
            analysisTitle: "Spatial Needs Analysis",
            analysisDesc: "The tea room had three key needs. First, it had to support tea preparation and reception. Second, it needed a quiet and natural atmosphere created through solid wood furniture and wooden elements. Third, the environment should be harmonious.",
            solutionTitle: "Furniture & Spatial Furnishing Solution",
            solutionDesc: "The project used an elm wood tea table as the spatial center, paired with benches, a wooden screen, and a solid wood display cabinet. The overall arrangement emphasizes material consistency, color harmony, and balanced proportions.",
            materialAtmTitle: "Materials & Atmosphere",
            materialAtmDesc: "The space mainly used elm wood, pine wood, and reclaimed wooden components. Through variations in color tone and grain, the space gained a natural yet orderly sense of depth.",
            effectDescSpace: "The completed tea room achieved a good balance between functional use and spatial atmosphere. The overall result is natural, quiet, and enduring, suitable for long-term use and daily reception.",
            ctaSubTitleSpace: "Planning a similar space?",
            ctaSubDescSpace: "If you are planning a tea room, homestay, showroom, club, or commercial space, you can provide space photos, dimensions, and style references. We can discuss furniture selection, size suggestions, and spatial furnishing solutions based on your needs.",
            ctaSubBtnSpace: "Submit Project Inquiry",

            // Items
            item1Name: "Elm Wood Tea Table Case",
            item1Space: "Private Tea Room",
            item1Material: "Old Elm Wood",
            item1Desc: "Custom elm wood tea table designed for a specific space, preserving natural texture.",
            item2Name: "Antique Door Long Table Case",
            item2Space: "B&B Public Area",
            item2Material: "Reclaimed Door / Old Timber",
            item2Desc: "Redesigning antique door panels into functional long tables for public exchange spaces.",
            item3Name: "Display Cabinet Custom Case",
            item3Space: "Exhibition Space",
            item3Material: "Old Elm / Pine Wood",
            item3Desc: "Custom solid wood display cabinets for storage and exhibition with spatial aesthetics.",
            item4Name: "Tea Room Furniture Package Case",
            item4Space: "Chinese Tea Room",
            item4Material: "Old Elm / Wood Screen",
            item4Desc: "Coordinating tea tables, benches, and screens to create a calm Eastern tea space.",
            item5Name: "B&B Public Area Furnishing Case",
            item5Space: "B&B Lounge",
            item5Material: "Pine / Old Elm Wood",
            item5Desc: "Creating a warm, natural, and memorable space through solid wood furniture and decor.",
            item6Name: "Showroom Spatial Furnishing Case",
            item6Space: "Brand Showroom",
            item6Material: "Old Elm / Display Shelves",
            item6Desc: "A complete solution for product display and atmosphere building in a commercial showroom.",

            viewDetails: "View Details",
            breadcrumb: "Cases",
            breadcrumbFurniture: "Custom Furniture Case",
            breadcrumbSpace: "Interior & Space Project",
            
            imgCaptionOverall: "Overall View",
            imgCaptionTexture: "Tabletop Grain",
            imgCaptionDetail: "Structural Detail",
            imgCaptionSpace: "Spatial Arrangement",
            imgCaptionRenovationOverall: "Overall Space",
            imgCaptionRenovationArrangement: "Furniture Arrangement",
            imgCaptionRenovationZoning: "Screen & Zoning",
            imgCaptionRenovationCabinet: "Display Cabinet Detail"
        },
        footer: {
            brand: "Juyuanzhai Classical Furniture",
            desc: "Expert in traditional Chinese joinery, solid wood bespoke pieces, and commercial space projects.",
            navHeader: "Navigate",
            contactHeader: "Contact Information",
            fPhone: "Tel: 18911238405",
            fAddr: "Loc: No.246 Gaobeidian, Beijing",
            fHours: "Hours: Open Daily 9:00-18:30",
            copyright: "© 2024 Juyuanzhai Classical Furniture. All Rights Reserved."
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // 3. Current Page Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });

    // 4. Back to Top
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. Product Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                productCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 6. Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const lang = localStorage.getItem('site-lang') || 'zh';
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (!name || !phone) {
                alert(lang === 'zh' ? '请填写姓名和联系电话' : 'Please provide name and phone number');
                return;
            }

            alert(lang === 'zh' ? '提交成功' : 'Submitted successfully');
            contactForm.reset();
        });
    }

    // 7. Product Image Switcher
    const thumbItems = document.querySelectorAll('.thumb-item');
    const mainImage = document.getElementById('mainImage');
    if (thumbItems.length > 0 && mainImage) {
        thumbItems.forEach(item => {
            item.addEventListener('click', () => {
                thumbItems.forEach(t => t.classList.remove('active'));
                item.classList.add('active');
                mainImage.src = item.querySelector('img').src;
            });
        });
    }

    // 8. Search Functionality
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-input');
    const searchDropdown = document.querySelector('.search-results-dropdown');

    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', () => {
            searchInput.classList.toggle('show');
            if (searchInput.classList.contains('show')) {
                searchInput.focus();
            } else {
                searchDropdown.classList.remove('show');
                searchInput.value = '';
            }
        });

        const searchableContent = [
            { title: { zh: "材料与工艺", en: "Materials & Craft" }, desc: { zh: "老榆木、榫卯结构", en: "Old Elm, Joinery" }, link: "craft.html" },
            { title: { zh: "定制流程", en: "Custom Process" }, desc: { zh: "如何定制您的家具", en: "How to customize furniture" }, link: "custom.html" },
            { title: { zh: "联系我们", en: "Contact Us" }, desc: { zh: "咨询现货与定制", en: "Inquiry & Bespoke" }, link: "contact.html" },
            { title: { zh: "关于聚源斋", en: "About Us" }, desc: { zh: "品牌故事与理念", en: "Brand Story & Philosophy" }, link: "about.html" },
            { title: { zh: "生产案例", en: "Production Cases" }, desc: { zh: "家具定制与配套项目", en: "Furniture & project cases" }, link: "cases.html" }
        ];

        // Add products to searchable content
        if (typeof productsData !== 'undefined') {
            productsData.forEach(p => {
                searchableContent.push({
                    title: { zh: p.name, en: p.nameEn || p.name },
                    desc: { zh: `${p.categoryZh} | ${p.material}`, en: `${p.category} | ${p.material}` },
                    link: `product-detail.html?id=${p.id}`
                });
            });
        }

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const lang = localStorage.getItem('site-lang') || 'zh';

            if (query.length < 1) {
                searchDropdown.classList.remove('show');
                return;
            }

            const results = searchableContent.filter(item => {
                return item.title[lang].toLowerCase().includes(query) || 
                       item.desc[lang].toLowerCase().includes(query);
            });

            renderSearchResults(results, query, lang);
        });

        function renderSearchResults(results, query, lang) {
            searchDropdown.innerHTML = '';
            if (results.length === 0) {
                const noResult = document.createElement('div');
                noResult.className = 'search-no-results';
                noResult.innerText = translations[lang].search.noResults;
                searchDropdown.appendChild(noResult);
            } else {
                results.forEach(item => {
                    const resultItem = document.createElement('a');
                    resultItem.href = item.link;
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <span class="title">${item.title[lang]}</span>
                        <span class="desc">${item.desc[lang]}</span>
                    `;
                    searchDropdown.appendChild(resultItem);
                });
            }
            searchDropdown.classList.add('show');
        }

        // Close search on click outside
        document.addEventListener('click', (e) => {
            if (!searchToggle.contains(e.target) && !searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.remove('show');
                searchInput.classList.remove('show');
                searchInput.value = '';
            }
        });
    }

    // 9. Case Filter
    const caseFilterBtns = document.querySelectorAll('.case-filter-btn');
    const caseCards = document.querySelectorAll('.case-card');

    if (caseFilterBtns.length > 0) {
        caseFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                caseFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                caseCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-case-type') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // I18N LOGIC
    function getNestedValue(obj, key) {
        return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
    }

    function applyLanguage(lang) {
        document.body.classList.toggle('lang-en', lang === 'en');
        const data = translations[lang];

        // 1. Core Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(data, key);
            if (value) {
                el.innerText = value;
            }
        });

        // 2. Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = getNestedValue(data, key);
            if (value) el.placeholder = value;
        });

        // 3. Alt
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            const value = getNestedValue(data, key);
            if (value) el.alt = value;
        });

        // 4. Update Title
        const pageKeyRaw = currentPath.split('.')[0] || 'index';
        let pageKey = pageKeyRaw;
        if (pageKeyRaw === 'product-detail') pageKey = 'productDetail';
        if (pageKeyRaw === 'case-furniture-detail') pageKey = 'caseFurniture';
        if (pageKeyRaw === 'case-renovation-detail') pageKey = 'caseRenovation';
        
        if (data.title && data.title[pageKey]) {
            document.title = data.title[pageKey];
        }

        // 5. Switcher UI
        document.querySelectorAll('.lang-opt').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-value') === lang);
        });

        localStorage.setItem('site-lang', lang);
    }

    const savedLang = localStorage.getItem('site-lang') || 'zh';
    applyLanguage(savedLang);

    // --- Dynamic Product Logic ---
    function renderProducts(filter = 'all') {
        const grid = document.getElementById('productGrid');
        if (!grid || typeof productsData === 'undefined') return;

        grid.innerHTML = '';
        const lang = localStorage.getItem('site-lang') || 'zh';

        productsData.forEach(product => {
            if (filter !== 'all' && product.category !== filter) return;

            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-category', product.category);

            const name = lang === 'zh' ? product.name : (product.nameEn || product.name);
            const catLabel = lang === 'zh' ? product.categoryZh : (translations[lang].products[`filter${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`] || product.category);
            const material = lang === 'zh' ? product.material : (product.materialEn || product.material);
            const space = lang === 'zh' ? product.space : (product.spaceEn || product.space);
            const custom = lang === 'zh' ? product.customizable : (product.customizable === '支持定制' ? 'Supported' : 'Inquire');

            card.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1540638349517-3abd5afc3847?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                </div>
                <div class="product-info">
                    <span class="product-cat">${catLabel}</span>
                    <h3>${name}</h3>
                    <div class="product-meta">
                        <strong>${translations[lang].detail.labelMaterial}</strong>：${material}<br>
                        <strong>${translations[lang].detail.labelSize}</strong>：${product.size}<br>
                        <strong>${translations[lang].products.cardSpace}</strong>：${space}<br>
                        <strong>${translations[lang].detail.labelCustom}</strong>：${custom}
                    </div>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline" style="width: 100%; text-align: center;">${translations[lang].products.viewBtn}</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function getRelatedProducts(currentProduct, limit = 4) {
        if (typeof productsData === 'undefined') return [];

        const scores = productsData
            .filter(p => p.id !== currentProduct.id)
            .map(p => {
                let score = 0;

                // 1. 同分类产品加 5 分
                if (p.category === currentProduct.category) score += 5;

                // 2. 同材质产品加 4 分
                if (p.material === currentProduct.material) score += 4;

                // 3. 适用空间关键词匹配，每匹配一个关键词加 3 分
                if (p.space && currentProduct.space) {
                    const currentSpaces = currentProduct.space.split(/[、，, ]/);
                    const pSpaces = p.space.split(/[、，, ]/);
                    currentSpaces.forEach(s => {
                        if (s && pSpaces.includes(s)) score += 3;
                    });
                }

                // 4. 风格关键词匹配，每匹配一个关键词加 3 分
                if (p.style && currentProduct.style) {
                    const currentStyles = currentProduct.style.split(/[ /]/);
                    const pStyles = p.style.split(/[ /]/);
                    currentStyles.forEach(s => {
                        if (s && pStyles.includes(s)) score += 3;
                    });
                }

                // 5. 当前产品 relatedCategories 中包含候选产品 category，加 3 分
                if (currentProduct.relatedCategories && currentProduct.relatedCategories.includes(p.category)) {
                    score += 3;
                }

                // 6. tags 标签匹配，每匹配一个标签加 2 分
                if (p.tags && currentProduct.tags) {
                    currentProduct.tags.forEach(tag => {
                        if (p.tags.includes(tag)) score += 2;
                    });
                }

                // 7. 如果候选产品支持定制，加 1 分
                if (p.customizable === '支持定制') score += 1;

                return { product: p, score: score };
            });

        // 排序并取前 limit 个
        let results = scores
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(item => item.product);

        // 如果不足 limit 个，用其他产品补足（排除已有的和当前的）
        if (results.length < limit) {
            const extra = productsData.filter(p => 
                p.id !== currentProduct.id && 
                !results.find(r => r.id === p.id)
            );
            results = results.concat(extra.slice(0, limit - results.length));
        }

        return results.slice(0, limit);
    }

    function renderRelatedProducts(currentProduct) {
        const section = document.querySelector('.related-products-section');
        const container = document.getElementById('relatedProducts');
        if (!container) return;

        const related = getRelatedProducts(currentProduct, 4);
        
        if (related.length === 0) {
            if (section) section.style.display = 'none';
            return;
        }

        if (section) section.style.display = 'block';
        container.innerHTML = '';
        const lang = localStorage.getItem('site-lang') || 'zh';

        related.forEach(product => {
            const name = lang === 'zh' ? product.name : (product.nameEn || product.name);
            const material = lang === 'zh' ? product.material : (product.materialEn || product.material);
            const space = lang === 'zh' ? product.space : (product.spaceEn || product.space);
            const catLabel = lang === 'zh' ? product.categoryZh : (translations[lang].products[`filter${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`] || product.category);
            
            const card = document.createElement('div');
            card.className = 'product-card related-product-card';
            card.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1540638349517-3abd5afc3847?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                </div>
                <div class="product-info">
                    <span class="product-cat">${catLabel}</span>
                    <h3>${name}</h3>
                    <div class="product-meta">
                        <strong>${translations[lang].detail.labelMaterialName}</strong>：${material}<br>
                        <strong>${translations[lang].detail.labelSpaceName}</strong>：${space}
                    </div>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline" style="width: 100%; text-align: center;">${translations[lang].detail.btnViewDetails}</a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function renderProductDetail() {
        const detailContainer = document.getElementById('productDetailContainer');
        const notFound = document.getElementById('productNotFound');
        if (!detailContainer || typeof productsData === 'undefined') return;

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const product = productsData.find(p => p.id === id);

        if (!product) {
            detailContainer.style.display = 'none';
            notFound.style.display = 'block';
            return;
        }

        const lang = localStorage.getItem('site-lang') || 'zh';
        const name = lang === 'zh' ? product.name : (product.nameEn || product.name);
        const material = lang === 'zh' ? product.material : (product.materialEn || product.material);
        const space = lang === 'zh' ? product.space : (product.spaceEn || product.space);
        const desc = lang === 'zh' ? product.description : (product.descriptionEn || product.description);
        
        // Populate fields
        document.getElementById('mainImage').src = product.image;
        document.getElementById('productName').innerText = name;
        document.getElementById('productSubtitle').innerText = `${product.id} | ${material}`;
        document.getElementById('productID').innerText = product.id;
        document.getElementById('productCat').innerText = lang === 'zh' ? product.categoryZh : product.category;
        document.getElementById('productMaterial').innerText = material;
        document.getElementById('productCraft').innerText = product.craft;
        document.getElementById('productSize').innerText = product.size;
        document.getElementById('productSpace').innerText = space;
        document.getElementById('productStock').innerText = product.stock;
        document.getElementById('productCustom').innerText = product.customizable;
        
        document.getElementById('productIntro').innerText = desc;
        document.getElementById('productMaterialDesc').innerText = product.materialDescription || (lang === 'zh' ? '优质天然木材，质感温润。' : 'High-quality natural wood with warm texture.');
        document.getElementById('productCraftDesc').innerText = product.craftDescription || (lang === 'zh' ? '传统榫卯结构，稳定牢固。' : 'Traditional joinery, stable and firm.');
        document.getElementById('productCustomDesc').innerText = product.customDescription || (lang === 'zh' ? '支持尺寸与颜色定制。' : 'Supports size and color customization.');
        document.getElementById('productCareDesc').innerText = product.deliveryDescription || (lang === 'zh' ? '干布擦拭，避免暴晒。' : 'Wipe with dry cloth, avoid direct sunlight.');

        // Render thumbs
        const thumbGrid = document.getElementById('thumbGrid');
        thumbGrid.innerHTML = '';
        const allImages = product.images || [product.image];
        allImages.forEach((img, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${img}" class="thumb-img" onerror="this.src='https://images.unsplash.com/photo-1540638349517-3abd5afc3847?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'">`;
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                document.getElementById('mainImage').src = img;
            });
            thumbGrid.appendChild(thumb);
        });

        // Related Products
        renderRelatedProducts(product);
    }

    // Initialize Page Content
    if (currentPath === 'products.html') {
        renderProducts();
        // Override filter button logic for dynamic grid
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProducts(btn.getAttribute('data-filter'));
            });
        });
    } else if (currentPath === 'product-detail.html') {
        renderProductDetail();
    }

    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
        langSwitch.addEventListener('click', (e) => {
            const opt = e.target.closest('.lang-opt');
            if (opt) {
                const newLang = opt.getAttribute('data-value');
                applyLanguage(newLang);
                
                // Re-render dynamic content
                if (currentPath === 'products.html') {
                    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
                    renderProducts(activeFilter);
                } else if (currentPath === 'product-detail.html') {
                    renderProductDetail();
                }
            }
        });
    }
});
