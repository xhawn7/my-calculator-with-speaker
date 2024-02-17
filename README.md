## 对比于原生计算器的优势

1. 仿照传统计算器增加了语音功能，用户每次输入都会有语音提示用户刚刚的操作，避免输出错误

## 计算器的需求分析

_参照 brainstorming_

### 数字显示

- 输入数字不能超过 9 位（小数点和分割符不算）
<details>
<summary>输出数字</summary>

- 超过亿位会用科学计算法显示，如 1000000000=>1e9
- 超过安全数字会报错，
- 整数超过 3 位需要有千位分割符
</details>

### 操作符

- 点击数字的时候

* 如果第一次点击的是 0，则按覆盖处理
* 如果 numClicked 了，则叠加原来的数字，否则则覆盖原来的数字

- 点击.的时候，

* 如果 numClicked 了，则叠加原来的数字，
* 如果没有则显示 0.
* 如果 dotClicked 了，不会有任何改变

- 点击运算符的时候

* 加或减

- 小数相加

* 乘或除
* 复位
* 正负
* 百分比
* 等于
  叠加上一步的运算，如 1+2=3 之后如果继续点击等号，会继续+2 的操作。