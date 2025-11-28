import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, Target, Brain, Heart, Users, CheckCircle, Circle, Zap, Shield, Radio, Link2, FileText, Gift, ArrowRight, ArrowLeft, Menu, X, Home, Layers, Clock, TrendingUp, BookMarked, Compass, Shuffle, RefreshCw, Coffee, Search, Star, BookOpen, Award, AlertCircle, Lightbulb, Play, Pause, Volume2, Edit3, Save, Trash2, Plus, Filter, BarChart2, Calendar, Flag, MessageCircle, ThumbsUp, ThumbsDown, HelpCircle, Eye, EyeOff, Copy, Check, Bell, Settings, Download, Upload, Mic, StopCircle } from 'lucide-react';

// ====================================================================
// 完整的销售成长系统数据库
// ====================================================================

const SYSTEM_DATA = {
  // ==================== 第0章：意义层 ====================
  meaning: {
    id: 'meaning',
    title: "第0章：意义锚点",
    subtitle: "你为什么做销售？",
    icon: Compass,
    color: "amber",
    coreQuestion: "如果你不知道为什么做销售，你会在第一次被拒绝时放弃。",
    coreInsight: "不是为了成交，是为了帮助。成交只是帮助的副产品。",
    
    sections: [
      {
        title: "销售的三种意义",
        content: [
          {
            level: "生存意义",
            description: "我需要赚钱养家",
            problem: "这个意义会让你在被拒绝时崩溃，因为每次拒绝都像在威胁你的生存",
            upgrade: "把「生存」变成「服务」：我通过帮助别人来养活自己",
            stage: "初级"
          },
          {
            level: "成长意义", 
            description: "我想通过销售提升自己的能力",
            value: "这个意义会让你把每次拒绝当成学习机会",
            focus: "关注：我今天学到了什么？而不是：我今天赚了多少？",
            stage: "中级"
          },
          {
            level: "使命意义",
            description: "我相信我的产品/服务能真正帮到人",
            power: "这是最强大的意义，因为你不再是为自己，而是为客户",
            sign: "标志：你会因为帮到客户而开心，而不只是因为成交",
            stage: "高级"
          }
        ]
      },
      {
        title: "微意义：今天帮一个人就够了",
        description: "如果「使命意义」太大，试试「微意义」",
        practice: "每天早上问自己：今天我想帮助谁？哪怕只是让一个人的一天变好一点点。",
        power: "微意义的力量：把大目标分解成每天可触及的小成就"
      },
      {
        title: "意义自检卡",
        questions: [
          { q: "我为什么做这份销售工作？", hint: "写下3个原因" },
          { q: "如果不是为了钱，我还愿意做吗？", hint: "诚实回答" },
          { q: "我的产品/服务能帮到什么样的人？", hint: "具体描述" },
          { q: "如果我成功了，世界会有什么不同？", hint: "想象画面" },
          { q: "被拒绝100次后，我还记得为什么出发吗？", hint: "锚定意义" }
        ]
      }
    ],
    
    exercises: [
      {
        name: "意义锚点写作",
        duration: "15分钟",
        steps: [
          "找一个安静的地方坐下",
          "回忆一次你真正帮到客户的经历",
          "写下那次经历中你的感受",
          "问自己：我希望更多人有这种体验吗？",
          "把答案写成一句话，贴在工位上"
        ]
      },
      {
        name: "每日意义回顾",
        duration: "3分钟",
        steps: [
          "每天下班前问：今天我帮到谁了？",
          "写下一个具体的名字或事件",
          "如果没有，问：明天我想帮谁？"
        ]
      }
    ],
    
    quotes: [
      { text: "销售的最高境界，是让客户感谢你推荐给他。", author: "系统心法" },
      { text: "不是每个人都是你的客户，但每个人都值得被尊重。", author: "系统心法" }
    ],
    
    mantra: "不是为了成交，是为了帮助。成交只是帮助的副产品。"
  },

  // ==================== 内循环 ====================
  innerLoop: {
    id: 'inner',
    title: "内循环",
    subtitle: "我的准备系统",
    description: "在你去见客户之前，先调整好自己的状态",
    icon: Brain,
    color: "blue",
    
    overview: {
      concept: "内循环是你的「内功」，决定了你能否稳定地输出外在表现",
      layers: ["身体层 → 管理恐惧的生理反应", "信念层 → 建立正确的销售信念", "能量层 → 保持积极的工作状态"],
      principle: "内循环不稳，外循环再好也会崩"
    },
    
    stations: [
      // ===== 身体层 =====
      {
        id: "body",
        name: "身体层",
        chapter: "第1章",
        subtitle: "恐惧的生理管理",
        icon: Shield,
        color: "blue",
        
        coreInsight: "恐惧不是性格缺陷，是杏仁核的生理本能",
        why: "被拒绝时，你的身体会启动「战或逃」反应——心跳加速、手心出汗、声音发抖、大脑空白。这不是你软弱，是几万年进化的保护机制在保护你。",
        science: "杏仁核把「社交拒绝」识别为「生存威胁」，所以会触发和遇到猛兽一样的身体反应。前额叶皮层（理性思考）会被劫持，导致你「脑子一片空白」。",
        
        tools: [
          {
            id: "breathing",
            name: "4-7-8 呼吸法",
            subtitle: "被拒绝急救SOS",
            when: "打电话前 / 被拒绝后 / 紧张时",
            time: "1分钟",
            difficulty: "简单",
            steps: [
              { step: 1, action: "用鼻子吸气4秒", detail: "腹部鼓起" },
              { step: 2, action: "屏住呼吸7秒", detail: "保持放松" },
              { step: 3, action: "用嘴呼气8秒", detail: "发出「呼」声" },
              { step: 4, action: "重复3-4次", detail: "直到平静" }
            ],
            science: "激活副交感神经，告诉身体「安全了」",
            tips: ["可以配合数数", "吸1234，憋1234567，呼12345678", "闭眼效果更好"],
            commonMistakes: ["呼吸太快", "没有用腹部呼吸", "只做一次就停"]
          },
          {
            id: "powerpose",
            name: "超人姿势（Power Pose）",
            subtitle: "快速提升自信",
            when: "重要会面前 / 需要自信时",
            time: "2分钟",
            difficulty: "简单",
            steps: [
              { step: 1, action: "双手叉腰", detail: "手肘向外撑开" },
              { step: 2, action: "两脚与肩同宽", detail: "站稳" },
              { step: 3, action: "挺胸抬头", detail: "看向前方或上方" },
              { step: 4, action: "保持2分钟", detail: "深呼吸" }
            ],
            science: "哈佛研究：2分钟高权力姿势可以提升睾酮（自信），降低皮质醇（压力）",
            tips: ["厕所、电梯、车里都可以做", "想象自己是超级英雄", "配合深呼吸效果更好"],
            where: "任何私密空间"
          },
          {
            id: "bodyscan",
            name: "身体扫描",
            subtitle: "觉察紧张信号",
            when: "每天早上 / 感到紧张时",
            time: "5分钟",
            difficulty: "中等",
            steps: [
              { step: 1, action: "闭上眼睛", detail: "找一个舒适的姿势" },
              { step: 2, action: "从头顶开始", detail: "慢慢往下扫描" },
              { step: 3, action: "注意每个部位", detail: "哪里紧张？哪里不舒服？" },
              { step: 4, action: "对紧张部位说", detail: "「我看见你了」" },
              { step: 5, action: "不需要改变", detail: "只需要看见" }
            ],
            purpose: "觉察身体信号，不让紧张积累",
            tips: ["配合轻柔的音乐", "可以躺着做", "不要评判，只是观察"]
          },
          {
            id: "reset5s",
            name: "5秒情绪重启",
            subtitle: "快速恢复状态",
            when: "被拒绝后立刻使用",
            time: "30秒",
            difficulty: "简单",
            steps: [
              { step: 1, action: "站起来", detail: "打破僵住状态" },
              { step: 2, action: "深呼吸一次", detail: "让身体动起来" },
              { step: 3, action: "对自己说", detail: "「这是筛选，不是否定」" },
              { step: 4, action: "喝一口水", detail: "激活身体" },
              { step: 5, action: "动一动身体", detail: "甩甩手，转转头" }
            ],
            tips: ["立即执行，不要等", "可以加上微笑", "然后继续下一个任务"]
          },
          {
            id: "grounding",
            name: "5-4-3-2-1接地法",
            subtitle: "焦虑时回到当下",
            when: "极度焦虑/恐慌时",
            time: "2分钟",
            difficulty: "简单",
            steps: [
              { step: 1, action: "看：说出5个你能看到的东西", detail: "" },
              { step: 2, action: "触：说出4个你能触摸到的东西", detail: "" },
              { step: 3, action: "听：说出3个你能听到的声音", detail: "" },
              { step: 4, action: "闻：说出2个你能闻到的气味", detail: "" },
              { step: 5, action: "尝：说出1个你能尝到的味道", detail: "" }
            ],
            purpose: "把注意力从焦虑思维拉回到当下的身体感受"
          }
        ],
        
        commonProblems: [
          {
            problem: "我打电话前手抖",
            diagnosis: "身体在准备「战斗或逃跑」",
            solution: "先做4-7-8呼吸，再打电话",
            prevention: "每天早上做身体扫描"
          },
          {
            problem: "被拒绝后脑子一片空白",
            diagnosis: "杏仁核劫持了你的前额叶皮层",
            solution: "不要强撑，先走开，做5秒重启",
            prevention: "提前准备好应对话术"
          },
          {
            problem: "整天都很紧张，无法放松",
            diagnosis: "长期处于应激状态",
            solution: "每天早上做身体扫描，每晚做4-7-8呼吸",
            prevention: "设定工作和休息的边界"
          },
          {
            problem: "见大客户前特别紧张",
            diagnosis: "把结果看得太重",
            solution: "做超人姿势2分钟，然后告诉自己「最坏情况只是不成交」",
            prevention: "准备充分，降低不确定性"
          }
        ],
        
        dailyPractice: {
          morning: ["身体扫描（5分钟）", "超人姿势（2分钟）"],
          beforeCall: ["4-7-8呼吸（1分钟）"],
          afterRejection: ["5秒重启"],
          evening: ["4-7-8呼吸放松（3分钟）"]
        },
        
        mantra: "恐惧是信号，不是命令。我可以带着恐惧行动。"
      },
      
      // ===== 信念层 =====
      {
        id: "belief",
        name: "信念层",
        chapter: "第2章",
        subtitle: "道德底线与身份认同",
        icon: Heart,
        color: "rose",
        
        coreInsight: "你对销售的信念，决定你能否做好销售",
        why: "如果你内心觉得销售是「骗人」「求人」「低人一等」，你永远无法自信地开口。信念是你的根基。",
        
        beliefCheck: {
          title: "信念自检：你现在相信什么？",
          negative: [
            { belief: "销售就是骗人买不需要的东西", reframe: "销售是帮助客户解决问题" },
            { belief: "销售是低人一等的工作", reframe: "销售是价值交换，双方平等" },
            { belief: "我在求客户买", reframe: "我有客户需要的东西" },
            { belief: "被拒绝说明我不行", reframe: "被拒绝只是不匹配，不是否定我" },
            { belief: "谈钱是可耻的", reframe: "谈钱是专业的体现" },
            { belief: "好产品不需要销售", reframe: "好产品更需要被正确传达" }
          ]
        },
        
        tools: [
          {
            id: "conscience",
            name: "良心自检卡",
            subtitle: "道德底线守护",
            when: "推荐任何产品前",
            time: "1分钟",
            difficulty: "简单",
            questions: [
              { q: "这个产品/服务，我自己会用吗？", pass: "是" },
              { q: "如果客户是我妈，我会推荐吗？", pass: "是" },
              { q: "三年后客户会感谢我吗？", pass: "是" }
            ],
            rule: "三个都是「是」才卖，否则不卖",
            power: "这张卡是你的护身符，让你永远站在道德高地上",
            ifFail: "如果有任何一个「否」，要么改进产品，要么坦诚告知客户局限"
          },
          {
            id: "doctor",
            name: "医生心态",
            subtitle: "身份重新定位",
            when: "见客户时",
            wrong: "我是销售员，我要说服客户买",
            right: "我是医生，客户来找我看病",
            shifts: [
              { from: "求你买", to: "我有药，你需要吗" },
              { from: "说服客户", to: "诊断问题，开处方" },
              { from: "被拒绝=失败", to: "病人不听医嘱，不是医生的错" },
              { from: "追着客户跑", to: "病人会主动来复诊" }
            ],
            practice: "每次见客户前，对自己说：我是来给方案的，不是来乞讨的",
            benefits: ["自信提升", "姿态平等", "减少被拒绝的痛苦"]
          },
          {
            id: "sixtyPercent",
            name: "60分产品处理法",
            subtitle: "不完美产品怎么卖",
            when: "产品不完美，但能解决部分问题",
            principle: "坦诚比完美更重要",
            method: [
              { step: 1, action: "承认产品的局限", example: "坦白说，我们的产品在XX方面不是最强的" },
              { step: 2, action: "强调核心价值", example: "但如果您的核心需求是YY，我们是最合适的" },
              { step: 3, action: "让客户选择", example: "您觉得XX重要，还是YY更重要？" }
            ],
            fullExample: "王总，坦白说，如果您追求条款最全面，XX公司更合适。但如果您预算有限，想先保障核心风险，我们的方案性价比最高。您看您的优先级是什么？",
            whyWorks: "客户会因为你的坦诚而更信任你"
          },
          {
            id: "moneyShame",
            name: "破除金钱羞耻",
            subtitle: "大胆谈钱",
            symptoms: [
              "报价时声音变小",
              "总想给客户打折",
              "不敢催款",
              "觉得赚客户的钱不好意思"
            ],
            reframes: [
              { old: "我在要客户的钱", new: "我收的是我创造的价值" },
              { old: "价格越低客户越开心", new: "低价只会吸引不尊重你的客户" },
              { old: "赚钱是可耻的", new: "赚钱是你养家的责任" },
              { old: "催款是不好意思的", new: "不付款是客户不守信用" }
            ],
            practice: "报价时：声音要大，语速要稳，眼睛看着对方"
          }
        ],
        
        identityWork: {
          title: "身份重建：我是谁？",
          oldIdentity: "我是一个销售员，要靠说服别人吃饭",
          newIdentity: "我是一个价值提供者，帮助客户解决问题并获得回报",
          affirmations: [
            "我的产品/服务能真正帮到人",
            "我有权利为我的价值收费",
            "客户选择我是因为我能帮到他，不是因为他可怜我",
            "被拒绝只是不匹配，不代表我不好"
          ]
        },
        
        mantra: "守住底线，你才自由。"
      },
      
      // ===== 能量层 =====
      {
        id: "energy",
        name: "能量层",
        chapter: "第3章",
        subtitle: "状态调节与心理防护",
        icon: Zap,
        color: "yellow",
        
        coreInsight: "做太阳，不做黑洞",
        why: "客户能感受到你的能量状态。如果你是黑洞（负能量），客户会本能地逃离。如果你是太阳（正能量），客户会被吸引。",
        
        energyTypes: {
          sun: {
            name: "太阳型",
            signs: ["热情但不过度", "自信但不傲慢", "关心客户但不讨好", "遇到拒绝能恢复"],
            effect: "客户愿意靠近你，信任你",
            how: "保持能量输入 > 能量输出"
          },
          blackHole: {
            name: "黑洞型",
            signs: ["抱怨产品/公司/客户", "总是疲惫低落", "把负面情绪传给客户", "遇到拒绝就崩溃"],
            effect: "客户会逃离，同事也会远离",
            cause: "能量输出 > 能量输入，长期亏空"
          }
        },
        
        tools: [
          {
            id: "morningRitual",
            name: "晨间激活仪式",
            subtitle: "开启高能量的一天",
            when: "每天早上出门前",
            time: "10分钟",
            steps: [
              { time: "0-3分钟", action: "起床后：伸展运动", detail: "唤醒身体" },
              { time: "3-5分钟", action: "镜子前：对自己微笑", detail: "说「今天会有好事发生」" },
              { time: "5-8分钟", action: "回想成功时刻", detail: "感受那时的自信" },
              { time: "8-10分钟", action: "路上：听有能量的音乐", detail: "提升状态" }
            ],
            tips: ["前一晚准备好衣服和物品", "不要看手机新闻", "吃一顿好早餐"]
          },
          {
            id: "armorRitual",
            name: "穿脱防护仪式",
            subtitle: "区分工作和生活",
            metaphor: "想象你有一件隐形防护服",
            morning: {
              name: "穿上防护服（上班时）",
              action: "想象穿上它，客户的拒绝打不穿它",
              script: "我现在穿上我的防护服，今天任何拒绝都伤不到真正的我"
            },
            evening: {
              name: "脱下防护服（下班时）",
              action: "想象脱下它，工作情绪不带回家",
              script: "我现在脱下工作的我，回到生活的我，工作的事留在工作"
            },
            purpose: "区分工作角色和真实自我，保护核心自我",
            bonus: "可以配合一个物理动作，比如摘下工牌"
          },
          {
            id: "energyRestart",
            name: "3分钟能量重启",
            subtitle: "快速恢复状态",
            when: "被拒绝后 / 能量很低时",
            time: "3分钟",
            steps: [
              { step: 1, action: "站起来走动", purpose: "打破僵住", time: "30秒" },
              { step: 2, action: "喝一杯温水", purpose: "激活身体", time: "30秒" },
              { step: 3, action: "看窗外30秒", purpose: "转移注意力", time: "30秒" },
              { step: 4, action: "想一个开心的画面", purpose: "重建积极情绪", time: "30秒" },
              { step: 5, action: "深呼吸三次", purpose: "准备继续", time: "30秒" },
              { step: 6, action: "回来继续工作", purpose: "", time: "30秒" }
            ]
          },
          {
            id: "cryRecovery",
            name: "被骂哭后完整疗愈",
            subtitle: "严重情况的处理流程",
            when: "被客户严厉拒绝/羞辱后",
            totalTime: "15-30分钟",
            steps: [
              {
                step: 1,
                name: "离开现场",
                action: "找一个安全的地方（厕所、楼梯间、车里）",
                time: "立即",
                important: "不要在现场崩溃"
              },
              {
                step: 2,
                name: "允许情绪",
                action: "想哭就哭，想骂就骂（小声），不要压抑",
                time: "2-5分钟",
                important: "压抑会让情绪更久"
              },
              {
                step: 3,
                name: "身体照顾",
                action: "洗脸、喝水、做4-7-8呼吸",
                time: "3分钟",
                important: "身体先平静下来"
              },
              {
                step: 4,
                name: "认知重建",
                action: "对自己说：「他骂的是销售员这个角色，不是真正的我」「他可能今天心情不好」「这不影响我的价值」",
                time: "2分钟",
                important: "把事件和自我分开"
              },
              {
                step: 5,
                name: "自我关怀",
                action: "今天早点下班，或者买杯奶茶奖励自己",
                time: "",
                important: "被骂不是你的错，你只是在做你的工作"
              }
            ]
          }
        ],
        
        energyManagement: {
          title: "能量管理日历",
          schedule: [
            { time: "早上", action: "晨间激活仪式", duration: "10分钟", purpose: "开启高能量" },
            { time: "上午", action: "高能量工作（电话、拜访）", duration: "", purpose: "趁状态好做难事" },
            { time: "中午", action: "午休+补充能量", duration: "30分钟", purpose: "恢复" },
            { time: "下午", action: "中等能量工作", duration: "", purpose: "处理文档、跟进" },
            { time: "傍晚", action: "脱防护服仪式", duration: "2分钟", purpose: "切换模式" },
            { time: "晚上", action: "不想工作的事", duration: "", purpose: "充电" }
          ],
          energySources: [
            "充足的睡眠（7-8小时）",
            "规律的运动（每周3次）",
            "健康的饮食",
            "支持你的人（家人、朋友、同事）",
            "让你开心的爱好",
            "成就感（哪怕是小成就）"
          ],
          energyDrains: [
            "睡眠不足",
            "垃圾食品",
            "负面新闻和社交媒体",
            "抱怨的人",
            "没有边界的加班",
            "持续的失败感"
          ]
        },
        
        mantra: "做太阳，不做黑洞。照顾好自己，才能照顾好客户。"
      }
    ]
  },

  // ==================== 外循环 ====================
  outerLoop: {
    id: 'outer',
    title: "外循环",
    subtitle: "我和客户的行动系统",
    description: "从找到客户到完成交付的完整流程",
    icon: Users,
    color: "emerald",
    
    overview: {
      flow: "流量 → 连接 → 方案 → 成交 → 交付",
      concept: "外循环是你和客户互动的完整旅程",
      principle: "每一站都是下一站的前提，像地铁站，必须按顺序走",
      stationLogic: [
        "流量 - 没有人，一切白搭",
        "连接 - 有人但不信任，无法继续",
        "方案 - 信任了但看不到价值，不会买",
        "成交 - 看到价值但不敢决策，需要临门一脚",
        "交付 - 成交了但体验差，没有复购和转介绍"
      ]
    },
    
    stations: [
      // ===== 流量站 =====
      {
        id: "traffic",
        name: "流量站",
        chapter: "第4章",
        subtitle: "找对的人",
        icon: Radio,
        color: "emerald",
        
        coreInsight: "先筛选，再行动。对的人，事半功倍。",
        why: "没有人，一切白搭。但不是所有人都是你的客户。把时间花在对的人身上。",
        
        tools: [
          {
            id: "threeCircles",
            name: "流量雷达图（三圈法）",
            subtitle: "分层管理人脉",
            circles: [
              {
                name: "强关系圈",
                who: "家人、密友、老同学、前同事",
                trust: "高（已经信任你）",
                method: "直接说：我现在在做XX，有需要可以找我",
                caution: "不要强推，尊重关系",
                conversion: "最高，但数量有限"
              },
              {
                name: "中关系圈",
                who: "现同事、邻居、群友、朋友的朋友",
                trust: "中（认识但不熟）",
                method: "找话题切入，先建立更深的连接",
                caution: "不要上来就推销",
                conversion: "中等，需要培养"
              },
              {
                name: "弱关系圈",
                who: "陌生人、网络好友、活动认识的人",
                trust: "低（不认识）",
                method: "先建立信任，再谈业务",
                caution: "需要最长的培育时间",
                conversion: "最低，但数量最大"
              }
            ],
            practice: "画出你的三圈，每圈列出10个人，每周扩展",
            tip: "从强关系开始，逐渐拓展到弱关系"
          },
          {
            id: "bant",
            name: "BANT筛查法",
            subtitle: "判断值不值得花时间",
            purpose: "快速判断这个人是否值得深入跟进",
            criteria: [
              { letter: "B", word: "Budget", chinese: "预算", question: "他有预算吗？能承担得起吗？", redFlag: "没有预算或预算太低" },
              { letter: "A", word: "Authority", chinese: "决策权", question: "他能拍板吗？还是要问别人？", redFlag: "需要问很多人" },
              { letter: "N", word: "Need", chinese: "需求", question: "他真的需要吗？还是只是好奇？", redFlag: "只是随便看看" },
              { letter: "T", word: "Timeline", chinese: "时间", question: "他什么时候要？紧急吗？", redFlag: "完全没有时间概念" }
            ],
            rule: "4项至少满足3项，才值得深入跟进",
            tip: "不要在BANT不合格的人身上浪费时间",
            questions: [
              "您大概的预算范围是？",
              "这个事情是您自己决定还是需要和其他人商量？",
              "您现在最想解决的问题是什么？",
              "您希望什么时候能用上这个产品/服务？"
            ]
          },
          {
            id: "icebreaker",
            name: "社交破冰公式",
            subtitle: "快速建立连接",
            formula: "赞美 + 好奇 + 请教",
            structure: {
              praise: { name: "赞美", desc: "真诚地赞美一个具体的点", key: "必须具体、真诚" },
              curious: { name: "好奇", desc: "表达好奇，想了解更多", key: "自然过渡" },
              ask: { name: "请教", desc: "以请教的姿态建立连接", key: "降低对方戒备" }
            },
            examples: [
              {
                situation: "活动中遇到陌生人",
                praise: "您刚才分享的观点很有启发",
                curious: "您是怎么想到的",
                ask: "能请教一下吗"
              },
              {
                situation: "商场中遇到潜在客户",
                praise: "您这个包真好看",
                curious: "是什么牌子",
                ask: "我也想给我妈买一个，能指点一下吗"
              }
            ],
            tips: ["赞美要具体，不要泛泛而谈", "请教让对方有价值感", "不要急着推销"]
          },
          {
            id: "channels",
            name: "获客渠道清单",
            subtitle: "找到客户的地方",
            online: [
              { channel: "朋友圈", method: "分享价值内容，不直接推销", frequency: "每天1-2条" },
              { channel: "微信群", method: "先贡献价值，再建立连接", frequency: "每周活跃在3-5个群" },
              { channel: "小红书", method: "分享专业知识和客户案例", frequency: "每周2-3篇" },
              { channel: "抖音", method: "短视频展示专业性", frequency: "根据能力" },
              { channel: "知乎", method: "回答专业问题", frequency: "每周1-2个回答" },
              { channel: "LinkedIn", method: "B2B客户开发", frequency: "每周更新" }
            ],
            offline: [
              { channel: "行业活动", method: "主动社交，交换联系方式", frequency: "每月1-2次" },
              { channel: "展会", method: "收集名片，后续跟进", frequency: "根据行业" },
              { channel: "转介绍", method: "请满意客户介绍", frequency: "每次成交后" },
              { channel: "陌拜", method: "上门拜访潜在客户", frequency: "根据行业" },
              { channel: "电话", method: "冷呼或暖呼", frequency: "每天固定时段" }
            ],
            tip: "选2-3个渠道深耕，不要贪多"
          }
        ],
        
        mantra: "先筛选，再行动。对的人，事半功倍。"
      },
      
      // ===== 连接站 =====
      {
        id: "connect",
        name: "连接站",
        chapter: "第5章",
        subtitle: "建立信任",
        icon: Link2,
        color: "cyan",
        
        coreInsight: "闭嘴，是最好的销售技巧。",
        why: "客户不会从陌生人那里买东西，他们只从信任的人那里买。信任是成交的前提。",
        
        trustFormula: {
          formula: "信任 = (专业度 × 可靠度 × 亲密度) ÷ 自我导向",
          factors: [
            { name: "专业度", desc: "你懂不懂这个领域", how: "展示专业知识和经验" },
            { name: "可靠度", desc: "你说话算不算数", how: "说到做到，及时回复" },
            { name: "亲密度", desc: "客户觉得你理解他吗", how: "倾听，共情，记住细节" },
            { name: "自我导向", desc: "你是为自己还是为客户", how: "减少推销感，增加帮助感" }
          ],
          tip: "自我导向越高，信任越低"
        },
        
        tools: [
          {
            id: "holisticListening",
            name: "全息倾听",
            subtitle: "听到客户没说的话",
            levels: [
              { level: 1, name: "听内容", what: "他说了什么？（事实）", example: "客户说「我再考虑一下」" },
              { level: 2, name: "听情绪", what: "他的感受是什么？（情感）", example: "他的语气有些犹豫和不安" },
              { level: 3, name: "听需求", what: "他真正想要什么？（深层）", example: "他需要更多安全感或信息" }
            ],
            practice: "下次客户说话时，试着分辨：他说的是什么？感受的是什么？要的是什么？",
            example: {
              customerSays: "我再考虑一下",
              level1: "表面是：他需要更多时间",
              level2: "情绪是：他有顾虑、不确定、不安",
              level3: "需求是：他需要更多安全感/信息/保障"
            },
            tips: [
              "不要急着回应，先理解",
              "可以复述确认：「您是说...」",
              "注意非语言信号：表情、语气、肢体"
            ]
          },
          {
            id: "honestTactic",
            name: "实在人战术（自曝其短）",
            subtitle: "用诚实建立信任",
            principle: "主动说出产品缺点，建立信任",
            why: "当你主动说缺点，客户会相信你说的优点",
            method: [
              { step: 1, action: "先说一个真实的缺点", example: "坦白说，我们的价格不是最低的" },
              { step: 2, action: "解释为什么这个缺点对他可能不重要", example: "但如果您看重售后服务..." },
              { step: 3, action: "强调你能满足他的核心需求", example: "我们的售后是24小时响应的" }
            ],
            examples: [
              "坦白说，我们的价格不是最低的。但如果您看重售后服务，我们是最好的。",
              "说实话，XX公司的条款更全面。但如果您预算有限，我们这个至少能保障核心风险。",
              "老实说，我们的品牌知名度不如XX。但我们的产品质量是一样的，价格便宜30%。"
            ],
            caution: "缺点要真实，不要编造；缺点要无关紧要，不要核心"
          },
          {
            id: "removeSelf",
            name: "去自我导向",
            subtitle: "减少推销感",
            problem: "自我导向 = 只想着自己的业绩，不关心客户",
            wrong: [
              "我们公司是行业第一...",
              "这个产品是最好的...",
              "您一定要买这个...",
              "我这个月业绩还差一点..."
            ],
            right: [
              "您现在最头疼的问题是什么？",
              "您最看重什么？",
              "有什么我能帮您的？",
              "这个方案能解决您的什么问题？"
            ],
            rule: "把「我」换成「您」，把「卖」换成「帮」",
            practice: "回顾你最近的一次销售对话，数一数你说了多少次「我」，多少次「您」"
          },
          {
            id: "spin",
            name: "SPIN提问法",
            subtitle: "通过提问引导需求",
            purpose: "通过提问让客户自己发现需求，而不是你告诉他",
            steps: [
              {
                letter: "S",
                word: "Situation",
                chinese: "现状问题",
                purpose: "了解客户现状",
                examples: ["您现在用什么软件？", "您目前的保险是什么方案？", "您的团队有多少人？"],
                tip: "不要问太多，客户会不耐烦"
              },
              {
                letter: "P",
                word: "Problem",
                chinese: "难点问题",
                purpose: "发现客户痛点",
                examples: ["有什么不方便的地方吗？", "您对现在的方案满意吗？", "最让您头疼的是什么？"],
                tip: "让客户自己说出痛点"
              },
              {
                letter: "I",
                word: "Implication",
                chinese: "影响问题",
                purpose: "放大痛点影响",
                examples: ["这个问题对您的工作有什么影响？", "如果不解决，会有什么后果？", "这会影响到团队效率吗？"],
                tip: "让客户意识到问题的严重性"
              },
              {
                letter: "N",
                word: "Need-payoff",
                chinese: "价值问题",
                purpose: "引导客户想象解决后的好处",
                examples: ["如果这个问题解决了，会怎样？", "能省下多少时间/钱？", "团队会有什么变化？"],
                tip: "让客户自己说出价值"
              }
            ],
            fullExample: {
              situation: "您现在用什么方式管理客户信息？",
              problem: "用Excel有没有遇到什么问题？比如数据丢失、查找麻烦？",
              implication: "数据丢失的话，会影响客户跟进吗？有没有丢过重要客户？",
              needPayoff: "如果有一个系统能自动保存、快速查找，您觉得能节省多少时间？"
            }
          }
        ],
        
        mantra: "闭嘴，是最好的销售技巧。先理解，再被理解。"
      },
      
      // ===== 方案站 =====
      {
        id: "solution",
        name: "方案站",
        chapter: "第6章",
        subtitle: "呈现价值",
        icon: FileText,
        color: "violet",
        
        coreInsight: "讲故事，不讲参数。画未来，不背说明书。",
        why: "客户不买产品特性，客户买「问题的解决」。你不是在卖东西，你是在帮客户画一幅他未来的生活。",
        
        tools: [
          {
            id: "fabe",
            name: "FABE话术公式",
            subtitle: "结构化呈现价值",
            purpose: "让客户从「这是什么」到「这对我有什么用」",
            structure: [
              { letter: "F", word: "Feature", chinese: "特点", meaning: "产品是什么", example: "这款手机有5000mAh电池" },
              { letter: "A", word: "Advantage", chinese: "优势", meaning: "比别人好在哪", example: "比普通手机续航长50%" },
              { letter: "B", word: "Benefit", chinese: "利益", meaning: "对客户的好处", example: "您出差一天不用带充电器" },
              { letter: "E", word: "Evidence", chinese: "证据", meaning: "证明是真的", example: "这是测试报告/用户评价" }
            ],
            tip: "重点在B（利益），不是F（特点）。客户不关心你的产品，只关心自己的生活。",
            template: "我们的产品有[F特点]，所以[A优势]，对您来说意味着[B利益]，这里有[E证据]可以证明。",
            examples: [
              {
                product: "CRM系统",
                F: "我们的系统有自动提醒功能",
                A: "比传统Excel管理更不会漏跟进",
                B: "您不会再因为忘记跟进而丢单了",
                E: "上个月用我们系统的客户平均成交率提升了20%"
              },
              {
                product: "保险",
                F: "这款保险包含住院垫付服务",
                A: "不用先自己掏钱再报销",
                B: "万一住院，您不用为几十万的费用发愁",
                E: "这是我们上个月的理赔案例，客户三天就拿到了赔付"
              }
            ],
            commonMistake: "只说F和A，忘了B和E"
          },
          {
            id: "scenario",
            name: "场景化植入",
            subtitle: "让客户看见未来",
            principle: "让客户「看见」拥有后的生活",
            technique: "用「想象一下」「到时候」「您会发现」开头",
            comparison: {
              wrong: "这个床垫很软，支撑性很好，用的是进口乳胶。",
              right: "想象一下，明天早上您醒来，腰不酸了，精神饱满地去上班，同事问您最近气色怎么这么好..."
            },
            templates: [
              "想象一下，当您...",
              "到时候您会发现...",
              "有了这个之后，您每天早上...",
              "三个月后，您回头看..."
            ],
            examples: [
              "想象一下，下次您出差的时候，再也不用担心手机没电，随时可以处理工作...",
              "到时候您会发现，每个月能省下10小时处理这些琐事，可以多陪陪家人...",
              "有了这个系统之后，您每天早上打开电脑，就能看到今天要跟进的客户清单，再也不会漏掉重要客户..."
            ]
          },
          {
            id: "expertHardness",
            name: "专家硬度",
            subtitle: "建立专业权威",
            principle: "你要比客户更懂这个领域",
            build: [
              { what: "研究行业数据和趋势", how: "每周花1小时看行业报告" },
              { what: "准备3个竞品对比", how: "了解竞品优缺点" },
              { what: "记住5个成功案例", how: "能详细讲述过程和结果" },
              { what: "能回答常见的10个问题", how: "整理FAQ手册" }
            ],
            show: [
              { method: "引用数据", example: "根据XX报告，这个行业今年增长了30%..." },
              { method: "对比分析", example: "和XX相比，我们的优势在于..." },
              { method: "案例佐证", example: "之前有个客户，和您情况很像..." }
            ],
            caution: "专业不是炫耀知识，是用知识帮客户解决问题"
          },
          {
            id: "storytelling",
            name: "故事销售法",
            subtitle: "用故事打动人心",
            why: "故事比数据更容易记住和打动人",
            structure: [
              { part: "背景", desc: "和客户类似的人", example: "之前有个客户张总，他也是做外贸的" },
              { part: "问题", desc: "遇到了什么痛点", example: "那时候他每天要处理大量邮件，经常漏掉重要信息" },
              { part: "解决", desc: "用了我们的产品/服务", example: "后来用了我们的系统" },
              { part: "结果", desc: "获得了什么好处", example: "现在他的团队效率提高了30%，去年业绩涨了50%" }
            ],
            tips: [
              "主角要和客户相似（行业、规模、痛点）",
              "问题要具体、可感知",
              "结果要有数据支撑",
              "可以适当加入细节，增加真实感"
            ],
            template: "之前有个客户[背景]，他也遇到过[问题]。后来用了我们的[方案]，现在[结果]。"
          }
        ],
        
        mantra: "讲故事，不讲参数。画未来，不背说明书。"
      },
      
      // ===== 成交站 =====
      {
        id: "close",
        name: "成交站",
        chapter: "第7章",
        subtitle: "达成共识",
        icon: Target,
        color: "orange",
        
        coreInsight: "优雅的成交是进退有度，不是步步紧逼。",
        why: "客户已经心动，但需要一个「推力」来做决定。你的工作是帮他做决定，不是逼他。",
        
        closingMindset: {
          wrong: ["我要拿下这个订单", "不成交就是失败", "要用技巧让他签单"],
          right: ["我帮他做出对他有利的决定", "不成交也许只是时机不对", "成交是双赢的结果"]
        },
        
        tools: [
          {
            id: "sandwich",
            name: "三明治报价法",
            subtitle: "让价格变小",
            structure: "价值 + 价格 + 价值对比",
            formula: "先说价值 → 再说价格 → 最后对比（让价格变小）",
            examples: [
              {
                product: "保险",
                value1: "这个保险每年保您全家的健康和安全",
                price: "只要8000元",
                compare: "平均每天22元，一杯奶茶的钱"
              },
              {
                product: "软件",
                value1: "这个系统帮您每月节省10小时",
                price: "年费5000元",
                compare: "相当于每小时40元请了一个助理"
              },
              {
                product: "培训",
                value1: "这个课程能帮您提升30%的成交率",
                price: "学费2万",
                compare: "如果您一年多成交10单，每单利润5000，就是5万，投资回报率250%"
              }
            ],
            tip: "报价时：声音要大，语速要稳，眼睛看着对方"
          },
          {
            id: "assumptive",
            name: "假设成交法",
            subtitle: "自然推进成交",
            principle: "假设客户已经决定买了，直接问细节",
            examples: [
              "您看是刷卡还是转账？",
              "您要红色还是蓝色？",
              "是送到公司还是家里？",
              "您希望周五还是下周一安装？",
              "我们先签约，然后我帮您安排培训？"
            ],
            tip: "自然地问，就像这个决定已经做好了",
            caution: "如果客户犹豫，不要强推，先处理异议"
          },
          {
            id: "twoOptions",
            name: "二选一成交法",
            subtitle: "简化决策",
            principle: "给两个选项，都是「买」",
            wrong: "您要不要买？",
            right: "您选A套餐还是B套餐？",
            examples: [
              "您是先买基础版试试，还是直接上专业版？",
              "您看是今天签约，还是明天我过来？",
              "您要一年的还是两年的？",
              "您是自己用还是送人？"
            ]
          },
          {
            id: "larc",
            name: "LARC异议处理法",
            subtitle: "化解客户顾虑",
            purpose: "处理客户的顾虑和反对",
            steps: [
              { letter: "L", word: "Listen", chinese: "听完", action: "让客户说完，不要打断", tip: "哪怕他说的不对" },
              { letter: "A", word: "Acknowledge", chinese: "认同", action: "「我理解您的顾虑」「您说得对」", tip: "认同情绪，不一定认同观点" },
              { letter: "R", word: "Respond", chinese: "回应", action: "解决真实异议，提供信息或方案", tip: "针对性回应" },
              { letter: "C", word: "Confirm", chinese: "确认", action: "「这样解决了您的顾虑吗？」", tip: "确保问题真的解决了" }
            ],
            commonObjections: [
              {
                objection: "太贵了",
                L: "（听完，不急着反驳）",
                A: "我理解，价格确实是要考虑的重要因素。",
                R: "不过您看，我们的产品虽然贵500，但能用3年，平均下来每天不到5毛钱。而且售后服务是免费的。",
                C: "您觉得这样算的话，还贵吗？"
              },
              {
                objection: "我再考虑一下",
                L: "（听完）",
                A: "当然，这个决定确实需要慎重考虑。",
                R: "我想了解一下，您主要还在考虑哪方面？是价格、功能还是其他？",
                C: "如果我能帮您解决这个顾虑，您今天能做决定吗？"
              },
              {
                objection: "我要问问XX",
                L: "（听完）",
                A: "理解，重要的决定确实需要和家人/合伙人商量。",
                R: "您觉得他主要会关心哪些方面？我可以准备一些资料给您带回去。",
                C: "您看我们能约个时间一起聊聊吗？"
              }
            ]
          },
          {
            id: "trafficLight",
            name: "红绿灯成交信号",
            subtitle: "判断成交时机",
            purpose: "识别客户是否准备好成交",
            signals: [
              {
                color: "green",
                name: "绿灯信号",
                signs: ["客户问价格", "客户问细节（怎么付款、什么时候送）", "客户问交付时间", "客户问售后", "客户身体前倾", "客户开始想象使用场景"],
                action: "立即尝试成交",
                urgency: "高"
              },
              {
                color: "yellow",
                name: "黄灯信号",
                signs: ["客户说「让我想想」", "客户提出异议", "客户犹豫不决", "客户问竞品对比"],
                action: "先处理异议，再尝试成交",
                urgency: "中"
              },
              {
                color: "red",
                name: "红灯信号",
                signs: ["客户明确说不需要", "客户对产品无兴趣", "客户已有竞品", "客户表现出不耐烦"],
                action: "不要强推，保持关系，以后再联系",
                urgency: "低"
              }
            ]
          },
          {
            id: "bargaining",
            name: "砍价应对四心法",
            subtitle: "优雅应对价格谈判",
            principle: "客户砍价是正常的，重要的是你的应对",
            methods: [
              {
                name: "稳住自己",
                mindset: "这是正常的，他在试探我的底线",
                action: "不慌，不急着让步",
                script: "我理解您想要一个好价格..."
              },
              {
                name: "灵活应对",
                mindset: "降价可以，但要换条件",
                action: "降价换条件：量大、付款方式、转介绍",
                script: "如果您能今天签约/介绍3个朋友/一次买两年，我可以..."
              },
              {
                name: "真诚有度",
                mindset: "有底线才有尊重",
                action: "真诚告知底线",
                script: "坦白说，这个价格已经是我能给的最低了，再低我真的做不了..."
              },
              {
                name: "体谅客户",
                mindset: "他砍价是正常需求",
                action: "站在客户角度，理解他的动机",
                script: "我理解您想找到最好的性价比，其实我自己买东西也会货比三家..."
              }
            ]
          }
        ],
        
        mantra: "优雅的成交，是进退有度，不是步步紧逼。"
      },
      
      // ===== 交付站 =====
      {
        id: "deliver",
        name: "交付站",
        chapter: "第8章",
        subtitle: "超预期服务",
        icon: Gift,
        color: "pink",
        
        coreInsight: "成交是开始，不是结束。最后一公里决定口碑。",
        why: "峰终定律——人们记住的是「最高峰」和「结尾」的体验。交付是结尾，决定客户会不会推荐你。",
        
        peakEndRule: {
          title: "峰终定律",
          principle: "人们记住的是：体验的最高点 + 体验的结尾",
          application: [
            { what: "峰", how: "创造一个「哇」的时刻", example: "意外送一个小礼物" },
            { what: "终", how: "让结尾体验超出预期", example: "亲自送到，而不是快递" }
          ]
        },
        
        tools: [
          {
            id: "surpriseDelivery",
            name: "惊喜交付清单",
            subtitle: "超预期服务",
            ideas: [
              { idea: "比约定时间早到", impact: "显示重视" },
              { idea: "附赠一个相关的小礼物", impact: "意外惊喜" },
              { idea: "手写一张感谢卡", impact: "个人温度" },
              { idea: "主动告知使用注意事项", impact: "专业贴心" },
              { idea: "3天后回访询问体验", impact: "持续关心" },
              { idea: "7天后再次关心", impact: "建立关系" },
              { idea: "节假日发问候（不推销）", impact: "长期维护" }
            ],
            tip: "不需要全做，选2-3个坚持做"
          },
          {
            id: "referralEngine",
            name: "转介绍引擎",
            subtitle: "让客户带客户",
            timing: "客户最满意的时候（通常是交付后3-7天）",
            script: "张总，您用得还满意吗？（等回答）太好了！如果您身边有朋友也需要，麻烦帮我介绍一下，您放心，我一定像服务您一样服务他们。",
            tips: [
              "先确认客户满意",
              "用「介绍」不用「推荐」",
              "承诺同样的服务标准",
              "成功后要感谢"
            ],
            followUp: "每次转介绍都发一个小红包或礼物感谢"
          },
          {
            id: "boundary",
            name: "边界设定",
            subtitle: "健康的服务关系",
            principle: "什么该做，什么不该做",
            do: [
              "分内的事情超预期做",
              "客户合理的要求尽量满足",
              "问题快速响应和解决"
            ],
            dont: [
              "无限制的免费服务",
              "超出能力范围的承诺",
              "24小时随叫随到（除非紧急）"
            ],
            how: "提前说清楚：「我们的服务包含XXX，如果需要YYY，可能需要额外费用，您看可以吗？」"
          }
        ],
        
        customerMaintenance: {
          title: "客户维护日历",
          schedule: [
            { time: "成交当天", action: "发感谢消息", purpose: "确认合作" },
            { time: "3天后", action: "回访使用体验", purpose: "解决初期问题" },
            { time: "7天后", action: "再次关心", purpose: "深化关系" },
            { time: "1个月后", action: "询问是否需要帮助", purpose: "持续服务" },
            { time: "节假日", action: "发祝福（不推销）", purpose: "维护关系" },
            { time: "续费前1个月", action: "提醒并沟通续费", purpose: "续约" }
          ]
        },
        
        mantra: "成交是开始，不是结束。"
      }
    ]
  },

  // ==================== 三阶段螺旋 ====================
  stages: {
    id: 'stages',
    title: "三阶段螺旋",
    subtitle: "你在哪里",
    description: "销售成长的三个阶段，知道自己在哪，才知道该做什么",
    icon: TrendingUp,
    color: "gradient",
    
    overview: {
      concept: "销售成长不是直线，是螺旋上升",
      principle: "每个阶段有不同的任务，不要跳级",
      metaphor: "就像学游泳，先学会漂浮，再学动作，最后提升速度"
    },
    
    stages: [
      {
        id: "survival",
        name: "生存期",
        duration: "0-3个月",
        color: "#EF4444",
        status: "不是崩溃，就是成长",
        
        experience: [
          "恐惧是常态",
          "0业绩是正常的",
          "被拒绝到怀疑人生",
          "每天都想放弃"
        ],
        
        task: "不求成交，只求不崩溃",
        focus: "内循环（每天调状态）",
        
        minimumStandard: "每天打3个电话（不要求结果）",
        weeklyGoal: "每周和5个潜在客户建立联系",
        
        mindset: {
          title: "生存期心法：拒绝的礼物",
          levels: [
            { level: "新手", view: "拒绝 = 否定我" },
            { level: "进步中", view: "拒绝 = 帮我筛选" },
            { level: "更高境界", view: "拒绝 = 让我看见我的执着" }
          ]
        },
        
        thirtyDayPlan: {
          title: "30天新手破冰计划",
          weeks: [
            {
              week: "第1周：只练内循环",
              tasks: [
                { day: "1-3", task: "每天做晨间激活仪式" },
                { day: "4-5", task: "练习4-7-8呼吸，直到熟练" },
                { day: "6-7", task: "写下你的意义锚点" }
              ]
            },
            {
              week: "第2周：开始小行动",
              tasks: [
                { day: "8-10", task: "每天加3个微信好友" },
                { day: "11-12", task: "和2个人聊天（不推销）" },
                { day: "13-14", task: "画出你的三圈流量图" }
              ]
            },
            {
              week: "第3周：练习技能",
              tasks: [
                { day: "15-17", task: "练习全息倾听" },
                { day: "18-19", task: "练习FABE话术（对着镜子）" },
                { day: "20-21", task: "和朋友模拟一次销售对话" }
              ]
            },
            {
              week: "第4周：实战",
              tasks: [
                { day: "22-24", task: "打3个真实的销售电话" },
                { day: "25-27", task: "约见1个潜在客户" },
                { day: "28-30", task: "复盘整个月，写下收获" }
              ]
            }
          ]
        },
        
        survivalGuide: {
          title: "零业绩生存指南",
          tips: [
            "不要和有业绩的同事比，和昨天的自己比",
            "把「成交」目标改成「行动」目标：今天打了3个电话就是成功",
            "找一个同样在生存期的伙伴，互相鼓励",
            "每天结束前写3个「今天做到的事」",
            "周末给自己放假，不想销售的事"
          ]
        },
        
        mantra: "活下去，熬过去。"
      },
      {
        id: "growth",
        name: "成长期",
        duration: "3-12个月",
        color: "#F59E0B",
        status: "笨拙但有光",
        
        experience: [
          "偶尔成交，但不稳定",
          "技巧用起来很别扭",
          "50/50的成功率",
          "开始找到一点感觉"
        ],
        
        task: "优化外循环，找到自己的节奏",
        focus: "复盘每个站点（哪里卡了）",
        
        minimumStandard: "每月至少1单",
        weeklyGoal: "每周复盘一次成交/失败案例",
        
        mindset: {
          title: "成长期心法：从技巧到无技巧",
          levels: [
            { level: "现阶段", view: "你很笨拙，因为你在「用」技巧" },
            { level: "进步中", view: "你开始熟练，技巧变得自然" },
            { level: "目标", view: "你「就是」技巧，每句话都自然流淌" }
          ]
        },
        
        weeklyReview: {
          title: "每周复盘清单",
          questions: [
            "这周我接触了多少潜在客户？",
            "有多少进入了下一阶段？卡在哪里？",
            "成交的单子，关键是什么？",
            "没成交的单子，问题在哪？",
            "下周我要改进什么？"
          ]
        },
        
        skillUpgrade: {
          title: "技能提升重点",
          priorities: [
            { skill: "SPIN提问", goal: "能自然地使用4种问题" },
            { skill: "FABE话术", goal: "每个产品都能用FABE介绍" },
            { skill: "LARC异议处理", goal: "常见异议都有应对方案" },
            { skill: "成交技巧", goal: "能识别信号，自然成交" }
          ]
        },
        
        mantra: "慢慢来，比较快。"
      },
      {
        id: "ecosystem",
        name: "生态期",
        duration: "12个月+",
        color: "#10B981",
        status: "销售之后",
        
        experience: [
          "稳定成交",
          "有口碑了",
          "客户主动找你",
          "开始有转介绍"
        ],
        
        task: "让系统自转（转介绍/带新人）",
        focus: "建转介绍飞轮",
        
        minimumStandard: "50%以上来自转介绍",
        sign: "客户主动找你，而不是你追着客户",
        
        mindset: {
          title: "生态期心法：销售之后",
          reflection: [
            "当你已经能稳定成交后",
            "你会发现：钱只是数字",
            "你会问：然后呢？"
          ],
          options: [
            { path: "升级意义", desc: "从卖产品到帮助更多人" },
            { path: "转型", desc: "转管理，带团队" },
            { path: "离开", desc: "如果销售不再让你兴奋" }
          ]
        },
        
        buildReferralEngine: {
          title: "建立转介绍引擎",
          steps: [
            "确保每个客户都满意（服务是基础）",
            "在客户最满意的时候开口",
            "让转介绍变得简单（给客户话术）",
            "每个转介绍都感谢",
            "形成习惯和系统"
          ]
        },
        
        mentoring: {
          title: "如何带新人",
          principles: [
            "不要期望他像你一样",
            "先教内循环，再教外循环",
            "陪他跑几个客户",
            "让他犯错，但及时复盘",
            "耐心，你也是这样过来的"
          ]
        },
        
        mantra: "你不再追客户，客户来追你。"
      }
    ]
  },

  // ==================== 技法库 ====================
  techniques: {
    id: 'techniques',
    title: "销售技法库",
    subtitle: "所有技法速查",
    icon: Layers,
    color: "indigo",
    
    categories: [
      {
        name: "报价与成交",
        items: [
          { name: "三明治报价法", formula: "价值+价格+价值对比", chapter: "第7章" },
          { name: "假设成交法", formula: "假设已成交，问细节", chapter: "第7章" },
          { name: "二选一成交法", formula: "给两个选项都是买", chapter: "第7章" },
          { name: "试探成交法", formula: "「如果XX，您能决定吗？」", chapter: "第7章" },
          { name: "痛苦成交法", formula: "放大不买的损失", chapter: "第7章" },
          { name: "紧迫感成交法", formula: "真实的稀缺/限时", chapter: "第7章" }
        ]
      },
      {
        name: "沟通与提问",
        items: [
          { name: "SPIN提问法", formula: "现状→难点→影响→价值", chapter: "第5章" },
          { name: "全息倾听", formula: "听内容+听情绪+听需求", chapter: "第5章" },
          { name: "FABE话术", formula: "特点→优势→利益→证据", chapter: "第6章" },
          { name: "场景化植入", formula: "「想象一下...」", chapter: "第6章" },
          { name: "故事销售法", formula: "背景→问题→解决→结果", chapter: "第6章" }
        ]
      },
      {
        name: "异议处理",
        items: [
          { name: "LARC法", formula: "听→认同→回应→确认", chapter: "第7章" },
          { name: "自曝其短", formula: "主动说缺点建立信任", chapter: "第5章" },
          { name: "价值重构", formula: "把价格转化为每天成本", chapter: "第7章" },
          { name: "砍价四心法", formula: "稳→灵活→真诚→体谅", chapter: "第7章" }
        ]
      },
      {
        name: "客户筛选",
        items: [
          { name: "BANT法则", formula: "预算+决策权+需求+时间", chapter: "第4章" },
          { name: "三圈法", formula: "强关系/中关系/弱关系", chapter: "第4章" },
          { name: "红绿灯信号", formula: "绿灯成交/黄灯处理/红灯放弃", chapter: "第7章" }
        ]
      },
      {
        name: "谈判技巧",
        items: [
          { name: "哈佛谈判法", formula: "分离人和问题，关注利益而非立场", chapter: "第9章" },
          { name: "BATNA", formula: "知道自己的最佳替代方案", chapter: "第9章" },
          { name: "价值交换", formula: "降价要换条件", chapter: "第9章" },
          { name: "锚定效应", formula: "先报高价再让步", chapter: "第9章" }
        ]
      },
      {
        name: "状态管理",
        items: [
          { name: "4-7-8呼吸法", formula: "吸4秒→屏7秒→呼8秒", chapter: "第1章" },
          { name: "超人姿势", formula: "叉腰站立2分钟", chapter: "第1章" },
          { name: "穿脱防护仪式", formula: "上班穿/下班脱", chapter: "第3章" },
          { name: "3分钟重启", formula: "走动+喝水+看窗外+开心画面", chapter: "第3章" },
          { name: "5-4-3-2-1接地法", formula: "看5+触4+听3+闻2+尝1", chapter: "第1章" }
        ]
      }
    ]
  },

  // ==================== 反馈回路 ====================
  feedback: {
    id: 'feedback',
    title: "反馈回路",
    subtitle: "复盘与进化",
    icon: RefreshCw,
    color: "purple",
    
    modules: [
      {
        id: "diagnosis",
        name: "故障诊断决策树",
        purpose: "成交失败时，快速定位问题",
        tree: [
          { problem: "找不到客户", station: "流量站", check: "三圈是否画好？获客渠道是否足够？", solution: "扩大三圈，每天加3个人" },
          { problem: "客户不信任我", station: "连接站", check: "是否做了全息倾听？是否太自我导向？", solution: "少说多听，用SPIN提问" },
          { problem: "客户说不需要", station: "方案站", check: "是否用了FABE？是否场景化？", solution: "重新挖掘需求，用故事重新呈现" },
          { problem: "客户说考虑一下", station: "成交站", check: "是否处理了异议？是否抓住了成交信号？", solution: "用LARC处理，用假设成交法" },
          { problem: "成交后客户不满", station: "交付站", check: "是否做了惊喜交付？是否回访？", solution: "改进交付流程，增加接触点" },
          { problem: "以上都对但还是失败", station: "内循环", check: "状态是否好？信念是否稳？能量是否足？", solution: "回到内循环调整状态" }
        ]
      },
      {
        id: "emotionTranslation",
        name: "情绪-需求翻译系统",
        purpose: "理解客户和自己的真实需求",
        customerVersion: {
          title: "客户版：他说X，真实需求是Y",
          translations: [
            { says: "太贵了", needs: "我需要看到更多价值 / 我需要一个借口说服自己" },
            { says: "我再考虑一下", needs: "我还有顾虑没说出来 / 我需要更多安全感" },
            { says: "我要问问XX", needs: "我不是决策者 / 我需要别人的认可" },
            { says: "你们和XX有什么区别", needs: "我需要一个选择你的理由" },
            { says: "以后再说吧", needs: "我现在没有紧迫感 / 你没有打动我" },
            { says: "我不需要", needs: "我不了解这个对我有什么用 / 你没有找到我的痛点" }
          ]
        },
        salesVersion: {
          title: "销售员版：我感到X，我需要Y",
          translations: [
            { feel: "被拒绝后很沮丧", need: "我需要知道这不代表我不好" },
            { feel: "害怕打电话", need: "我需要降低期望，只把它当练习" },
            { feel: "觉得产品不够好", need: "我需要重新找到产品的价值" },
            { feel: "想放弃", need: "我需要回到意义，记住为什么开始" },
            { feel: "和客户比觉得自卑", need: "我需要记住我们是平等的价值交换" }
          ]
        }
      },
      {
        id: "selfCare",
        name: "自我关怀完整流程",
        purpose: "照顾好自己，才能照顾好客户",
        flows: [
          {
            trigger: "被拒绝后",
            title: "被拒绝后的5步疗愈",
            steps: [
              { step: 1, action: "暂停：不要立刻打下一个电话" },
              { step: 2, action: "呼吸：做4-7-8呼吸" },
              { step: 3, action: "重构：「这是筛选，不是否定我」" },
              { step: 4, action: "行动：站起来走动，喝杯水" },
              { step: 5, action: "继续：准备好了再继续" }
            ]
          },
          {
            trigger: "道德怀疑时",
            title: "道德怀疑时的自我对话",
            steps: [
              { step: 1, action: "我卖的东西真的能帮到人吗？（回看良心自检卡）" },
              { step: 2, action: "我是在帮助还是在操纵？（检查是否有夸大）" },
              { step: 3, action: "如果答案是正面的，继续；如果有疑虑，先解决疑虑" }
            ]
          },
          {
            trigger: "想放弃时",
            title: "想放弃时的意义回归",
            steps: [
              { step: 1, action: "拿出你写的意义锚点" },
              { step: 2, action: "问：我为什么开始做这个？" },
              { step: 3, action: "问：如果我放弃了，3年后会后悔吗？" },
              { step: 4, action: "给自己一个期限：再坚持30天，然后再决定" },
              { step: 5, action: "找一个同行或导师聊聊" }
            ]
          }
        ]
      }
    ]
  },

  // ==================== 实战案例 ====================
  cases: {
    id: 'cases',
    title: "综合实战案例",
    subtitle: "看系统如何运作",
    icon: BookMarked,
    color: "orange",
    
    caseList: [
      {
        id: 1,
        title: "新手的第一单",
        tags: ["新手", "完整流程", "成功"],
        scenario: "刚入行的小王，要向一个陌生客户推荐保险",
        challenge: "紧张、不知道说什么、怕被拒绝",
        
        systemApplication: {
          innerLoop: [
            "【身体层】出发前做4-7-8呼吸，做超人姿势2分钟",
            "【信念层】过良心自检卡：这个保险我自己买了，真的有用",
            "【能量层】想象穿上防护服：今天任何拒绝都伤不到我"
          ],
          outerLoop: [
            "【流量】这是中关系圈的客户，朋友介绍的",
            "【连接】先聊家常，用全息倾听了解他的家庭情况和担忧",
            "【方案】用FABE：这个保险（特点）比普通的保障全面（优势），意味着您全家都有保障（利益），这是理赔案例（证据）",
            "【成交】客户问价格后（绿灯信号），用假设成交法：「您看是选基础版还是升级版？」",
            "【交付】成交后手写感谢卡，3天后回访"
          ]
        },
        
        result: "成交了！小王第一次感受到：原来销售可以不那么痛苦",
        lesson: "内循环稳定 + 外循环流畅 = 自然成交"
      },
      {
        id: 2,
        title: "被拒绝100次后崩溃",
        tags: ["心态", "恢复", "生存期"],
        scenario: "小李连续被拒绝100次，开始怀疑人生",
        challenge: "自我怀疑、想放弃、能量耗尽",
        
        systemApplication: {
          diagnosis: "问题不在外循环（技巧），在内循环（状态）",
          recovery: [
            "【第1步】允许崩溃：找个安全的地方哭一场",
            "【第2步】身体照顾：休息一天，好好吃饭睡觉",
            "【第3步】重建信念：回看良心自检卡，确认产品是好的",
            "【第4步】意义回归：重读意义锚点，记住为什么开始",
            "【第5步】降低目标：不求成交，只求每天打3个电话",
            "【第6步】找支持：和导师聊聊，找同行伙伴"
          ]
        },
        
        result: "休息3天后重新出发，2周后成交了第一单",
        lesson: "崩溃是正常的，关键是有系统地恢复"
      },
      {
        id: 3,
        title: "道德困境：60分产品",
        tags: ["道德", "信念", "真诚"],
        scenario: "公司的产品不是最好的，但客户似乎很需要",
        challenge: "内心不确定：我该不该卖？",
        
        systemApplication: {
          beliefCheck: [
            "【良心自检】这个产品能解决他的核心需求吗？→ 能",
            "【60分处理】主动告诉客户：「坦白说，XX公司的功能更全，但如果您预算有限，我们能保障您最核心的需求」",
            "【让客户选择】「您觉得哪个更重要？」"
          ]
        },
        
        result: "客户选择了我们的产品，因为感受到了真诚",
        lesson: "真诚比完美更重要，客户买的是信任"
      },
      {
        id: 4,
        title: "客户说「考虑一下」就消失",
        tags: ["跟进", "异议处理", "黄灯"],
        scenario: "谈得很好，但客户说考虑一下，然后就不回消息了",
        challenge: "不知道怎么跟进，怕打扰客户",
        
        systemApplication: {
          analysis: "用情绪翻译：「考虑一下」= 「我还有顾虑没说出来」",
          action: [
            "【第1步】反思：我是不是没有处理完他的异议？",
            "【第2步】跟进】发一条消息：「张总，您考虑得怎么样了？如果有任何问题，随时问我」",
            "【第3步】价值输出】过几天发一个相关资讯：「张总，看到这个对您可能有用」",
            "【第4步】再次跟进】「张总，上次聊的事您考虑得怎样？有什么我能帮忙解答的吗？」"
          ]
        },
        
        result: "客户回复了，原来是担心售后。解决顾虑后成交",
        lesson: "「考虑一下」不是终点，是需要更多跟进"
      },
      {
        id: 5,
        title: "高手瓶颈期",
        tags: ["生态期", "意义", "成长"],
        scenario: "做了3年销售，业绩稳定，但感到无聊和迷茫",
        challenge: "赚到钱了，但不知道然后呢",
        
        systemApplication: {
          diagnosis: "已经进入生态期，需要新的意义",
          options: [
            "【选项1：升级意义】从「卖产品」到「改变行业」",
            "【选项2：转型】从销售转管理，带团队",
            "【选项3：离开】如果这个领域不再让你兴奋，也许该换跑道了"
          ]
        },
        
        result: "选择了带团队，找到了新的使命感",
        lesson: "销售不是终点，是一个阶段"
      }
    ]
  },

  // ==================== 记忆卡片 ====================
  memoryCards: [
    // 核心理念（10张）
    { id: 1, category: "核心理念", q: "销售的本质是什么？", a: "发现需求 → 匹配价值 → 建立信任 → 促成交易", difficulty: 1 },
    { id: 2, category: "核心理念", q: "客户买的是什么？", a: "不是产品，是「改变」（从问题到解决）", difficulty: 1 },
    { id: 3, category: "核心理念", q: "销售的三种意义？", a: "生存意义 → 成长意义 → 使命意义", difficulty: 2 },
    { id: 4, category: "核心理念", q: "什么是微意义？", a: "今天帮一个人就够了", difficulty: 2 },
    { id: 5, category: "核心理念", q: "内循环和外循环的关系？", a: "内循环是准备系统，外循环是行动系统，内循环不稳外循环会崩", difficulty: 2 },
    
    // 系统结构（5张）
    { id: 6, category: "系统结构", q: "内循环三层是什么？", a: "身体层 → 信念层 → 能量层", difficulty: 1 },
    { id: 7, category: "系统结构", q: "外循环五站是什么？", a: "流量 → 连接 → 方案 → 成交 → 交付", difficulty: 1 },
    { id: 8, category: "系统结构", q: "三阶段是什么？", a: "生存期(0-3月) → 成长期(3-12月) → 生态期(12月+)", difficulty: 1 },
    { id: 9, category: "系统结构", q: "外循环每站的意义？", a: "流量找人、连接建信任、方案呈价值、成交促决策、交付保口碑", difficulty: 2 },
    { id: 10, category: "系统结构", q: "什么是反馈回路？", a: "故障诊断+情绪翻译+自我关怀，用于复盘和进化", difficulty: 2 },
    
    // 身体层（5张）
    { id: 11, category: "身体层", q: "4-7-8呼吸法怎么做？", a: "吸气4秒 → 屏住7秒 → 呼气8秒 → 重复3次", difficulty: 1 },
    { id: 12, category: "身体层", q: "超人姿势怎么做？", a: "双手叉腰，挺胸抬头，保持2分钟", difficulty: 1 },
    { id: 13, category: "身体层", q: "恐惧的本质是什么？", a: "不是性格缺陷，是杏仁核的生理本能", difficulty: 2 },
    { id: 14, category: "身体层", q: "5秒重启法的步骤？", a: "站起来→深呼吸→说「这是筛选不是否定」→喝水→动一动", difficulty: 2 },
    { id: 15, category: "身体层", q: "5-4-3-2-1接地法？", a: "看5个+触4个+听3个+闻2个+尝1个", difficulty: 2 },
    
    // 信念层（5张）
    { id: 16, category: "信念层", q: "良心自检卡三问？", a: "自己会用吗？推荐给妈妈吗？3年后客户会感谢吗？", difficulty: 1 },
    { id: 17, category: "信念层", q: "医生心态是什么？", a: "我是来给方案的，不是来乞讨的", difficulty: 1 },
    { id: 18, category: "信念层", q: "60分产品怎么处理？", a: "坦诚说缺点，强调核心价值，让客户选择", difficulty: 2 },
    { id: 19, category: "信念层", q: "信任公式？", a: "信任 = (专业度×可靠度×亲密度) ÷ 自我导向", difficulty: 3 },
    { id: 20, category: "信念层", q: "如何破除金钱羞耻？", a: "报价时声音大、语速稳、看着对方", difficulty: 2 },
    
    // 能量层（4张）
    { id: 21, category: "能量层", q: "太阳vs黑洞？", a: "太阳散发正能量吸引人，黑洞散发负能量让人逃离", difficulty: 1 },
    { id: 22, category: "能量层", q: "穿脱防护仪式？", a: "上班想象穿上防护服，下班想象脱下它", difficulty: 1 },
    { id: 23, category: "能量层", q: "被骂哭后第一步？", a: "离开现场，找安全的地方", difficulty: 1 },
    { id: 24, category: "能量层", q: "3分钟能量重启步骤？", a: "走动→喝水→看窗外→想开心画面→深呼吸→继续", difficulty: 2 },
    
    // 流量站（4张）
    { id: 25, category: "流量站", q: "三圈法是什么？", a: "强关系圈 → 中关系圈 → 弱关系圈", difficulty: 1 },
    { id: 26, category: "流量站", q: "BANT代表什么？", a: "Budget预算 + Authority决策权 + Need需求 + Timeline时间", difficulty: 1 },
    { id: 27, category: "流量站", q: "社交破冰公式？", a: "赞美 + 好奇 + 请教", difficulty: 1 },
    { id: 28, category: "流量站", q: "BANT不合格怎么办？", a: "不要在不合格的人身上浪费时间", difficulty: 2 },
    
    // 连接站（5张）
    { id: 29, category: "连接站", q: "全息倾听三层？", a: "听内容 → 听情绪 → 听需求", difficulty: 1 },
    { id: 30, category: "连接站", q: "实在人战术？", a: "主动说出产品缺点，建立信任", difficulty: 1 },
    { id: 31, category: "连接站", q: "SPIN四步？", a: "Situation现状 → Problem难点 → Implication影响 → Need-payoff价值", difficulty: 2 },
    { id: 32, category: "连接站", q: "去自我导向怎么做？", a: "把「我」换成「您」，把「卖」换成「帮」", difficulty: 2 },
    { id: 33, category: "连接站", q: "客户说「再考虑」的真实需求？", a: "还有顾虑没说出来，需要更多安全感", difficulty: 2 },
    
    // 方案站（4张）
    { id: 34, category: "方案站", q: "FABE代表什么？", a: "Feature特点 → Advantage优势 → Benefit利益 → Evidence证据", difficulty: 1 },
    { id: 35, category: "方案站", q: "场景化植入怎么做？", a: "用「想象一下」「到时候」开头，让客户看见未来", difficulty: 2 },
    { id: 36, category: "方案站", q: "故事销售法结构？", a: "背景 → 问题 → 解决 → 结果", difficulty: 2 },
    { id: 37, category: "方案站", q: "FABE最重要的是哪个？", a: "B（利益），客户只关心对自己的好处", difficulty: 2 },
    
    // 成交站（6张）
    { id: 38, category: "成交站", q: "三明治报价法？", a: "价值 + 价格 + 价值对比", difficulty: 1 },
    { id: 39, category: "成交站", q: "假设成交法？", a: "假设已成交，直接问细节（刷卡还是转账？）", difficulty: 1 },
    { id: 40, category: "成交站", q: "LARC异议处理？", a: "Listen听 → Acknowledge认同 → Respond回应 → Confirm确认", difficulty: 1 },
    { id: 41, category: "成交站", q: "红绿灯信号？", a: "绿灯(问细节)→成交 | 黄灯(有疑虑)→处理 | 红灯(不需要)→放弃", difficulty: 2 },
    { id: 42, category: "成交站", q: "砍价四心法？", a: "稳住自己 → 灵活应对 → 真诚有度 → 体谅客户", difficulty: 2 },
    { id: 43, category: "成交站", q: "二选一成交法？", a: "给两个选项，都是「买」", difficulty: 1 },
    
    // 交付站（3张）
    { id: 44, category: "交付站", q: "峰终定律？", a: "人们记住的是「最高峰」和「结尾」的体验", difficulty: 2 },
    { id: 45, category: "交付站", q: "什么时候要转介绍？", a: "客户最满意的时候（通常是交付后3-7天）", difficulty: 2 },
    { id: 46, category: "交付站", q: "惊喜交付可以做什么？", a: "早到、小礼物、手写卡、主动回访", difficulty: 2 },
    
    // 三阶段（4张）
    { id: 47, category: "三阶段", q: "生存期的核心任务？", a: "不求成交，只求不崩溃", difficulty: 1 },
    { id: 48, category: "三阶段", q: "成长期的核心任务？", a: "优化外循环，找到自己的节奏", difficulty: 1 },
    { id: 49, category: "三阶段", q: "生态期的标志？", a: "50%以上来自转介绍", difficulty: 1 },
    { id: 50, category: "三阶段", q: "生存期最低标准？", a: "每天打3个电话（不要求结果）", difficulty: 1 },
    
    // 心法（5张）
    { id: 51, category: "心法", q: "生存期心法？", a: "活下去，熬过去", difficulty: 1 },
    { id: 52, category: "心法", q: "成长期心法？", a: "慢慢来，比较快", difficulty: 1 },
    { id: 53, category: "心法", q: "成交的最高境界？", a: "优雅的成交是进退有度，不是步步紧逼", difficulty: 2 },
    { id: 54, category: "心法", q: "身体层心法？", a: "恐惧是信号，不是命令", difficulty: 1 },
    { id: 55, category: "心法", q: "信念层心法？", a: "守住底线，你才自由", difficulty: 1 },
    
    // 情绪翻译（4张）
    { id: 56, category: "情绪翻译", q: "客户说「太贵了」的真实需求？", a: "需要看到更多价值 / 需要借口说服自己", difficulty: 2 },
    { id: 57, category: "情绪翻译", q: "客户说「要问问XX」的真实需求？", a: "我不是决策者 / 需要别人的认可", difficulty: 2 },
    { id: 58, category: "情绪翻译", q: "我害怕打电话，我需要什么？", a: "降低期望，只把它当练习", difficulty: 2 },
    { id: 59, category: "情绪翻译", q: "我想放弃，我需要什么？", a: "回到意义，记住为什么开始", difficulty: 2 },
    
    // 紧急情况（3张）
    { id: 60, category: "紧急SOS", q: "被拒绝后第一步？", a: "停下来，做4-7-8呼吸", difficulty: 1 },
    { id: 61, category: "紧急SOS", q: "连续0业绩怎么办？", a: "先检查内循环状态，降低目标到行动目标", difficulty: 2 },
    { id: 62, category: "紧急SOS", q: "想放弃怎么办？", a: "回到意义锚点，给自己30天期限", difficulty: 2 }
  ],

  // ==================== 每日练习 ====================
  dailyPractice: {
    threeQuestions: [
      { time: "早上", question: "今天我想帮助谁？", purpose: "意义锚定" },
      { time: "中午", question: "今天我学到了什么？", purpose: "成长记录" },
      { time: "晚上", question: "今天我可以为自己庆祝什么？", purpose: "自我肯定" }
    ],
    
    weeklyReview: [
      "这周我接触了多少潜在客户？",
      "有多少进入了下一阶段？卡在哪里？",
      "成交的单子，关键是什么？",
      "没成交的单子，问题在哪？",
      "下周我要改进什么？"
    ]
  },

  // ==================== 21天修炼计划 ====================
  twentyOneDayPlan: {
    title: "21天修炼计划",
    weeks: [
      {
        week: "第1周：内功修炼",
        theme: "打好基础",
        days: [
          { day: 1, task: "写下你的意义锚点（为什么做销售）", category: "意义", duration: "15分钟" },
          { day: 2, task: "练习4-7-8呼吸法，至少3次", category: "身体", duration: "10分钟" },
          { day: 3, task: "做超人姿势2分钟，感受能量变化", category: "身体", duration: "5分钟" },
          { day: 4, task: "用良心自检卡检查你的产品", category: "信念", duration: "10分钟" },
          { day: 5, task: "练习晨间激活仪式", category: "能量", duration: "10分钟" },
          { day: 6, task: "写下10个你能帮客户解决的问题", category: "价值", duration: "15分钟" },
          { day: 7, task: "休息，复盘这一周", category: "复盘", duration: "20分钟" }
        ]
      },
      {
        week: "第2周：基本功练习",
        theme: "掌握技能",
        days: [
          { day: 8, task: "画出你的三圈流量图", category: "流量", duration: "20分钟" },
          { day: 9, task: "练习社交破冰公式（赞美+好奇+请教）", category: "连接", duration: "15分钟" },
          { day: 10, task: "用SPIN问一个朋友4个问题", category: "连接", duration: "15分钟" },
          { day: 11, task: "用FABE写你的产品介绍", category: "方案", duration: "20分钟" },
          { day: 12, task: "练习三明治报价法", category: "成交", duration: "15分钟" },
          { day: 13, task: "练习LARC处理「太贵了」", category: "成交", duration: "15分钟" },
          { day: 14, task: "休息，复盘这一周", category: "复盘", duration: "20分钟" }
        ]
      },
      {
        week: "第3周：实战演练",
        theme: "真刀真枪",
        days: [
          { day: 15, task: "加3个新的微信好友", category: "流量", duration: "30分钟" },
          { day: 16, task: "和1个人进行一次完整对话", category: "连接", duration: "30分钟" },
          { day: 17, task: "打1个销售电话", category: "实战", duration: "20分钟" },
          { day: 18, task: "约见1个潜在客户", category: "实战", duration: "60分钟" },
          { day: 19, task: "用系统复盘这次接触", category: "复盘", duration: "20分钟" },
          { day: 20, task: "改进并再次实践", category: "实战", duration: "30分钟" },
          { day: 21, task: "写下21天总结和下一步计划", category: "总结", duration: "30分钟" }
        ]
      }
    ]
  }
};

