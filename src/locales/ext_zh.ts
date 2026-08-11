export const ext_zh = {
  experienceUI: {
    aboutRole: "关于角色",
    mainActivities: "主要活动",
    competencies: "核心能力",
    proofAndWorkflow: "工作证明与流程 (BA & PM)",
    docsAndRealContribution: "文件与实际贡献摘要",
    workflowAndRoleFocus: "工作流程与角色重点",
    authenticDocsAndLogs: "真实的文档与机构日志",
    detailButton: "查看详情",
    openPortfolioButton: "打开项目集",
  },
  beaCukaiProof: {
    metrics: ["部门轮岗", "开发的系统", "MBKM报告", "轮岗时长"],
    workflow: [
      { phase: "仓库需求收集与SIMIRA设计", desc: "访谈了仓库管理员，设计了MySQL数据库，并构建了PHP Laravel原型。", roleFocus: "IT业务分析师与系统分析师" },
      { phase: "员工数据审计与交叉检查", desc: "交叉验证了Sulbagsel海关分局超过1000名员工的数据完整性。", roleFocus: "数据质量分析师" },
      { phase: "媒体监控 (NALIKA) 与公关", desc: "监控每日海关新闻问题并设计了数字出版材料。", roleFocus: "媒体与通信分析师" },
      { phase: "内部合规分析与P2盘点", desc: "评估了投诉/上诉工作流程和被扣押货物的物理数据收集。", roleFocus: "合规与现场审计员" }
    ],
    proofs: [
      { title: "SIMIRA系统开发与原型", caption: "设计了MySQL数据库并构建了基于PHP Laravel的Web界面用于仓库库存记录。", tag: "Laravel & MySQL" },
      { title: "系统流程分析与业务流程映射", caption: "绘制了业务流程图以设计基于角色的访问控制 (RBAC)。", tag: "系统分析" },
      { title: "海关员工数据验证", caption: "使用电子表格和数据库交叉验证了数千名员工数据的完整性。", tag: "数据质量" },
      { title: "投诉与上诉系统分析", caption: "审查了公众投诉处理流程和海关异议档案管理。", tag: "合规分析" },
      { title: "NALIKA媒体监控与公关设计", caption: "执行每日海关新闻监控并设计机构数字出版材料。", tag: "媒体监控" },
      { title: "被扣押货物盘点 (P2部门)", caption: "物理清点和记录被扣押的非法香烟和酒精。", tag: "现场审计" },
      { title: "前台与利益相关者关系服务", caption: "海关分局前台的公共行政服务和访客接待。", tag: "公共服务" },
      { title: "SIAKAD实习日志验证", caption: "在SIAKAD门户中批准并在学术上验证的每日实习活动汇总。", tag: "学术验证" }
    ]
  },
  bpjsProof: {
    metrics: ["数据完整性", "缴费收集", "OSS验证", "BPU推广"],
    workflow: [
      { phase: "会员数据验证与清理", desc: "验证IGI质量并系统地纠正了超过5000名参与者数据的不一致之处。", roleFocus: "数据分析师" },
      { phase: "自动催收与跟进", desc: "通过电子邮件和WhatsApp群发向欠费公司发起催收活动。", roleFocus: "客户代表" },
      { phase: "投资部OSS门户同步", desc: "在OSS门户上交叉检查新商业实体的注册数据以进行获取。", roleFocus: "合规支持" },
      { phase: "项目教育与推广", desc: "直接向非正规部门的工人提供对BPU项目的理解。", roleFocus: "公共关系" }
    ],
    proofs: [
      { title: "IGI质量数据验证", caption: "检查参与者数据异常、身份号码和档案完整性。", tag: "数据验证" },
      { title: "WhatsApp群发催收活动", caption: "自动发送催收信息和欠费提醒给受培育的公司。", tag: "自动化" },
      { title: "综合OSS门户交叉检查", caption: "验证从投资部系统集成的新商业实体的注册。", tag: "系统验证" },
      { title: "社会保障推广", caption: "直接向非正规部门/BPU工人社区提供帮助和教育。", tag: "公共服务" },
      { title: "会员获取汇总", caption: "每月报告望加锡地区受培育公司的获取进度和保留情况。", tag: "报告" },
      { title: "BPJS就业综合服务", caption: "在分公司为参与者和公司代表提供基本行政服务支持。", tag: "行政管理" }
    ]
  },
  portfolioList: [
    { title: "Cenrana村综合信息系统", desc: "端到端数字平台，包含3个主要模块：预算透明化、e-Surat和数据管理。UAT成功率达93.8%。" },
    { title: "SIMIRA原型 (Sulbagsel海关)", desc: "基于Web的仓库管理信息系统。设计了从需求收集到实时库存记录和用户身份验证的业务流程。" },
    { title: "决策支持系统 (TOPSIS方法)", desc: "基于Web的数据分析系统，根据7个复杂标准优化二手车选择。" },
    { title: "学生毕业预测系统", desc: "基于Python的机器学习模型，用于预测学生毕业的准时性——测试数据准确率为93%。" },
    { title: "登录页与Web主页", desc: "采用优雅视觉方法设计的促销和个人品牌页面，简洁清晰地传达信息。" },
    { title: "Instagram信息流设计", desc: "一系列支持2024-2025年期间组织品牌和数字出版通信的社交媒体设计。" },
    { title: "KKN Cenrana村社交媒体设计", desc: "一系列支持社区服务期间活动和工作计划发布的社交媒体内容设计。" },
    { title: "自由职业与项目合作", desc: "与个人及数字项目需求的各种灵活合作形式。" },
    { title: "探索其他数字解决方案", desc: "用于不断增加的额外作品和新开发的空间。" }
  ],
  projectsList: [
    { title: "Cenrana村信息系统", roleAndDate: "项目负责人 | 2025年11月 – 2026年4月", desc: "旨在支持公共信息、预算透明度和行政服务的村级网站。", tags: ["村网站", "信息系统", "电子信件"] },
    { title: "数字诉求服务系统", roleAndDate: "协调员与开发者 | 2025年7月 – 2025年9月", desc: "一个公民报告平台，用于更快速地传达和记录关于基础设施状况的投诉。", tags: ["诉求服务", "公民报告", "数字服务"] },
    { title: "SIM家用原型", roleAndDate: "Sulbagsel海关 | 2025年", desc: "为协助内部行政需求而开发的信息系统原型。", tags: ["管理系统", "数据管理", "原型"] },
    { title: "视觉设计与品牌", roleAndDate: "图形设计", desc: "为组织需求创建社交媒体内容、信息图表和出版材料。", tags: ["信息流设计", "信息图表", "Canva与Figma"] }
  ],
  blueprintNodes: [
    { title: "业务分析与PRD", summary: "将模糊的利益相关者需求转化为技术规范文档(PRD/BRD)和UAT测试场景。" },
    { title: "数据完整性与验证", summary: "执行大规模数据清理、完整性匹配和数字归档。" },
    { title: "SDLC与项目协调", summary: "领导从规划到实时发布的软件开发生命周期。" },
    { title: "GenAI代理操作", summary: "利用AI作为工作代理，通过精确的手动验证加速文档起草。" }
  ],
  cenranaExtended: {
    diagrams: [
      { title: "全栈系统架构蓝图" },
      { title: "实体关系图 (ERD)" },
      { title: "MySQL数据库结构" },
      { title: "云媒体存储" },
      { title: "系统评估报告 (UAT 93.8%)" },
      { title: "生产主机基础设施" },
      { title: "序列图 — NIK验证" },
      { title: "SDLC开发方法流程图" }
    ],
    screenshots: [
      { title: "主页", category: "1. 首页", desc: "主要综合信息门户及所有服务的入口点。" },
      { title: "村庄概况", category: "2. 村庄概况", desc: "人口、领土及组织结构信息。" },
      { title: "公共信息中心", category: "3. 信息", desc: "村庄新闻及官方公告的透明度门户。" },
      { title: "公民数字服务中心", category: "4. 公民服务", desc: "公民自助服务的中央访问门户。" },
      { title: "公民诉求服务", category: "4. 公民服务", desc: "具有加密保护的公众投诉表单。" },
      { title: "电子信件服务", category: "4. 公民服务", desc: "自动化的在线行政信件请求。" },
      { title: "公民市场", category: "4. 公民服务", desc: "村庄中小微企业的数字营销展示区。" },
      { title: "管理摘要仪表板", category: "5. 管理面板", desc: "公民数据和活动的统计摘要。" },
      { title: "管理控制面板", category: "5. 管理面板", desc: "集中管理18个系统操作模块。" }
    ],
    fieldPhotos: [
      { title: "签署合作协议", category: "1. 启动阶段", desc: "与合作伙伴签署系统开发合作文件的过程。" },
      { title: "项目启动协议", category: "1. 启动阶段", desc: "讨论项目启动流程并确立承诺。" },
      { title: "观察与需求分析", category: "2. 分析阶段", desc: "直接访谈和观察手工工作流程。" },
      { title: "代码实施", category: "3. 开发阶段", desc: "开发18个模块的自定义代码。" },
      { title: "部署与配置", category: "3. 部署阶段", desc: "设置域名、服务器和SSL加密。" },
      { title: "UAT直接测试", category: "4. UAT测试", desc: "由公民样本直接测试投诉场景。" },
      { title: "UAT评估与SUS得分", category: "4. UAT测试", desc: "填写系统可行性问卷。" },
      { title: "村庄培训", category: "5. 培训阶段", desc: "关于独立系统操作的培训。" },
      { title: "管理技术指导", category: "5. 培训阶段", desc: "关于管理CMS模块的深入培训。" },
      { title: "接收声明书", category: "6. 验收阶段", desc: "系统接收声明的官方文件。" },
      { title: "正式移交", category: "6. 移交阶段", desc: "象征性地将信息系统移交给村长。" }
    ]
  },
  topsisExtended: {
    diagrams: [
      { title: "排名方法的基本框架" },
      { title: "TOPSIS计算流程" },
      { title: "权重值可视化" },
      { title: "归一化决策矩阵" }
    ],
    screenshots: [
      { title: "推荐门户", category: "1. 首页", desc: "供买家选择标准的公共界面。" },
      { title: "标准输入面板", category: "2. 偏好输入", desc: "根据用户需求的动态加权表单。" },
      { title: "TOPSIS分析结果", category: "3. 决策输出", desc: "排名前5的摩托车推荐表。" },
      { title: "数据管理仪表板", category: "4. 管理区域", desc: "管理53个真实摩托车数据的模块。" }
    ]
  }
};
