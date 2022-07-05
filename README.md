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
### day14--136, 137, 24
1. 第136题：第一道**位运算**的题，倒是不难，一遍成
2. 第137题: 这个题其实我理解不到读了很多讲解都理解的不太好，直到读了[Leetcode 137 —— 位操作解法](https://hanfeng.ink/post/bitwise/)这篇博客才理解了一点点, 受益不少，还特意发了个邮件感谢了作者，哈哈。
3. 第24题： 好久没有这种完全没作出来的题了，看了答案也是似懂非懂，需要再多做几遍啊，废话不多说，明早起来就做一遍。
### day15--160
1. 第160题：先用蠢方法实现了，等下研究下那个精巧的方法，这个题我想复杂了，不过这两天对链表的理解总算深刻了些。
2. 第621题：这题完全看的答案，发现自己根本不懂贪心算法。这题也没太了解，明早重新做一遍这个题，然后来一道贪心算法的简单题吧。
### day16--392, 24, 203
1. 第24题：把昨天的题重新做了一遍，还是需要找时间再来一遍
2. 第392题：独立完成了成绩还不错，开始没考虑到切片的边界条件，之后要注意这点
3. 第203题：一道链表简单题，倒是挺容易的解决了
### day17--66,90
1. 第66题：这个题本身很简单，但我之前没考虑到js会遇到大正数的问题，以后多留意。这个题用递归也做了遍，递归好蠢啊
2. 第90题：终于弄明白了js在嵌套数组中和python不一样的地方。Array.from(new Set(result.map(JSON.stringify)), JSON.parse)，这个题看看答案有啥更精妙的解法没。
### day18--31
1. 这个题抄答案了，反正我觉得真的是不简单，哈哈，明天再来试试吧
### day19--930
1. 第930题：这题解的真是闹心。明天再看吧
### day20--1005
1. 第1006题：随机选的一道题，又在边界条件的问题上没一遍成，不过好在是完成了，果然晚上刷题状态不好，昨晚在边界条件上始终想不明白。随机选题还挺有意思。
### day21--101
1. 第101题: 这是一道简单题，但是是我第一道DFS OR BFS 和 tree的题, 还是遇到不少困难的,之后这阶段会好好看看这3类题。
### day22--100
1. 第100题: 依然是树的题，还遇到了一个JS箭头函数的小知识点[关于javascript：没有花括号的箭头功能](https://www.codenong.com/39629962/)
### day23--102
1. 第102题：还是树，最近有点懈怠了在刷题上。尽快恢复状态。
### day24--821
1. 第821题：这么简单的题做的这么傻逼。
### day25--300
1. 第300题: 动态规划的一道题。要时刻有前一状态的思想
### day26--155. 960
1. 第155题：一道栈的题，不难（其实可以维护两个栈，但我觉得代码不简洁）
2. 第960题: 这个题好难，虽然代码挺短的，需要再做一遍
### day27--112
1. 第112题: 才刚刚理解了深度优先和广度优先一点点
### day28--226
1. 第226题：独立完成（真心不太难），我会反转二叉树了哈哈哈哈哈
### day29--116
1. 第116题：这个题独立完成了，开始理解一点点tree和dfs及bfs了，开心
### day30--202
1. 第202题: 这个题叫happy,确实挺简单的，甚至没有边界条件，周末因为写github登陆，没刷题。今天恢复，今天是正式刷题1个月啦，开心
### day31--146
1. 第146题：这个题抄答案了，之后得再做一遍, 各种实现方式都要考虑
### day32--258
1. 第258题：真是又简单又难得一道题 O(1) 的解法没想到，不是O(1)又一点意思没有
### day33--224
1. 第224题：昨天这个题做出来了, 解的好慢啊，今天不刷题了，专心干活喽
### day34--315
1. 第315题：这个题抄答案了，但通过这个题懂了一些二叉搜索树，先把几道二叉搜索树的简单题做一下，再来回顾这个题
### day35--938
1. 第938题：理解一点点二叉搜索树了
### day36--453
1. 第36题：这题虽然like不高，还是简单题，但我还是很喜欢，虽然没做出来，但很喜欢这题的思路，竟然是道数学题，有趣。 
### day37--598
1. 第598题：这个题很简单，但是学会了js的for let of 可能耗性能，需要用forEach解决
### day38--345
1. 第345题：这个题的虽然不难，但也花了我一些时间注释的fancy解法好酷
### day39--263
1. 第263题：这个题没啥好说的，好简单
### day40--643
1. 第643题：学到了负无穷的应用，学到了点儿滑动窗口
### day41--290
1. 第290题：这个题在星巴克做的，以为自己解法很烂，一看答案，别人也挺麻烦，反而我的还算清晰。。。
### day42--860
1. 第860题：这个题想到了巧妙的解法哈哈，但是为了练习queue和switch case没用。
### day43--207
1. 第207题：第一道图的题，这题很喜欢，学到了一些东西
### day44--344
1. 第344题：这道题挺简单，但是我决定先把top interview 100先刷完了。
### day45--387
1. 第345题：哎，又被JS坑了，这次是map，还多少了解了点儿forEach
### day46--171, 118
1. 第171题：好一阵子没刷题了
2. 第118题：刷两道简单的
### day47--242
1. 第242题: 挺简单的，其实可以用字典的
### day48--208
1. try 前缀树
### day49--559
1. 变笨了，好久没练了
### day50--121
1. 啊。。。好菜啊现在，参考答案做出来了。
### day51---50
1. 今天休年假，看了一道题，自己还是有点菜的。。。上一次刷题还是 3 年前。。。
### day52--665
1. 试了一下每日一题，今天这个题挺有意思。算是贪心算法吧。开始没想明白。
```python
class Solution(object):
    def checkPossibility(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        c = 0
        for i in range(1, len(nums)):
            if nums[i] < nums[i-1]:
                c += 1
                if c > 1:
                    return False
                if i>=2:
                    if nums[i] < nums[i-2]:
                        nums[i] = nums[i-1]
                    else:
                        nums[i-1] = nums[i]
                        
        return True
```
### day53--1423 
1. 滑动窗口。
### day54--1689
1. 凭感觉一次过了。。。return max(n)
### day55-1647
1. 每日一题，没做出来，一看答案，完全可以想到的哎。。。
### day56--462
应该是中位数的一个应用而不是平均数
```python
class Solution(object):
    def minMoves2(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        m = sorted(nums)[len(nums)//2]
        
        return sum(abs(m-i) for  i in nums)
```
### day54--1710
1. 今天的每日一题是 easy 难度，一下子做出来了，顺便测试了下我拿到测试的方法
### day55--1465
1. 两个最大值，今天没啥心情，看了答案理解完做的。
### day56--128
1. 独立做出来了。做的挺蠢的，也花了好久。