// ====================================================================
// 主应用组件
// ====================================================================

export default function SalesGrowthSystemUltimate() {
  // ============ 状态管理 ============
  const [view, setView] = useState('home');
  const [subView, setSubView] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 记忆卡片状态
  const [cardMode, setCardMode] = useState('browse');
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardCategory, setCardCategory] = useState('all');
  const [shuffledCards, setShuffledCards] = useState([]);
  const [masteredCards, setMasteredCards] = useState([]);
  
  // 21天计划状态
  const [dayProgress, setDayProgress] = useState({});
  
  // 进度和笔记状态
  const [completedItems, setCompletedItems] = useState([]);
  const [notes, setNotes] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  
  // 每日三问状态
  const [dailyAnswers, setDailyAnswers] = useState({});

  // ============ 持久化 ============
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('salesSystemUltimate');
      if (saved) {
        const data = JSON.parse(saved);
        setCompletedItems(data.completedItems || []);
        setNotes(data.notes || {});
        setBookmarks(data.bookmarks || []);
        setDayProgress(data.dayProgress || {});
        setMasteredCards(data.masteredCards || []);
        setDailyAnswers(data.dailyAnswers || {});
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('salesSystemUltimate', JSON.stringify({
        completedItems, notes, bookmarks, dayProgress, masteredCards, dailyAnswers
      }));
    }
  }, [completedItems, notes, bookmarks, dayProgress, masteredCards, dailyAnswers]);

  // ============ 导航配置 ============
  const navItems = [
    { id: 'home', name: '首页', icon: Home },
    { id: 'meaning', name: '意义层', icon: Compass },
    { id: 'inner', name: '内循环', icon: Brain },
    { id: 'outer', name: '外循环', icon: Users },
    { id: 'stages', name: '三阶段', icon: TrendingUp },
    { id: 'feedback', name: '反馈回路', icon: RefreshCw },
    { id: 'cases', name: '实战案例', icon: BookMarked },
    { id: 'techniques', name: '技法库', icon: Layers },
    { id: 'cards', name: '记忆训练', icon: Brain },
    { id: 'plan', name: '21天计划', icon: Calendar },
    { id: 'daily', name: '每日练习', icon: Coffee }
  ];

  // ============ 工具函数 ============
  const toggleComplete = (id) => {
    setCompletedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const saveNote = (id, text) => {
    setNotes(prev => ({ ...prev, [id]: text }));
  };

  const toggleDayComplete = (day) => {
    setDayProgress(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const filteredCards = useMemo(() => {
    if (cardCategory === 'all') return SYSTEM_DATA.memoryCards;
    return SYSTEM_DATA.memoryCards.filter(c => c.category === cardCategory);
  }, [cardCategory]);

  const shuffleCards = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCardIndex(0);
    setShowAnswer(false);
    setCardMode('quiz');
  };

  const cardCategories = useMemo(() => {
    const cats = new Set(SYSTEM_DATA.memoryCards.map(c => c.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const currentCards = cardMode === 'quiz' ? shuffledCards : filteredCards;

  // 计算进度
  const totalProgress = useMemo(() => {
    const total = SYSTEM_DATA.memoryCards.length + 21;
    const completed = masteredCards.length + Object.values(dayProgress).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  }, [masteredCards, dayProgress]);

  // ============ 渲染：首页 ============
  const renderHome = () => (
    <div className="space-y-6">
      {/* Hero区域 */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">销售成长系统</h1>
              <p className="text-indigo-200">从恐惧到自信的完整地图</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-4">
            <p className="text-lg">💡 {SYSTEM_DATA.meaning.coreQuestion}</p>
          </div>

          {/* 进度条 */}
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex justify-between text-sm mb-2">
              <span>学习进度</span>
              <span>{totalProgress}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-500" style={{ width: `${totalProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 系统架构图 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-indigo-500" />
          系统架构
        </h2>
        
        <div className="space-y-4">
          {/* 意义层 */}
          <button onClick={() => setView('meaning')} className="w-full p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl text-left hover:shadow-md transition-all group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">第0章：意义锚点</h3>
                <p className="text-sm text-amber-600">你为什么做销售？</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* 双循环 */}
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setView('inner')} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl text-left hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">内循环</h3>
              <p className="text-xs text-blue-600">身体→信念→能量</p>
            </button>
            
            <button onClick={() => setView('outer')} className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl text-left hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">外循环</h3>
              <p className="text-xs text-emerald-600">流量→连接→方案→成交→交付</p>
            </button>
          </div>

          {/* 三阶段 */}
          <button onClick={() => setView('stages')} className="w-full p-4 bg-gradient-to-r from-rose-50 via-amber-50 to-emerald-50 border-2 border-gray-200 rounded-xl text-left hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-gray-700" />
              <div>
                <h3 className="font-bold text-gray-900">三阶段螺旋</h3>
                <p className="text-sm text-gray-500">生存期 → 成长期 → 生态期</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* 核心理念 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">核心理念</h2>
        <div className="space-y-3">
          {[
            { icon: Heart, text: "客户不买产品，买的是「改变」", color: "rose" },
            { icon: Users, text: "客户从「信任的人」买，不从陌生人买", color: "blue" },
            { icon: Target, text: "你不是在「要钱」，是在「交换价值」", color: "emerald" }
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-3 p-3 bg-${item.color}-50 rounded-xl`}>
              <item.icon className={`w-5 h-5 text-${item.color}-500`} />
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 快捷功能 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { id: 'cards', name: '记忆训练', icon: Brain, color: 'purple', desc: `${SYSTEM_DATA.memoryCards.length}张卡片` },
          { id: 'plan', name: '21天计划', icon: Calendar, color: 'green', desc: '系统学习' },
          { id: 'cases', name: '实战案例', icon: BookMarked, color: 'orange', desc: '5个案例' },
          { id: 'techniques', name: '技法速查', icon: Layers, color: 'blue', desc: '20+技法' }
        ].map(item => (
          <button key={item.id} onClick={() => setView(item.id)} className={`p-4 rounded-xl border-2 hover:shadow-md transition-all text-left bg-${item.color}-50 border-${item.color}-200`}>
            <item.icon className={`w-7 h-7 text-${item.color}-500 mb-2`} />
            <p className="font-bold text-gray-900 text-sm">{item.name}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </button>
        ))}
      </div>

      {/* 每日心法 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white">
        <p className="text-sm text-indigo-200 mb-2">今日心法</p>
        <p className="text-xl font-medium">{SYSTEM_DATA.meaning.mantra}</p>
      </div>
    </div>
  );

  // ============ 渲染：意义层 ============
  const renderMeaning = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.meaning.title}</h1>
        <p className="text-amber-100">{SYSTEM_DATA.meaning.subtitle}</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-lg text-amber-800 font-medium">"{SYSTEM_DATA.meaning.coreQuestion}"</p>
      </div>

      {/* 三种意义 */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">三种销售的意义</h3>
        <div className="space-y-4">
          {SYSTEM_DATA.meaning.sections[0].content.map((item, idx) => (
            <div key={idx} className="p-4 border rounded-xl hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${idx === 0 ? 'bg-gray-100 text-gray-600' : idx === 1 ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                  {item.stage}
                </span>
                <h4 className="font-bold text-gray-900">{item.level}</h4>
              </div>
              <p className="text-gray-600 mb-2">"{item.description}"</p>
              {item.problem && <p className="text-sm text-red-600 bg-red-50 p-2 rounded">⚠️ {item.problem}</p>}
              {item.upgrade && <p className="text-sm text-green-600 bg-green-50 p-2 rounded mt-2">✨ {item.upgrade}</p>}
              {item.value && <p className="text-sm text-blue-600 bg-blue-50 p-2 rounded">💡 {item.value}</p>}
              {item.power && <p className="text-sm text-amber-600 bg-amber-50 p-2 rounded">⚡ {item.power}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* 微意义 */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-3">🌟 {SYSTEM_DATA.meaning.sections[1].title}</h3>
        <p className="text-gray-600 mb-3">{SYSTEM_DATA.meaning.sections[1].description}</p>
        <div className="p-4 bg-amber-50 rounded-xl">
          <p className="text-amber-800 font-medium">{SYSTEM_DATA.meaning.sections[1].practice}</p>
        </div>
      </div>

      {/* 自检卡 */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📝 意义自检卡</h3>
        <div className="space-y-4">
          {SYSTEM_DATA.meaning.sections[2].questions.map((item, idx) => (
            <div key={idx} className="border rounded-xl p-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-sm text-amber-600 flex-shrink-0">{idx + 1}</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.q}</p>
                  <p className="text-sm text-gray-500">{item.hint}</p>
                </div>
              </div>
              <textarea 
                className="w-full p-3 border rounded-lg text-sm resize-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                rows={2}
                placeholder="写下你的答案..."
                value={notes[`meaning-q-${idx}`] || ''}
                onChange={(e) => saveNote(`meaning-q-${idx}`, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 练习 */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 练习</h3>
        <div className="space-y-3">
          {SYSTEM_DATA.meaning.exercises.map((ex, idx) => (
            <div key={idx} className="border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{ex.name}</h4>
                <span className="text-sm text-gray-500">{ex.duration}</span>
              </div>
              <div className="space-y-1">
                {ex.steps.map((step, sIdx) => (
                  <p key={sIdx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-xs text-amber-600 flex-shrink-0">{sIdx + 1}</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 心法 */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 text-white text-center">
        <p className="text-lg font-medium">🎯 {SYSTEM_DATA.meaning.mantra}</p>
      </div>
    </div>
  );

  // ============ 渲染：内循环 ============
  const renderInnerLoop = () => {
    if (selectedItem) {
      const station = selectedItem;
      return (
        <div className="space-y-6">
          <button onClick={() => setSelectedItem(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回内循环
          </button>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
            <p className="text-blue-200 text-sm mb-1">{station.chapter}</p>
            <h1 className="text-2xl font-bold">{station.name}</h1>
            <p className="text-blue-100">{station.subtitle}</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 font-medium">💡 {station.coreInsight}</p>
          </div>

          {/* 为什么重要 */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">为什么重要？</h3>
            <p className="text-gray-600 mb-3">{station.why}</p>
            {station.science && (
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">🧠 科学解释：{station.science}</p>
              </div>
            )}
          </div>

          {/* 工具箱 */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-4">🛠 工具箱</h3>
            <div className="space-y-4">
              {station.tools.map((tool, idx) => (
                <div key={idx} className="border rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900">{tool.name}</h4>
                      {tool.subtitle && <p className="text-sm text-gray-500">{tool.subtitle}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      {tool.time && <span className="text-xs px-2 py-1 bg-gray-100 rounded">{tool.time}</span>}
                      <button onClick={() => toggleComplete(`${station.id}-tool-${idx}`)} className="p-1">
                        {completedItems.includes(`${station.id}-tool-${idx}`) 
                          ? <CheckCircle className="w-6 h-6 text-green-500" />
                          : <Circle className="w-6 h-6 text-gray-300 hover:text-gray-400" />}
                      </button>
                    </div>
                  </div>
                  
                  {tool.when && <p className="text-sm text-blue-600 mb-2">⏰ 使用时机：{tool.when}</p>}
                  
                  {tool.steps && (
                    <div className="space-y-2 mb-3">
                      {tool.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                          <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-600 flex-shrink-0">{step.step || sIdx + 1}</span>
                          <div>
                            <span className="text-sm text-gray-700">{step.action || step}</span>
                            {step.detail && <span className="text-sm text-gray-500 ml-1">- {step.detail}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {tool.questions && (
                    <div className="space-y-2 mb-3">
                      {tool.questions.map((q, qIdx) => (
                        <div key={qIdx} className="flex items-center gap-2 p-2 bg-amber-50 rounded-lg">
                          <span className="text-amber-600">Q{qIdx + 1}:</span>
                          <span className="text-sm text-gray-700">{q.q || q}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {tool.science && <p className="text-sm text-gray-500 p-2 bg-gray-50 rounded-lg mb-2">🧠 {tool.science}</p>}
                  {tool.tips && (
                    <div className="space-y-1">
                      {tool.tips.map((tip, tIdx) => (
                        <p key={tIdx} className="text-sm text-green-600">💡 {tip}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 常见问题 */}
          {station.commonProblems && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">❓ 常见问题诊断</h3>
              <div className="space-y-3">
                {station.commonProblems.map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                    <p className="font-medium text-red-600 mb-2">🔴 {item.problem}</p>
                    <p className="text-sm text-gray-500 mb-1">诊断：{item.diagnosis}</p>
                    <p className="text-sm text-green-600">✅ 解决：{item.solution}</p>
                    {item.prevention && <p className="text-sm text-blue-600 mt-1">🛡 预防：{item.prevention}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 心法 */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 text-white text-center">
            <p className="text-lg font-medium">🎯 {station.mantra}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.innerLoop.title}</h1>
          <p className="text-blue-100">{SYSTEM_DATA.innerLoop.description}</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-blue-800">{SYSTEM_DATA.innerLoop.overview.concept}</p>
        </div>

        <div className="space-y-4">
          {SYSTEM_DATA.innerLoop.stations.map(station => (
            <button key={station.id} onClick={() => setSelectedItem(station)} className="w-full bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all text-left group">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-${station.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <station.icon className={`w-7 h-7 text-${station.color}-600`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{station.chapter}</p>
                  <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
                  <p className="text-gray-500 mb-2">{station.subtitle}</p>
                  <p className="text-blue-600 text-sm">{station.coreInsight}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // ============ 渲染：外循环 ============
  const renderOuterLoop = () => {
    if (selectedItem) {
      const station = selectedItem;
      return (
        <div className="space-y-6">
          <button onClick={() => setSelectedItem(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回外循环
          </button>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
            <p className="text-emerald-200 text-sm mb-1">{station.chapter}</p>
            <h1 className="text-2xl font-bold">{station.name}</h1>
            <p className="text-emerald-100">{station.subtitle}</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-emerald-800 font-medium">💡 {station.coreInsight}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">为什么重要？</h3>
            <p className="text-gray-600">{station.why}</p>
          </div>

          {/* 工具箱 */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-4">🛠 核心工具</h3>
            <div className="space-y-4">
              {station.tools.map((tool, idx) => (
                <div key={idx} className="border rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900">{tool.name}</h4>
                      {tool.subtitle && <p className="text-sm text-gray-500">{tool.subtitle}</p>}
                    </div>
                    <button onClick={() => toggleComplete(`${station.id}-tool-${idx}`)} className="p-1">
                      {completedItems.includes(`${station.id}-tool-${idx}`) 
                        ? <CheckCircle className="w-6 h-6 text-green-500" />
                        : <Circle className="w-6 h-6 text-gray-300" />}
                    </button>
                  </div>

                  {/* BANT/SPIN/FABE/LARC 等结构化内容 */}
                  {tool.criteria && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {tool.criteria.map((c, cIdx) => (
                        <div key={cIdx} className="p-3 bg-emerald-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-emerald-600">{c.letter}</span>
                            <span className="font-medium text-gray-900">{c.chinese}</span>
                          </div>
                          <p className="text-xs text-gray-600">{c.question}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {tool.structure && Array.isArray(tool.structure) && (
                    <div className="space-y-2 mb-3">
                      {tool.structure.map((item, sIdx) => (
                        <div key={sIdx} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-emerald-600">{item.letter}</span>
                            <span className="font-medium">{item.word}</span>
                            <span className="text-gray-500">({item.chinese})</span>
                          </div>
                          {item.meaning && <p className="text-sm text-gray-600 mt-1">{item.meaning}</p>}
                          {item.example && <p className="text-sm text-gray-500 mt-1">例：{item.example}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {tool.steps && (
                    <div className="space-y-2 mb-3">
                      {tool.steps.map((step, sIdx) => (
                        <div key={sIdx} className="p-2 bg-gray-50 rounded-lg flex items-start gap-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs text-emerald-600 flex-shrink-0">
                            {step.letter || step.step || sIdx + 1}
                          </span>
                          <div>
                            <span className="font-medium text-gray-900">{step.word || step.name || step.action}</span>
                            {step.chinese && <span className="text-gray-500 ml-1">({step.chinese})</span>}
                            {step.action && step.word && <p className="text-sm text-gray-600">{step.action}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {tool.circles && (
                    <div className="space-y-2 mb-3">
                      {tool.circles.map((circle, cIdx) => (
                        <div key={cIdx} className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900 mb-1">{circle.name}</p>
                          <p className="text-sm text-gray-600">对象：{circle.who}</p>
                          <p className="text-sm text-emerald-600">方法：{circle.method}</p>
                          <p className="text-sm text-orange-600">注意：{circle.caution}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {tool.signals && (
                    <div className="space-y-2 mb-3">
                      {tool.signals.map((signal, sIdx) => (
                        <div key={sIdx} className="p-3 rounded-lg flex items-start gap-3" style={{
                          backgroundColor: signal.color === 'green' ? '#DEF7EC' : signal.color === 'yellow' ? '#FEF3C7' : '#FEE2E2'
                        }}>
                          <span className="w-4 h-4 rounded-full mt-1 flex-shrink-0" style={{
                            backgroundColor: signal.color === 'green' ? '#10B981' : signal.color === 'yellow' ? '#F59E0B' : '#EF4444'
                          }}></span>
                          <div>
                            <p className="font-medium">{signal.name}</p>
                            <p className="text-sm text-gray-600">{signal.signs.join(' / ')}</p>
                            <p className="text-sm font-medium mt-1">→ {signal.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {tool.examples && (
                    <div className="space-y-1 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">示例：</p>
                      {tool.examples.map((ex, eIdx) => (
                        <p key={eIdx} className="text-sm text-gray-600">• {typeof ex === 'string' ? ex : ex.situation}</p>
                      ))}
                    </div>
                  )}

                  {tool.formula && <p className="p-3 bg-emerald-50 rounded-lg text-center font-medium text-emerald-700">{tool.formula}</p>}
                  {tool.tip && <p className="text-sm text-emerald-600 mt-2">💡 {tool.tip}</p>}
                  {tool.rule && <p className="text-sm text-orange-600 mt-2">⚠️ {tool.rule}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white text-center">
            <p className="text-lg font-medium">🎯 {station.mantra}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.outerLoop.title}</h1>
          <p className="text-emerald-100">{SYSTEM_DATA.outerLoop.description}</p>
        </div>

        {/* 流程图 */}
        <div className="bg-white rounded-xl p-4 shadow-lg overflow-x-auto">
          <div className="flex items-center justify-between min-w-max gap-2 py-2">
            {SYSTEM_DATA.outerLoop.stations.map((station, idx) => (
              <React.Fragment key={station.id}>
                <button onClick={() => setSelectedItem(station)} className="flex flex-col items-center p-3 rounded-xl hover:bg-emerald-50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2 group-hover:bg-emerald-200 transition-colors">
                    <station.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{station.name.replace('站', '')}</span>
                </button>
                {idx < SYSTEM_DATA.outerLoop.stations.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 站点列表 */}
        <div className="space-y-4">
          {SYSTEM_DATA.outerLoop.stations.map(station => (
            <button key={station.id} onClick={() => setSelectedItem(station)} className="w-full bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all text-left group">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-${station.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <station.icon className={`w-7 h-7 text-${station.color}-600`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{station.chapter}</p>
                  <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
                  <p className="text-gray-500 mb-2">{station.subtitle}</p>
                  <p className="text-emerald-600 text-sm">{station.coreInsight}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // ============ 渲染：三阶段 ============
  const renderStages = () => {
    if (selectedItem) {
      const stage = selectedItem;
      return (
        <div className="space-y-6">
          <button onClick={() => setSelectedItem(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> 返回三阶段
          </button>

          <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: stage.color }}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                {stage.duration.split('-')[0]}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{stage.name}</h1>
                <p className="opacity-90">{stage.duration}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: stage.color + '15' }}>
            <p className="font-medium" style={{ color: stage.color }}>{stage.status}</p>
          </div>

          {/* 你会经历什么 */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-3">你会经历什么</h3>
            <div className="flex flex-wrap gap-2">
              {stage.experience.map((exp, idx) => (
                <span key={idx} className="px-3 py-2 rounded-xl text-sm" style={{ backgroundColor: stage.color + '20', color: stage.color }}>
                  {exp}
                </span>
              ))}
            </div>
          </div>

          {/* 关键指标 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">🎯 核心任务</h4>
              <p className="text-gray-700">{stage.task}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">🔍 关注重点</h4>
              <p className="text-gray-700">{stage.focus}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">📊 最低标准</h4>
              <p className="font-medium" style={{ color: stage.color }}>{stage.minimumStandard}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">📅 每周目标</h4>
              <p className="text-gray-700">{stage.weeklyGoal || stage.sign}</p>
            </div>
          </div>

          {/* 心法 */}
          {stage.mindset && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">{stage.mindset.title}</h3>
              <div className="space-y-2">
                {stage.mindset.levels ? stage.mindset.levels.map((item, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-500">{item.level}：</span>
                    <span className="text-gray-700 ml-1">{item.view}</span>
                  </div>
                )) : stage.mindset.reflection?.map((r, idx) => (
                  <p key={idx} className="text-gray-700">{r}</p>
                ))}
              </div>
            </div>
          )}

          {/* 30天计划（生存期）*/}
          {stage.thirtyDayPlan && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">{stage.thirtyDayPlan.title}</h3>
              <div className="space-y-4">
                {stage.thirtyDayPlan.weeks.map((week, wIdx) => (
                  <div key={wIdx} className="border rounded-xl p-4">
                    <h4 className="font-medium text-gray-900 mb-3" style={{ color: stage.color }}>{week.week}</h4>
                    <div className="space-y-2">
                      {week.tasks.map((task, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-500 w-12">{task.day}</span>
                          <p className="text-sm text-gray-700 flex-1">{task.task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 生存指南 */}
          {stage.survivalGuide && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">{stage.survivalGuide.title}</h3>
              <div className="space-y-2">
                {stage.survivalGuide.tips.map((tip, idx) => (
                  <p key={idx} className="text-gray-700 flex items-start gap-2">
                    <span style={{ color: stage.color }}>✓</span> {tip}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* 心法卡片 */}
          <div className="rounded-xl p-6 text-white text-center" style={{ backgroundColor: stage.color }}>
            <p className="text-2xl font-bold">💪 {stage.mantra}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.stages.title}</h1>
          <p className="text-white/90">{SYSTEM_DATA.stages.description}</p>
        </div>

        <div className="space-y-4">
          {SYSTEM_DATA.stages.stages.map((stage, idx) => (
            <button key={stage.id} onClick={() => setSelectedItem(stage)} className="w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: stage.color }}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{stage.name}</h3>
                    <span className="text-sm text-gray-500">{stage.duration}</span>
                  </div>
                  <p className="font-medium mb-2" style={{ color: stage.color }}>{stage.status}</p>
                  <p className="text-gray-600 text-sm">核心任务：{stage.task}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // ============ 渲染：反馈回路 ============
  const renderFeedback = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.feedback.title}</h1>
        <p className="text-purple-100">{SYSTEM_DATA.feedback.subtitle}</p>
      </div>

      {SYSTEM_DATA.feedback.modules.map((module, mIdx) => (
        <div key={mIdx} className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
          <p className="text-gray-600 mb-4">{module.purpose}</p>

          {/* 故障诊断树 */}
          {module.tree && (
            <div className="space-y-3">
              {module.tree.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-red-600 mb-2">❓ {item.problem}</p>
                  <p className="text-sm text-purple-600 mb-1">📍 检查站点：{item.station}</p>
                  <p className="text-sm text-gray-500 mb-1">🔍 检查：{item.check}</p>
                  <p className="text-sm text-green-600">✅ {item.solution}</p>
                </div>
              ))}
            </div>
          )}

          {/* 情绪翻译 */}
          {module.customerVersion && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">{module.customerVersion.title}</h4>
                <div className="space-y-2">
                  {module.customerVersion.translations.map((t, idx) => (
                    <div key={idx} className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm"><span className="text-gray-500">客户说：</span><span className="font-medium">「{t.says}」</span></p>
                      <p className="text-sm"><span className="text-gray-500">真实需求：</span><span className="text-blue-600">{t.needs}</span></p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">{module.salesVersion.title}</h4>
                <div className="space-y-2">
                  {module.salesVersion.translations.map((t, idx) => (
                    <div key={idx} className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm"><span className="text-gray-500">我感到：</span><span className="font-medium">{t.feel}</span></p>
                      <p className="text-sm"><span className="text-gray-500">我需要：</span><span className="text-purple-600">{t.need}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 自我关怀流程 */}
          {module.flows && (
            <div className="space-y-4">
              {module.flows.map((flow, fIdx) => (
                <div key={fIdx} className="border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{flow.trigger}</span>
                    <h4 className="font-medium text-gray-900">{flow.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {flow.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 p-2 bg-gray-50 rounded-lg">
                        <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs text-purple-600 flex-shrink-0">{step.step}</span>
                        <p className="text-sm text-gray-700">{step.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  // ============ 渲染：实战案例 ============
  const renderCases = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.cases.title}</h1>
        <p className="text-orange-100">{SYSTEM_DATA.cases.subtitle}</p>
      </div>

      <div className="space-y-4">
        {SYSTEM_DATA.cases.caseList.map(c => (
          <div key={c.id} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">{c.id}</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <div className="flex gap-2 mt-1">
                  {c.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">📋 场景</p>
                <p className="text-gray-700">{c.scenario}</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm text-red-500 mb-1">⚠️ 挑战</p>
                <p className="text-gray-700">{c.challenge}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-900 mb-3">🔧 系统应用</h4>
              
              {c.systemApplication.innerLoop && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-blue-600 mb-2">内循环：</p>
                  <div className="space-y-1 pl-4">
                    {c.systemApplication.innerLoop.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{item}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {c.systemApplication.outerLoop && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-emerald-600 mb-2">外循环：</p>
                  <div className="space-y-1 pl-4">
                    {c.systemApplication.outerLoop.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{item}</p>
                    ))}
                  </div>
                </div>
              )}

              {c.systemApplication.diagnosis && (
                <p className="text-sm text-purple-600 mb-2 p-2 bg-purple-50 rounded">🔍 诊断：{c.systemApplication.diagnosis}</p>
              )}
              
              {c.systemApplication.recovery && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-purple-600 mb-2">恢复流程：</p>
                  <div className="space-y-1 pl-4">
                    {c.systemApplication.recovery.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{item}</p>
                    ))}
                  </div>
                </div>
              )}

              {c.systemApplication.beliefCheck && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-rose-600 mb-2">信念检查：</p>
                  <div className="space-y-1 pl-4">
                    {c.systemApplication.beliefCheck.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 font-medium">✅ 结果：{c.result}</p>
            </div>
            <div className="mt-2 p-3 bg-amber-50 rounded-lg">
              <p className="text-sm text-amber-700">💡 启示：{c.lesson}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ============ 渲染：技法库 ============
  const renderTechniques = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.techniques.title}</h1>
        <p className="text-indigo-100">{SYSTEM_DATA.techniques.subtitle}</p>
      </div>

      <div className="space-y-4">
        {SYSTEM_DATA.techniques.categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              {cat.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.map((item, iIdx) => (
                <div key={iIdx} className="p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{item.name}</p>
                    <span className="text-xs text-gray-400">{item.chapter}</span>
                  </div>
                  <p className="text-sm text-indigo-600">{item.formula}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ============ 渲染：记忆训练 ============
  const renderCards = () => {
    const currentCard = currentCards[cardIndex];
    const masteredCount = masteredCards.length;
    const totalCount = SYSTEM_DATA.memoryCards.length;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">记忆训练</h1>
          <p className="text-cyan-100">共 {totalCount} 张卡片，已掌握 {masteredCount} 张</p>
          <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all" style={{ width: `${(masteredCount / totalCount) * 100}%` }}></div>
          </div>
        </div>

        {/* 控制栏 */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl shadow-lg">
          <select
            value={cardCategory}
            onChange={(e) => { setCardCategory(e.target.value); setCardIndex(0); setCardMode('browse'); }}
            className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {cardCategories.map(cat => (
              <option key={cat} value={cat}>{cat === 'all' ? '全部分类' : cat}</option>
            ))}
          </select>
          
          <button onClick={shuffleCards} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Shuffle className="w-4 h-4" /> 随机测试
          </button>
          
          <button onClick={() => { setCardMode('browse'); setCardIndex(0); setShowAnswer(false); }} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <RefreshCw className="w-4 h-4" /> 重置
          </button>

          <span className="text-sm text-gray-500 ml-auto">
            {filteredCards.length} 张卡片
          </span>
        </div>

        {/* 卡片区 */}
        {currentCard && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-3 bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{cardIndex + 1} / {currentCards.length}</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">{currentCard.category}</span>
                {currentCard.difficulty && (
                  <div className="flex gap-0.5">
                    {[1,2,3].map(d => (
                      <Star key={d} className={`w-3 h-3 ${d <= currentCard.difficulty ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={() => {
                  const id = currentCard.id;
                  setMasteredCards(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
                }}
                className="flex items-center gap-1 text-sm"
              >
                {masteredCards.includes(currentCard.id) 
                  ? <><CheckCircle className="w-4 h-4 text-green-500" /> 已掌握</>
                  : <><Circle className="w-4 h-4 text-gray-300" /> 标记掌握</>}
              </button>
            </div>
            
            <div className="p-8 min-h-56 flex items-center justify-center cursor-pointer select-none" onClick={() => setShowAnswer(!showAnswer)}>
              {!showAnswer ? (
                <div className="text-center">
                  <p className="text-2xl font-medium text-gray-900 mb-4">{currentCard.q}</p>
                  <p className="text-sm text-gray-400">点击显示答案</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">答案</p>
                  <p className="text-xl text-blue-600 font-medium">{currentCard.a}</p>
                  <p className="text-sm text-gray-400 mt-4">点击隐藏答案</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50 flex items-center justify-between">
              <button
                onClick={() => { setCardIndex(Math.max(0, cardIndex - 1)); setShowAnswer(false); }}
                disabled={cardIndex === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> 上一张
              </button>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  {showAnswer ? '隐藏答案' : '显示答案'}
                </button>
              </div>

              <button
                onClick={() => { setCardIndex(Math.min(currentCards.length - 1, cardIndex + 1)); setShowAnswer(false); }}
                disabled={cardIndex === currentCards.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition-colors"
              >
                下一张 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* 卡片网格 */}
        {cardMode === 'browse' && (
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-4">所有卡片</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
              {filteredCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => { setCardIndex(idx); setShowAnswer(false); }}
                  className={`p-3 rounded-xl text-left text-sm transition-all ${
                    cardIndex === idx 
                      ? 'bg-blue-100 border-2 border-blue-500 shadow-md' 
                      : masteredCards.includes(card.id)
                        ? 'bg-green-50 border-2 border-green-300'
                        : 'bg-gray-50 border-2 border-transparent hover:border-blue-300'
                  }`}
                >
                  <p className="font-medium text-gray-900 line-clamp-2">{card.q}</p>
                  {masteredCards.includes(card.id) && <CheckCircle className="w-4 h-4 text-green-500 mt-2" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ============ 渲染：21天计划 ============
  const renderPlan = () => {
    const completedDays = Object.values(dayProgress).filter(Boolean).length;
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">{SYSTEM_DATA.twentyOneDayPlan.title}</h1>
          <p className="text-green-100">系统化学习销售技能</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full transition-all" style={{ width: `${(completedDays / 21) * 100}%` }}></div>
            </div>
            <span className="font-bold">{completedDays}/21 天</span>
          </div>
        </div>

        <div className="space-y-6">
          {SYSTEM_DATA.twentyOneDayPlan.weeks.map((week, wIdx) => (
            <div key={wIdx} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="font-bold text-green-600">{wIdx + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{week.week}</h3>
                  <p className="text-sm text-gray-500">{week.theme}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {week.days.map(day => (
                  <div 
                    key={day.day}
                    className={`flex items-start gap-3 p-4 rounded-xl transition-colors ${
                      dayProgress[day.day] ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <button onClick={() => toggleDayComplete(day.day)} className="flex-shrink-0 mt-0.5">
                      {dayProgress[day.day] 
                        ? <CheckCircle className="w-6 h-6 text-green-500" />
                        : <Circle className="w-6 h-6 text-gray-300 hover:text-gray-400" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900">Day {day.day}</span>
                        <span className="px-2 py-0.5 text-xs rounded bg-gray-200 text-gray-600">{day.category}</span>
                        <span className="text-xs text-gray-400">{day.duration}</span>
                      </div>
                      <p className={`text-sm ${dayProgress[day.day] ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                        {day.task}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ============ 渲染：每日练习 ============
  const renderDaily = () => {
    const today = new Date().toDateString();
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">每日练习</h1>
          <p className="text-amber-100">坚持每天问自己三个问题</p>
        </div>

        {/* 每日三问 */}
        <div className="space-y-4">
          {SYSTEM_DATA.dailyPractice.threeQuestions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  idx === 0 ? 'bg-amber-100 text-amber-700' : 
                  idx === 1 ? 'bg-blue-100 text-blue-700' : 
                  'bg-purple-100 text-purple-700'
                }`}>
                  {item.time}
                </span>
                <span className="text-sm text-gray-500">{item.purpose}</span>
              </div>
              <p className="text-xl font-medium text-gray-900 mb-4">{item.question}</p>
              <textarea
                placeholder="写下你的答案..."
                className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                rows={3}
                value={dailyAnswers[`${today}-${idx}`] || ''}
                onChange={(e) => setDailyAnswers(prev => ({ ...prev, [`${today}-${idx}`]: e.target.value }))}
              />
            </div>
          ))}
        </div>

        {/* 每周复盘 */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-gray-900 mb-4">📊 每周复盘清单</h3>
          <div className="space-y-3">
            {SYSTEM_DATA.dailyPractice.weeklyReview.map((q, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{idx + 1}. {q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ============ 主渲染逻辑 ============
  const renderContent = () => {
    switch (view) {
      case 'home': return renderHome();
      case 'meaning': return renderMeaning();
      case 'inner': return renderInnerLoop();
      case 'outer': return renderOuterLoop();
      case 'stages': return renderStages();
      case 'feedback': return renderFeedback();
      case 'cases': return renderCases();
      case 'techniques': return renderTechniques();
      case 'cards': return renderCards();
      case 'plan': return renderPlan();
      case 'daily': return renderDaily();
      default: return renderHome();
    }
  };

  // ============ 返回主UI ============
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 顶部导航 */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => { setView('home'); setSelectedItem(null); }} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-gray-900">销售成长系统</span>
              <p className="text-xs text-gray-500">终极完整版</p>
            </div>
          </button>

          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-100 rounded-full p-1">
            {navItems.slice(0, 8).map(item => (
              <button
                key={item.id}
                onClick={() => { setView(item.id); setSelectedItem(null); }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all text-sm ${
                  view === item.id 
                    ? 'bg-white text-indigo-600 shadow-sm font-medium' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* 移动端菜单按钮 */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 移动端侧边栏 */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">销售成长系统</p>
                  <p className="text-xs text-gray-500">进度：{totalProgress}%</p>
                </div>
              </div>
            </div>
            <nav className="p-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => { setView(item.id); setSelectedItem(null); setMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${
                    view === item.id 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* 主内容区 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="font-bold text-gray-900 mb-2">不求成交，只求连接</p>
          <p className="text-gray-500 text-sm">守住底线，你才自由 · 慢慢来，你会成为光</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400">
            <span>销售成长系统 v2.0</span>
            <span>·</span>
            <span>共{SYSTEM_DATA.memoryCards.length}张卡片</span>
            <span>·</span>
            <span>21天计划</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
