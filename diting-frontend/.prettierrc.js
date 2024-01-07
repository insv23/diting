module.exports = {
    printWidth: 80, //一行的字符数，如果超过这个数量，Prettier会进行折行
    tabWidth: 2, //定义缩进的空格数
    useTabs: false, //使用空格进行缩进，而不是tab
    semi: true, //每句末尾都要有分号
    singleQuote: true, //使用单引号而不是双引号
    quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
    jsxSingleQuote: true, // jsx中使用单引号
    trailingComma: 'all', //多行时，尽可能在最后一个元素或属性后面添加逗号
    bracketSpacing: true, //在对象的括号前后添加空格，例如 { foo: bar }
    bracketSameLine: false, //在JSX中，将多属性的标签的闭合符 > 新起一行，而不是放在最后一行的末尾。
    arrowParens: 'always', //在单参数的箭头函数中，总是为参数添加括号，例如 (x) => x
    requirePragma: false, //不需要在文件顶部有特定的注释，Prettier就会格式化代码。
    insertPragma: false, //不会在已经被Prettier格式化的文件顶部添加注释。
    proseWrap: 'preserve', //对于markdown文件，按照文件原样折行。
    htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
    vueIndentScriptAndStyle: false, //不会对Vue文件中的<script>和<style>标签进行缩进
    endOfLine: 'lf', //使用LF作为行结束符
    embeddedLanguageFormatting: 'auto', //对于嵌入的代码块，如Markdown中的代码块，Prettier会尝试自动格式化
  };