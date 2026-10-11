/* @ds-bundle: {"format":3,"namespace":"DeepFocusDesignSystem_a3f512","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"StatsPanel","sourcePath":"components/surfaces/StatsPanel.jsx"}],"sourceHashes":{"charts/deepalign-echarts-theme.js":"12983e3fda9d","components/core/Badge.jsx":"be58cf218038","components/core/Button.jsx":"09e6843dfb1c","components/core/SectionLabel.jsx":"bbe84fa56023","components/core/Tag.jsx":"ecafb7df8899","components/forms/Field.jsx":"5b73e2bceaf7","components/navigation/Navbar.jsx":"3bd83dd7eb74","components/surfaces/FeatureCard.jsx":"e5af7d8dce06","components/surfaces/StatsPanel.jsx":"6307e798a7fd","ui_kits/website/Footer.jsx":"6084c2d863a5","ui_kits/website/Home.jsx":"4f929f89c1be","ui_kits/website/Blog.jsx":"e953571b87bb","ui_kits/website/Contact.jsx":"e7f0779405cd"},"inlinedExternals":[],"unexposedExports":[]} */
(() => {
const React = window.React;
if (!React) throw new Error('Load React before the DeepFocus bundle');

// charts/deepalign-echarts-theme.js
/* DeepFocus report adaptation; source UI v1.0, not a PDF chart specification. */

(function (root) {
  var INK      = '#17151F';   
  var INK_BODY = '#17151F';   
  var MUTED    = '#625D6C';   
  var OUTLINE  = '#E6E3ED';   
  var GRID     = 'rgba(0,0,0,0.06)';   
  var GRID_SOFT= 'rgba(0,0,0,0.028)';  
  var PRIMARY  = '#4F39F6';
  var FONT_UI = "Space Grotesk, MiSans, sans-serif";
  var FONT_NUM = "'Geist Mono', 'MiSans', monospace";

  
  var PALETTE = ['#4F39F6', '#625D6C', '#9B82FF', '#17151F', '#BDADFF', '#3D25CE'];

  var axisCommon = {
    axisLine:  { show: true,  lineStyle: { color: OUTLINE, width: 1 } },
    axisTick:  { show: true,  lineStyle: { color: OUTLINE, width: 1 }, length: 4 },
    axisLabel: { color: MUTED, fontFamily: FONT_UI, fontSize: 12, hideOverlap: true },
    splitLine: { show: true,  lineStyle: { color: GRID, width: 1, type: 'solid' } },
    splitArea: { show: false }
  };

  var theme = {
    color: PALETTE,
    backgroundColor: 'transparent',

    textStyle: { fontFamily: FONT_UI, color: INK_BODY },

    title: {
      textStyle:    { color: INK, fontFamily: FONT_NUM, fontWeight: 700, fontSize: 18 },
      subtextStyle: { color: MUTED, fontFamily: FONT_UI, fontSize: 12 },
      left: 0
    },

    
    line: {
      itemStyle:   { borderWidth: 2 },
      lineStyle:   { width: 2 },
      symbol: 'circle',
      symbolSize: 7,
      smooth: false,        
      emphasis: { focus: 'series' }
    },
    bar: {
      itemStyle: { borderRadius: 0, borderColor: 'transparent' },   
      barMaxWidth: 44,
      emphasis: { focus: 'series' }
    },
    pie: {
      itemStyle: { borderColor: '#ffffff', borderWidth: 2, borderRadius: 0 },
      label:     { color: INK_BODY, fontFamily: FONT_UI, fontSize: 12 },
      labelLine: { lineStyle: { color: OUTLINE } }
    },
    scatter: {
      itemStyle: { opacity: 0.85 },
      symbolSize: 12
    },
    radar: {
      symbol: 'circle',
      symbolSize: 5,
      lineStyle: { width: 2 },
      areaStyle: { opacity: 0.08 }
    },
    candlestick: {
      itemStyle: {
        color: PRIMARY, color0: '#ffffff',
        borderColor: PRIMARY, borderColor0: '#625D6C', borderWidth: 1
      }
    },
    graph: { color: PALETTE },

    
    categoryAxis: axisCommon,
    valueAxis:    Object.assign({}, axisCommon, {
      axisLine: { show: false }, axisTick: { show: false }
    }),
    logAxis:      axisCommon,
    timeAxis:     axisCommon,

    
    grid: { left: 8, right: 16, top: 32, bottom: 8, containLabel: true },

    legend: {
      icon: 'rect',                 
      itemWidth: 11, itemHeight: 11, itemGap: 18,
      textStyle: { color: MUTED, fontFamily: FONT_UI, fontSize: 12 },
      inactiveColor: '#cfcfcf',
      top: 0, right: 0
    },

    tooltip: {
      backgroundColor: '#ffffff',
      borderColor: '#E6E3ED',
      borderWidth: 1,
      borderRadius: 8,
      padding: [10, 14],
      textStyle: { color: INK_BODY, fontFamily: FONT_UI, fontSize: 12 },
      extraCssText: 'box-shadow:0 8px 24px -12px rgba(6,10,13,.1);border-radius:8px;',
      axisPointer: {
        type: 'line',
        lineStyle: { color: PRIMARY, width: 1, type: 'dashed' },
        crossStyle: { color: PRIMARY, width: 1 },
        shadowStyle: { color: 'rgba(79,57,246,0.06)' },
        label: {
          backgroundColor: '#17151F', color: '#fff',
          fontFamily: FONT_UI, fontSize: 11, borderRadius: 0, padding: [4, 8]
        }
      }
    },

    
    gauge: {
      axisLine:  { lineStyle: { color: [[1, GRID]], width: 12 } },
      progress:  { show: true, width: 12, itemStyle: { color: PRIMARY } },
      pointer:   { itemStyle: { color: INK } },
      title:     { color: MUTED, fontFamily: FONT_UI },
      detail:    { color: INK, fontFamily: FONT_NUM, fontWeight: 800 },
      splitLine: { lineStyle: { color: OUTLINE } },
      axisTick:  { lineStyle: { color: OUTLINE } },
      axisLabel: { color: MUTED, fontFamily: FONT_UI }
    },

    
    visualMap: {
      color: ['#3D25CE', '#4F39F6', '#D9D0FF'],
      textStyle: { color: MUTED, fontFamily: FONT_UI, fontSize: 12 }
    },

    toolbox: {
      iconStyle: { borderColor: MUTED },
      emphasis: { iconStyle: { borderColor: PRIMARY } }
    }
  };

  if (root && root.echarts && typeof root.echarts.registerTheme === 'function') {
    root.echarts.registerTheme('deepfocus', theme);
    root.echarts.registerTheme('deepalign', theme); // compatibility alias
  }
  if (root) root.deepFocusEChartsTheme = root.deepAlignEChartsTheme = theme;
  if (typeof module !== 'undefined' && module.exports) module.exports = theme;
})(typeof window !== 'undefined' ? window : this);


// components/core/Badge.jsx
function Badge({ tone = 'dark', children, className = '', style = {}, ...props }) {
    return React.createElement("span", { className: `badge${tone === 'primary' ? ' badge--primary' : ''} ${className}`.trim(), style: style, ...props }, children);
}


// components/core/Button.jsx
function Button({ variant = 'primary', size = 'md', as = 'button', children, className = '', style = {}, ...props }) {
    const Element = as;
    return React.createElement(Element, { type: as === 'button' ? 'button' : undefined, className: `btn btn--${variant}${size === 'md' ? '' : ` btn--${size}`} ${className}`.trim(), style: style, ...props }, children);
}


// components/core/SectionLabel.jsx
function SectionLabel({ children, color = 'var(--primary)', className = '', style = {}, ...props }) {
    return React.createElement("span", { className: `section-label ${className}`.trim(), style: { color, ...style }, ...props }, children);
}


// components/core/Tag.jsx
function Tag({ active = false, as = 'span', children, className = '', style = {}, ...props }) {
    const Element = as;
    return React.createElement(Element, { type: as === 'button' ? 'button' : undefined, "aria-pressed": as === 'button' ? active : undefined, className: `tag${active ? ' tag--active' : ''} ${className}`.trim(), style: style, ...props }, children);
}


// components/forms/Field.jsx
function Field({ label, type = 'text', as = 'input', children, style = {}, ...props }) {
    return React.createElement("label", { className: "field", style: style },
        label && React.createElement("span", null, label),
        as === 'textarea' ? React.createElement("textarea", { ...props }) : as === 'select' ? React.createElement("select", { ...props }, children) : React.createElement("input", { type: type, ...props }));
}


// components/navigation/Navbar.jsx
function Navbar({ logoSrc, brand = 'DeepFocus', links = [], actions, style = {}, ...props }) {
    return React.createElement("nav", { className: "navbar", style: style, ...props },
        React.createElement("div", { className: "navbar__inner container" },
            React.createElement("span", { className: "navbar__logo" },
                logoSrc ? React.createElement("img", { className: "navbar__logo-img", src: logoSrc, alt: "" }) : React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 190 190", fill: "none", stroke: "var(--brand-mark)", strokeWidth: "9", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
                    React.createElement("path", { d: "M 4.5 185.5 L 4.5 4.5 L 127.5 4.5 A 96.5 96.5 0 0 1 116.5 185.5 Z" }),
                    React.createElement("path", { d: "M 32.5 83.5 L 32.5 72.5 A 24 24 0 0 1 56.5 48.5 L 140.5 48.5 C 140.5 62 134 76 120 83.5 Z" }),
                    React.createElement("path", { d: "M 117 83.5 L 117 100 A 20 20 0 0 1 100.92 119.61 L 56 127 A 25.5 25.5 0 0 0 35.5 152 L 35.5 185.5" })),
                React.createElement("span", { className: "navbar__logo-word" }, brand)),
            React.createElement("div", { className: "navbar__links" }, links.map((l, i) => React.createElement("a", { key: i, href: l.href || '#', onClick: l.onClick, "aria-current": l.active ? 'page' : undefined, className: `nav-link${l.active ? ' nav-link--active' : ''}` }, l.label))),
            React.createElement("div", null, actions)));
}


// components/surfaces/FeatureCard.jsx
function FeatureCard({ title, bullets = [], active = false, onToggle, style = {}, ...props }) {
    const id = React.useId();
    return React.createElement("div", { className: `feature-card${active ? ' feature-card--active' : ''}`, style: style, ...props },
        React.createElement("button", { type: "button", className: "feature-card__toggle", onClick: onToggle, "aria-expanded": active, "aria-controls": id },
            React.createElement("span", { className: "feature-card__title" }, title),
            React.createElement("span", { "aria-hidden": "true" }, active ? '−' : '+')),
        React.createElement("div", { id: id, hidden: !active },
            React.createElement("ul", { className: "feature-card__bullets" }, bullets.map((b, i) => React.createElement("li", { key: i }, b)))));
}


// components/surfaces/StatsPanel.jsx
function StatsPanel({ label = '数据概览', title, stats = [], style = {}, ...props }) {
    return React.createElement("div", { className: "stats-section", style: style, ...props },
        React.createElement("div", { className: "stats__panel" },
            React.createElement("div", { className: "stats__label" }, label),
            title && React.createElement("h2", { className: "stats__title" }, title),
            React.createElement("div", { className: "stats__grid" }, stats.map((s, i) => React.createElement("div", { key: i, className: "stat-card" },
                React.createElement("div", { className: "stat-card__num" }, s.num),
                React.createElement("div", { className: "stat-card__label" }, s.label))))));
}


// ui_kits/website/Footer.jsx
function SiteFooter() { return React.createElement("footer", { className: "container", style: { paddingBlock: 32, color: 'var(--ink-muted)', fontSize: 14 } }, "DeepFocus UI v1.0 \u00B7 \u7EC4\u4EF6\u6F14\u793A\uFF0C\u793A\u4F8B\u4E0D\u662F\u5BA2\u6237\u6210\u7EE9\uFF0C\u8868\u5355\u4E0D\u53D1\u9001\u771F\u5B9E\u9700\u6C42\u3002"); }


// ui_kits/website/Home.jsx
function HomeScreen({ go }) {
    const [active, setActive] = React.useState(0);
    return React.createElement("main", { className: "container" },
        React.createElement("section", { className: "demo-hero" },
            React.createElement("div", null,
                React.createElement(SectionLabel, null, "DEEPFOCUS / UI V1.0"),
                React.createElement("h1", null,
                    "\u805A\u7126\u6E05\u6670\u4FE1\u606F\uFF0C",
                    React.createElement("br", null),
                    "\u5EFA\u7ACB\u53EF\u4FE1\u754C\u9762\u3002"),
                React.createElement("p", null, "\u54C1\u724C\u7D2B\u3001\u51E0\u4F55\u5B57\u5F62\u4E0E\u67D4\u548C\u5C42\u6B21\uFF0C\u5C06\u54C1\u724C\u8BC6\u522B\u843D\u5B9E\u5230\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u3002"),
                React.createElement("div", { className: "demo-row" },
                    React.createElement(Button, { onClick: () => go('contact') }, "\u67E5\u770B\u8868\u5355\u72B6\u6001"),
                    React.createElement(Button, { variant: "outline", onClick: () => go('blog') }, "\u67E5\u770B\u89C4\u8303\u5361\u7247"))),
            React.createElement("div", { className: "focus-panel" },
                React.createElement("span", null, "DeepFocus"),
                React.createElement("strong", null, "#4F39F6"),
                React.createElement("p", null, "\u8FD1\u767D\u753B\u5E03 \u00B7 \u6D45\u7D2B\u5C55\u53F0 \u00B7 \u5706\u89D2\u7EC4\u4EF6"),
                React.createElement("div", { className: "focus-lines", "aria-hidden": "true" },
                    React.createElement("i", null),
                    React.createElement("i", null),
                    React.createElement("i", null)))),
        React.createElement("section", { className: "demo-section" },
            React.createElement(SectionLabel, null, "CONTENT COMPONENTS"),
            React.createElement("h2", null, "\u53EF\u8BFB\u7684\u5185\u5BB9\u5C42\u7EA7"),
            React.createElement("div", { className: "demo-columns" },
                React.createElement("div", null, ['品牌识别', '清晰信息', '完整状态'].map((x, i) => React.createElement(FeatureCard, { key: x, title: x, active: active === i, onToggle: () => setActive(active === i ? -1 : i), bullets: ['使用统一字体、颜色和间距。', '重要信息保持可见且可核对。'] }))),
                React.createElement(StatsPanel, { label: "\u89C4\u8303\u53C2\u6570\uFF0C\u975E\u4E1A\u52A1\u6570\u636E", title: "\u4E00\u5957\u5171\u540C\u7684\u754C\u9762\u8BED\u8A00", stats: [{ num: '44 px', label: '输入与按钮基准高度' }, { num: '16 px', label: '正文与卡片圆角基准' }] }))));
}


// ui_kits/website/Blog.jsx
function BlogScreen() {
    const [filter, setFilter] = React.useState('全部');
    const entries = [['色彩', '品牌紫与近白画布', '主色 #4F39F6，hover #3D25CE；浅紫仅用于重点与选中。'], ['字体', '中文与拉丁字体', 'MiSans、Space Grotesk；代码与数据标签 Geist Mono。'], ['组件', '柔和圆角与清晰状态', '8 / 12 / 16 / 28 px 圆角，三档柔和阴影。']];
    return React.createElement("main", { className: "container demo-section" },
        React.createElement(SectionLabel, null, "GUIDELINE CARDS"),
        React.createElement("h1", null, "DeepFocus UI \u89C4\u8303\u5361\u7247"),
        React.createElement("p", { className: "demo-note" }, "\u7528\u4E8E\u9A8C\u8BC1\u5B57\u4F53\u3001\u5C42\u6B21\u4E0E\u7B5B\u9009\u884C\u4E3A\u3002"),
        React.createElement("div", { className: "demo-row" }, ['全部', '色彩', '字体', '组件'].map(x => React.createElement(Tag, { key: x, as: "button", active: filter === x, onClick: () => setFilter(x) }, x))),
        React.createElement("div", { className: "demo-card-grid" }, entries.filter(x => filter === '全部' || x[0] === filter).map(x => React.createElement("article", { className: "demo-card", key: x[0] },
            React.createElement(Badge, { tone: "primary" }, x[0]),
            React.createElement("h2", null, x[1]),
            React.createElement("p", null, x[2])))));
}


// ui_kits/website/Contact.jsx
function ContactScreen() {
    const [sent, setSent] = React.useState(false);
    return React.createElement("main", { className: "container demo-section" },
        React.createElement(SectionLabel, null, "FORMS / DEMO ONLY"),
        React.createElement("h1", null, "\u53EF\u6062\u590D\u7684\u8868\u5355\u72B6\u6001"),
        React.createElement("p", { className: "demo-note" }, "\u8FD9\u662F\u672C\u5730\u4EA4\u4E92\u6F14\u793A\uFF0C\u4E0D\u4F1A\u53D1\u9001\u6216\u4FDD\u5B58\u771F\u5B9E\u9700\u6C42\u3002"),
        React.createElement("div", { className: "demo-columns" },
            React.createElement("div", null,
                React.createElement("h2", null, "\u660E\u786E\u8F93\u5165\u4E0E\u53CD\u9988"),
                React.createElement("p", { className: "demo-note" }, "44px \u8F93\u5165\u6846\u30018px \u5706\u89D2\u4E0E\u54C1\u724C\u7D2B\u952E\u76D8\u7126\u70B9\u3002\u586B\u5199\u793A\u4F8B\u540E\u63D0\u4EA4\uFF0C\u68C0\u67E5\u53CD\u9988\u72B6\u6001\u3002"),
                React.createElement(Button, { disabled: true }, "\u7981\u7528\u72B6\u6001")),
            React.createElement("form", { className: "demo-card demo-form", onSubmit: e => { e.preventDefault(); setSent(true); } },
                React.createElement(Field, { label: "\u793A\u4F8B\u54C1\u724C", name: "brand", placeholder: "\u793A\u4F8B\u54C1\u724C", required: true }),
                React.createElement(Field, { label: "\u793A\u4F8B\u90AE\u7BB1", name: "email", type: "email", placeholder: "name@example.com", required: true }),
                React.createElement(Field, { label: "\u8BF4\u660E", name: "notes", as: "textarea", placeholder: "\u586B\u5199\u793A\u4F8B\u8BF4\u660E" }),
                React.createElement(Button, { type: "submit" }, "\u5C55\u793A\u63D0\u4EA4\u72B6\u6001"),
                React.createElement("p", { role: "status", "aria-live": "polite" }, sent ? '演示已完成；没有向外部服务提交数据。' : ''))));
}

const namespace = window.DeepFocusDesignSystem_a3f512 = {Badge,Button,SectionLabel,Tag,Field,Navbar,FeatureCard,StatsPanel};
window.DeepAlignDesignSystem_a3f512 = namespace;
window.HomeScreen=HomeScreen; window.BlogScreen=BlogScreen; window.ContactScreen=ContactScreen; window.SiteFooter=SiteFooter;
})();
