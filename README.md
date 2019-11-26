# edocteel001
100 Days Leetcode
### day1--141
开始刷题了，今天刷了一道，还算简单，明天准备完成第698题.
### day2--698
我对递归还是理解的不深刻，这题看答案了，还照着敲了一点，再做几道递归的题，再回来做day2这个--698
### day3--795,70
1. 最后这题在网上的参考下用动态规划完成了，其实还是彻底懂，需要先刷两道动态规划的简单题, 再回来把这题重新做一遍，再看看自己能O(1)搞定么。
2. 上楼梯问题自己完成了，理解了一点
### day3--11
1. 这道题非常郁闷，想到了前后双指针，但是没考虑到最简单的情况。
### day4--46
1. 用自己的思路做出来了，真的花了很久，不过对递归的理解深刻了很多。明天把算法优化下吧
### day5--83
1. 今天搞了个简单的，理解了一些链表，明天争取做19, 但是要先干工作。
### day6--19
1. 又是链表，完全自己独立完成的第一道中等题，题目大概只花了15分钟，但是边界问题花了30分钟。惭愧。
### day7--2,56,78
1. 太晚了，这个题看答案了，其实能做出来的，好处是对链表的理解深刻了一点点。从第一次知道leetcode一年多了，我终于把第一次打开leetcode然后懵逼的第二题给做了。
2. 第一道独立完成的排序题搞定，花了不算长的时间。但是效率好像低了点儿，看看答案啥好方法。（js的最佳答案和我思路差不多，显然我的效率低了一点点）
3. 78搞定，又一道全排列相关的题，这题花了好久还遇到了JS一个坑。在js中 [1] in [[1], [2]] 无论是indexof还是includes都为false
4. 27这个题出的好烂，怪不得那么多dislike。今天完成了4道，略牛逼啊，之后需要把之前没通过的先完成（好像只剩下第五题了）
### day8--5, 4
1. 这个题独立用n * n * n 搞定了，看了答案，了解到了还能用动态规划和[马拉车算法](https://www.zhihu.com/question/30226229), 算法还没彻底搞懂，但找到了个[视频动画网站](http://manacher-viz.s3-website-us-east-1.amazonaws.com/#/)也太牛逼了吧。这道题做完，之前没过的题都算完成了，该刷新的题了。
2. 第4题是我的第一道hard题，完全自己独立思考，估计很少有人我这种做法吧？时间和空间复杂度居然都不错，还用到了js的一些技巧，我真是惊了。有点兴奋啊。
### day9--215, 412
1. 这道题超级快的解决了，用了js的数据结构，有偷懒的嫌疑啊。把这道题加入之后的To Do吧
2. 做了道FizzBuzz哈哈，其实这题要是想解的好还是会用到一些技巧的。。。
### day10--62
1. 这道题好有趣啊，开始我的递归超时了改成动态规划，js数组pop效率没有选择高啊，这是我第一道时间和空间全部超过90%答案的题
### day11--63, 28, 64
1. 本来合计11点睡觉的，结果一个深浅拷贝的坑被折磨到现在。(零点37了。要睡了)
2. 第28题还算简单，一遍成功，还是看一下有啥更好的办法没。
```javascript
// 用这种方式创建二维数组
let filledArray = Array.from({length:10},()=> Array(10).fill(1))
// 别用这种傻逼方式 这种是浅拷贝，找原因找一年，妈的
let arr = new Array(m).fill(Array(n).fill(1))
```
3. 第64题，终于把mac真正的全局梯子搞定了，累死了，刷题提交的时候也终于不用连手机了。真是好啊，这道题过了，我看最佳答案不是很好理解，之后再好好看看这题怎么做吧
### day12--38,34,69
1. 每天争取2道吧，一道简单一道中等，或者一道中等一道困难。今天刷的38，这个题确实挺一般啊，难怪大家都不喜欢，我甚至觉得没啥特别的好方法。看看大家咋解的去～
2. 第34题：用js自带的方法解决了，我发现我还没做过2分法的题，决定先做几道2分法的简单的题再把这题完美搞定
3. 第69题：虽然解法丑了一点，但是先这样吧。哈哈。之后优化下，我觉得牛顿法也可以，但既然是二分法就按二分法的来。
### day13--33, 35
1. 先用了js的方法解决了，但是后来看了一眼答案（上班没啥时间自己花时间想（借口））, 这题做完，算是理解了一点点二分法了，再来两道题吧
2. 第35题搞定，没啥可说的。
### day14--136
1. 第一道**位运算**的题，倒是不难，一遍成