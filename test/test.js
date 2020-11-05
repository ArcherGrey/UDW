/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  // 单词 - id 哈希映射
  let wordsMap = [];
  // 图
  let edge = [];
  // id 计数器
  let nodeNum = 1;

  // 生成 单词 - id 映射
  function addWord(word) {
    if (!wordsMap[word]) {
      wordsMap[word] = nodeNum++;
    }
  }

  // 添加每个单词相邻的边，构成图
  function addEdge(word) {
    addWord(word);
    let id1 = wordsMap[word];
    for (let i = 0; i < word.length; ++i) {
      let w = word.slice(0, i) + "*" + word.slice(i + 1);
      addWord(w);
      let id2 = wordsMap[w];

      // 无向图，两个直接互相连接
      if (edge[id1]) {
        edge[id1].push(id2);
      } else {
        edge[id1] = [id2];
      }

      if (edge[id2]) {
        edge[id2].push(id1);
      } else {
        edge[id2] = [id1];
      }
    }
  }

  // 初始化图结构
  for (let word of wordList) {
    addEdge(word);
  }

  // 添加起点相邻结构
  addEdge(beginWord);

  // 返回不到结束词 返回 0
  if (!wordsMap[endWord]) return 0;

  // 初始化距离
  let dis = new Array(nodeNum).fill(-1);

  let beginId = wordsMap[beginWord],
    endId = wordsMap[endWord];

  // 广度优先遍历
  let queue = [beginId];
  while (queue.length) {
    let x = queue.shift();
    if (x === endId) {
      // 加了虚拟节点，需要除以2，加上起点距离1
      return dis[endId] / 2 + 1;
    }
    if (edge[x]) {
      // 更新当前层的每个点的距离
      for (let i of edge[x]) {
        if (dis[i] === -1) {
          dis[i] = dis[x] + 1;
          queue.push(i);
        }
      }
    }
  }

  // 没找到结束词 返回0
  return 0;
};
