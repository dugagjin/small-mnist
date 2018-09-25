const test = [{"input":[[63,0],[5,1],[15,0],[16,1],[4,0],[16,1],[10,0],[1,1],[1,0],[4,1],[1,0],[3,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[4,1],[8,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[6,0],[8,1],[11,0],[10,1],[9,0],[4,1],[4,0],[3,1],[9,0],[3,1],[4,0],[4,1],[16,0],[4,1],[15,0],[4,1],[15,0],[5,1],[15,0],[4,1],[15,0],[4,1],[16,0],[3,1],[16,0],[4,1],[15,0],[4,1],[16,0],[4,1],[15,0],[4,1],[16,0],[3,1],[17,0],[3,1],[11,0],[1,1],[5,0],[15,1],[5,0],[15,1],[6,0],[11,1],[23,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[14,0],[2,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[2,1],[10,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[10,0],[3,1],[17,0],[4,1],[15,0],[5,1],[13,0],[9,1],[11,0],[10,1],[9,0],[11,1],[8,0],[13,1],[7,0],[6,1],[4,0],[4,1],[6,0],[4,1],[6,0],[4,1],[6,0],[3,1],[8,0],[3,1],[6,0],[2,1],[9,0],[4,1],[4,0],[3,1],[8,0],[4,1],[5,0],[3,1],[7,0],[5,1],[5,0],[3,1],[6,0],[6,1],[5,0],[3,1],[5,0],[6,1],[6,0],[13,1],[7,0],[13,1],[8,0],[10,1],[10,0],[9,1],[13,0],[6,1],[7,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[28,0],[1,1],[7,0],[1,1],[10,0],[2,1],[7,0],[2,1],[9,0],[2,1],[7,0],[2,1],[8,0],[3,1],[7,0],[2,1],[8,0],[2,1],[8,0],[2,1],[7,0],[3,1],[8,0],[2,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[2,1],[8,0],[3,1],[7,0],[2,1],[8,0],[3,1],[7,0],[2,1],[8,0],[3,1],[7,0],[13,1],[8,0],[11,1],[11,0],[4,1],[2,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[4,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[33,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[4,1],[15,0],[4,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[9,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[27,0],[2,1],[10,0],[1,1],[6,0],[3,1],[9,0],[2,1],[5,0],[3,1],[9,0],[3,1],[4,0],[3,1],[10,0],[2,1],[5,0],[3,1],[9,0],[3,1],[4,0],[3,1],[9,0],[3,1],[5,0],[3,1],[8,0],[3,1],[6,0],[14,1],[6,0],[13,1],[9,0],[7,1],[1,0],[3,1],[17,0],[2,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[6,1],[14,0],[5,1],[5,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[49,0],[2,1],[16,0],[4,1],[16,0],[5,1],[14,0],[8,1],[12,0],[8,1],[11,0],[3,1],[2,0],[5,1],[10,0],[3,1],[3,0],[4,1],[10,0],[3,1],[3,0],[4,1],[10,0],[3,1],[1,0],[6,1],[11,0],[6,1],[1,0],[3,1],[10,0],[5,1],[2,0],[3,1],[11,0],[3,1],[4,0],[3,1],[17,0],[3,1],[18,0],[3,1],[18,0],[2,1],[18,0],[3,1],[18,0],[2,1],[19,0],[2,1]],"output":[[9,0],[1,1]],"label":9},{"input":[[19,0],[1,1],[12,0],[8,1],[10,0],[10,1],[9,0],[11,1],[6,0],[2,1],[1,0],[7,1],[9,0],[3,1],[16,0],[3,1],[16,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[9,1],[2,0],[1,1],[8,0],[14,1],[7,0],[14,1],[9,0],[11,1],[11,0],[9,1],[12,0],[8,1],[12,0],[7,1],[14,0],[5,1],[16,0],[2,1],[7,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[71,0],[5,1],[13,0],[10,1],[8,0],[13,1],[5,0],[6,1],[3,0],[1,1],[1,0],[4,1],[4,0],[5,1],[5,0],[1,1],[1,0],[4,1],[3,0],[5,1],[6,0],[6,1],[3,0],[16,1],[5,0],[14,1],[8,0],[11,1],[14,0],[5,1],[14,0],[5,1],[14,0],[5,1],[14,0],[6,1],[14,0],[5,1],[15,0],[4,1],[15,0],[4,1],[15,0],[5,1],[9,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[8,0],[1,1],[2,0],[5,1],[11,0],[11,1],[8,0],[12,1],[8,0],[4,1],[5,0],[4,1],[6,0],[4,1],[7,0],[4,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[4,0],[3,1],[10,0],[3,1],[4,0],[3,1],[10,0],[3,1],[4,0],[2,1],[11,0],[3,1],[4,0],[2,1],[11,0],[3,1],[3,0],[3,1],[11,0],[3,1],[3,0],[3,1],[10,0],[4,1],[3,0],[3,1],[9,0],[4,1],[4,0],[3,1],[9,0],[4,1],[5,0],[2,1],[7,0],[5,1],[6,0],[13,1],[7,0],[12,1],[10,0],[8,1],[6,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[7,0],[4,1],[15,0],[4,1],[16,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[7,0],[3,1],[7,0],[3,1],[5,0],[7,1],[5,0],[2,1],[4,0],[9,1],[4,0],[3,1],[3,0],[5,1],[3,0],[2,1],[4,0],[3,1],[2,0],[4,1],[5,0],[2,1],[4,0],[3,1],[2,0],[3,1],[6,0],[2,1],[4,0],[3,1],[1,0],[3,1],[7,0],[2,1],[4,0],[3,1],[1,0],[3,1],[7,0],[2,1],[4,0],[3,1],[2,0],[3,1],[5,0],[3,1],[4,0],[3,1],[3,0],[3,1],[2,0],[4,1],[5,0],[3,1],[4,0],[1,1],[2,0],[4,1],[7,0],[12,1],[9,0],[9,1],[12,0],[6,1],[27,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[70,0],[5,1],[2,0],[1,1],[10,0],[11,1],[8,0],[12,1],[8,0],[3,1],[5,0],[3,1],[8,0],[3,1],[5,0],[4,1],[7,0],[3,1],[6,0],[3,1],[8,0],[3,1],[5,0],[4,1],[8,0],[3,1],[4,0],[4,1],[9,0],[11,1],[10,0],[10,1],[11,0],[4,1],[1,0],[3,1],[17,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[3,1],[7,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[30,0],[6,1],[12,0],[9,1],[10,0],[10,1],[10,0],[5,1],[1,0],[4,1],[9,0],[4,1],[4,0],[4,1],[7,0],[5,1],[5,0],[4,1],[6,0],[4,1],[7,0],[3,1],[6,0],[4,1],[7,0],[3,1],[5,0],[4,1],[8,0],[3,1],[5,0],[4,1],[8,0],[4,1],[4,0],[3,1],[9,0],[4,1],[4,0],[3,1],[9,0],[4,1],[4,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[6,0],[3,1],[8,0],[2,1],[7,0],[3,1],[7,0],[3,1],[8,0],[3,1],[5,0],[3,1],[10,0],[3,1],[3,0],[4,1],[11,0],[8,1],[4,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[10,0],[3,1],[17,0],[4,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[15,0],[5,1],[15,0],[5,1],[14,0],[5,1],[15,0],[3,1],[9,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[9,0],[8,1],[8,0],[10,1],[10,0],[7,1],[13,0],[3,1],[18,0],[2,1],[18,0],[2,1],[18,0],[6,1],[14,0],[8,1],[11,0],[11,1],[8,0],[3,1],[6,0],[4,1],[18,0],[4,1],[18,0],[3,1],[17,0],[3,1],[19,0],[1,1],[19,0],[1,1],[19,0],[1,1],[5,0],[2,1],[11,0],[2,1],[4,0],[3,1],[7,0],[6,1],[4,0],[14,1],[7,0],[9,1],[6,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[48,0],[6,1],[13,0],[8,1],[11,0],[4,1],[3,0],[2,1],[1,0],[1,1],[8,0],[3,1],[7,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[7,0],[4,1],[6,0],[2,1],[8,0],[3,1],[7,0],[2,1],[7,0],[4,1],[7,0],[3,1],[5,0],[4,1],[9,0],[11,1],[9,0],[11,1],[11,0],[2,1],[4,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[3,1],[6,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[61,0],[9,1],[1,0],[2,1],[8,0],[15,1],[6,0],[16,1],[13,0],[7,1],[17,0],[4,1],[17,0],[2,1],[17,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[15,0],[4,1],[15,0],[4,1],[15,0],[5,1],[15,0],[4,1],[15,0],[4,1],[15,0],[5,1],[7,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[5,0],[2,1],[16,0],[6,1],[13,0],[9,1],[11,0],[10,1],[10,0],[3,1],[3,0],[5,1],[9,0],[2,1],[5,0],[5,1],[8,0],[2,1],[6,0],[5,1],[7,0],[2,1],[2,0],[9,1],[7,0],[3,1],[1,0],[10,1],[7,0],[1,1],[2,0],[12,1],[8,0],[13,1],[16,0],[5,1],[7,0],[1,1],[8,0],[4,1],[5,0],[4,1],[9,0],[2,1],[5,0],[5,1],[8,0],[2,1],[6,0],[4,1],[8,0],[2,1],[7,0],[4,1],[5,0],[4,1],[8,0],[12,1],[9,0],[11,1],[13,0],[4,1],[3,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[35,0],[2,1],[18,0],[2,1],[17,0],[3,1],[10,0],[1,1],[6,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[2,1],[10,0],[2,1],[6,0],[2,1],[9,0],[3,1],[6,0],[2,1],[9,0],[2,1],[6,0],[3,1],[9,0],[11,1],[9,0],[12,1],[8,0],[3,1],[5,0],[4,1],[16,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[5,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[53,0],[2,1],[16,0],[5,1],[1,0],[1,1],[12,0],[9,1],[9,0],[11,1],[8,0],[12,1],[7,0],[12,1],[7,0],[12,1],[8,0],[12,1],[8,0],[6,1],[2,0],[3,1],[10,0],[2,1],[4,0],[3,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[16,0],[3,1],[16,0],[4,1],[15,0],[5,1],[15,0],[4,1],[9,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[9,0],[5,1],[14,0],[4,1],[1,0],[1,1],[14,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[10,1],[10,0],[11,1],[9,0],[6,1],[1,0],[5,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[9,0],[3,1],[4,0],[4,1],[10,0],[9,1],[12,0],[6,1],[15,0],[4,1],[26,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[6,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[6,0],[5,1],[6,0],[3,1],[5,0],[7,1],[5,0],[3,1],[5,0],[7,1],[5,0],[3,1],[4,0],[4,1],[2,0],[2,1],[5,0],[3,1],[4,0],[3,1],[3,0],[3,1],[4,0],[3,1],[4,0],[2,1],[4,0],[3,1],[5,0],[2,1],[3,0],[3,1],[4,0],[2,1],[6,0],[3,1],[2,0],[3,1],[3,0],[3,1],[6,0],[7,1],[3,0],[3,1],[8,0],[12,1],[10,0],[8,1],[14,0],[5,1],[15,0],[6,1],[15,0],[4,1],[25,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[33,0],[7,1],[10,0],[8,1],[1,0],[1,1],[8,0],[7,1],[4,0],[1,1],[8,0],[4,1],[16,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[9,1],[12,0],[9,1],[17,0],[4,1],[17,0],[3,1],[15,0],[4,1],[15,0],[5,1],[11,0],[7,1],[11,0],[7,1],[12,0],[7,1],[9,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[28,0],[2,1],[18,0],[1,1],[18,0],[2,1],[4,0],[2,1],[11,0],[2,1],[5,0],[2,1],[11,0],[2,1],[5,0],[2,1],[11,0],[2,1],[5,0],[2,1],[10,0],[2,1],[6,0],[3,1],[9,0],[2,1],[6,0],[2,1],[9,0],[2,1],[7,0],[2,1],[9,0],[2,1],[7,0],[2,1],[9,0],[4,1],[5,0],[2,1],[10,0],[13,1],[13,0],[4,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[19,0],[2,1],[18,0],[2,1],[4,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[11,0],[6,1],[14,0],[7,1],[9,0],[2,1],[2,0],[9,1],[6,0],[4,1],[1,0],[9,1],[5,0],[5,1],[1,0],[9,1],[4,0],[6,1],[3,0],[7,1],[3,0],[8,1],[3,0],[1,1],[2,0],[3,1],[2,0],[8,1],[8,0],[2,1],[2,0],[7,1],[9,0],[2,1],[2,0],[7,1],[8,0],[3,1],[2,0],[6,1],[9,0],[3,1],[2,0],[5,1],[8,0],[5,1],[2,0],[5,1],[5,0],[8,1],[2,0],[18,1],[2,0],[17,1],[3,0],[16,1],[5,0],[14,1],[7,0],[12,1],[9,0],[9,1],[12,0],[6,1],[8,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[88,0],[8,1],[7,0],[1,1],[2,0],[10,1],[6,0],[7,1],[4,0],[3,1],[5,0],[5,1],[8,0],[3,1],[4,0],[3,1],[10,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[5,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[29,0],[2,1],[17,0],[3,1],[5,0],[2,1],[10,0],[3,1],[5,0],[2,1],[9,0],[4,1],[4,0],[3,1],[9,0],[3,1],[5,0],[3,1],[8,0],[4,1],[5,0],[3,1],[8,0],[3,1],[6,0],[2,1],[8,0],[3,1],[7,0],[2,1],[7,0],[3,1],[8,0],[2,1],[7,0],[5,1],[5,0],[3,1],[7,0],[13,1],[7,0],[13,1],[12,0],[7,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[5,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[27,0],[9,1],[11,0],[10,1],[10,0],[10,1],[11,0],[10,1],[10,0],[3,1],[2,0],[5,1],[9,0],[3,1],[4,0],[4,1],[9,0],[3,1],[4,0],[5,1],[7,0],[3,1],[6,0],[4,1],[7,0],[3,1],[6,0],[4,1],[6,0],[3,1],[7,0],[4,1],[6,0],[3,1],[7,0],[4,1],[6,0],[3,1],[7,0],[4,1],[6,0],[3,1],[7,0],[4,1],[6,0],[3,1],[7,0],[3,1],[7,0],[3,1],[7,0],[3,1],[7,0],[5,1],[1,0],[6,1],[8,0],[12,1],[8,0],[11,1],[11,0],[8,1],[5,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[8,0],[2,1],[18,0],[3,1],[17,0],[3,1],[17,0],[3,1],[18,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[3,1],[7,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[45,0],[9,1],[10,0],[10,1],[10,0],[11,1],[9,0],[2,1],[5,0],[4,1],[15,0],[4,1],[14,0],[6,1],[13,0],[6,1],[15,0],[8,1],[13,0],[8,1],[15,0],[5,1],[17,0],[4,1],[16,0],[4,1],[15,0],[4,1],[15,0],[4,1],[15,0],[4,1],[14,0],[5,1],[12,0],[7,1],[12,0],[6,1],[9,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[29,0],[2,1],[18,0],[3,1],[17,0],[3,1],[17,0],[3,1],[18,0],[2,1],[18,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[18,0],[2,1],[18,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[18,0],[2,1],[18,0],[2,1],[18,0],[3,1],[5,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[25,0],[7,1],[12,0],[9,1],[10,0],[11,1],[10,0],[2,1],[4,0],[4,1],[16,0],[4,1],[16,0],[3,1],[15,0],[5,1],[14,0],[5,1],[14,0],[8,1],[12,0],[9,1],[11,0],[11,1],[15,0],[5,1],[17,0],[4,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[13,0],[7,1],[11,0],[8,1],[9,0],[9,1],[4,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[27,0],[3,1],[17,0],[3,1],[17,0],[3,1],[9,0],[1,1],[7,0],[3,1],[9,0],[1,1],[7,0],[3,1],[9,0],[1,1],[6,0],[4,1],[9,0],[1,1],[6,0],[3,1],[9,0],[2,1],[5,0],[3,1],[10,0],[2,1],[4,0],[4,1],[10,0],[2,1],[4,0],[3,1],[11,0],[2,1],[4,0],[3,1],[11,0],[2,1],[2,0],[4,1],[12,0],[2,1],[2,0],[14,1],[1,0],[3,1],[2,0],[18,1],[2,0],[10,1],[3,0],[4,1],[4,0],[2,1],[11,0],[3,1],[61,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[44,0],[3,1],[6,0],[6,1],[5,0],[16,1],[5,0],[15,1],[9,0],[2,1],[4,0],[5,1],[14,0],[4,1],[16,0],[4,1],[15,0],[5,1],[15,0],[4,1],[15,0],[4,1],[15,0],[5,1],[14,0],[5,1],[14,0],[6,1],[13,0],[5,1],[15,0],[5,1],[14,0],[5,1],[14,0],[5,1],[14,0],[5,1],[15,0],[5,1],[10,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[10,0],[8,1],[10,0],[11,1],[7,0],[6,1],[4,0],[4,1],[5,0],[5,1],[7,0],[3,1],[4,0],[4,1],[9,0],[3,1],[3,0],[3,1],[11,0],[3,1],[3,0],[3,1],[11,0],[2,1],[17,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[3,1],[16,0],[4,1],[15,0],[4,1],[15,0],[4,1],[13,0],[5,1],[11,0],[11,1],[4,0],[1,1],[2,0],[18,1],[2,0],[8,1],[2,0],[7,1],[2,0],[7,1],[6,0],[3,1],[5,0],[4,1],[14,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[63,0],[13,1],[7,0],[14,1],[5,0],[6,1],[7,0],[3,1],[3,0],[5,1],[9,0],[2,1],[3,0],[4,1],[11,0],[2,1],[3,0],[3,1],[11,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[2,1],[17,0],[7,1],[12,0],[8,1],[11,0],[6,1],[14,0],[4,1],[17,0],[3,1],[17,0],[3,1],[7,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[29,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[7,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[11,0],[3,1],[15,0],[5,1],[13,0],[7,1],[12,0],[4,1],[1,0],[3,1],[11,0],[3,1],[3,0],[3,1],[11,0],[1,1],[5,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[2,1],[17,0],[2,1],[9,0],[1,1],[7,0],[3,1],[7,0],[3,1],[7,0],[2,1],[6,0],[5,1],[6,0],[3,1],[3,0],[6,1],[8,0],[2,1],[2,0],[6,1],[9,0],[9,1],[11,0],[7,1],[12,0],[6,1],[10,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[11,0],[2,1],[18,0],[3,1],[16,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[4,1],[16,0],[4,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[3,1],[17,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[7,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[10,0],[1,1],[19,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[19,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[2,1],[18,0],[2,1],[9,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[69,0],[6,1],[11,0],[10,1],[8,0],[8,1],[1,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[2,1],[7,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[16,0],[4,1],[16,0],[7,1],[13,0],[7,1],[13,0],[3,1],[1,0],[3,1],[12,0],[3,1],[17,0],[2,1],[17,0],[2,1],[17,0],[3,1],[9,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[45,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[5,0],[4,1],[7,0],[3,1],[6,0],[4,1],[7,0],[3,1],[5,0],[5,1],[7,0],[3,1],[4,0],[5,1],[8,0],[3,1],[3,0],[6,1],[8,0],[3,1],[3,0],[6,1],[9,0],[11,1],[9,0],[10,1],[12,0],[3,1],[1,0],[4,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[6,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[12,0],[2,1],[17,0],[4,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[2,1],[18,0],[2,1],[17,0],[2,1],[17,0],[3,1],[17,0],[2,1],[17,0],[2,1],[17,0],[3,1],[2,0],[7,1],[7,0],[13,1],[5,0],[9,1],[9,0],[7,1],[12,0],[5,1],[15,0],[4,1],[16,0],[2,1],[56,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[7,0],[4,1],[15,0],[6,1],[13,0],[7,1],[13,0],[2,1],[2,0],[3,1],[18,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[4,1],[16,0],[5,1],[15,0],[6,1],[16,0],[5,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[14,0],[5,1],[13,0],[6,1],[13,0],[6,1],[14,0],[5,1],[15,0],[3,1],[10,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[29,0],[8,1],[12,0],[10,1],[9,0],[3,1],[2,0],[6,1],[9,0],[3,1],[7,0],[1,1],[9,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[7,1],[12,0],[9,1],[11,0],[3,1],[4,0],[2,1],[10,0],[3,1],[5,0],[3,1],[9,0],[2,1],[6,0],[3,1],[17,0],[3,1],[8,0],[2,1],[7,0],[3,1],[8,0],[2,1],[7,0],[2,1],[9,0],[2,1],[6,0],[3,1],[9,0],[2,1],[5,0],[3,1],[10,0],[3,1],[1,0],[5,1],[12,0],[7,1],[7,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[7,0],[3,1],[17,0],[4,1],[16,0],[4,1],[16,0],[5,1],[15,0],[5,1],[16,0],[4,1],[16,0],[5,1],[16,0],[4,1],[16,0],[5,1],[16,0],[4,1],[16,0],[4,1],[16,0],[5,1],[15,0],[5,1],[16,0],[5,1],[15,0],[5,1],[15,0],[5,1],[16,0],[5,1],[15,0],[5,1],[16,0],[4,1],[16,0],[3,1],[4,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[6,0],[1,1],[4,0],[3,1],[18,0],[2,1],[19,0],[2,1],[18,0],[2,1],[19,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[2,1],[12,0],[3,1],[3,0],[2,1],[11,0],[9,1],[10,0],[2,1],[3,0],[4,1],[11,0],[2,1],[4,0],[3,1],[10,0],[2,1],[4,0],[5,1],[10,0],[1,1],[2,0],[4,1],[2,0],[3,1],[8,0],[6,1],[4,0],[4,1],[7,0],[3,1],[7,0],[4,1],[40,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[47,0],[3,1],[5,0],[3,1],[8,0],[4,1],[4,0],[4,1],[7,0],[5,1],[4,0],[5,1],[6,0],[5,1],[4,0],[5,1],[5,0],[6,1],[4,0],[4,1],[6,0],[5,1],[3,0],[6,1],[6,0],[14,1],[5,0],[15,1],[5,0],[14,1],[7,0],[13,1],[7,0],[13,1],[7,0],[1,1],[7,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[14,0],[6,1],[13,0],[7,1],[13,0],[6,1],[4,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[24,0],[2,1],[9,0],[1,1],[8,0],[2,1],[8,0],[3,1],[7,0],[2,1],[8,0],[3,1],[7,0],[2,1],[8,0],[3,1],[7,0],[3,1],[7,0],[3,1],[7,0],[3,1],[7,0],[3,1],[7,0],[3,1],[7,0],[3,1],[1,0],[2,1],[4,0],[3,1],[7,0],[6,1],[4,0],[3,1],[7,0],[5,1],[5,0],[3,1],[7,0],[4,1],[6,0],[13,1],[7,0],[13,1],[8,0],[12,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[3,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[13,0],[4,1],[15,0],[4,1],[15,0],[4,1],[16,0],[3,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[2,0],[5,1],[9,0],[4,1],[1,0],[6,1],[9,0],[3,1],[5,0],[4,1],[8,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[4,1],[3,0],[4,1],[9,0],[10,1],[11,0],[8,1],[14,0],[5,1],[26,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[42,0],[12,1],[7,0],[14,1],[6,0],[15,1],[5,0],[7,1],[3,0],[5,1],[15,0],[5,1],[14,0],[5,1],[11,0],[11,1],[7,0],[14,1],[6,0],[16,1],[4,0],[6,1],[4,0],[6,1],[17,0],[3,1],[18,0],[2,1],[6,0],[1,1],[10,0],[3,1],[5,0],[3,1],[8,0],[4,1],[5,0],[15,1],[6,0],[13,1],[8,0],[11,1],[13,0],[4,1],[5,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[56,0],[4,1],[14,0],[6,1],[9,0],[9,1],[10,0],[7,1],[12,0],[6,1],[13,0],[4,1],[15,0],[4,1],[16,0],[3,1],[17,0],[3,1],[1,0],[5,1],[10,0],[12,1],[8,0],[6,1],[3,0],[4,1],[8,0],[2,1],[7,0],[3,1],[17,0],[3,1],[17,0],[3,1],[15,0],[4,1],[14,0],[6,1],[10,0],[8,1],[9,0],[9,1],[8,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[12,0],[4,1],[14,0],[4,1],[11,0],[7,1],[13,0],[5,1],[15,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[6,0],[1,1],[10,0],[3,1],[1,0],[9,1],[7,0],[8,1],[2,0],[4,1],[7,0],[3,1],[8,0],[3,1],[18,0],[2,1],[18,0],[2,1],[18,0],[3,1],[17,0],[2,1],[18,0],[2,1],[18,0],[2,1],[7,0],[2,1],[7,0],[3,1],[8,0],[3,1],[2,0],[6,1],[10,0],[8,1],[5,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[6,0],[3,1],[16,0],[4,1],[15,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[5,0],[9,1],[3,0],[3,1],[5,0],[9,1],[3,0],[3,1],[4,0],[4,1],[5,0],[1,1],[3,0],[3,1],[4,0],[4,1],[9,0],[3,1],[4,0],[4,1],[9,0],[3,1],[4,0],[4,1],[9,0],[5,1],[3,0],[5,1],[8,0],[4,1],[4,0],[5,1],[8,0],[4,1],[4,0],[7,1],[5,0],[15,1],[6,0],[13,1],[11,0],[6,1],[24,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[31,0],[4,1],[13,0],[8,1],[12,0],[9,1],[10,0],[5,1],[2,0],[3,1],[10,0],[5,1],[3,0],[3,1],[9,0],[5,1],[3,0],[3,1],[9,0],[4,1],[4,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[8,0],[4,1],[5,0],[3,1],[8,0],[4,1],[5,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[3,1],[8,0],[3,1],[6,0],[2,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[3,0],[4,1],[11,0],[8,1],[12,0],[7,1],[6,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[25,0],[3,1],[17,0],[3,1],[9,0],[3,1],[4,0],[4,1],[9,0],[3,1],[4,0],[4,1],[8,0],[4,1],[4,0],[4,1],[8,0],[4,1],[4,0],[4,1],[8,0],[3,1],[5,0],[4,1],[8,0],[2,1],[6,0],[3,1],[8,0],[3,1],[5,0],[4,1],[7,0],[4,1],[5,0],[10,1],[1,0],[4,1],[5,0],[15,1],[5,0],[15,1],[6,0],[6,1],[4,0],[3,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[15,0],[5,1],[15,0],[5,1],[16,0],[4,1],[3,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[32,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[2,1],[18,0],[2,1],[17,0],[3,1],[18,0],[2,1],[9,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[71,0],[5,1],[12,0],[9,1],[10,0],[11,1],[7,0],[6,1],[4,0],[3,1],[6,0],[5,1],[6,0],[3,1],[5,0],[4,1],[8,0],[4,1],[4,0],[3,1],[7,0],[5,1],[5,0],[4,1],[3,0],[8,1],[5,0],[15,1],[6,0],[13,1],[9,0],[2,1],[5,0],[4,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[5,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[77,0],[3,1],[15,0],[5,1],[11,0],[7,1],[9,0],[9,1],[11,0],[6,1],[14,0],[2,1],[17,0],[3,1],[16,0],[2,1],[19,0],[2,1],[18,0],[4,1],[17,0],[4,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[1,1],[18,0],[3,1],[16,0],[3,1],[10,0]],"output":[[5,0],[1,1],[4,0]],"label":5},{"input":[[60,0],[6,1],[14,0],[13,1],[7,0],[15,1],[6,0],[15,1],[14,0],[8,1],[14,0],[6,1],[15,0],[5,1],[16,0],[4,1],[16,0],[5,1],[15,0],[5,1],[15,0],[4,1],[16,0],[4,1],[16,0],[4,1],[15,0],[5,1],[15,0],[4,1],[16,0],[4,1],[15,0],[4,1],[4,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[49,0],[10,1],[9,0],[12,1],[6,0],[14,1],[6,0],[4,1],[8,0],[2,1],[6,0],[3,1],[8,0],[3,1],[6,0],[4,1],[7,0],[3,1],[7,0],[3,1],[5,0],[5,1],[8,0],[3,1],[2,0],[6,1],[10,0],[8,1],[11,0],[7,1],[10,0],[9,1],[9,0],[11,1],[7,0],[6,1],[3,0],[5,1],[6,0],[13,1],[8,0],[11,1],[11,0],[8,1],[48,0]],"output":[[8,0],[1,1],[1,0]],"label":8},{"input":[[47,0],[7,1],[12,0],[10,1],[10,0],[2,1],[6,0],[2,1],[10,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[5,0],[2,1],[11,0],[3,1],[4,0],[2,1],[11,0],[3,1],[3,0],[3,1],[12,0],[2,1],[3,0],[3,1],[12,0],[3,1],[2,0],[3,1],[13,0],[7,1],[14,0],[2,1],[1,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[18,0],[3,1],[5,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[8,0],[4,1],[16,0],[6,1],[15,0],[6,1],[15,0],[6,1],[17,0],[4,1],[17,0],[3,1],[18,0],[2,1],[17,0],[3,1],[16,0],[4,1],[9,0],[10,1],[10,0],[9,1],[12,0],[7,1],[17,0],[3,1],[18,0],[2,1],[10,0],[2,1],[6,0],[2,1],[9,0],[2,1],[5,0],[4,1],[9,0],[2,1],[3,0],[6,1],[9,0],[9,1],[11,0],[7,1],[30,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[61,0],[18,1],[2,0],[19,1],[2,0],[18,1],[16,0],[4,1],[15,0],[4,1],[15,0],[5,1],[8,0],[1,1],[5,0],[4,1],[9,0],[11,1],[9,0],[14,1],[7,0],[13,1],[10,0],[10,1],[9,0],[4,1],[15,0],[4,1],[15,0],[4,1],[16,0],[3,1],[16,0],[4,1],[15,0],[4,1],[11,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[33,0],[2,1],[18,0],[2,1],[14,0],[1,1],[3,0],[2,1],[14,0],[2,1],[2,0],[2,1],[14,0],[2,1],[2,0],[2,1],[13,0],[3,1],[2,0],[2,1],[13,0],[3,1],[2,0],[2,1],[13,0],[3,1],[2,0],[2,1],[12,0],[8,1],[12,0],[8,1],[12,0],[8,1],[12,0],[2,1],[4,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[6,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[8,0],[3,1],[16,0],[3,1],[16,0],[3,1],[17,0],[2,1],[17,0],[3,1],[7,0],[4,1],[6,0],[2,1],[6,0],[7,1],[5,0],[2,1],[6,0],[7,1],[5,0],[1,1],[6,0],[3,1],[2,0],[2,1],[5,0],[2,1],[5,0],[3,1],[3,0],[2,1],[5,0],[2,1],[5,0],[3,1],[3,0],[2,1],[5,0],[2,1],[5,0],[2,1],[4,0],[2,1],[5,0],[2,1],[5,0],[2,1],[3,0],[2,1],[6,0],[2,1],[4,0],[3,1],[2,0],[3,1],[6,0],[2,1],[4,0],[3,1],[1,0],[4,1],[6,0],[3,1],[3,0],[3,1],[1,0],[3,1],[8,0],[3,1],[2,0],[6,1],[9,0],[11,1],[11,0],[8,1],[45,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[38,0],[2,1],[16,0],[4,1],[15,0],[4,1],[7,0],[1,1],[8,0],[4,1],[5,0],[4,1],[6,0],[4,1],[6,0],[3,1],[7,0],[4,1],[4,0],[3,1],[9,0],[3,1],[5,0],[3,1],[8,0],[4,1],[5,0],[3,1],[8,0],[4,1],[4,0],[4,1],[9,0],[2,1],[5,0],[6,1],[3,0],[6,1],[6,0],[14,1],[7,0],[12,1],[11,0],[2,1],[4,0],[3,1],[18,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[5,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[25,0],[10,1],[9,0],[12,1],[8,0],[13,1],[7,0],[6,1],[1,0],[6,1],[15,0],[5,1],[12,0],[8,1],[11,0],[8,1],[11,0],[9,1],[10,0],[8,1],[12,0],[10,1],[10,0],[10,1],[11,0],[10,1],[15,0],[5,1],[16,0],[4,1],[11,0],[1,1],[4,0],[4,1],[10,0],[3,1],[1,0],[6,1],[9,0],[10,1],[11,0],[9,1],[11,0],[8,1],[5,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[48,0],[9,1],[10,0],[12,1],[7,0],[14,1],[5,0],[7,1],[6,0],[2,1],[4,0],[3,1],[12,0],[1,1],[3,0],[4,1],[12,0],[1,1],[2,0],[4,1],[13,0],[1,1],[2,0],[3,1],[14,0],[1,1],[2,0],[3,1],[14,0],[1,1],[2,0],[2,1],[15,0],[1,1],[2,0],[3,1],[14,0],[1,1],[2,0],[3,1],[12,0],[3,1],[2,0],[4,1],[9,0],[5,1],[3,0],[16,1],[5,0],[13,1],[8,0],[11,1],[44,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[80,0],[14,1],[6,0],[18,1],[9,0],[12,1],[14,0],[6,1],[16,0],[4,1],[17,0],[3,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[15,0],[4,1],[15,0],[4,1],[15,0],[4,1],[15,0],[4,1],[16,0],[3,1],[16,0],[4,1],[15,0],[4,1],[8,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[8,0],[6,1],[13,0],[10,1],[10,0],[12,1],[7,0],[5,1],[2,0],[6,1],[6,0],[5,1],[5,0],[5,1],[4,0],[6,1],[6,0],[4,1],[4,0],[5,1],[8,0],[3,1],[3,0],[5,1],[9,0],[3,1],[3,0],[5,1],[9,0],[3,1],[3,0],[4,1],[10,0],[3,1],[3,0],[4,1],[10,0],[3,1],[3,0],[4,1],[10,0],[3,1],[3,0],[4,1],[10,0],[3,1],[3,0],[4,1],[9,0],[4,1],[3,0],[4,1],[8,0],[5,1],[4,0],[3,1],[7,0],[6,1],[4,0],[4,1],[1,0],[10,1],[5,0],[14,1],[7,0],[12,1],[9,0],[7,1],[7,0]],"output":[[1,1],[9,0]],"label":0},{"input":[[5,0],[10,1],[9,0],[13,1],[7,0],[5,1],[5,0],[3,1],[7,0],[4,1],[7,0],[3,1],[18,0],[3,1],[17,0],[3,1],[18,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[7,0],[2,1],[7,0],[3,1],[7,0],[7,1],[2,0],[3,1],[7,0],[13,1],[7,0],[2,1],[4,0],[6,1],[8,0],[3,1],[3,0],[7,1],[7,0],[14,1],[8,0],[6,1],[3,0],[4,1],[2,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[50,0],[7,1],[12,0],[8,1],[11,0],[10,1],[9,0],[5,1],[2,0],[4,1],[9,0],[4,1],[3,0],[4,1],[9,0],[11,1],[10,0],[10,1],[11,0],[8,1],[13,0],[7,1],[13,0],[6,1],[13,0],[6,1],[13,0],[6,1],[13,0],[5,1],[14,0],[6,1],[14,0],[5,1],[14,0],[5,1],[14,0],[6,1],[14,0],[5,1],[11,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[30,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[8,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[75,0],[2,1],[17,0],[3,1],[4,0],[16,1],[4,0],[15,1],[11,0],[8,1],[17,0],[3,1],[16,0],[4,1],[16,0],[3,1],[13,0],[12,1],[7,0],[13,1],[8,0],[10,1],[14,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[7,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[9,0],[5,1],[14,0],[7,1],[13,0],[3,1],[1,0],[3,1],[12,0],[2,1],[4,0],[2,1],[12,0],[2,1],[4,0],[2,1],[17,0],[3,1],[16,0],[3,1],[15,0],[4,1],[15,0],[4,1],[15,0],[6,1],[15,0],[7,1],[18,0],[3,1],[18,0],[3,1],[18,0],[2,1],[18,0],[2,1],[17,0],[3,1],[16,0],[3,1],[9,0],[2,1],[5,0],[4,1],[9,0],[2,1],[3,0],[5,1],[10,0],[9,1],[6,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[68,0],[5,1],[12,0],[10,1],[8,0],[5,1],[4,0],[4,1],[6,0],[4,1],[7,0],[4,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[2,1],[10,0],[2,1],[17,0],[3,1],[16,0],[3,1],[16,0],[3,1],[16,0],[3,1],[16,0],[3,1],[16,0],[4,1],[15,0],[13,1],[6,0],[14,1],[40,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[52,0],[4,1],[15,0],[5,1],[15,0],[5,1],[13,0],[4,1],[1,0],[3,1],[11,0],[4,1],[2,0],[3,1],[10,0],[4,1],[2,0],[4,1],[10,0],[10,1],[9,0],[10,1],[11,0],[8,1],[13,0],[2,1],[1,0],[3,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[2,1],[17,0],[6,1],[7,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[71,0],[8,1],[5,0],[15,1],[4,0],[17,1],[2,0],[17,1],[3,0],[17,1],[4,0],[8,1],[3,0],[5,1],[13,0],[7,1],[13,0],[6,1],[13,0],[7,1],[12,0],[7,1],[12,0],[6,1],[13,0],[6,1],[13,0],[7,1],[12,0],[7,1],[12,0],[7,1],[12,0],[7,1],[13,0],[7,1],[9,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[66,0],[3,1],[3,0],[2,1],[12,0],[9,1],[11,0],[9,1],[10,0],[10,1],[10,0],[3,1],[5,0],[2,1],[10,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[11,0],[1,1],[5,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[4,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[10,0],[5,1],[14,0],[6,1],[14,0],[6,1],[13,0],[5,1],[14,0],[4,1],[16,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[6,0],[3,1],[8,0],[3,1],[4,0],[6,1],[8,0],[2,1],[4,0],[6,1],[8,0],[2,1],[3,0],[7,1],[8,0],[2,1],[3,0],[4,1],[1,0],[2,1],[8,0],[3,1],[2,0],[3,1],[1,0],[3,1],[8,0],[11,1],[10,0],[10,1],[11,0],[8,1],[13,0],[5,1],[26,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[8,0],[9,1],[9,0],[11,1],[8,0],[13,1],[7,0],[4,1],[5,0],[4,1],[16,0],[4,1],[17,0],[3,1],[16,0],[4,1],[16,0],[4,1],[15,0],[4,1],[16,0],[4,1],[16,0],[3,1],[16,0],[4,1],[10,0],[10,1],[8,0],[12,1],[8,0],[14,1],[5,0],[16,1],[4,0],[8,1],[4,0],[5,1],[3,0],[7,1],[7,0],[3,1],[4,0],[4,1],[11,0],[1,1],[20,0]],"output":[[2,0],[1,1],[7,0]],"label":2},{"input":[[65,0],[3,1],[17,0],[11,1],[9,0],[12,1],[8,0],[3,1],[6,0],[3,1],[7,0],[3,1],[6,0],[4,1],[7,0],[3,1],[6,0],[3,1],[7,0],[3,1],[7,0],[3,1],[8,0],[1,1],[8,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[5,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[34,0],[1,1],[1,0],[4,1],[11,0],[4,1],[1,0],[4,1],[9,0],[4,1],[3,0],[4,1],[6,0],[6,1],[3,0],[5,1],[5,0],[5,1],[3,0],[5,1],[6,0],[4,1],[4,0],[4,1],[8,0],[3,1],[5,0],[3,1],[8,0],[4,1],[4,0],[3,1],[10,0],[4,1],[2,0],[3,1],[11,0],[8,1],[14,0],[8,1],[14,0],[8,1],[11,0],[4,1],[3,0],[3,1],[10,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[9,0],[3,1],[5,0],[3,1],[10,0],[3,1],[4,0],[3,1],[10,0],[3,1],[3,0],[3,1],[12,0],[7,1],[4,0]],"output":[[8,0],[1,1],[1,0]],"label":8},{"input":[[35,0],[3,1],[6,0],[2,1],[9,0],[4,1],[5,0],[3,1],[8,0],[4,1],[5,0],[4,1],[6,0],[5,1],[5,0],[4,1],[6,0],[5,1],[4,0],[5,1],[6,0],[4,1],[5,0],[5,1],[3,0],[7,1],[5,0],[15,1],[5,0],[14,1],[6,0],[14,1],[6,0],[14,1],[6,0],[14,1],[8,0],[4,1],[3,0],[6,1],[15,0],[5,1],[14,0],[5,1],[15,0],[4,1],[15,0],[5,1],[15,0],[4,1],[17,0],[3,1],[5,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[65,0],[8,1],[1,0],[2,1],[8,0],[13,1],[7,0],[14,1],[8,0],[12,1],[11,0],[1,1],[1,0],[6,1],[15,0],[5,1],[15,0],[4,1],[15,0],[5,1],[15,0],[5,1],[14,0],[5,1],[14,0],[5,1],[14,0],[6,1],[14,0],[5,1],[15,0],[4,1],[16,0],[4,1],[15,0],[5,1],[15,0],[5,1],[8,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[23,0],[9,1],[10,0],[11,1],[9,0],[4,1],[4,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[3,1],[16,0],[5,1],[13,0],[9,1],[10,0],[11,1],[9,0],[3,1],[5,0],[4,1],[3,0],[1,1],[14,0],[6,1],[14,0],[5,1],[15,0],[4,1],[14,0],[6,1],[13,0],[6,1],[13,0],[7,1],[12,0],[3,1],[1,0],[4,1],[12,0],[7,1],[12,0],[7,1],[5,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[7,0],[5,1],[15,0],[3,1],[16,0],[4,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[4,1],[6,0],[3,1],[7,0],[4,1],[5,0],[5,1],[6,0],[4,1],[4,0],[7,1],[5,0],[4,1],[4,0],[7,1],[6,0],[3,1],[3,0],[3,1],[3,0],[2,1],[6,0],[3,1],[2,0],[3,1],[4,0],[2,1],[6,0],[4,1],[1,0],[3,1],[3,0],[3,1],[7,0],[6,1],[2,0],[5,1],[7,0],[12,1],[9,0],[10,1],[12,0],[6,1],[44,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[13,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[16,0],[4,1],[16,0],[4,1],[15,0],[4,1],[16,0],[4,1],[15,0],[4,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[4,1],[15,0],[5,1],[15,0],[4,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[16,0],[3,1],[9,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[30,0],[6,1],[12,0],[9,1],[10,0],[6,1],[1,0],[3,1],[9,0],[4,1],[4,0],[3,1],[10,0],[1,1],[6,0],[3,1],[14,0],[5,1],[14,0],[5,1],[13,0],[8,1],[12,0],[9,1],[17,0],[4,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[6,0],[2,1],[9,0],[3,1],[6,0],[2,1],[8,0],[4,1],[5,0],[3,1],[8,0],[3,1],[7,0],[2,1],[6,0],[4,1],[8,0],[11,1],[9,0],[9,1],[7,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[11,0],[4,1],[15,0],[3,1],[17,0],[2,1],[17,0],[3,1],[16,0],[3,1],[17,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[2,1],[5,0],[2,1],[10,0],[3,1],[2,0],[6,1],[9,0],[3,1],[1,0],[8,1],[8,0],[7,1],[2,0],[3,1],[8,0],[6,1],[3,0],[3,1],[8,0],[5,1],[4,0],[2,1],[10,0],[4,1],[4,0],[3,1],[9,0],[10,1],[11,0],[8,1],[14,0],[6,1],[44,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[52,0],[5,1],[2,0],[1,1],[11,0],[3,1],[1,0],[1,1],[2,0],[2,1],[10,0],[3,1],[2,0],[1,1],[1,0],[2,1],[10,0],[2,1],[5,0],[3,1],[10,0],[2,1],[5,0],[2,1],[10,0],[2,1],[5,0],[3,1],[9,0],[2,1],[5,0],[3,1],[10,0],[2,1],[3,0],[4,1],[11,0],[1,1],[2,0],[5,1],[12,0],[7,1],[13,0],[3,1],[1,0],[3,1],[16,0],[3,1],[17,0],[2,1],[17,0],[2,1],[17,0],[2,1],[17,0],[3,1],[16,0],[3,1],[17,0],[2,1],[12,0]],"output":[[9,0],[1,1]],"label":9},{"input":[[26,0],[7,1],[12,0],[10,1],[10,0],[11,1],[10,0],[10,1],[12,0],[8,1],[12,0],[8,1],[11,0],[9,1],[11,0],[9,1],[11,0],[9,1],[12,0],[8,1],[13,0],[2,1],[1,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[14,0],[5,1],[9,0],[3,1],[1,0],[7,1],[8,0],[12,1],[8,0],[11,1],[10,0],[8,1],[7,0]],"output":[[3,0],[1,1],[6,0]],"label":3},{"input":[[8,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[4,1],[16,0],[5,1],[15,0],[6,1],[14,0],[6,1],[14,0],[6,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[6,1],[15,0],[5,1],[15,0],[6,1],[14,0],[6,1],[16,0],[4,1],[4,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[36,0],[4,1],[10,0],[2,1],[2,0],[6,1],[9,0],[3,1],[2,0],[5,1],[9,0],[4,1],[1,0],[5,1],[8,0],[4,1],[2,0],[5,1],[9,0],[3,1],[3,0],[4,1],[9,0],[4,1],[2,0],[5,1],[8,0],[4,1],[2,0],[6,1],[1,0],[2,1],[4,0],[5,1],[2,0],[10,1],[2,0],[7,1],[1,0],[10,1],[2,0],[17,1],[3,0],[16,1],[5,0],[14,1],[7,0],[11,1],[12,0],[7,1],[15,0],[6,1],[14,0],[7,1],[13,0],[7,1],[14,0],[6,1],[4,0]],"output":[[4,0],[1,1],[5,0]],"label":4},{"input":[[27,0],[2,1],[18,0],[4,1],[17,0],[3,1],[17,0],[3,1],[17,0],[4,1],[17,0],[3,1],[17,0],[4,1],[16,0],[4,1],[18,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[18,0],[2,1],[18,0],[2,1],[18,0],[3,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[18,0],[2,1],[5,0]],"output":[[1,0],[1,1],[8,0]],"label":1},{"input":[[45,0],[2,1],[6,0],[1,1],[10,0],[11,1],[9,0],[11,1],[9,0],[11,1],[14,0],[6,1],[15,0],[5,1],[15,0],[4,1],[13,0],[7,1],[12,0],[14,1],[6,0],[14,1],[8,0],[11,1],[9,0],[5,1],[15,0],[5,1],[15,0],[4,1],[16,0],[5,1],[15,0],[5,1],[15,0],[5,1],[15,0],[4,1],[8,0]],"output":[[7,0],[1,1],[2,0]],"label":7},{"input":[[11,0],[7,1],[12,0],[3,1],[3,0],[3,1],[10,0],[3,1],[4,0],[3,1],[9,0],[3,1],[17,0],[3,1],[16,0],[3,1],[16,0],[3,1],[17,0],[3,1],[16,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[3,0],[7,1],[7,0],[3,1],[1,0],[9,1],[7,0],[7,1],[3,0],[3,1],[8,0],[5,1],[4,0],[3,1],[9,0],[10,1],[11,0],[8,1],[24,0]],"output":[[6,0],[1,1],[3,0]],"label":6},{"input":[[48,0],[6,1],[11,0],[10,1],[10,0],[11,1],[8,0],[6,1],[2,0],[4,1],[8,0],[4,1],[5,0],[4,1],[7,0],[3,1],[6,0],[4,1],[6,0],[3,1],[7,0],[5,1],[5,0],[3,1],[6,0],[6,1],[5,0],[4,1],[4,0],[7,1],[6,0],[14,1],[6,0],[13,1],[8,0],[7,1],[1,0],[4,1],[10,0],[3,1],[4,0],[2,1],[18,0],[2,1],[17,0],[3,1],[17,0],[3,1],[17,0],[3,1],[17,0],[4,1],[3,0]],"output":[[9,0],[1,1]],"label":9}]
export default test;