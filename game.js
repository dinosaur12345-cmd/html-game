/**
 * 游戏配置常量
 */
const CONFIG = {
  GRID_COLS: 20,
  GRID_ROWS: 20
}

/**
 * 难度预设配置
 */
const DIFFICULTY_PRESETS = {
  easy: {
    id: 'easy',
    name: '简单',
    icon: '🌱',
    initialSpeed: 280,
    speedIncrement: 1,
    minSpeed: 150
  },
  normal: {
    id: 'normal',
    name: '普通',
    icon: '⚡',
    initialSpeed: 150,
    speedIncrement: 2,
    minSpeed: 50
  },
  hard: {
    id: 'hard',
    name: '困难',
    icon: '🔥',
    initialSpeed: 80,
    speedIncrement: 4,
    minSpeed: 30
  }
}

/**
 * 关卡配置
 */
const LEVEL_CONFIGS = [
  {
    level: 1,
    name: '新手村',
    icon: '🍎',
    scoreThreshold: 0,
    foodType: 'apple',
    foodColors: { main: '#ff6b6b', highlight: '#ff8787', stem: '#8b4513', leaf: '#228b22' },
    foodScore: 10,
    foodSpeed: 0,
    foodLifetime: 0,
    specialFoodChance: 0,
    speedModifier: 1.0
  },
  {
    level: 2,
    name: '森林',
    icon: '🍒',
    scoreThreshold: 50,
    foodType: 'cherry',
    foodColors: { main: '#e53935', highlight: '#ff5252', stem: '#8b4513', leaf: '#43a047' },
    foodScore: 15,
    foodSpeed: 0,
    foodLifetime: 0,
    specialFoodChance: 0.1,
    speedModifier: 1.1
  },
  {
    level: 3,
    name: '草原',
    icon: '⭐',
    scoreThreshold: 150,
    foodType: 'star',
    foodColors: { main: '#ffd700', highlight: '#fff176', glow: '#ffeb3b' },
    foodScore: 20,
    foodSpeed: 0,
    foodLifetime: 0,
    specialFoodChance: 0.2,
    speedModifier: 1.2
  },
  {
    level: 4,
    name: '雪山',
    icon: '💎',
    scoreThreshold: 300,
    foodType: 'diamond',
    foodColors: { main: '#29b6f6', highlight: '#4fc3f7', glow: '#03a9f4' },
    foodScore: 30,
    foodSpeed: 0,
    foodLifetime: 0,
    specialFoodChance: 0.3,
    speedModifier: 1.35
  },
  {
    level: 5,
    name: '火山',
    icon: '🔥',
    scoreThreshold: 500,
    foodType: 'fireball',
    foodColors: { main: '#ff5722', highlight: '#ff7043', glow: '#ff9800', core: '#ffeb3b' },
    foodScore: 40,
    foodSpeed: 0.5,
    foodLifetime: 0,
    specialFoodChance: 0.4,
    speedModifier: 1.5
  },
  {
    level: 6,
    name: '仙境',
    icon: '🌟',
    scoreThreshold: 800,
    foodType: 'goldenStar',
    foodColors: { main: '#ffd700', highlight: '#fff9c4', glow: '#ffeb3b', core: '#ff6f00' },
    foodScore: 50,
    foodSpeed: 0.7,
    foodLifetime: 0,
    specialFoodChance: 0.5,
    speedModifier: 1.7
  },
  {
    level: 7,
    name: '神域',
    icon: '👑',
    scoreThreshold: 1200,
    foodType: 'crown',
    foodColors: { main: '#ffd700', highlight: '#fff176', glow: '#ffeb3b', jewel: '#e91e63' },
    foodScore: 70,
    foodSpeed: 1.0,
    foodLifetime: 3000,
    specialFoodChance: 0.6,
    speedModifier: 2.0
  }
]

/**
 * 地图配置
 */
const MAP_CONFIGS = [
  {
    id: 'grassland',
    name: '草原',
    icon: '🌿',
    pointsCost: 0,
    background: ['#1a472a', '#2d5a3d'],
    gridColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#4ade80',
    decorations: 'grass',
    description: '清新自然的草原风光'
  },
  {
    id: 'desert',
    name: '沙漠',
    icon: '🏜️',
    pointsCost: 200,
    background: ['#c2956e', '#e6c8a0'],
    gridColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#fbbf24',
    decorations: 'sand',
    description: '酷热的沙漠探险'
  },
  {
    id: 'ocean',
    name: '深海',
    icon: '🌊',
    pointsCost: 500,
    background: ['#0c4a6e', '#164e63'],
    gridColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: '#06b6d4',
    decorations: 'bubble',
    description: '神秘的深海世界'
  },
  {
    id: 'volcano',
    name: '火山',
    icon: '🌋',
    pointsCost: 800,
    background: ['#451a03', '#7f2d00'],
    gridColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#f97316',
    decorations: 'fire',
    description: '炽热的火山地带'
  },
  {
    id: 'ice',
    name: '冰川',
    icon: '🧊',
    pointsCost: 1200,
    background: ['#0e7490', '#164e63'],
    gridColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: '#22d3ee',
    decorations: 'snow',
    description: '寒冷的冰雪世界'
  },
  {
    id: 'space',
    name: '太空',
    icon: '🚀',
    pointsCost: 2000,
    background: ['#0f172a', '#1e1b4b'],
    gridColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: '#8b5cf6',
    decorations: 'stars',
    description: '浩瀚的星际空间'
  }
]

/**
 * 成就配置
 */
const ACHIEVEMENT_CONFIGS = [
  {
    id: 'first_game',
    name: '初次体验',
    icon: '🎮',
    description: '完成第一次游戏',
    pointsReward: 50,
    condition: (stats) => stats.totalGames >= 1
  },
  {
    id: 'first_100',
    name: '百点突破',
    icon: '💯',
    description: '单局达到100分',
    pointsReward: 100,
    condition: (stats) => stats.maxScore >= 100
  },
  {
    id: 'first_500',
    name: '五百大关',
    icon: '⭐',
    description: '单局达到500分',
    pointsReward: 300,
    condition: (stats) => stats.maxScore >= 500
  },
  {
    id: 'first_1000',
    name: '千分大师',
    icon: '🏆',
    description: '单局达到1000分',
    pointsReward: 500,
    condition: (stats) => stats.maxScore >= 1000
  },
  {
    id: 'level_3',
    name: '草原探险家',
    icon: '🌿',
    description: '达到第3关',
    pointsReward: 150,
    condition: (stats) => stats.maxLevel >= 3
  },
  {
    id: 'level_5',
    name: '火山征服者',
    icon: '🌋',
    description: '达到第5关',
    pointsReward: 300,
    condition: (stats) => stats.maxLevel >= 5
  },
  {
    id: 'level_7',
    name: '神域王者',
    icon: '👑',
    description: '达到最高关卡',
    pointsReward: 1000,
    condition: (stats) => stats.maxLevel >= 7
  },
  {
    id: '10_games',
    name: '坚持不懈',
    icon: '🔥',
    description: '完成10局游戏',
    pointsReward: 200,
    condition: (stats) => stats.totalGames >= 10
  },
  {
    id: '50_games',
    name: '游戏达人',
    icon: '🌟',
    description: '完成50局游戏',
    pointsReward: 500,
    condition: (stats) => stats.totalGames >= 50
  },
  {
    id: 'perfect_game',
    name: '完美开局',
    icon: '💎',
    description: '单局不撞墙完成',
    pointsReward: 100,
    condition: (stats) => stats.perfectGames >= 1
  }
]

/**
 * 坐标类
 */
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  equals(other) {
    return this.x === other.x && this.y === other.y
  }

  clone() {
    return new Point(this.x, this.y)
  }
}

/**
 * 方向枚举
 */
const DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

/**
 * 蛇类
 */
class Snake {
  constructor() {
    this.segments = []
    this.direction = DIRECTION.RIGHT
    this.nextDirection = DIRECTION.RIGHT
    this.colors = {
      body: '#4ade80',
      pattern: '#166534'
    }
    this.style = null
    this.init()
  }

  /**
   * 初始化蛇
   */
  init() {
    const startX = Math.floor(CONFIG.GRID_COLS / 2)
    const startY = Math.floor(CONFIG.GRID_ROWS / 2)
    
    this.segments = [
      new Point(startX, startY),
      new Point(startX - 1, startY),
      new Point(startX - 2, startY)
    ]
    this.direction = DIRECTION.RIGHT
    this.nextDirection = DIRECTION.RIGHT
  }

  /**
   * 设置方向（防止180度掉头）
   */
  setDirection(newDirection) {
    const opposites = {
      [DIRECTION.UP]: DIRECTION.DOWN,
      [DIRECTION.DOWN]: DIRECTION.UP,
      [DIRECTION.LEFT]: DIRECTION.RIGHT,
      [DIRECTION.RIGHT]: DIRECTION.LEFT
    }
    
    if (opposites[this.direction] !== newDirection) {
      this.nextDirection = newDirection
    }
  }

  /**
   * 移动蛇
   */
  move() {
    this.direction = this.nextDirection
    
    const head = this.segments[0].clone()
    
    switch (this.direction) {
      case DIRECTION.UP:
        head.y--
        break
      case DIRECTION.DOWN:
        head.y++
        break
      case DIRECTION.LEFT:
        head.x--
        break
      case DIRECTION.RIGHT:
        head.x++
        break
    }
    
    this.segments.unshift(head)
    this.segments.pop()
  }

  /**
   * 蛇生长
   */
  grow() {
    const tail = this.segments[this.segments.length - 1].clone()
    this.segments.push(tail)
  }

  /**
   * 获取蛇头位置
   */
  getHead() {
    return this.segments[0]
  }

  /**
   * 检查是否撞到自己
   */
  checkSelfCollision() {
    const head = this.getHead()
    for (let i = 1; i < this.segments.length; i++) {
      if (head.equals(this.segments[i])) {
        return true
      }
    }
    return false
  }

  /**
   * 设置颜色
   */
  setColors(colors) {
    this.colors = colors
  }

  /**
   * 设置样式
   */
  setStyle(style) {
    this.style = style
  }
}

/**
 * 食物类
 */
class Food {
  constructor(x, y, type, colors, speed = 0, lifetime = 0) {
    this.x = x
    this.y = y
    this.type = type
    this.colors = colors
    this.speed = speed
    this.lifetime = lifetime
    this.maxLifetime = lifetime
    this.dx = 0
    this.dy = 0
    this.spawnTime = Date.now()
    
    if (speed > 0) {
      this.setRandomDirection()
    }
  }

  setRandomDirection() {
    const directions = [
      { dx: 0, dy: -1 },
      { dx: 0, dy: 1 },
      { dx: -1, dy: 0 },
      { dx: 1, dy: 0 }
    ]
    const dir = directions[Math.floor(Math.random() * directions.length)]
    this.dx = dir.dx
    this.dy = dir.dy
  }

  move(gridCols, gridRows) {
    if (this.speed <= 0) return

    const newX = this.x + this.dx
    const newY = this.y + this.dy

    if (newX < 0 || newX >= gridCols || newY < 0 || newY >= gridRows) {
      this.setRandomDirection()
      return
    }

    this.x = newX
    this.y = newY
  }

  isExpired() {
    if (this.maxLifetime <= 0) return false
    return Date.now() - this.spawnTime >= this.maxLifetime
  }

  getLifetimeProgress() {
    if (this.maxLifetime <= 0) return 1
    return 1 - (Date.now() - this.spawnTime) / this.maxLifetime
  }

  equals(other) {
    return this.x === other.x && this.y === other.y
  }
}

/**
 * 游戏状态管理
 */
class GameState {
  constructor() {
    this.status = 'MENU' // MENU, PLAYING, PAUSED, GAME_OVER
    this.score = 0
    this.highScore = 0
    this.snake = new Snake()
    this.food = null
    this.gridCols = CONFIG.GRID_COLS
    this.gridRows = CONFIG.GRID_ROWS
  }

  /**
   * 重置游戏状态
   */
  reset() {
    this.status = 'MENU'
    this.score = 0
    this.snake.init()
    this.food = null
  }

  /**
   * 生成食物（确保不在蛇身上）
   */
  spawnFood(levelConfig = null) {
    let x, y
    do {
      x = Math.floor(Math.random() * this.gridCols)
      y = Math.floor(Math.random() * this.gridRows)
    } while (this.isOnSnake(x, y))
    
    if (levelConfig) {
      this.food = new Food(
        x,
        y,
        levelConfig.foodType,
        levelConfig.foodColors,
        levelConfig.foodSpeed,
        levelConfig.foodLifetime
      )
    } else {
      this.food = new Food(x, y, 'apple', { main: '#ff6b6b', highlight: '#ff8787', stem: '#8b4513', leaf: '#228b22' })
    }
  }

  /**
   * 检查坐标是否在蛇身上
   */
  isOnSnake(x, y) {
    return this.snake.segments.some(segment => segment.x === x && segment.y === y)
  }

  /**
   * 检查碰撞（边界和自身）
   */
  checkCollision() {
    const head = this.snake.getHead()
    
    // 边界碰撞
    if (head.x < 0 || head.x >= this.gridCols ||
        head.y < 0 || head.y >= this.gridRows) {
      return true
    }
    
    // 自身碰撞
    return this.snake.checkSelfCollision()
  }

  /**
   * 检查是否吃到食物
   */
  checkFoodCollision() {
    if (!this.food) return false
    return this.snake.getHead().equals(this.food)
  }
}

/**
 * 输入处理器
 */
class InputHandler {
  constructor() {
    this.direction = null
  }

  /**
   * 设置方向
   */
  setDirection(direction) {
    this.direction = direction
  }

  /**
   * 获取方向并重置
   */
  getDirection() {
    const dir = this.direction
    this.direction = null
    return dir
  }
}

/**
 * 蛇样式管理器
 */
class SnakeStyleManager {
  constructor() {
    this.styles = [
      {
        id: 'serpent',
        name: '翠绿小蛇',
        icon: '🐍',
        defaultColors: { body: '#4ade80', pattern: '#166534' }
      },
      {
        id: 'rainbow',
        name: '彩虹蛇',
        icon: '🌈',
        defaultColors: { body: '#ff6b6b', pattern: '#4ecdc4' }
      },
      {
        id: 'crystal',
        name: '水晶蛇',
        icon: '💎',
        defaultColors: { body: '#67e8f9', pattern: '#0891b2' }
      },
      {
        id: 'cyber',
        name: '赛博蛇',
        icon: '⚡',
        defaultColors: { body: '#22d3ee', pattern: '#a855f7' }
      },
      {
        id: 'flame',
        name: '火焰蛇',
        icon: '🔥',
        defaultColors: { body: '#fb923c', pattern: '#dc2626' }
      },
      {
        id: 'ice',
        name: '冰霜蛇',
        icon: '❄️',
        defaultColors: { body: '#bfdbfe', pattern: '#3b82f6' }
      }
    ]
    
    this.currentStyleId = 'serpent'
    this.colors = {
      body: '#4ade80',
      pattern: '#166534'
    }
    
    this.onChange = null
    
    this.initUI()
  }

  /**
   * 初始化UI事件
   */
  initUI() {
    const styleOptions = document.querySelectorAll('.style-option')
    styleOptions.forEach(option => {
      option.addEventListener('click', () => {
        const styleId = option.dataset.styleId
        this.setStyle(styleId)
      })
    })
    
    const bodyColorInput = document.getElementById('bodyColor')
    const patternColorInput = document.getElementById('patternColor')
    
    bodyColorInput.addEventListener('input', (e) => {
      this.setBodyColor(e.target.value)
    })
    
    patternColorInput.addEventListener('input', (e) => {
      this.setPatternColor(e.target.value)
    })
  }

  /**
   * 设置变化回调
   */
  setOnChange(callback) {
    this.onChange = callback
  }

  /**
   * 触发变化回调
   */
  notifyChange() {
    if (this.onChange) {
      this.onChange({
        styleId: this.currentStyleId,
        colors: { ...this.colors }
      })
    }
  }

  /**
   * 设置样式
   */
  setStyle(styleId) {
    this.currentStyleId = styleId
    
    const style = this.styles.find(s => s.id === styleId)
    if (style && style.defaultColors) {
      this.colors = { ...style.defaultColors }
      
      const bodyColorInput = document.getElementById('bodyColor')
      const patternColorInput = document.getElementById('patternColor')
      if (bodyColorInput) bodyColorInput.value = this.colors.body
      if (patternColorInput) patternColorInput.value = this.colors.pattern
    }
    
    document.querySelectorAll('.style-option').forEach(option => {
      if (option.dataset.styleId === styleId) {
        option.classList.add('selected')
      } else {
        option.classList.remove('selected')
      }
    })
    
    localStorage.setItem('snakeStyle', styleId)
    this.notifyChange()
  }

  /**
   * 设置主体颜色
   */
  setBodyColor(color) {
    this.colors.body = color
    localStorage.setItem('snakeBodyColor', color)
    this.notifyChange()
  }

  /**
   * 设置花纹颜色
   */
  setPatternColor(color) {
    this.colors.pattern = color
    localStorage.setItem('snakePatternColor', color)
    this.notifyChange()
  }

  /**
   * 获取当前样式
   */
  getCurrentStyle() {
    return this.styles.find(s => s.id === this.currentStyleId)
  }

  /**
   * 获取当前颜色
   */
  getCurrentColors() {
    return this.colors
  }
}

/**
 * 难度管理器
 */
class DifficultyManager {
  constructor() {
    this.currentDifficultyId = 'normal'
    this.initUI()
  }

  initUI() {
    const difficultyOptions = document.querySelectorAll('.difficulty-option')
    difficultyOptions.forEach(option => {
      option.addEventListener('click', () => {
        const difficultyId = option.dataset.difficultyId
        this.setDifficulty(difficultyId)
      })
    })
  }

  setDifficulty(difficultyId) {
    this.currentDifficultyId = difficultyId
    
    document.querySelectorAll('.difficulty-option').forEach(option => {
      if (option.dataset.difficultyId === difficultyId) {
        option.classList.add('selected')
      } else {
        option.classList.remove('selected')
      }
    })
    
    localStorage.setItem('snakeDifficulty', difficultyId)
  }

  getCurrentDifficulty() {
    return DIFFICULTY_PRESETS[this.currentDifficultyId]
  }

  getCurrentDifficultyId() {
    return this.currentDifficultyId
  }
}

/**
 * 积分管理器
 */
class PointsManager {
  constructor() {
    this.points = 0
    this.unlockedMaps = ['grassland']
    this.exchangeHistory = []
    this.currentMap = 'grassland'
    this.onPointsChange = null
    this.onMapUnlock = null
    this.loadData()
  }

  loadData() {
    const savedPoints = localStorage.getItem('snakeShop_points')
    const savedMaps = localStorage.getItem('snakeShop_unlockedMaps')
    const savedHistory = localStorage.getItem('snakeShop_exchangeHistory')
    const savedCurrentMap = localStorage.getItem('snakeShop_currentMap')

    if (savedPoints) {
      this.points = parseInt(savedPoints, 10)
    }
    if (savedMaps) {
      this.unlockedMaps = JSON.parse(savedMaps)
    }
    if (savedHistory) {
      this.exchangeHistory = JSON.parse(savedHistory)
    }
    if (savedCurrentMap) {
      this.currentMap = savedCurrentMap
    }
  }

  saveData() {
    localStorage.setItem('snakeShop_points', this.points.toString())
    localStorage.setItem('snakeShop_unlockedMaps', JSON.stringify(this.unlockedMaps))
    localStorage.setItem('snakeShop_exchangeHistory', JSON.stringify(this.exchangeHistory))
    localStorage.setItem('snakeShop_currentMap', this.currentMap)
  }

  addPoints(amount) {
    this.points += amount
    this.saveData()
    this.notifyPointsChange()
    return this.points
  }

  spendPoints(amount) {
    if (this.points >= amount) {
      this.points -= amount
      this.saveData()
      this.notifyPointsChange()
      return true
    }
    return false
  }

  getPoints() {
    return this.points
  }

  unlockMap(mapId) {
    if (!this.unlockedMaps.includes(mapId)) {
      this.unlockedMaps.push(mapId)
      this.saveData()
      this.notifyMapUnlock(mapId)
      return true
    }
    return false
  }

  isMapUnlocked(mapId) {
    return this.unlockedMaps.includes(mapId)
  }

  setCurrentMap(mapId) {
    if (this.isMapUnlocked(mapId)) {
      this.currentMap = mapId
      this.saveData()
      return true
    }
    return false
  }

  getCurrentMap() {
    return this.currentMap
  }

  exchangeMap(mapId) {
    const mapConfig = MAP_CONFIGS.find(m => m.id === mapId)
    if (!mapConfig) return { success: false, message: '地图不存在' }
    
    if (this.isMapUnlocked(mapId)) {
      this.setCurrentMap(mapId)
      return { success: true, message: '已切换到' + mapConfig.name }
    }
    
    if (this.points < mapConfig.pointsCost) {
      return { success: false, message: '积分不足' }
    }
    
    const success = this.spendPoints(mapConfig.pointsCost)
    if (success) {
      this.unlockMap(mapId)
      this.setCurrentMap(mapId)
      this.addExchangeRecord(mapId, mapConfig.pointsCost)
      return { success: true, message: '成功解锁' + mapConfig.name }
    }
    
    return { success: false, message: '兑换失败' }
  }

  addExchangeRecord(mapId, cost) {
    const record = {
      mapId,
      cost,
      timestamp: Date.now(),
      name: MAP_CONFIGS.find(m => m.id === mapId)?.name || mapId
    }
    this.exchangeHistory.unshift(record)
    if (this.exchangeHistory.length > 20) {
      this.exchangeHistory.pop()
    }
    this.saveData()
  }

  getExchangeHistory() {
    return this.exchangeHistory
  }

  getUnlockedMaps() {
    return this.unlockedMaps.map(id => MAP_CONFIGS.find(m => m.id === id)).filter(Boolean)
  }

  getLockedMaps() {
    return MAP_CONFIGS.filter(m => !this.isMapUnlocked(m.id))
  }

  setOnPointsChange(callback) {
    this.onPointsChange = callback
  }

  setOnMapUnlock(callback) {
    this.onMapUnlock = callback
  }

  notifyPointsChange() {
    if (this.onPointsChange) {
      this.onPointsChange(this.points)
    }
  }

  notifyMapUnlock(mapId) {
    if (this.onMapUnlock) {
      this.onMapUnlock(mapId)
    }
  }

  reset() {
    this.points = 0
    this.unlockedMaps = ['grassland']
    this.exchangeHistory = []
    this.currentMap = 'grassland'
    this.saveData()
    this.notifyPointsChange()
  }
}

/**
 * 成就管理器
 */
class AchievementManager {
  constructor(pointsManager) {
    this.pointsManager = pointsManager
    this.completedAchievements = []
    this.stats = {
      totalGames: 0,
      maxScore: 0,
      maxLevel: 1,
      perfectGames: 0,
      totalPoints: 0
    }
    this.onAchievementComplete = null
    this.loadData()
  }

  loadData() {
    const savedAchievements = localStorage.getItem('snakeShop_achievements')
    const savedStats = localStorage.getItem('snakeShop_stats')

    if (savedAchievements) {
      this.completedAchievements = JSON.parse(savedAchievements)
    }
    if (savedStats) {
      this.stats = { ...this.stats, ...JSON.parse(savedStats) }
    }
  }

  saveData() {
    localStorage.setItem('snakeShop_achievements', JSON.stringify(this.completedAchievements))
    localStorage.setItem('snakeShop_stats', JSON.stringify(this.stats))
  }

  updateStats(score, level, isPerfect = false) {
    this.stats.totalGames++
    this.stats.totalPoints += score
    
    if (score > this.stats.maxScore) {
      this.stats.maxScore = score
    }
    
    if (level > this.stats.maxLevel) {
      this.stats.maxLevel = level
    }
    
    if (isPerfect) {
      this.stats.perfectGames++
    }
    
    this.saveData()
    this.checkAchievements()
  }

  checkAchievements() {
    const newAchievements = []
    
    ACHIEVEMENT_CONFIGS.forEach(achievement => {
      if (!this.completedAchievements.includes(achievement.id)) {
        if (achievement.condition(this.stats)) {
          this.completedAchievements.push(achievement.id)
          this.pointsManager.addPoints(achievement.pointsReward)
          newAchievements.push(achievement)
        }
      }
    })
    
    if (newAchievements.length > 0) {
      this.saveData()
      this.notifyAchievementComplete(newAchievements)
    }
    
    return newAchievements
  }

  isAchievementCompleted(achievementId) {
    return this.completedAchievements.includes(achievementId)
  }

  getAllAchievements() {
    return ACHIEVEMENT_CONFIGS.map(achievement => ({
      ...achievement,
      completed: this.completedAchievements.includes(achievement.id)
    }))
  }

  getCompletedCount() {
    return this.completedAchievements.length
  }

  setOnAchievementComplete(callback) {
    this.onAchievementComplete = callback
  }

  notifyAchievementComplete(achievements) {
    if (this.onAchievementComplete) {
      this.onAchievementComplete(achievements)
    }
  }

  getStats() {
    return { ...this.stats }
  }

  reset() {
    this.completedAchievements = []
    this.stats = {
      totalGames: 0,
      maxScore: 0,
      maxLevel: 1,
      perfectGames: 0,
      totalPoints: 0
    }
    this.saveData()
  }
}

/**
 * 关卡管理器
 */
class LevelManager {
  constructor() {
    this.currentLevelIndex = 0
    this.levelElement = null
    this.onLevelUp = null
    this.transitionState = {
      active: false,
      startTime: 0,
      duration: 2000,
      newLevelConfig: null
    }
  }

  setLevelElement(element) {
    this.levelElement = element
  }

  setOnLevelUp(callback) {
    this.onLevelUp = callback
  }

  getCurrentLevel() {
    return LEVEL_CONFIGS[this.currentLevelIndex]
  }

  getCurrentLevelIndex() {
    return this.currentLevelIndex
  }

  getLevelByScore(score) {
    for (let i = LEVEL_CONFIGS.length - 1; i >= 0; i--) {
      if (score >= LEVEL_CONFIGS[i].scoreThreshold) {
        return i
      }
    }
    return 0
  }

  checkLevelUp(score) {
    const newLevelIndex = this.getLevelByScore(score)
    if (newLevelIndex > this.currentLevelIndex) {
      this.currentLevelIndex = newLevelIndex
      this.triggerLevelTransition()
      return true
    }
    return false
  }

  triggerLevelTransition() {
    const levelConfig = this.getCurrentLevel()
    this.transitionState.active = true
    this.transitionState.startTime = Date.now()
    this.transitionState.newLevelConfig = levelConfig
    
    if (this.onLevelUp) {
      this.onLevelUp(levelConfig)
    }
  }

  isTransitioning() {
    return this.transitionState.active
  }

  getTransitionProgress() {
    if (!this.transitionState.active) return 1
    const elapsed = Date.now() - this.transitionState.startTime
    return Math.min(elapsed / this.transitionState.duration, 1)
  }

  updateTransition() {
    if (!this.transitionState.active) return
    
    const progress = this.getTransitionProgress()
    if (progress >= 1) {
      this.transitionState.active = false
    }
    
    return progress
  }

  getTransitionLevelConfig() {
    return this.transitionState.newLevelConfig
  }

  reset() {
    this.currentLevelIndex = 0
    this.transitionState.active = false
    this.transitionState.newLevelConfig = null
  }

  updateLevelDisplay() {
    if (!this.levelElement) return
    const levelConfig = this.getCurrentLevel()
    this.levelElement.textContent = levelConfig.icon + ' Lv.' + levelConfig.level
  }
}

/**
 * Canvas渲染器
 */
class CanvasRenderer {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.cellSize = 0
    this.particleSystem = null
    this.currentMapConfig = MAP_CONFIGS[0]
    this.decorationOffset = 0
    this.lowPerformance = false
    this.renderTime = 0
  }

  /**
   * 初始化渲染器
   */
  init() {
    this.resize()
  }

  /**
   * 设置当前地图配置
   */
  setMapConfig(mapConfig) {
    this.currentMapConfig = mapConfig
  }

  /**
   * 获取当前地图配置
   */
  getMapConfig() {
    return this.currentMapConfig
  }

  /**
   * 绘制圆角矩形
   */
  drawRoundRect(x, y, width, height, radius) {
    this.ctx.beginPath()
    this.ctx.moveTo(x + radius, y)
    this.ctx.lineTo(x + width - radius, y)
    this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    this.ctx.lineTo(x + width, y + height - radius)
    this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    this.ctx.lineTo(x + radius, y + height)
    this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    this.ctx.lineTo(x, y + radius)
    this.ctx.quadraticCurveTo(x, y, x + radius, y)
    this.ctx.closePath()
  }

  /**
   * 调整画布大小
   */
  resize() {
    const containerWidth = window.innerWidth - 40
    const containerHeight = window.innerHeight - 180
    
    // 移动端适配
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     window.innerWidth < 768
    
    let maxSize
    if (isMobile) {
      // 移动端：根据屏幕方向调整
      const orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      
      if (orientation === 'portrait') {
        maxSize = Math.min(containerWidth, containerHeight - 100)
      } else {
        maxSize = Math.min(containerWidth - 160, containerHeight - 50)
      }
      
      maxSize = Math.max(maxSize, 200) // 最小尺寸限制
    } else {
      maxSize = Math.min(containerWidth, containerHeight)
    }
    
    // 计算单元格大小
    this.cellSize = Math.floor(maxSize / Math.max(CONFIG.GRID_COLS, CONFIG.GRID_ROWS))
    
    // 低性能设备优化：使用更大的单元格尺寸减少渲染负担
    if (this.lowPerformance) {
      this.cellSize = Math.max(this.cellSize, 12)
    }
    
    // 设置画布大小
    this.canvas.width = this.cellSize * CONFIG.GRID_COLS
    this.canvas.height = this.cellSize * CONFIG.GRID_ROWS
  }

  /**
   * 设置粒子系统
   */
  setParticleSystem(particleSystem) {
    this.particleSystem = particleSystem
  }

  /**
   * 获取单元格大小
   */
  getCellSize() {
    return this.cellSize
  }

  /**
   * 渲染游戏
   */
  render(gameState) {
    this.renderTime = performance.now()
    // 绘制地图背景
    this.drawMapBackground()
    
    // 绘制装饰元素
    this.drawDecorations()
    
    // 绘制网格
    this.drawGrid()
    
    // 绘制食物
    this.drawFood(gameState.food)
    
    // 绘制粒子
    this.drawParticles()
    
    // 绘制蛇
    this.drawSnake(gameState.snake)
    
    // 绘制暂停遮罩
    if (gameState.status === 'PAUSED') {
      this.drawPauseOverlay()
    }
    
    // 更新装饰偏移
    this.decorationOffset += 0.01
  }

  /**
   * 绘制地图背景（每个地图特色背景）
   */
  drawMapBackground() {
    const ctx = this.ctx
    const w = this.canvas.width
    const h = this.canvas.height
    const id = this.currentMapConfig.id

    // 通用渐变背景
    const bgGrad = ctx.createLinearGradient(0, 0, w, h)
    bgGrad.addColorStop(0, this.currentMapConfig.background[0])
    bgGrad.addColorStop(1, this.currentMapConfig.background[1])
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, w, h)

    // 地图特色叠加效果
    if (id === 'grassland') {
      // 阳光射线（左上角径向光晕）
      const sunGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 0.8)
      sunGrad.addColorStop(0, 'rgba(255,255,200,0.12)')
      sunGrad.addColorStop(0.5, 'rgba(255,255,200,0.04)')
      sunGrad.addColorStop(1, 'rgba(255,255,200,0)')
      ctx.fillStyle = sunGrad
      ctx.fillRect(0, 0, w, h)

    } else if (id === 'ocean') {
      // 水纹光影（正弦波纹）
      ctx.globalAlpha = 0.06
      for (let i = 0; i < 3; i++) {
        const phase = i * 2.1 + this.decorationOffset * 0.5
        ctx.strokeStyle = '#7dd3fc'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        for (let x = 0; x <= w; x += 4) {
          const yy = h * 0.3 + Math.sin(x * 0.03 + phase) * h * 0.08 + i * h * 0.25
          x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy)
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1

    } else if (id === 'ice') {
      // 极光效果
      ctx.globalAlpha = 0.15
      const auroraColors = ['rgba(74,222,128,0.3)', 'rgba(56,189,248,0.3)', 'rgba(192,132,252,0.3)']
      for (let i = 0; i < 3; i++) {
        const offset = Math.sin(this.decorationOffset * 0.3 + i * 2) * h * 0.08
        ctx.fillStyle = auroraColors[i]
        ctx.beginPath()
        ctx.moveTo(0, h * 0.15 + offset)
        for (let x = 0; x <= w; x += 6) {
          const yy = h * 0.15 + offset + Math.sin(x * 0.015 + this.decorationOffset + i * 1.5) * h * 0.06
          ctx.lineTo(x, yy)
        }
        ctx.lineTo(w, 0)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fill()
      }
      ctx.globalAlpha = 1

    } else if (id === 'space') {
      // 星云光晕
      ctx.globalAlpha = 0.1
      const nebula = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.3, h * 0.4, w * 0.5)
      nebula.addColorStop(0, '#8b5cf6')
      nebula.addColorStop(0.5, '#6366f1')
      nebula.addColorStop(1, 'rgba(99,102,241,0)')
      ctx.fillStyle = nebula
      ctx.fillRect(0, 0, w, h)
      ctx.globalAlpha = 1
    }

    // 绘制边框
    ctx.strokeStyle = this.currentMapConfig.borderColor
    ctx.lineWidth = 4
    ctx.strokeRect(2, 2, w - 4, h - 4)
  }

  /**
   * 绘制装饰元素
   */
  drawDecorations() {
    const decorations = this.currentMapConfig.decorations
    
    switch (decorations) {
      case 'grass':
        this.drawGrassDecorations()
        break
      case 'sand':
        this.drawSandDecorations()
        break
      case 'bubble':
        this.drawBubbleDecorations()
        break
      case 'fire':
        this.drawFireDecorations()
        break
      case 'snow':
        this.drawSnowDecorations()
        break
      case 'stars':
        this.drawStarDecorations()
        break
    }
  }

  /**
   * 草原装饰：草叶 + 野花 + 蝴蝶
   */
  drawGrassDecorations() {
    const ctx = this.ctx
    const cs = this.cellSize
    const cols = CONFIG.GRID_COLS
    const rows = CONFIG.GRID_ROWS
    const offset = this.decorationOffset

    // 草叶
    ctx.globalAlpha = 0.3
    for (let x = 0; x < cols; x += 3) {
      for (let y = 0; y < rows; y += 2) {
        const sway = Math.sin(offset + x + y) * 3
        const cx = x * cs + cs / 2 + sway
        const cy = y * cs + cs / 2
        ctx.beginPath()
        ctx.moveTo(cx, cy + cs * 0.3)
        ctx.quadraticCurveTo(cx - 5, cy, cx, cy - cs * 0.2)
        ctx.quadraticCurveTo(cx + 5, cy, cx, cy + cs * 0.3)
        ctx.fillStyle = ['#22c55e', '#16a34a', '#15803d'][(x + y) % 3]
        ctx.fill()
      }
    }
    ctx.globalAlpha = 1

    // 野花（彩色点）
    ctx.globalAlpha = 0.5
    const flowerColors = ['#f472b6', '#fbbf24', '#fb923c', '#a78bfa', '#f87171']
    for (let i = 0; i < 8; i++) {
      const fx = ((i * 37 + Math.floor(i * 2.3)) % cols) * cs + cs * 0.3
      const fy = ((i * 53 + Math.floor(i * 1.7)) % rows) * cs + cs * 0.6
      const pulse = Math.sin(offset * 2 + i * 1.5) * 0.2 + 0.8
      ctx.fillStyle = flowerColors[i % flowerColors.length]
      ctx.beginPath()
      ctx.arc(fx, fy, 2.5 * pulse, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#fef08a'
      ctx.beginPath()
      ctx.arc(fx, fy, 1.2, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // 蝴蝶（只1只，沿正弦路径飞行）
    ctx.globalAlpha = 0.5
    const bx = (offset * 30) % ctx.canvas.width
    const by = ctx.canvas.height * 0.2 + Math.sin(offset * 3) * ctx.canvas.height * 0.15
    const bw = 3 + Math.sin(offset * 8) * 1.5
    ctx.fillStyle = '#f0abfc'
    ctx.beginPath()
    ctx.ellipse(bx - bw, by, bw, 2, -0.3, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(bx + bw, by, bw, 2, 0.3, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1
  }

  /**
   * 沙漠装饰：沙丘轮廓 + 仙人掌 + 热浪粒子
   */
  drawSandDecorations() {
    const ctx = this.ctx
    const w = ctx.canvas.width
    const h = ctx.canvas.height
    const offset = this.decorationOffset

    // 沙丘轮廓（底部）
    ctx.globalAlpha = 0.15
    ctx.fillStyle = '#92400e'
    ctx.beginPath()
    ctx.moveTo(0, h)
    for (let x = 0; x <= w; x += 5) {
      const yy = h - 8 - Math.sin(x * 0.02 + offset * 0.2) * 6 - Math.sin(x * 0.05 + offset * 0.3) * 3
      ctx.lineTo(x, yy)
    }
    ctx.lineTo(w, h)
    ctx.closePath()
    ctx.fill()
    ctx.globalAlpha = 1

    // 仙人掌（静止装饰）
    ctx.globalAlpha = 0.25
    ctx.fillStyle = '#166534'
    const cactiX = [w * 0.15, w * 0.55, w * 0.82]
    cactiX.forEach(cx => {
      const cy = h - 10 - Math.sin(cx * 0.02 + offset * 0.2) * 6
      ctx.fillRect(cx - 2, cy - 30, 4, 30)
      ctx.fillRect(cx - 8, cy - 18, 6, 3)
      ctx.fillRect(cx + 2, cy - 22, 6, 3)
      ctx.fillRect(cx - 4, cy - 35, 2, 6)
      ctx.fillRect(cx + 2, cy - 33, 2, 5)
    })
    ctx.globalAlpha = 1

    // 热浪粒子（升腾）
    ctx.globalAlpha = 0.15
    for (let i = 0; i < 6; i++) {
      const px = ((offset * 15 + i * 73) % w)
      const py = h - ((offset * 10 + i * 43) % (h * 0.4))
      const psize = 2 + Math.sin(offset + i) * 1
      ctx.fillStyle = '#fde047'
      ctx.beginPath()
      ctx.arc(px, py, psize, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  /**
   * 深海装饰：立体气泡 + 海草 + 小鱼
   */
  drawBubbleDecorations() {
    const ctx = this.ctx
    const w = ctx.canvas.width
    const h = ctx.canvas.height
    const offset = this.decorationOffset

    // 海草（底部摇摆）
    ctx.globalAlpha = 0.2
    ctx.lineWidth = 2
    const grassX = [w * 0.08, w * 0.25, w * 0.45, w * 0.65, w * 0.85, w * 0.95]
    grassX.forEach((gx, gi) => {
      const sway = Math.sin(offset * 1.5 + gi) * 5
      ctx.strokeStyle = ['#166534', '#15803d', '#16a34a'][gi % 3]
      ctx.beginPath()
      ctx.moveTo(gx, h)
      ctx.quadraticCurveTo(gx + sway, h * 0.75, gx + sway * 0.5, h * 0.55)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(gx + 4, h)
      ctx.quadraticCurveTo(gx + 4 + sway * 0.7, h * 0.8, gx + 4 + sway * 0.3, h * 0.62)
      ctx.stroke()
    })
    ctx.globalAlpha = 1

    // 立体气泡
    ctx.globalAlpha = 0.25
    for (let i = 0; i < 7; i++) {
      const bx = ((offset * 25 + i * 59) % w)
      const by = h - ((offset * 18 + i * 63) % h)
      const bsize = 4 + (i % 3) * 3
      ctx.fillStyle = '#22d3ee'
      ctx.beginPath()
      ctx.arc(bx, by, bsize, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(255,255,255,0.5)'
      ctx.beginPath()
      ctx.arc(bx - bsize * 0.25, by - bsize * 0.3, bsize * 0.3, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.arc(bx, by, bsize, 0, Math.PI * 2)
      ctx.stroke()
    }
    ctx.globalAlpha = 1

    // 小鱼（游动剪影）
    ctx.globalAlpha = 0.13
    for (let fi = 0; fi < 2; fi++) {
      const fx = ((offset * 20 + fi * 200) % (w + 40)) - 20
      const fy = h * 0.35 + fi * h * 0.25 + Math.sin(offset + fi) * 10
      const fdir = fi % 2 === 0 ? 1 : -1
      ctx.fillStyle = '#7dd3fc'
      ctx.beginPath()
      ctx.ellipse(fx, fy, 8, 3, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(fx - fdir * 10, fy)
      ctx.lineTo(fx - fdir * 14, fy - 4)
      ctx.lineTo(fx - fdir * 14, fy + 4)
      ctx.closePath()
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  /**
   * 火山装饰：逼真火焰 + 熔岩裂纹 + 火星粒子
   */
  drawFireDecorations() {
    const ctx = this.ctx
    const w = ctx.canvas.width
    const h = ctx.canvas.height
    const offset = this.decorationOffset

    // 地面熔岩裂纹
    ctx.globalAlpha = 0.15
    ctx.strokeStyle = '#f97316'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(10, h - 5)
    ctx.quadraticCurveTo(30, h - 20, 50, h - 5)
    ctx.quadraticCurveTo(70, h - 15, 90, h - 5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(w * 0.5, h - 3)
    ctx.quadraticCurveTo(w * 0.5 + 20, h - 18, w * 0.5 + 40, h - 3)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(w * 0.8, h - 5)
    ctx.quadraticCurveTo(w * 0.8 + 15, h - 12, w * 0.8 + 30, h - 5)
    ctx.stroke()

    // 熔岩发光（裂纹处）
    ctx.shadowColor = '#f97316'
    ctx.shadowBlur = 8
    ctx.fillStyle = '#fbbf24'
    ctx.globalAlpha = 0.1
    ctx.beginPath()
    ctx.arc(50, h - 10, 15, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(w * 0.5 + 20, h - 8, 12, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(w * 0.8 + 15, h - 8, 10, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.globalAlpha = 1

    // 火焰（底部跳动）
    ctx.globalAlpha = 0.2
    const fireColors = ['#ef4444', '#f97316', '#fbbf24']
    for (let i = 0; i < 4; i++) {
      const fx = 15 + i * (w / 4) + Math.sin(offset + i * 2) * 8
      const fy = h - 5 - Math.sin(offset * 2 + i * 1.5) * 15 - 10
      const flicker = Math.sin(offset * 3 + i * 2.5) * 5
      ctx.fillStyle = fireColors[i % 3]
      ctx.beginPath()
      ctx.moveTo(fx, fy + 10)
      ctx.quadraticCurveTo(fx - 10 + flicker, fy - 5, fx, fy - 25 + flicker)
      ctx.quadraticCurveTo(fx + 10 - flicker, fy - 5, fx, fy + 10)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // 火星粒子（上升）
    ctx.globalAlpha = 0.25
    for (let i = 0; i < 8; i++) {
      const px = ((offset * 20 + i * 61) % w)
      const py = h - ((offset * 12 + i * 37) % (h * 0.5))
      const psize = 1.5 + Math.sin(offset * 5 + i) * 0.8
      ctx.fillStyle = '#fbbf24'
      ctx.beginPath()
      ctx.arc(px, py, psize, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  /**
   * 冰川装饰：六角雪花 + 冰晶 + 极光（补充）
   */
  drawSnowDecorations() {
    const ctx = this.ctx
    const w = ctx.canvas.width
    const h = ctx.canvas.height
    const offset = this.decorationOffset

    // 六角雪花
    ctx.globalAlpha = 0.35
    for (let i = 0; i < 12; i++) {
      const sx = ((offset * 8 + i * 43) % w)
      const sy = ((offset * 12 + i * 31) % h)
      const ssize = 2 + (i % 3) * 1.5
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 0.8
      for (let a = 0; a < 6; a++) {
        const angle = a * Math.PI / 3
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(sx + Math.cos(angle) * ssize * 2, sy + Math.sin(angle) * ssize * 2)
        ctx.stroke()
      }
      ctx.fillStyle = 'rgba(255,255,255,0.4)'
      ctx.beginPath()
      ctx.arc(sx, sy, 1.2, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // 冰晶（边缘装饰）
    ctx.globalAlpha = 0.12
    ctx.fillStyle = '#e0f2fe'
    for (let i = 0; i < 5; i++) {
      const ix = (i * 97 + Math.floor(i * 1.3)) % w
      const iy = 5 + (i % 3) * 8
      ctx.beginPath()
      ctx.moveTo(ix, iy)
      ctx.lineTo(ix - 4, iy + 8)
      ctx.lineTo(ix + 4, iy + 8)
      ctx.closePath()
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  /**
   * 太空装饰：多彩恒星 + 闪烁 + 流星
   */
  drawStarDecorations() {
    const ctx = this.ctx
    const w = ctx.canvas.width
    const h = ctx.canvas.height
    const offset = this.decorationOffset

    // 恒星（多色，大小不一，各自闪烁频率）
    const starData = [
      { x: 0.12, y: 0.15, size: 3.0, color: '#fff', phase: 1.2 },
      { x: 0.25, y: 0.55, size: 2.5, color: '#93c5fd', phase: 0.8 },
      { x: 0.40, y: 0.20, size: 2.0, color: '#fde047', phase: 1.8 },
      { x: 0.50, y: 0.70, size: 3.5, color: '#fca5a5', phase: 0.5 },
      { x: 0.60, y: 0.10, size: 2.0, color: '#c4b5fd', phase: 2.2 },
      { x: 0.72, y: 0.45, size: 2.8, color: '#fff', phase: 1.0 },
      { x: 0.82, y: 0.80, size: 2.2, color: '#67e8f9', phase: 1.5 },
      { x: 0.90, y: 0.25, size: 3.2, color: '#fde047', phase: 0.3 },
      { x: 0.15, y: 0.85, size: 1.8, color: '#fff', phase: 2.5 },
      { x: 0.35, y: 0.40, size: 1.5, color: '#93c5fd', phase: 0.9 },
    ]
    starData.forEach(s => {
      const sx = s.x * w
      const sy = s.y * h
      const twinkle = (Math.sin(offset * s.phase * 2 + s.x * 10) + 1) / 2
      ctx.globalAlpha = 0.3 + twinkle * 0.5
      // 发光光晕
      ctx.shadowColor = s.color
      ctx.shadowBlur = s.size * 2
      ctx.fillStyle = s.color
      ctx.beginPath()
      ctx.arc(sx, sy, s.size * (0.6 + twinkle * 0.4), 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    })
    ctx.globalAlpha = 1

    // 小星（散布背景）
    ctx.globalAlpha = 0.2
    for (let i = 0; i < 20; i++) {
      const sx = ((i * 37 + 13) % 1) * w
      const sy = ((i * 53 + 7) % 1) * h
      const twinkle = (Math.sin(offset * (1 + i % 3) * 2 + i * 3) + 1) / 2
      ctx.fillStyle = '#fff'
      ctx.globalAlpha = twinkle * 0.25
      ctx.beginPath()
      ctx.arc(sx, sy, 0.8 + (i % 3) * 0.3, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // 流星（偶尔划过）
    ctx.globalAlpha = 0.3
    const meteorProgress = (offset * 5) % 1
    if (meteorProgress < 0.3) {
      const t = meteorProgress / 0.3
      const mx = w * 0.9 - t * w * 0.8
      const my = t * h * 0.4
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 1.5
      ctx.shadowColor = '#fff'
      ctx.shadowBlur = 6
      ctx.beginPath()
      ctx.moveTo(mx, my)
      ctx.lineTo(mx - 20, my + 10)
      ctx.stroke()
      ctx.shadowBlur = 0
    }
    ctx.globalAlpha = 1
  }

  /**
   * 绘制网格（地图差异化）
   */
  drawGrid() {
    const ctx = this.ctx
    const id = this.currentMapConfig.id
    const cs = this.cellSize
    const w = this.canvas.width
    const h = this.canvas.height
    const cols = CONFIG.GRID_COLS
    const rows = CONFIG.GRID_ROWS

    if (id === 'desert') {
      // 沙漠：点状网格（交点处画点）
      ctx.fillStyle = 'rgba(255,255,255,0.12)'
      for (let x = 0; x <= cols; x++) {
        for (let y = 0; y <= rows; y++) {
          ctx.beginPath()
          ctx.arc(x * cs, y * cs, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    } else if (id === 'ocean') {
      // 深海：波浪水平线
      ctx.strokeStyle = 'rgba(255,255,255,0.07)'
      ctx.lineWidth = 1
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath()
        for (let x = 0; x <= cols; x++) {
          const yy = y * cs + Math.sin((x * cs + this.decorationOffset * 20) * 0.05) * 3
          x === 0 ? ctx.moveTo(x * cs, yy) : ctx.lineTo(x * cs, yy)
        }
        ctx.stroke()
      }
    } else if (id === 'ice') {
      // 冰川：冰蓝虚线
      ctx.strokeStyle = 'rgba(255,255,255,0.12)'
      ctx.lineWidth = 1
      ctx.setLineDash([3, 5])
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath()
        ctx.moveTo(x * cs, 0)
        ctx.lineTo(x * cs, h)
        ctx.stroke()
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath()
        ctx.moveTo(0, y * cs)
        ctx.lineTo(w, y * cs)
        ctx.stroke()
      }
      ctx.setLineDash([])
    } else if (id === 'space') {
      // 太空：十字星点网格
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth = 0.5
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath()
        ctx.moveTo(x * cs, 0)
        ctx.lineTo(x * cs, h)
        ctx.stroke()
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath()
        ctx.moveTo(0, y * cs)
        ctx.lineTo(w, y * cs)
        ctx.stroke()
      }
      // 交点画十字星
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 0.5
      for (let x = 1; x < cols; x++) {
        for (let y = 1; y < rows; y++) {
          ctx.beginPath()
          ctx.moveTo(x * cs - 2, y * cs)
          ctx.lineTo(x * cs + 2, y * cs)
          ctx.moveTo(x * cs, y * cs - 2)
          ctx.lineTo(x * cs, y * cs + 2)
          ctx.stroke()
        }
      }
    } else {
      // 草原/火山：标准透明网格
      ctx.strokeStyle = this.currentMapConfig.gridColor
      ctx.lineWidth = 1
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath()
        ctx.moveTo(x * cs, 0)
        ctx.lineTo(x * cs, h)
        ctx.stroke()
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath()
        ctx.moveTo(0, y * cs)
        ctx.lineTo(w, y * cs)
        ctx.stroke()
      }
    }
  }

  /**
   * 绘制蛇
   */
  drawSnake(snake) {
    // 先绘制身体，再绘制头部（确保头部在最上层）
    for (let i = snake.segments.length - 1; i >= 0; i--) {
      const segment = snake.segments[i]
      const centerX = segment.x * this.cellSize + this.cellSize / 2
      const centerY = segment.y * this.cellSize + this.cellSize / 2
      
      if (i === 0) {
        this.drawSnakeHead(centerX, centerY, snake)
      } else {
        this.drawSnakeBody(centerX, centerY, snake, i)
      }
    }
  }

  /**
   * 绘制蛇头
   */
  drawSnakeHead(x, y, snake) {
    const radius = this.cellSize * 0.45
    
    this.ctx.save()
    this.ctx.translate(x, y)
    
    const angle = this.getDirectionAngle(snake.direction)
    this.ctx.rotate(angle)
    
    const style = snake.style
    
    switch (style.id) {
      case 'serpent':
        this.drawSerpentHead(radius, snake.colors)
        break
      case 'rainbow':
        this.drawRainbowHead(radius, snake.colors)
        break
      case 'crystal':
        this.drawCrystalHead(radius, snake.colors)
        break
      case 'cyber':
        this.drawCyberHead(radius, snake.colors)
        break
      case 'flame':
        this.drawFlameHead(radius, snake.colors)
        break
      case 'ice':
        this.drawIceHead(radius, snake.colors)
        break
      default:
        this.drawSerpentHead(radius, snake.colors)
    }
    
    this.ctx.restore()
  }

  /**
   * 绘制蛇身
   */
  drawSnakeBody(x, y, snake, index) {
    const radius = this.cellSize * 0.4
    const total = snake.segments.length
    const progress = index / total
    
    this.ctx.save()
    this.ctx.translate(x, y)
    
    if (index > 0 && index < snake.segments.length - 1) {
      const prev = snake.segments[index - 1]
      const next = snake.segments[index + 1]
      const dx = prev.x - next.x
      const dy = prev.y - next.y
      this.ctx.rotate(Math.atan2(dy, dx))
    }
    
    const style = snake.style
    
    switch (style.id) {
      case 'serpent':
        this.drawSerpentBody(radius, snake.colors, progress)
        break
      case 'rainbow':
        this.drawRainbowBody(radius, snake.colors, progress)
        break
      case 'crystal':
        this.drawCrystalBody(radius, snake.colors, progress)
        break
      case 'cyber':
        this.drawCyberBody(radius, snake.colors, progress)
        break
      case 'flame':
        this.drawFlameBody(radius, snake.colors, progress)
        break
      case 'ice':
        this.drawIceBody(radius, snake.colors, progress)
        break
      default:
        this.drawSerpentBody(radius, snake.colors, progress)
    }
    
    this.ctx.restore()
  }

  /**
   * 获取方向角度
   */
  getDirectionAngle(direction) {
    switch (direction) {
      case DIRECTION.UP:
        return -Math.PI / 2
      case DIRECTION.DOWN:
        return Math.PI / 2
      case DIRECTION.LEFT:
        return Math.PI
      case DIRECTION.RIGHT:
        return 0
      default:
        return 0
    }
  }

  /**
   * 绘制蛇形头部（竹叶青风格 — 三角头、竖瞳、热感应窝）
   */
  drawSerpentHead(radius, colors) {
    const ctx = this.ctx
    // 三角形蛇头（蝰科）
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.85)
    ctx.lineTo(radius * 0.9, -radius * 0.2)
    ctx.lineTo(radius * 0.7, radius * 0.5)
    ctx.lineTo(radius * 0.15, radius * 0.7)
    ctx.lineTo(-radius * 0.15, radius * 0.7)
    ctx.lineTo(-radius * 0.7, radius * 0.5)
    ctx.lineTo(-radius * 0.9, -radius * 0.2)
    ctx.closePath()
    ctx.fillStyle = colors.body
    ctx.fill()
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 2
    ctx.stroke()

    // 头顶鳞片花纹
    ctx.beginPath()
    ctx.moveTo(-radius * 0.3, -radius * 0.7)
    ctx.quadraticCurveTo(0, -radius * 0.9, radius * 0.3, -radius * 0.7)
    ctx.quadraticCurveTo(radius * 0.5, -radius * 0.5, radius * 0.3, -radius * 0.3)
    ctx.quadraticCurveTo(0, -radius * 0.5, -radius * 0.3, -radius * 0.3)
    ctx.quadraticCurveTo(-radius * 0.5, -radius * 0.5, -radius * 0.3, -radius * 0.7)
    ctx.fillStyle = colors.pattern
    ctx.globalAlpha = 0.3
    ctx.fill()
    ctx.globalAlpha = 1

    // 眼睛（金色虹膜 + 竖瞳）
    const eyeOffset = radius * 0.35
    const eyeRadius = radius * 0.14

    const drawViperEye = (x, y) => {
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.9, eyeRadius * 1.1, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#eab308'
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.25, eyeRadius * 0.85, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#000'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x - eyeRadius * 0.15, y - eyeRadius * 0.3, eyeRadius * 0.25, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.fill()
    }

    drawViperEye(-eyeOffset, -radius * 0.15)
    drawViperEye(eyeOffset, -radius * 0.15)

    // 热感应窝（眼鼻之间）
    ctx.fillStyle = '#1a1a1a'
    ctx.globalAlpha = 0.5
    ctx.beginPath()
    ctx.arc(-radius * 0.2, -radius * 0.55, radius * 0.06, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(radius * 0.2, -radius * 0.55, radius * 0.06, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1

    // 鼻孔
    ctx.fillStyle = '#0a0a0a'
    ctx.beginPath()
    ctx.ellipse(-radius * 0.18, -radius * 0.7, radius * 0.04, radius * 0.07, -0.3, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(radius * 0.18, -radius * 0.7, radius * 0.04, radius * 0.07, 0.3, 0, Math.PI * 2)
    ctx.fill()

    // 嘴巴线
    ctx.beginPath()
    ctx.moveTo(-radius * 0.45, radius * 0.25)
    ctx.quadraticCurveTo(-radius * 0.2, radius * 0.55, 0, radius * 0.48)
    ctx.quadraticCurveTo(radius * 0.2, radius * 0.55, radius * 0.45, radius * 0.25)
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 2
    ctx.stroke()

    // 舌头动画（伸缩分叉）
    const tonguePhase = Math.sin(this.renderTime * 0.008) * 0.35 + 0.65
    const tongueLen = radius * 0.35 * tonguePhase
    ctx.strokeStyle = '#ef4444'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.45)
    ctx.lineTo(-radius * 0.12, radius * 0.45 + tongueLen)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.45)
    ctx.lineTo(radius * 0.12, radius * 0.45 + tongueLen)
    ctx.stroke()
  }

  /**
   * 绘制蛇形身体（菱形鳞片 + S形背纹 + 渐变）
   */
  drawSerpentBody(radius, colors, progress) {
    const ctx = this.ctx
    // 身体渐变：头部附近粗，尾部细
    const taper = 1 - progress * 0.35
    const bw = radius * 0.9 * taper
    const bh = radius * 0.55 * taper

    // 身体底色
    ctx.beginPath()
    ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
    const bodyGrad = ctx.createLinearGradient(0, -bh, 0, bh)
    const darken = 1 - progress * 0.3
    bodyGrad.addColorStop(0, colors.body)
    bodyGrad.addColorStop(1, colors.pattern)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // 菱形鳞片纹理
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 1
    ctx.globalAlpha = 0.4 + (1 - progress) * 0.3
    const scaleW = bw * 0.35
    const scaleH = bh * 0.25
    for (let s = -1; s <= 1; s += 2) {
      ctx.beginPath()
      ctx.moveTo(s * scaleW * 0.5, -bh * 0.1)
      ctx.lineTo(0, -bh * 0.1 - scaleH)
      ctx.lineTo(-s * scaleW * 0.5, -bh * 0.1)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(s * scaleW * 0.5, bh * 0.1)
      ctx.lineTo(0, bh * 0.1 + scaleH)
      ctx.lineTo(-s * scaleW * 0.5, bh * 0.1)
      ctx.stroke()
    }

    // S形背部花纹
    ctx.globalAlpha = 0.7
    const waveX = Math.sin(progress * Math.PI * 8) * bw * 0.2
    ctx.beginPath()
    ctx.moveTo(-bw * 0.3, -bh * 0.15)
    ctx.quadraticCurveTo(0, -bh * 0.45 + waveX * 0.3, bw * 0.3, -bh * 0.15)
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.globalAlpha = 1
  }

  /**
   * 绘制彩虹蛇头（彩虹蚺风格 — 圆头、虹彩鳞片）
   */
  drawRainbowHead(radius, colors) {
    const ctx = this.ctx
    const rainbowColors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']

    // 圆润蚺科头型
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.75)
    ctx.bezierCurveTo(radius * 0.7, -radius * 0.75, radius * 0.9, -radius * 0.15, radius * 0.65, radius * 0.45)
    ctx.bezierCurveTo(radius * 0.35, radius * 0.7, -radius * 0.35, radius * 0.7, -radius * 0.65, radius * 0.45)
    ctx.bezierCurveTo(-radius * 0.9, -radius * 0.15, -radius * 0.7, -radius * 0.75, 0, -radius * 0.75)
    ctx.closePath()

    // 虹彩渐变
    const headGrad = ctx.createLinearGradient(-radius, -radius, radius, radius)
    rainbowColors.forEach((c, i) => headGrad.addColorStop(i / rainbowColors.length, c))
    ctx.fillStyle = headGrad
    ctx.fill()

    ctx.shadowColor = '#fff'
    ctx.shadowBlur = 6
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.shadowBlur = 0

    // 眼睛（圆瞳 + 多彩虹膜）
    const eyeOffset = radius * 0.38
    const eyeRadius = radius * 0.13
    const drawRainbowEye = (x, y) => {
      ctx.beginPath()
      ctx.arc(x, y, eyeRadius, 0, Math.PI * 2)
      ctx.fillStyle = '#f0abfc'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x, y, eyeRadius * 0.55, 0, Math.PI * 2)
      ctx.fillStyle = '#000'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x - eyeRadius * 0.15, y - eyeRadius * 0.25, eyeRadius * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.8)'
      ctx.fill()
    }
    drawRainbowEye(-eyeOffset, -radius * 0.15)
    drawRainbowEye(eyeOffset, -radius * 0.15)

    // 鼻孔
    ctx.fillStyle = '#831843'
    ctx.beginPath()
    ctx.ellipse(-radius * 0.15, -radius * 0.6, radius * 0.04, radius * 0.06, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(radius * 0.15, -radius * 0.6, radius * 0.04, radius * 0.06, 0, 0, Math.PI * 2)
    ctx.fill()

    // 嘴巴
    ctx.beginPath()
    ctx.moveTo(-radius * 0.4, radius * 0.25)
    ctx.quadraticCurveTo(0, radius * 0.5, radius * 0.4, radius * 0.25)
    ctx.strokeStyle = '#831843'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // 舌头
    const tonguePhase = Math.sin(this.renderTime * 0.008) * 0.35 + 0.65
    const tongueLen = radius * 0.3 * tonguePhase
    ctx.strokeStyle = '#f472b6'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.4)
    ctx.lineTo(-radius * 0.1, radius * 0.4 + tongueLen)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.4)
    ctx.lineTo(radius * 0.1, radius * 0.4 + tongueLen)
    ctx.stroke()
  }

  /**
   * 绘制彩虹蛇身（虹彩蚺鳞片）
   */
  drawRainbowBody(radius, colors, progress) {
    const ctx = this.ctx
    const rainbowColors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
    const taper = 1 - progress * 0.3
    const bw = radius * 0.85 * taper
    const bh = radius * 0.55 * taper

    const colorIndex = Math.floor(progress * rainbowColors.length * 3) % rainbowColors.length

    // 虹彩底色
    ctx.beginPath()
    ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
    ctx.fillStyle = rainbowColors[colorIndex]
    ctx.fill()

    // 鳞片纹理（反光条纹）
    ctx.globalAlpha = 0.4
    for (let i = -2; i <= 2; i++) {
      const lx = i * bw * 0.2
      ctx.beginPath()
      ctx.ellipse(lx, 0, bw * 0.15, bh * 0.5, 0, 0, Math.PI * 2)
      ctx.fillStyle = rainbowColors[(colorIndex + i + rainbowColors.length) % rainbowColors.length]
      ctx.globalAlpha = 0.3
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // 边缘高光
    ctx.beginPath()
    ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineWidth = 1
    ctx.stroke()
  }

  /**
   * 绘制水晶蛇头（水晶切割蛇形头）
   */
  drawCrystalHead(radius, colors) {
    const ctx = this.ctx

    // 多面切割蛇头
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.9)
    ctx.lineTo(radius * 0.55, -radius * 0.55)
    ctx.lineTo(radius * 0.8, -radius * 0.15)
    ctx.lineTo(radius * 0.6, radius * 0.35)
    ctx.lineTo(radius * 0.2, radius * 0.65)
    ctx.lineTo(-radius * 0.2, radius * 0.65)
    ctx.lineTo(-radius * 0.6, radius * 0.35)
    ctx.lineTo(-radius * 0.8, -radius * 0.15)
    ctx.lineTo(-radius * 0.55, -radius * 0.55)
    ctx.closePath()

    const headGrad = ctx.createLinearGradient(-radius, -radius, radius, radius)
    headGrad.addColorStop(0, colors.body)
    headGrad.addColorStop(0.5, 'rgba(255,255,255,0.4)')
    headGrad.addColorStop(1, colors.pattern)
    ctx.fillStyle = headGrad
    ctx.fill()

    ctx.shadowColor = colors.body
    ctx.shadowBlur = 15
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.shadowBlur = 0

    // 内部切割线
    ctx.globalAlpha = 0.3
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.9)
    ctx.lineTo(0, radius * 0.65)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.55, -radius * 0.55)
    ctx.lineTo(radius * 0.55, -radius * 0.55)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.8, -radius * 0.15)
    ctx.lineTo(radius * 0.8, -radius * 0.15)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.6, radius * 0.35)
    ctx.lineTo(radius * 0.6, radius * 0.35)
    ctx.stroke()
    ctx.globalAlpha = 1

    // 眼睛（紫晶瞳孔 + 发光）
    const eyeOffset = radius * 0.35
    const eyeRadius = radius * 0.13
    const drawCrystalEye = (x, y) => {
      ctx.shadowColor = '#a78bfa'
      ctx.shadowBlur = 8
      ctx.beginPath()
      ctx.arc(x, y, eyeRadius, 0, Math.PI * 2)
      ctx.fillStyle = '#c4b5fd'
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.beginPath()
      ctx.moveTo(x - eyeRadius * 0.2, y)
      ctx.lineTo(x, y - eyeRadius * 0.6)
      ctx.lineTo(x + eyeRadius * 0.2, y)
      ctx.closePath()
      ctx.fillStyle = '#7c3aed'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x - eyeRadius * 0.15, y - eyeRadius * 0.2, eyeRadius * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.6)'
      ctx.fill()
    }
    drawCrystalEye(-eyeOffset, -radius * 0.1)
    drawCrystalEye(eyeOffset, -radius * 0.1)

    // 鼻孔
    ctx.fillStyle = colors.pattern
    ctx.beginPath()
    ctx.arc(-radius * 0.15, -radius * 0.7, radius * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(radius * 0.15, -radius * 0.7, radius * 0.04, 0, Math.PI * 2)
    ctx.fill()

    // 嘴巴
    ctx.beginPath()
    ctx.moveTo(-radius * 0.35, radius * 0.3)
    ctx.lineTo(0, radius * 0.5)
    ctx.lineTo(radius * 0.35, radius * 0.3)
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 1.5
    ctx.stroke()

    // 水晶舌头
    const tonguePhase = Math.sin(this.renderTime * 0.008) * 0.35 + 0.65
    const tongueLen = radius * 0.3 * tonguePhase
    ctx.shadowColor = '#a78bfa'
    ctx.shadowBlur = 6
    ctx.strokeStyle = '#c4b5fd'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.45)
    ctx.lineTo(-radius * 0.1, radius * 0.45 + tongueLen)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.45)
    ctx.lineTo(radius * 0.1, radius * 0.45 + tongueLen)
    ctx.stroke()
    ctx.shadowBlur = 0
  }

  /**
   * 绘制水晶蛇身（多面切割鳞片）
   */
  drawCrystalBody(radius, colors, progress) {
    const ctx = this.ctx
    const taper = 1 - progress * 0.3
    const bw = radius * 0.75 * taper
    const bh = radius * 0.5 * taper

    // 六边形切割身体
    ctx.beginPath()
    ctx.moveTo(0, -bh)
    ctx.lineTo(bw * 0.6, -bh * 0.4)
    ctx.lineTo(bw * 0.8, bh * 0.1)
    ctx.lineTo(bw * 0.4, bh * 0.5)
    ctx.lineTo(0, bh * 0.6)
    ctx.lineTo(-bw * 0.4, bh * 0.5)
    ctx.lineTo(-bw * 0.8, bh * 0.1)
    ctx.lineTo(-bw * 0.6, -bh * 0.4)
    ctx.closePath()

    const bodyGrad = ctx.createLinearGradient(-bw, -bh, bw, bh)
    bodyGrad.addColorStop(0, 'rgba(255,255,255,0.3)')
    bodyGrad.addColorStop(0.4, colors.body)
    bodyGrad.addColorStop(0.8, colors.pattern)
    bodyGrad.addColorStop(1, 'rgba(255,255,255,0.2)')
    ctx.fillStyle = bodyGrad
    ctx.fill()

    ctx.shadowColor = colors.body
    ctx.shadowBlur = 6
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.shadowBlur = 0

    // 切割面高光
    ctx.strokeStyle = 'rgba(255,255,255,0.2)'
    ctx.lineWidth = 0.5
    ctx.globalAlpha = 0.5
    ctx.beginPath()
    ctx.moveTo(0, -bh)
    ctx.lineTo(0, bh * 0.6)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-bw * 0.6, -bh * 0.4)
    ctx.lineTo(bw * 0.6, -bh * 0.4)
    ctx.stroke()
    ctx.globalAlpha = 1
  }

  /**
   * 绘制赛博蛇头（机械装甲蛇头）
   */
  drawCyberHead(radius, colors) {
    const ctx = this.ctx

    // 蛇形机械头部
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.8)
    ctx.bezierCurveTo(radius * 0.5, -radius * 0.85, radius * 0.85, -radius * 0.4, radius * 0.8, -radius * 0.05)
    ctx.lineTo(radius * 0.75, radius * 0.15)
    ctx.lineTo(radius * 0.65, radius * 0.45)
    ctx.lineTo(radius * 0.2, radius * 0.6)
    ctx.lineTo(-radius * 0.2, radius * 0.6)
    ctx.lineTo(-radius * 0.65, radius * 0.45)
    ctx.lineTo(-radius * 0.75, radius * 0.15)
    ctx.lineTo(-radius * 0.8, -radius * 0.05)
    ctx.bezierCurveTo(-radius * 0.85, -radius * 0.4, -radius * 0.5, -radius * 0.85, 0, -radius * 0.8)
    ctx.closePath()

    const headGrad = ctx.createLinearGradient(-radius, -radius, radius, radius)
    headGrad.addColorStop(0, colors.pattern)
    headGrad.addColorStop(0.3, colors.body)
    headGrad.addColorStop(0.7, colors.body)
    headGrad.addColorStop(1, colors.pattern)
    ctx.fillStyle = headGrad
    ctx.fill()

    // 装甲板接缝
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 1.5
    ctx.shadowColor = colors.pattern
    ctx.shadowBlur = 8
    ctx.beginPath()
    ctx.moveTo(-radius * 0.5, -radius * 0.3)
    ctx.lineTo(radius * 0.5, -radius * 0.3)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.35, -radius * 0.1)
    ctx.lineTo(radius * 0.35, -radius * 0.1)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.45, radius * 0.15)
    ctx.lineTo(radius * 0.45, radius * 0.15)
    ctx.stroke()
    ctx.shadowBlur = 0

    // 眼睛（LED竖瞳 + 扫描动画）
    const eyeOffset = radius * 0.3
    const eyeRadius = radius * 0.13
    const scanOffset = Math.sin(this.renderTime * 0.004) * radius * 0.1

    const drawCyberEye = (x, y) => {
      ctx.shadowColor = '#22d3ee'
      ctx.shadowBlur = 10
      ctx.beginPath()
      ctx.ellipse(x, y + scanOffset, eyeRadius * 0.4, eyeRadius * 0.8, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#22d3ee'
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.55, eyeRadius * 0.9, 0, 0, Math.PI * 2)
      ctx.strokeStyle = '#22d3ee'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }
    drawCyberEye(-eyeOffset, -radius * 0.1)
    drawCyberEye(eyeOffset, -radius * 0.1)

    // 机械鼻孔
    ctx.fillStyle = colors.pattern
    ctx.shadowColor = colors.pattern
    ctx.shadowBlur = 4
    ctx.beginPath()
    ctx.arc(-radius * 0.15, -radius * 0.6, radius * 0.05, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(radius * 0.15, -radius * 0.6, radius * 0.05, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0

    // 机械下颚
    ctx.beginPath()
    ctx.moveTo(-radius * 0.3, radius * 0.3)
    ctx.lineTo(0, radius * 0.55)
    ctx.lineTo(radius * 0.3, radius * 0.3)
    ctx.fillStyle = colors.pattern
    ctx.globalAlpha = 0.6
    ctx.fill()
    ctx.globalAlpha = 1

    // 发光舌头
    const tonguePhase = Math.sin(this.renderTime * 0.01) * 0.35 + 0.65
    const tongueLen = radius * 0.3 * tonguePhase
    ctx.shadowColor = '#22d3ee'
    ctx.shadowBlur = 8
    ctx.strokeStyle = '#22d3ee'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.45)
    ctx.lineTo(-radius * 0.1, radius * 0.45 + tongueLen)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.45)
    ctx.lineTo(radius * 0.1, radius * 0.45 + tongueLen)
    ctx.stroke()
    ctx.shadowBlur = 0
  }

  /**
   * 绘制赛博蛇身（装甲电路鳞片）
   */
  drawCyberBody(radius, colors, progress) {
    const ctx = this.ctx
    const taper = 1 - progress * 0.3
    const bw = radius * 0.75 * taper
    const bh = radius * 0.45 * taper

    // 装甲六边形
    ctx.beginPath()
    ctx.moveTo(0, -bh)
    ctx.lineTo(bw * 0.7, -bh * 0.35)
    ctx.lineTo(bw * 0.7, bh * 0.35)
    ctx.lineTo(0, bh)
    ctx.lineTo(-bw * 0.7, bh * 0.35)
    ctx.lineTo(-bw * 0.7, -bh * 0.35)
    ctx.closePath()

    const bodyGrad = ctx.createLinearGradient(0, -bh, 0, bh)
    bodyGrad.addColorStop(0, colors.pattern)
    bodyGrad.addColorStop(0.3, colors.body)
    bodyGrad.addColorStop(0.7, colors.body)
    bodyGrad.addColorStop(1, colors.pattern)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    ctx.shadowColor = colors.pattern
    ctx.shadowBlur = 6
    ctx.strokeStyle = colors.pattern
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.shadowBlur = 0

    // 电路纹理线
    ctx.strokeStyle = colors.pattern
    ctx.globalAlpha = 0.6
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(-bw * 0.3, -bh * 0.2)
    ctx.lineTo(bw * 0.3, -bh * 0.2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-bw * 0.3, bh * 0.2)
    ctx.lineTo(bw * 0.3, bh * 0.2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-bw * 0.1, -bh * 0.2)
    ctx.lineTo(-bw * 0.1, bh * 0.2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(bw * 0.1, -bh * 0.2)
    ctx.lineTo(bw * 0.1, bh * 0.2)
    ctx.stroke()
    ctx.globalAlpha = 1

    // LED节点
    ctx.shadowColor = '#22d3ee'
    ctx.shadowBlur = 4
    ctx.fillStyle = '#22d3ee'
    ctx.beginPath()
    ctx.arc(-bw * 0.3, 0, radius * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(bw * 0.3, 0, radius * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
  }

  /**
   * 绘制火焰蛇头（熔岩鳞片蛇头）
   */
  drawFlameHead(radius, colors) {
    const ctx = this.ctx

    // 蛇形头部 + 熔岩裂纹
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.8)
    ctx.bezierCurveTo(radius * 0.5, -radius * 0.8, radius * 0.85, -radius * 0.35, radius * 0.75, radius * 0.05)
    ctx.lineTo(radius * 0.7, radius * 0.35)
    ctx.lineTo(radius * 0.45, radius * 0.6)
    ctx.lineTo(0, radius * 0.7)
    ctx.lineTo(-radius * 0.45, radius * 0.6)
    ctx.lineTo(-radius * 0.7, radius * 0.35)
    ctx.lineTo(-radius * 0.75, radius * 0.05)
    ctx.bezierCurveTo(-radius * 0.85, -radius * 0.35, -radius * 0.5, -radius * 0.8, 0, -radius * 0.8)
    ctx.closePath()

    // 黑底 + 熔岩渐变
    ctx.fillStyle = '#1c1917'
    ctx.fill()
    const lavaGrad = ctx.createLinearGradient(0, -radius, 0, radius)
    lavaGrad.addColorStop(0, colors.body)
    lavaGrad.addColorStop(0.5, colors.pattern)
    lavaGrad.addColorStop(1, '#450a0a')
    ctx.shadowColor = '#f97316'
    ctx.shadowBlur = 12
    ctx.strokeStyle = lavaGrad
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.shadowBlur = 0

    // 熔岩裂纹纹理
    ctx.strokeStyle = '#fb923c'
    ctx.lineWidth = 1.5
    ctx.globalAlpha = 0.7
    ctx.beginPath()
    ctx.moveTo(-radius * 0.1, -radius * 0.6)
    ctx.lineTo(-radius * 0.3, -radius * 0.3)
    ctx.lineTo(-radius * 0.1, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(radius * 0.1, -radius * 0.6)
    ctx.lineTo(radius * 0.3, -radius * 0.3)
    ctx.lineTo(radius * 0.25, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.4, radius * 0.15)
    ctx.lineTo(-radius * 0.15, radius * 0.4)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(radius * 0.4, radius * 0.15)
    ctx.lineTo(radius * 0.15, radius * 0.4)
    ctx.stroke()
    ctx.globalAlpha = 1

    // 眼睛（炽热竖瞳）
    const eyeOffset = radius * 0.35
    const eyeRadius = radius * 0.14
    const glowIntensity = Math.sin(this.renderTime * 0.005) * 0.15 + 0.85

    const drawFlameEye = (x, y) => {
      ctx.shadowColor = '#f97316'
      ctx.shadowBlur = 12 * glowIntensity
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.9, eyeRadius * 1.1, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#fef3c7'
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.2, eyeRadius * 0.8, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#dc2626'
      ctx.fill()
      ctx.shadowBlur = 0
    }
    drawFlameEye(-eyeOffset, -radius * 0.1)
    drawFlameEye(eyeOffset, -radius * 0.1)

    // 鼻孔
    ctx.fillStyle = '#292524'
    ctx.beginPath()
    ctx.arc(-radius * 0.15, -radius * 0.65, radius * 0.05, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(radius * 0.15, -radius * 0.65, radius * 0.05, 0, Math.PI * 2)
    ctx.fill()

    // 嘴巴（内部火光）
    ctx.beginPath()
    ctx.moveTo(-radius * 0.35, radius * 0.25)
    ctx.quadraticCurveTo(-radius * 0.1, radius * 0.55, 0, radius * 0.45)
    ctx.quadraticCurveTo(radius * 0.1, radius * 0.55, radius * 0.35, radius * 0.25)
    ctx.strokeStyle = '#f97316'
    ctx.lineWidth = 2
    ctx.stroke()

    // 火焰舌头
    const tonguePhase = Math.sin(this.renderTime * 0.009) * 0.35 + 0.65
    const tongueLen = radius * 0.35 * tonguePhase
    ctx.shadowColor = '#f97316'
    ctx.shadowBlur = 8
    ctx.strokeStyle = '#fbbf24'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.4)
    ctx.lineTo(-radius * 0.12, radius * 0.4 + tongueLen)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.4)
    ctx.lineTo(radius * 0.12, radius * 0.4 + tongueLen)
    ctx.stroke()
    ctx.shadowBlur = 0

    // 头顶火焰冠（动画）
    ctx.shadowColor = '#f97316'
    ctx.shadowBlur = 10
    const flameFlicker = Math.sin(this.renderTime * 0.01) * radius * 0.05
    ctx.fillStyle = '#fbbf24'
    ctx.beginPath()
    ctx.moveTo(-radius * 0.2, -radius * 0.7)
    ctx.quadraticCurveTo(-radius * 0.1, -radius * 0.85 + flameFlicker, 0, -radius * 0.75)
    ctx.quadraticCurveTo(radius * 0.1, -radius * 0.85 + flameFlicker, radius * 0.2, -radius * 0.7)
    ctx.fill()
    ctx.shadowBlur = 0
  }

  /**
   * 绘制火焰蛇身（熔岩鳞片）
   */
  drawFlameBody(radius, colors, progress) {
    const ctx = this.ctx
    const taper = 1 - progress * 0.3
    const bw = radius * 0.8 * taper
    const bh = radius * 0.5 * taper

    // 黑底身体
    ctx.beginPath()
    ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
    ctx.fillStyle = '#1c1917'
    ctx.fill()

    // 熔岩裂纹
    ctx.strokeStyle = colors.body
    ctx.lineWidth = 1.5
    ctx.globalAlpha = 0.8
    const crackPhase = Math.sin(progress * Math.PI * 6) * bw * 0.25
    ctx.beginPath()
    ctx.moveTo(-bw * 0.4, -bh * 0.2)
    ctx.quadraticCurveTo(-bw * 0.05, -bh * 0.35 + crackPhase * 0.3, bw * 0.4, -bh * 0.2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-bw * 0.3, bh * 0.1)
    ctx.quadraticCurveTo(0, bh * 0.3 + crackPhase * 0.2, bw * 0.3, bh * 0.1)
    ctx.stroke()
    ctx.globalAlpha = 1

    // 核心发光
    ctx.shadowColor = '#f97316'
    ctx.shadowBlur = 8
    ctx.fillStyle = colors.pattern
    ctx.globalAlpha = 0.4
    ctx.beginPath()
    ctx.ellipse(0, 0, bw * 0.4, bh * 0.4, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.shadowBlur = 0

    // 背部火焰尖刺
    ctx.shadowColor = '#f97316'
    ctx.shadowBlur = 6
    const flameOffset = Math.sin(progress * Math.PI * 6) * bh * 0.15
    ctx.fillStyle = '#fbbf24'
    ctx.globalAlpha = 0.6
    ctx.beginPath()
    ctx.moveTo(-bw * 0.3, -bh * 0.2 + flameOffset)
    ctx.lineTo(0, -bh * 0.7 + flameOffset)
    ctx.lineTo(bw * 0.3, -bh * 0.2 + flameOffset)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.shadowBlur = 0
  }

  /**
   * 绘制冰霜蛇头（冰晶鳞片蛇头）
   */
  drawIceHead(radius, colors) {
    const ctx = this.ctx

    // 冰晶蛇头
    ctx.beginPath()
    ctx.moveTo(0, -radius * 0.85)
    ctx.bezierCurveTo(radius * 0.45, -radius * 0.85, radius * 0.8, -radius * 0.35, radius * 0.75, radius * 0.05)
    ctx.lineTo(radius * 0.65, radius * 0.4)
    ctx.lineTo(radius * 0.4, radius * 0.6)
    ctx.lineTo(0, radius * 0.68)
    ctx.lineTo(-radius * 0.4, radius * 0.6)
    ctx.lineTo(-radius * 0.65, radius * 0.4)
    ctx.lineTo(-radius * 0.75, radius * 0.05)
    ctx.bezierCurveTo(-radius * 0.8, -radius * 0.35, -radius * 0.45, -radius * 0.85, 0, -radius * 0.85)
    ctx.closePath()

    const headGrad = ctx.createLinearGradient(0, -radius, 0, radius)
    headGrad.addColorStop(0, '#fff')
    headGrad.addColorStop(0.4, colors.body)
    headGrad.addColorStop(1, colors.pattern)
    ctx.fillStyle = headGrad
    ctx.fill()

    ctx.shadowColor = '#60a5fa'
    ctx.shadowBlur = 15
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.shadowBlur = 0

    // 冰霜纹理
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(-radius * 0.2, -radius * 0.7)
    ctx.lineTo(-radius * 0.35, -radius * 0.5)
    ctx.lineTo(-radius * 0.2, -radius * 0.3)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(radius * 0.2, -radius * 0.7)
    ctx.lineTo(radius * 0.35, -radius * 0.5)
    ctx.lineTo(radius * 0.2, -radius * 0.3)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-radius * 0.4, 0)
    ctx.lineTo(-radius * 0.25, radius * 0.25)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(radius * 0.4, 0)
    ctx.lineTo(radius * 0.25, radius * 0.25)
    ctx.stroke()

    // 眼睛（冰蓝竖瞳 + 冷光）
    const eyeOffset = radius * 0.35
    const eyeRadius = radius * 0.13
    const frostPulse = Math.sin(this.renderTime * 0.004) * 0.15 + 0.85

    const drawIceEye = (x, y) => {
      ctx.shadowColor = '#93c5fd'
      ctx.shadowBlur = 10 * frostPulse
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.85, eyeRadius * 1.05, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#bfdbfe'
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(x, y, eyeRadius * 0.2, eyeRadius * 0.75, 0, 0, Math.PI * 2)
      ctx.fillStyle = '#1d4ed8'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x - eyeRadius * 0.1, y - eyeRadius * 0.25, eyeRadius * 0.15, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.fill()
      ctx.shadowBlur = 0
    }
    drawIceEye(-eyeOffset, -radius * 0.12)
    drawIceEye(eyeOffset, -radius * 0.12)

    // 鼻孔（呼出冷气）
    ctx.fillStyle = '#eff6ff'
    ctx.globalAlpha = 0.6
    ctx.beginPath()
    ctx.arc(-radius * 0.15, -radius * 0.65, radius * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(radius * 0.15, -radius * 0.65, radius * 0.04, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1

    // 嘴巴
    ctx.beginPath()
    ctx.moveTo(-radius * 0.3, radius * 0.25)
    ctx.quadraticCurveTo(0, radius * 0.45, radius * 0.3, radius * 0.25)
    ctx.strokeStyle = '#93c5fd'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // 冰霜舌头
    const tonguePhase = Math.sin(this.renderTime * 0.008) * 0.35 + 0.65
    const tongueLen = radius * 0.3 * tonguePhase
    ctx.shadowColor = '#93c5fd'
    ctx.shadowBlur = 6
    ctx.strokeStyle = '#bfdbfe'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.4)
    ctx.lineTo(-radius * 0.1, radius * 0.4 + tongueLen)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, radius * 0.4)
    ctx.lineTo(radius * 0.1, radius * 0.4 + tongueLen)
    ctx.stroke()
    ctx.shadowBlur = 0

    // 头顶冰刺
    ctx.shadowColor = '#93c5fd'
    ctx.shadowBlur = 8
    ctx.fillStyle = '#e0f2fe'
    ctx.globalAlpha = 0.7
    ctx.beginPath()
    ctx.moveTo(-radius * 0.25, -radius * 0.7)
    ctx.lineTo(-radius * 0.35, -radius * 0.95)
    ctx.lineTo(-radius * 0.1, -radius * 0.8)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(radius * 0.25, -radius * 0.7)
    ctx.lineTo(radius * 0.35, -radius * 0.95)
    ctx.lineTo(radius * 0.1, -radius * 0.8)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.shadowBlur = 0
  }

  /**
   * 绘制冰霜蛇身（冰晶鳞片）
   */
  drawIceBody(radius, colors, progress) {
    const ctx = this.ctx
    const taper = 1 - progress * 0.3
    const bw = radius * 0.8 * taper
    const bh = radius * 0.5 * taper

    // 冰晶身体
    ctx.beginPath()
    ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
    const bodyGrad = ctx.createLinearGradient(0, -bh, 0, bh)
    const darken = 1 - progress * 0.2
    bodyGrad.addColorStop(0, 'rgba(255,255,255,0.7)')
    bodyGrad.addColorStop(0.4, colors.body)
    bodyGrad.addColorStop(1, colors.pattern)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    ctx.shadowColor = '#60a5fa'
    ctx.shadowBlur = 6
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.shadowBlur = 0

    // 冰晶纹理（菱形网格）
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'
    ctx.lineWidth = 0.8
    const gridPhase = Math.floor(progress * 12)
    for (let gi = -1; gi <= 1; gi += 2) {
      ctx.beginPath()
      ctx.moveTo(gi * bw * 0.25, -bh * 0.15)
      ctx.lineTo(0, -bh * 0.45)
      ctx.lineTo(-gi * bw * 0.25, -bh * 0.15)
      ctx.stroke()
    }

    // 冰刺背脊（间隔出现）
    if (gridPhase % 2 === 0) {
      ctx.shadowColor = '#93c5fd'
      ctx.shadowBlur = 5
      ctx.fillStyle = '#e0f2fe'
      ctx.globalAlpha = 0.5
      ctx.beginPath()
      ctx.moveTo(-bw * 0.2, -bh * 0.3)
      ctx.lineTo(0, -bh * 0.7)
      ctx.lineTo(bw * 0.2, -bh * 0.3)
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
    }
  }

  /**
   * 绘制食物
   */
  drawFood(food) {
    if (!food) return

    const centerX = food.x * this.cellSize + this.cellSize / 2
    const centerY = food.y * this.cellSize + this.cellSize / 2
    const radius = this.cellSize * 0.35
    const lifetimeProgress = food.getLifetimeProgress()

    this.ctx.save()
    this.ctx.translate(centerX, centerY)
    
    if (food.type === 'apple') {
      this.drawAppleFood(radius, food.colors)
    } else if (food.type === 'cherry') {
      this.drawCherryFood(radius, food.colors)
    } else if (food.type === 'star') {
      this.drawStarFood(radius, food.colors)
    } else if (food.type === 'diamond') {
      this.drawDiamondFood(radius, food.colors)
    } else if (food.type === 'fireball') {
      this.drawFireballFood(radius, food.colors)
    } else if (food.type === 'goldenStar') {
      this.drawGoldenStarFood(radius, food.colors)
    } else if (food.type === 'crown') {
      this.drawCrownFood(radius, food.colors)
    } else {
      this.drawAppleFood(radius, food.colors)
    }

    if (lifetimeProgress < 1 && lifetimeProgress > 0) {
      this.ctx.globalAlpha = 0.3 + lifetimeProgress * 0.7
      this.ctx.beginPath()
      this.ctx.arc(0, 0, radius * 1.2, 0, Math.PI * 2)
      this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'
      this.ctx.lineWidth = 2
      this.ctx.stroke()
      this.ctx.globalAlpha = 1
    }

    this.ctx.restore()
  }

  /**
   * 绘制苹果食物（关卡1）
   */
  drawAppleFood(radius, colors) {
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 1.5)
    gradient.addColorStop(0, 'rgba(255, 107, 107, 0.6)')
    gradient.addColorStop(1, 'rgba(255, 107, 107, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, radius * 1.5, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.ellipse(0, 0, radius, radius * 0.85, 0, 0, Math.PI * 2)
    const fruitGradient = this.ctx.createLinearGradient(0, -radius, 0, radius)
    fruitGradient.addColorStop(0, colors.highlight)
    fruitGradient.addColorStop(1, colors.main)
    this.ctx.fillStyle = fruitGradient
    this.ctx.fill()
    this.ctx.strokeStyle = colors.stem
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.ellipse(-radius * 0.3, -radius * 0.3, radius * 0.2, radius * 0.15, -Math.PI / 4, 0, Math.PI * 2)
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.moveTo(-radius * 0.2, -radius * 0.8)
    this.ctx.lineTo(0, -radius * 1.1)
    this.ctx.lineTo(radius * 0.2, -radius * 0.8)
    this.ctx.closePath()
    this.ctx.fillStyle = colors.stem
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.ellipse(0, -radius * 1.2, radius * 0.15, radius * 0.25, Math.PI / 4, 0, Math.PI * 2)
    this.ctx.fillStyle = colors.leaf
    this.ctx.fill()
  }

  /**
   * 绘制樱桃食物（关卡2）
   */
  drawCherryFood(radius, colors) {
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 1.5)
    gradient.addColorStop(0, 'rgba(229, 57, 53, 0.6)')
    gradient.addColorStop(1, 'rgba(229, 57, 53, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, radius * 1.5, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.ellipse(0, 0, radius * 0.7, radius * 0.9, 0, 0, Math.PI * 2)
    const fruitGradient = this.ctx.createLinearGradient(0, -radius, 0, radius)
    fruitGradient.addColorStop(0, colors.highlight)
    fruitGradient.addColorStop(1, colors.main)
    this.ctx.fillStyle = fruitGradient
    this.ctx.fill()
    this.ctx.strokeStyle = colors.stem
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.ellipse(-radius * 0.2, -radius * 0.3, radius * 0.15, radius * 0.12, -Math.PI / 4, 0, Math.PI * 2)
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.moveTo(0, -radius * 0.8)
    this.ctx.lineTo(0, -radius * 1.1)
    this.ctx.strokeStyle = colors.stem
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.ellipse(0, -radius * 1.25, radius * 0.12, radius * 0.2, -Math.PI / 6, 0, Math.PI * 2)
    this.ctx.fillStyle = colors.leaf
    this.ctx.fill()
  }

  /**
   * 绘制星星食物（关卡3）
   */
  drawStarFood(radius, colors) {
    const time = Date.now() / 500
    const pulseRadius = radius * (1 + Math.sin(time) * 0.1)
    
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, pulseRadius * 2)
    gradient.addColorStop(0, colors.glow)
    gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.3)')
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius * 2, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.beginPath()
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
      const x = Math.cos(angle) * pulseRadius
      const y = Math.sin(angle) * pulseRadius
      if (i === 0) {
        this.ctx.moveTo(x, y)
      } else {
        this.ctx.lineTo(x, y)
      }
    }
    this.ctx.closePath()
    this.ctx.fillStyle = colors.main
    this.ctx.fill()
    this.ctx.strokeStyle = colors.highlight
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius * 0.3, 0, Math.PI * 2)
    this.ctx.fillStyle = colors.highlight
    this.ctx.fill()
  }

  /**
   * 绘制钻石食物（关卡4）
   */
  drawDiamondFood(radius, colors) {
    const time = Date.now() / 300
    const rotation = time * 0.5
    
    this.ctx.rotate(rotation)

    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 1.8)
    gradient.addColorStop(0, colors.glow)
    gradient.addColorStop(0.5, 'rgba(41, 182, 246, 0.3)')
    gradient.addColorStop(1, 'rgba(41, 182, 246, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, radius * 1.8, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.moveTo(0, -radius)
    this.ctx.lineTo(radius * 0.7, 0)
    this.ctx.lineTo(0, radius)
    this.ctx.lineTo(-radius * 0.7, 0)
    this.ctx.closePath()
    const diamondGradient = this.ctx.createLinearGradient(-radius, -radius, radius, radius)
    diamondGradient.addColorStop(0, colors.highlight)
    diamondGradient.addColorStop(0.5, colors.main)
    diamondGradient.addColorStop(1, colors.glow)
    this.ctx.fillStyle = diamondGradient
    this.ctx.fill()
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.moveTo(0, -radius * 0.7)
    this.ctx.lineTo(radius * 0.5, 0)
    this.ctx.lineTo(0, radius * 0.7)
    this.ctx.lineTo(-radius * 0.5, 0)
    this.ctx.closePath()
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    this.ctx.fill()
  }

  /**
   * 绘制火球食物（关卡5）
   */
  drawFireballFood(radius, colors) {
    const time = Date.now() / 200
    const pulseRadius = radius * (1 + Math.sin(time) * 0.15)
    
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, pulseRadius * 2)
    gradient.addColorStop(0, colors.core)
    gradient.addColorStop(0.3, colors.glow)
    gradient.addColorStop(0.6, colors.main)
    gradient.addColorStop(1, 'rgba(255, 87, 34, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius * 2, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2)
    const fireGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, pulseRadius)
    fireGradient.addColorStop(0, colors.core)
    fireGradient.addColorStop(0.4, colors.highlight)
    fireGradient.addColorStop(1, colors.main)
    this.ctx.fillStyle = fireGradient
    this.ctx.fill()

    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8 + time
      const flameLength = radius * (0.3 + Math.sin(time * 3 + i) * 0.2)
      const x1 = Math.cos(angle) * pulseRadius * 0.8
      const y1 = Math.sin(angle) * pulseRadius * 0.8
      const x2 = Math.cos(angle) * (pulseRadius + flameLength)
      const y2 = Math.sin(angle) * (pulseRadius + flameLength)
      
      this.ctx.beginPath()
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.strokeStyle = colors.glow
      this.ctx.lineWidth = 3
      this.ctx.stroke()
    }
  }

  /**
   * 绘制金星食物（关卡6）
   */
  drawGoldenStarFood(radius, colors) {
    const time = Date.now() / 400
    const pulseRadius = radius * (1 + Math.sin(time) * 0.1)
    const rotation = time * 0.3
    
    this.ctx.rotate(rotation)

    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, pulseRadius * 2.5)
    gradient.addColorStop(0, colors.core)
    gradient.addColorStop(0.3, colors.glow)
    gradient.addColorStop(0.6, colors.main)
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius * 2.5, 0, Math.PI * 2)
    this.ctx.fill()

    this.ctx.beginPath()
    for (let i = 0; i < 10; i++) {
      const angle = (i * 2 * Math.PI) / 10 - Math.PI / 2
      const length = i % 2 === 0 ? pulseRadius : pulseRadius * 0.5
      const x = Math.cos(angle) * length
      const y = Math.sin(angle) * length
      if (i === 0) {
        this.ctx.moveTo(x, y)
      } else {
        this.ctx.lineTo(x, y)
      }
    }
    this.ctx.closePath()
    const starGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, pulseRadius)
    starGradient.addColorStop(0, colors.core)
    starGradient.addColorStop(0.5, colors.highlight)
    starGradient.addColorStop(1, colors.main)
    this.ctx.fillStyle = starGradient
    this.ctx.fill()
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius * 0.25, 0, Math.PI * 2)
    this.ctx.fillStyle = colors.core
    this.ctx.fill()
  }

  /**
   * 绘制皇冠食物（关卡7）
   */
  drawCrownFood(radius, colors) {
    const time = Date.now() / 500
    const pulseRadius = radius * (1 + Math.sin(time) * 0.05)
    
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, pulseRadius * 2)
    gradient.addColorStop(0, colors.glow)
    gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.3)')
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(0, 0, pulseRadius * 2, 0, Math.PI * 2)
    this.ctx.fill()

    const points = 3
    const baseY = radius * 0.3

    this.ctx.beginPath()
    for (let i = 0; i < points; i++) {
      const angle = ((i / points) * Math.PI) - Math.PI / 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius * 1.2 + baseY
      if (i === 0) {
        this.ctx.moveTo(x, y)
      } else {
        this.ctx.lineTo(x, y)
      }
      
      const midAngle = angle + Math.PI / (2 * points)
      const midX = Math.cos(midAngle) * radius * 0.6
      const midY = Math.sin(midAngle) * radius * 0.8 + baseY
      this.ctx.lineTo(midX, midY)
    }
    this.ctx.closePath()
    const crownGradient = this.ctx.createLinearGradient(0, -radius, 0, radius)
    crownGradient.addColorStop(0, colors.highlight)
    crownGradient.addColorStop(1, colors.main)
    this.ctx.fillStyle = crownGradient
    this.ctx.fill()
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 2
    this.ctx.stroke()

    for (let i = 0; i < points; i++) {
      const angle = ((i / points) * Math.PI) - Math.PI / 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius * 1.2 + baseY
      
      this.ctx.beginPath()
      this.ctx.arc(x, y, radius * 0.15, 0, Math.PI * 2)
      this.ctx.fillStyle = colors.jewel
      this.ctx.fill()
      this.ctx.strokeStyle = '#fff'
      this.ctx.lineWidth = 1
      this.ctx.stroke()
    }

    this.ctx.beginPath()
    this.ctx.moveTo(-radius * 0.8, baseY + radius * 0.2)
    this.ctx.lineTo(-radius * 0.8, baseY + radius * 0.5)
    this.ctx.lineTo(radius * 0.8, baseY + radius * 0.5)
    this.ctx.lineTo(radius * 0.8, baseY + radius * 0.2)
    this.ctx.closePath()
    this.ctx.fillStyle = colors.main
    this.ctx.fill()
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 2
    this.ctx.stroke()
  }

  /**
   * 绘制粒子效果
   */
  drawParticles() {
    if (!this.particleSystem) return
    
    this.particleSystem.draw(this.ctx)
  }

  /**
   * 绘制暂停遮罩
   */
  drawPauseOverlay() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    this.ctx.fillStyle = '#fff'
    this.ctx.font = 'bold 2rem Arial'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText('游戏暂停', this.canvas.width / 2, this.canvas.height / 2)
    this.ctx.font = '1rem Arial'
    this.ctx.fillText('按空格键继续', this.canvas.width / 2, this.canvas.height / 2 + 40)
  }
}

/**
 * 音效管理器（使用Web Audio API）
 */
class SoundManager {
  constructor() {
    this.audioContext = null
    this.enabled = true
  }

  /**
   * 初始化音频上下文
   */
  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
  }

  /**
   * 播放吃到食物音效
   */
  playEat() {
    if (!this.enabled || !this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime) // C5
    oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.1) // E5
    oscillator.frequency.setValueAtTime(783.99, this.audioContext.currentTime + 0.2) // G5

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.3)
  }

  /**
   * 播放游戏结束音效
   */
  playGameOver() {
    if (!this.enabled || !this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.type = 'sawtooth'
    oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime)
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime + 0.1)
    oscillator.frequency.setValueAtTime(100, this.audioContext.currentTime + 0.2)

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.5)
  }

  /**
   * 播放关卡升级音效
   */
  playLevelUp() {
    if (!this.enabled || !this.audioContext) return

    const notes = [523.25, 659.25, 783.99, 1046.50]
    
    notes.forEach((freq, index) => {
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * 0.1)

      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + index * 0.1)
      gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + index * 0.1 + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + index * 0.1 + 0.3)

      oscillator.start(this.audioContext.currentTime + index * 0.1)
      oscillator.stop(this.audioContext.currentTime + index * 0.1 + 0.3)
    })
  }

  /**
   * 播放按钮点击音效
   */
  playClick() {
    if (!this.enabled || !this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime)

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.1)
  }

  /**
   * 播放错误音效
   */
  playError() {
    if (!this.enabled || !this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime)
    oscillator.frequency.setValueAtTime(100, this.audioContext.currentTime + 0.1)

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.2)
  }

  /**
   * 切换音效开关
   */
  toggle() {
    this.enabled = !this.enabled
    return this.enabled
  }
}

/**
 * 背景音乐管理器（使用Web Audio API程序化生成）
 */
class MusicManager {
  constructor() {
    this.audioContext = null
    this.isPlaying = false
    this.currentTrackIndex = 0
    this.volume = 0.3
    this.gainNode = null
    this.currentAudio = null
    
    this.tracks = [
      {
        name: '欢乐',
        filename: '欢乐.mp3'
      },
      {
        name: '激情',
        filename: '激情.mp3'
      },
      {
        name: '静谧',
        filename: '静谧.mp3'
      }
    ]
    
    this.loadState()
  }
  
  init(audioContext) {
    if (!this.audioContext) {
      this.audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()
    }
    
    if (!this.gainNode) {
      this.gainNode = this.audioContext.createGain()
      this.gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime)
      this.gainNode.connect(this.audioContext.destination)
    }
  }
  
  loadState() {
    const saved = localStorage.getItem('snake_music_state')
    if (saved) {
      try {
        const state = JSON.parse(saved)
        this.currentTrackIndex = Math.min(state.trackIndex || 0, this.tracks.length - 1)
        this.volume = state.volume || 0.3
        this.isPlaying = state.isPlaying || false
      } catch (e) {
        console.error('Failed to load music state:', e)
      }
    }
  }
  
  saveState() {
    localStorage.setItem('snake_music_state', JSON.stringify({
      trackIndex: this.currentTrackIndex,
      volume: this.volume,
      isPlaying: this.isPlaying
    }))
  }
  
  play() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      this.gainNode = this.audioContext.createGain()
      this.gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime)
      this.gainNode.connect(this.audioContext.destination)
    }
    if (this.isPlaying) return
    
    this.isPlaying = true
    this.saveState()
    this.startTrack()
  }
  
  pause() {
    this.isPlaying = false
    this.saveState()
    this.stopTrack()
  }
  
  toggle() {
    if (this.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
    return this.isPlaying
  }
  
  stopTrack() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause()
        this.currentAudio.currentTime = 0
      } catch (e) {}
      this.currentAudio = null
    }
  }

  fadeOutAudio() {
  }

  startTrack() {
    this.stopTrack()
    const track = this.tracks[this.currentTrackIndex]
    this.loadAndPlayTrack(track)
  }

  loadAndPlayTrack(track) {
    if (!track || !this.isPlaying) return

    const audio = new Audio(track.filename)
    audio.loop = true
    audio.volume = 0
    audio.preload = 'auto'

    const onCanPlay = () => {
      if (this.isPlaying && this.tracks[this.currentTrackIndex] === track && audio === this.currentAudio) {
        this.fadeInAudio(audio)
      }
      audio.removeEventListener('canplaythrough', onCanPlay)
      audio.removeEventListener('loadedmetadata', onCanPlay)
    }

    audio.addEventListener('canplaythrough', onCanPlay)
    audio.addEventListener('loadedmetadata', onCanPlay)

    audio.addEventListener('ended', () => {
      if (this.isPlaying && this.tracks[this.currentTrackIndex] === track) {
        audio.currentTime = 0
        audio.play().catch(e => console.error('Auto replay failed:', e))
      }
    })

    audio.addEventListener('error', (e) => {
      console.error('Error loading audio:', track.filename, e)
      this.showError(`无法加载音乐: ${track.name}`)
      if (this.isPlaying) {
        this.nextTrack()
      }
    })

    this.currentAudio = audio
    audio.load()
  }

  fadeInAudio(audio) {
    if (!audio || !this.isPlaying || audio !== this.currentAudio) return

    const targetVolume = this.volume
    const fadeDuration = 500
    const startTime = Date.now()

    const fadeIn = () => {
      if (!this.isPlaying || this.currentAudio !== audio) return

      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / fadeDuration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      audio.volume = targetVolume * eased

      if (progress < 1) {
        requestAnimationFrame(fadeIn)
      }
    }

    audio.play().then(() => {
      fadeIn()
    }).catch(e => {
      console.error('Playback failed:', e)
    })
  }
  
  nextTrack() {
    const nextIndex = (this.currentTrackIndex + 1) % this.tracks.length
    this.currentTrackIndex = nextIndex
    this.saveState()
    if (this.isPlaying) {
      this.startTrack()
    }
    return this.tracks[this.currentTrackIndex]
  }
  
  prevTrack() {
    const prevIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length
    this.currentTrackIndex = prevIndex
    this.saveState()
    if (this.isPlaying) {
      this.startTrack()
    }
    return this.tracks[this.currentTrackIndex]
  }
  
  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value))
    if (this.currentAudio && this.isPlaying) {
      this.currentAudio.volume = this.volume
    }
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime)
    }
    this.saveState()
  }
  
  getCurrentTrack() {
    return this.tracks[this.currentTrackIndex]
  }
  
  getTrackCount() {
    return this.tracks.length
  }
  
  showError(message) {
    const toast = document.createElement('div')
    toast.className = 'toast error'
    toast.textContent = message
    toast.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 107, 107, 0.9);
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      font-size: 14px;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    `
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.style.opacity = '0'
      toast.style.transition = 'opacity 0.3s ease'
      setTimeout(() => toast.remove(), 300)
    }, 3000)
  }
}

/**
 * 移动端触摸控制器
 */
class MobileController {
  constructor() {
    this.isMobile = this.detectMobile()
    this.swipeThreshold = 30
    this.touchStartX = 0
    this.touchStartY = 0
    this.touchStartTime = 0
    this.dPadVisible = false
  }
  
  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (window.matchMedia('(pointer: coarse)').matches && window.matchMedia('(max-width: 768px)').matches)
  }
  
  init(gameController) {
    if (!this.isMobile) return
    
    this.gameController = gameController
    this.setupDPadButtons()
    this.setupSwipeDetection()
    this.setupPerformanceOptimization()
    this.setupDraggableMusicControl()
  }
  
  setupDraggableMusicControl() {
    const musicControl = document.getElementById('musicControl')
    if (!musicControl) return
    
    let isDragging = false
    let startX, startY
    let initialLeft, initialTop
    let touchStartTime = 0
    let isTouchOnButton = false
    const longPressThreshold = 300
    
    const getPosition = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
      return { x: e.clientX, y: e.clientY }
    }
    
    const isButtonElement = (target) => {
      if (!target) return false
      const buttonSelectors = ['.music-btn', '.music-expand', '.volume-icon', '#volumeSlider', '.music-toggle']
      for (const selector of buttonSelectors) {
        if (target.closest(selector)) return true
      }
      return target.tagName === 'BUTTON' || target.tagName === 'INPUT'
    }
    
    const handleTouchStart = (e) => {
      const target = e.target
      isTouchOnButton = isButtonElement(target)
      
      const pos = getPosition(e)
      startX = pos.x
      startY = pos.y
      touchStartTime = Date.now()
      
      const rect = musicControl.getBoundingClientRect()
      initialLeft = rect.left
      initialTop = rect.top
      
      isDragging = false
      
      if (isTouchOnButton) return
      
      setTimeout(() => {
        if (Date.now() - touchStartTime >= longPressThreshold && !isDragging && !isTouchOnButton) {
          isDragging = true
          musicControl.style.transition = 'none'
        }
      }, longPressThreshold)
    }
    
    const handleTouchMove = (e) => {
      if (!isDragging) {
        const pos = getPosition(e)
        const deltaX = Math.abs(pos.x - startX)
        const deltaY = Math.abs(pos.y - startY)
        
        if (deltaX > 10 || deltaY > 10) {
          const duration = Date.now() - touchStartTime
          if ((duration >= longPressThreshold || duration < 30) && !isTouchOnButton) {
            isDragging = true
            musicControl.style.transition = 'none'
          }
        }
        return
      }
      
      e.preventDefault()
      
      const pos = getPosition(e)
      const deltaX = pos.x - startX
      const deltaY = pos.y - startY
      
      let newLeft = initialLeft + deltaX
      let newTop = initialTop + deltaY
      
      const maxLeft = window.innerWidth - musicControl.offsetWidth
      const maxTop = window.innerHeight - musicControl.offsetHeight
      
      newLeft = Math.max(0, Math.min(newLeft, maxLeft))
      newTop = Math.max(0, Math.min(newTop, maxTop))
      
      musicControl.style.left = newLeft + 'px'
      musicControl.style.top = newTop + 'px'
      musicControl.style.bottom = 'auto'
      musicControl.style.right = 'auto'
    }
    
    const handleTouchEnd = (e) => {
      if (isDragging) {
        isDragging = false
        musicControl.style.transition = 'all 0.3s ease'
        
        const rect = musicControl.getBoundingClientRect()
        localStorage.setItem('musicControlPosition', JSON.stringify({
          left: rect.left,
          top: rect.top
        }))
      }
    }
    
    musicControl.addEventListener('touchstart', handleTouchStart, { passive: true })
    musicControl.addEventListener('touchmove', handleTouchMove, { passive: false })
    musicControl.addEventListener('touchend', handleTouchEnd, { passive: true })
    musicControl.addEventListener('touchcancel', handleTouchEnd, { passive: true })
    
    musicControl.addEventListener('mousedown', handleTouchStart)
    musicControl.addEventListener('mousemove', handleTouchMove)
    musicControl.addEventListener('mouseup', handleTouchEnd)
    musicControl.addEventListener('mouseleave', handleTouchEnd)
    
    const savedPos = localStorage.getItem('musicControlPosition')
    if (savedPos) {
      try {
        const pos = JSON.parse(savedPos)
        musicControl.style.left = pos.left + 'px'
        musicControl.style.top = pos.top + 'px'
        musicControl.style.bottom = 'auto'
        musicControl.style.right = 'auto'
      } catch (e) {
        console.error('Failed to load music control position:', e)
      }
    }
    
    const validateAndAdjustPosition = () => {
      const rect = musicControl.getBoundingClientRect()
      const maxLeft = window.innerWidth - musicControl.offsetWidth
      const maxTop = window.innerHeight - musicControl.offsetHeight
      
      let newLeft = Math.max(0, Math.min(rect.left, maxLeft))
      let newTop = Math.max(0, Math.min(rect.top, maxTop))
      
      if (newLeft !== rect.left || newTop !== rect.top) {
        musicControl.style.left = newLeft + 'px'
        musicControl.style.top = newTop + 'px'
        localStorage.setItem('musicControlPosition', JSON.stringify({
          left: newLeft,
          top: newTop
        }))
      }
    }
    
    window.addEventListener('resize', validateAndAdjustPosition)
    window.addEventListener('orientationchange', () => {
      setTimeout(validateAndAdjustPosition, 100)
    })
  }
  
  setupDPadButtons() {
    const dUp = document.getElementById('dUp')
    const dDown = document.getElementById('dDown')
    const dLeft = document.getElementById('dLeft')
    const dRight = document.getElementById('dRight')
    
    if (!dUp) return
    
    let lastTouchTime = 0
    const debounceDelay = 50
    
    const handleDPadTouch = (btn, direction) => {
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault()
        
        const now = Date.now()
        if (now - lastTouchTime < debounceDelay) return
        lastTouchTime = now
        
        btn.classList.add('active')
        if (this.gameController.gameState.status === 'PLAYING') {
          this.gameController.inputHandler.setDirection(direction)
        }
      })
      
      btn.addEventListener('touchend', (e) => {
        e.preventDefault()
        btn.classList.remove('active')
      })
      
      btn.addEventListener('touchcancel', (e) => {
        btn.classList.remove('active')
      })
    }
    
    handleDPadTouch(dUp, DIRECTION.UP)
    handleDPadTouch(dDown, DIRECTION.DOWN)
    handleDPadTouch(dLeft, DIRECTION.LEFT)
    handleDPadTouch(dRight, DIRECTION.RIGHT)
  }
  
  setupSwipeDetection() {
    const canvas = document.getElementById('gameCanvas')
    const mobileControls = document.getElementById('mobileControls')
    if (!canvas) return
    
    canvas.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX
      this.touchStartY = e.touches[0].clientY
      this.touchStartTime = Date.now()
    }, { passive: true })
    
    canvas.addEventListener('touchend', (e) => {
      if (!e.changedTouches[0]) return
      
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      const touchDuration = Date.now() - this.touchStartTime
      
      if (mobileControls && mobileControls.style.display !== 'none') {
        const controlsRect = mobileControls.getBoundingClientRect()
        if (touchEndX >= controlsRect.left && touchEndX <= controlsRect.right &&
            touchEndY >= controlsRect.top && touchEndY <= controlsRect.bottom) {
          return
        }
      }
      
      if (touchDuration > 300) return
      
      const deltaX = touchEndX - this.touchStartX
      const deltaY = touchEndY - this.touchStartY
      
      const adaptiveThreshold = window.innerWidth < 360 ? 50 : this.swipeThreshold
      
      if (Math.abs(deltaX) < adaptiveThreshold && Math.abs(deltaY) < adaptiveThreshold) return
      
      let direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? DIRECTION.RIGHT : DIRECTION.LEFT
      } else {
        direction = deltaY > 0 ? DIRECTION.DOWN : DIRECTION.UP
      }
      
      if (this.gameController.gameState.status === 'PLAYING') {
        this.gameController.inputHandler.setDirection(direction)
      }
    }, { passive: true })
  }
  
  setupPerformanceOptimization() {
    this.isLowPerformance = this.detectLowPerformance()
    
    if (this.isLowPerformance) {
      document.body.classList.add('low-performance')
      
      if (this.gameController.renderer) {
        this.gameController.renderer.lowPerformance = true
      }
    }
  }
  
  detectLowPerformance() {
    const isOldDevice = /iPhone [4-6]|iPad [1-3]|Android [2-4]/i.test(navigator.userAgent)
    const isSmallScreen = window.innerWidth < 360 || window.innerHeight < 360
    const isLowMemory = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
    
    return isOldDevice || isSmallScreen || isLowMemory
  }
  
  getCanvasScale() {
    const maxWidth = window.innerWidth - 40
    const maxHeight = window.innerHeight - 280
    
    return Math.min(maxWidth / 600, maxHeight / 400)
  }
}

/**
 * 粒子系统
 */
class Particle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
    this.size = Math.random() * 6 + 3
    this.speedX = (Math.random() - 0.5) * 8
    this.speedY = (Math.random() - 0.5) * 8
    this.life = 1
    this.decay = Math.random() * 0.03 + 0.02
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life -= this.decay
    this.size *= 0.95
  }

  draw(ctx) {
    ctx.globalAlpha = this.life
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

class ParticleSystem {
  constructor() {
    this.particles = []
  }

  /**
   * 创建粒子爆炸效果
   */
  createExplosion(x, y, color) {
    const particleCount = 15
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(x, y, color))
    }
  }

  /**
   * 更新所有粒子
   */
  update() {
    this.particles = this.particles.filter(particle => {
      particle.update()
      return particle.life > 0
    })
  }

  /**
   * 绘制所有粒子
   */
  draw(ctx) {
    this.particles.forEach(particle => particle.draw(ctx))
  }
}

/**
 * 游戏主控制器
 */
class GameController {
  constructor() {
    // 获取DOM元素
    this.canvas = document.getElementById('gameCanvas')
    this.scoreElement = document.getElementById('score')
    this.highScoreElement = document.getElementById('highScore')
    this.fpsElement = document.getElementById('fps')
    this.difficultyElement = document.getElementById('difficulty')
    this.levelElement = document.getElementById('level')
    
    this.menuScreen = document.getElementById('menuScreen')
    this.gameScreen = document.getElementById('gameScreen')
    this.gameOverScreen = document.getElementById('gameOverScreen')
    this.finalScoreElement = document.getElementById('finalScore')
    this.pointsEarnedElement = document.getElementById('pointsEarned')
    
    // 积分商城相关元素
    this.pointsDisplayElement = document.querySelector('.points-value')
    this.shopBtn = document.getElementById('shopBtn')
    this.shopModal = document.getElementById('shopModal')
    this.closeShopBtn = document.getElementById('closeShopBtn')
    this.closeShopBtn2 = document.getElementById('closeShopBtn2')
    this.shopPointsElement = document.querySelector('.shop-points-value')
    this.mapsGrid = document.getElementById('mapsGrid')
    this.historyList = document.getElementById('historyList')
    
    // 成就弹窗相关元素
    this.achievementModal = document.getElementById('achievementModal')
    this.closeAchievementBtn = document.getElementById('closeAchievementBtn')
    this.closeAchievementBtn2 = document.getElementById('closeAchievementBtn2')
    this.achievementBody = document.getElementById('achievementBody')
    
    // 通知Toast
    this.notificationToast = document.getElementById('notificationToast')
    this.toastMessage = document.getElementById('toastMessage')
    
    this.startBtn = document.getElementById('startBtn')
    this.pauseBtn = document.getElementById('pauseBtn')
    this.restartBtn = document.getElementById('restartBtn')
    this.resumeBtn = document.getElementById('resumeBtn')
    this.backToMenuBtn = document.getElementById('backToMenuBtn')
    this.shareBtn = document.getElementById('shareBtn')
    this.shareModal = document.getElementById('shareModal')
    this.closeShareBtn = document.getElementById('closeShareBtn')
    this.closeShareBtn2 = document.getElementById('closeShareBtn2')
    this.shareQrCode = document.getElementById('shareQrCode')
    this.shareUrlDisplay = document.getElementById('shareUrlDisplay')
    this.copyUrlBtn = document.getElementById('copyUrlBtn')
    
    // 修复：获取返回菜单按钮
    const backToMenuFromGameOverBtn = document.getElementById('backToMenuFromGameOverBtn')
    
    this.soundToggle = document.getElementById('soundToggle')
    
    // 音乐控制相关元素
    this.musicToggle = document.getElementById('musicToggle')
    this.musicControls = document.getElementById('musicControls')
    this.musicExpand = document.getElementById('musicExpand')
    this.musicTrackName = document.getElementById('musicTrackName')
    this.musicPlay = document.getElementById('musicPlay')
    this.musicPrev = document.getElementById('musicPrev')
    this.musicNext = document.getElementById('musicNext')
    this.volumeSlider = document.getElementById('volumeSlider')
    
    // 预览Canvas
    this.previewCanvas = document.getElementById('previewCanvas')
    this.previewCtx = this.previewCanvas ? this.previewCanvas.getContext('2d') : null
    
    // 初始化组件
    this.gameState = new GameState()
    this.inputHandler = new InputHandler()
    this.snakeStyleManager = new SnakeStyleManager()
    this.difficultyManager = new DifficultyManager()
    this.levelManager = new LevelManager()
    this.pointsManager = new PointsManager()
    this.achievementManager = new AchievementManager(this.pointsManager)
    this.renderer = new CanvasRenderer(this.canvas)
    this.soundManager = new SoundManager()
    this.musicManager = new MusicManager()
    this.mobileController = new MobileController()
    this.particleSystem = new ParticleSystem()
    
    // 设置关卡显示元素
    this.levelManager.setLevelElement(this.levelElement)
    
    // 绑定关卡升级回调
    this.levelManager.setOnLevelUp((levelConfig) => {
      this.soundManager.playLevelUp()
      this.levelManager.updateLevelDisplay()
    })
    
    // 绑定积分变化回调
    this.pointsManager.setOnPointsChange((points) => {
      this.updatePointsDisplay()
    })
    
    // 绑定成就完成回调
    this.achievementManager.setOnAchievementComplete((achievements) => {
      this.showAchievementModal(achievements)
    })
    
    // 游戏循环相关
    this.lastTime = 0
    this.tickAccumulator = 0
    this.currentTickInterval = 150
    this.fpsAccumulator = 0
    this.fpsFrameCount = 0
    this.fpsLastTime = 0
    
    // 移动动画进度（0-1）
    this.moveProgress = 0
    
    // 绑定样式变化回调
    this.snakeStyleManager.setOnChange(() => {
      this.renderPreview()
    })
    
    // 绑定事件
    this.bindEvents()
    
    // 加载最高分
    this.loadHighScore()
    
    // 初始化渲染器
    this.renderer.init()
    
    // 设置初始地图
    this.updateMapConfig()
    
    // 显示菜单并渲染预览
    this.showMenu()
    this.renderPreview()
    
    // 更新积分显示
    this.updatePointsDisplay()
  }

  /**
   * 绑定事件
   */
  bindEvents() {
    // 开始按钮
    this.startBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.startGame()
    })
    
    // 暂停按钮
    this.pauseBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.togglePause()
    })
    
    // 重新开始按钮
    this.restartBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.startGame()
    })
    
    // 继续按钮
    this.resumeBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.startGame()
    })
    
    // 返回菜单按钮
    this.backToMenuBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.showMenu()
    })
    
    // 游戏结束返回菜单按钮
    const backToMenuFromGameOverBtn = document.getElementById('backToMenuFromGameOverBtn')
    if (backToMenuFromGameOverBtn) {
      backToMenuFromGameOverBtn.addEventListener('click', () => {
        this.soundManager.playClick()
        this.showMenu()
      })
    }
    
    // 音效开关
    this.soundToggle.addEventListener('click', () => {
      const enabled = this.soundManager.toggle()
      this.soundToggle.innerHTML = enabled ? '🔊' : '🔇'
      localStorage.setItem('snakeSoundEnabled', enabled)
    })
    
    // 音乐控制按钮
    this.musicToggle.addEventListener('click', () => {
      this.musicControls.classList.toggle('expanded')
      this.musicExpand.classList.toggle('expanded')
    })
    
    this.musicPlay.addEventListener('click', () => {
      this.soundManager.playClick()
      const isPlaying = this.musicManager.toggle()
      this.musicPlay.innerHTML = isPlaying ? '⏸' : '▶'
    })
    
    this.musicPrev.addEventListener('click', () => {
      this.soundManager.playClick()
      const track = this.musicManager.prevTrack()
      this.musicTrackName.innerHTML = track.name
    })
    
    this.musicNext.addEventListener('click', () => {
      this.soundManager.playClick()
      const track = this.musicManager.nextTrack()
      this.musicTrackName.innerHTML = track.name
    })
    
    this.volumeSlider.addEventListener('input', (e) => {
      const volume = parseInt(e.target.value) / 100
      this.musicManager.setVolume(volume)
    })
    
    // 积分商城按钮
    this.shopBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.openShop()
    })
    
    // 关闭商城按钮
    this.closeShopBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.closeShop()
    })
    this.closeShopBtn2.addEventListener('click', () => {
      this.soundManager.playClick()
      this.closeShop()
    })
    
    // 分享按钮
    this.shareBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.openShare()
    })
    
    // 关闭分享弹窗
    this.closeShareBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.closeShare()
    })
    this.closeShareBtn2.addEventListener('click', () => {
      this.soundManager.playClick()
      this.closeShare()
    })
    
    // 复制链接
    this.copyUrlBtn.addEventListener('click', () => {
      this.copyGameUrl()
    })
    
    // 关闭成就弹窗按钮
    this.closeAchievementBtn.addEventListener('click', () => {
      this.soundManager.playClick()
      this.closeAchievementModal()
    })
    this.closeAchievementBtn2.addEventListener('click', () => {
      this.soundManager.playClick()
      this.closeAchievementModal()
    })
    
    // 键盘事件
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e)
    })
    
    // 窗口大小变化
    window.addEventListener('resize', () => {
      this.renderer.resize()
    })
  }

  /**
   * 处理键盘输入
   */
  handleKeyDown(e) {
    // 方向键控制
    const keyMap = {
      ArrowUp: DIRECTION.UP,
      ArrowDown: DIRECTION.DOWN,
      ArrowLeft: DIRECTION.LEFT,
      ArrowRight: DIRECTION.RIGHT,
      w: DIRECTION.UP,
      W: DIRECTION.UP,
      s: DIRECTION.DOWN,
      S: DIRECTION.DOWN,
      a: DIRECTION.LEFT,
      A: DIRECTION.LEFT,
      d: DIRECTION.RIGHT,
      D: DIRECTION.RIGHT
    }
    
    const direction = keyMap[e.key]
    if (direction) {
      e.preventDefault()
      if (this.gameState.status === 'PLAYING') {
        this.inputHandler.setDirection(direction)
      }
      return
    }
    
    // 空格键暂停/继续
    if (e.key === ' ') {
      e.preventDefault()
      if (this.gameState.status === 'PLAYING' || this.gameState.status === 'PAUSED') {
        this.togglePause()
      }
    }
    
    // Enter键开始/重新开始
    if (e.key === 'Enter') {
      e.preventDefault()
      if (this.gameState.status === 'MENU' || this.gameState.status === 'GAME_OVER') {
        this.startGame()
      }
    }
    
    // ESC键返回菜单
    if (e.key === 'Escape') {
      e.preventDefault()
      if (this.gameState.status !== 'MENU') {
        this.showMenu()
      }
    }
  }

  /**
   * 显示菜单
   */
  showMenu() {
    this.gameState.status = 'MENU'
    this.menuScreen.style.display = 'flex'
    this.gameScreen.style.display = 'none'
    this.gameOverScreen.style.display = 'none'
    
    // 加载保存的设置
    const savedStyle = localStorage.getItem('snakeStyle')
    const savedBodyColor = localStorage.getItem('snakeBodyColor')
    const savedPatternColor = localStorage.getItem('snakePatternColor')
    const savedSoundEnabled = localStorage.getItem('snakeSoundEnabled')
    const savedDifficulty = localStorage.getItem('snakeDifficulty')
    
    if (savedStyle) {
      this.snakeStyleManager.setStyle(savedStyle)
    }
    if (savedBodyColor) {
      document.getElementById('bodyColor').value = savedBodyColor
      this.snakeStyleManager.setBodyColor(savedBodyColor)
    }
    if (savedPatternColor) {
      document.getElementById('patternColor').value = savedPatternColor
      this.snakeStyleManager.setPatternColor(savedPatternColor)
    }
    if (savedSoundEnabled !== null) {
      this.soundManager.enabled = savedSoundEnabled === 'true'
      this.soundToggle.innerHTML = this.soundManager.enabled ? '🔊' : '🔇'
    }
    if (savedDifficulty) {
      this.difficultyManager.setDifficulty(savedDifficulty)
    }
    
    this.renderPreview()
  }

  /**
   * 渲染菜单预览
   */
  renderPreview() {
    if (!this.previewCtx || !this.previewCanvas) return
    
    const ctx = this.previewCtx
    const width = this.previewCanvas.width
    const height = this.previewCanvas.height
    
    ctx.clearRect(0, 0, width, height)
    
    const style = this.snakeStyleManager.getCurrentStyle()
    const colors = this.snakeStyleManager.getCurrentColors()
    
    const previewRadius = 15
    
    const segments = [
      { x: width / 2, y: height / 2 },
      { x: width / 2 - previewRadius * 1.5, y: height / 2 },
      { x: width / 2 - previewRadius * 3, y: height / 2 },
      { x: width / 2 - previewRadius * 4.5, y: height / 2 }
    ]
    
    for (let i = segments.length - 1; i >= 0; i--) {
      const segment = segments[i]
      
      ctx.save()
      ctx.translate(segment.x, segment.y)
      
      if (i === 0) {
        this.drawPreviewHead(ctx, previewRadius, style.id, colors)
      } else {
        this.drawPreviewBody(ctx, previewRadius, style.id, colors, i / segments.length)
      }
      
      ctx.restore()
    }
  }

  /**
   * 绘制预览头部（同步主渲染六种具象风格）
   */
  drawPreviewHead(ctx, radius, styleId, colors) {
    switch (styleId) {
      case 'serpent':
        ctx.beginPath()
        ctx.moveTo(0, -radius * 0.85)
        ctx.lineTo(radius * 0.9, -radius * 0.2)
        ctx.lineTo(radius * 0.7, radius * 0.5)
        ctx.lineTo(radius * 0.15, radius * 0.7)
        ctx.lineTo(-radius * 0.15, radius * 0.7)
        ctx.lineTo(-radius * 0.7, radius * 0.5)
        ctx.lineTo(-radius * 0.9, -radius * 0.2)
        ctx.closePath()
        ctx.fillStyle = colors.body
        ctx.fill()
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(-radius * 0.3, -radius * 0.7)
        ctx.quadraticCurveTo(0, -radius * 0.9, radius * 0.3, -radius * 0.7)
        ctx.quadraticCurveTo(radius * 0.5, -radius * 0.5, radius * 0.3, -radius * 0.3)
        ctx.quadraticCurveTo(0, -radius * 0.5, -radius * 0.3, -radius * 0.3)
        ctx.quadraticCurveTo(-radius * 0.5, -radius * 0.5, -radius * 0.3, -radius * 0.7)
        ctx.fillStyle = colors.pattern
        ctx.globalAlpha = 0.3
        ctx.fill()
        ctx.globalAlpha = 1
        const sEyeOffset = radius * 0.35
        const sEyeRadius = radius * 0.14
        ctx.beginPath()
        ctx.ellipse(-sEyeOffset, -radius * 0.15, sEyeRadius * 0.9, sEyeRadius * 1.1, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#eab308'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(-sEyeOffset, -radius * 0.15, sEyeRadius * 0.25, sEyeRadius * 0.85, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(sEyeOffset, -radius * 0.15, sEyeRadius * 0.9, sEyeRadius * 1.1, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#eab308'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(sEyeOffset, -radius * 0.15, sEyeRadius * 0.25, sEyeRadius * 0.85, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.fillStyle = '#1a1a1a'
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(-radius * 0.2, -radius * 0.55, radius * 0.06, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(radius * 0.2, -radius * 0.55, radius * 0.06, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.fillStyle = '#0a0a0a'
        ctx.beginPath()
        ctx.ellipse(-radius * 0.18, -radius * 0.7, radius * 0.04, radius * 0.07, -0.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(radius * 0.18, -radius * 0.7, radius * 0.04, radius * 0.07, 0.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-radius * 0.45, radius * 0.25)
        ctx.quadraticCurveTo(-radius * 0.2, radius * 0.55, 0, radius * 0.48)
        ctx.quadraticCurveTo(radius * 0.2, radius * 0.55, radius * 0.45, radius * 0.25)
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.strokeStyle = '#ef4444'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.45)
        ctx.lineTo(-radius * 0.12, radius * 0.8)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.45)
        ctx.lineTo(radius * 0.12, radius * 0.8)
        ctx.stroke()
        break

      case 'rainbow':
        const rainbowColors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
        ctx.beginPath()
        ctx.moveTo(0, -radius * 0.75)
        ctx.bezierCurveTo(radius * 0.7, -radius * 0.75, radius * 0.9, -radius * 0.15, radius * 0.65, radius * 0.45)
        ctx.bezierCurveTo(radius * 0.35, radius * 0.7, -radius * 0.35, radius * 0.7, -radius * 0.65, radius * 0.45)
        ctx.bezierCurveTo(-radius * 0.9, -radius * 0.15, -radius * 0.7, -radius * 0.75, 0, -radius * 0.75)
        ctx.closePath()
        const headGrad = ctx.createLinearGradient(-radius, -radius, radius, radius)
        rainbowColors.forEach((c, i) => headGrad.addColorStop(i / rainbowColors.length, c))
        ctx.fillStyle = headGrad
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.5)'
        ctx.lineWidth = 1.5
        ctx.stroke()
        const rbEyeOffset = radius * 0.38
        const rbEyeRadius = radius * 0.13
        ctx.beginPath()
        ctx.arc(-rbEyeOffset, -radius * 0.15, rbEyeRadius, 0, Math.PI * 2)
        ctx.fillStyle = '#f0abfc'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(-rbEyeOffset, -radius * 0.15, rbEyeRadius * 0.55, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(rbEyeOffset, -radius * 0.15, rbEyeRadius, 0, Math.PI * 2)
        ctx.fillStyle = '#f0abfc'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(rbEyeOffset, -radius * 0.15, rbEyeRadius * 0.55, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.fillStyle = '#831843'
        ctx.beginPath()
        ctx.ellipse(-radius * 0.15, -radius * 0.6, radius * 0.04, radius * 0.06, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(radius * 0.15, -radius * 0.6, radius * 0.04, radius * 0.06, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-radius * 0.4, radius * 0.25)
        ctx.quadraticCurveTo(0, radius * 0.5, radius * 0.4, radius * 0.25)
        ctx.strokeStyle = '#831843'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.strokeStyle = '#f472b6'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.4)
        ctx.lineTo(-radius * 0.1, radius * 0.7)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.4)
        ctx.lineTo(radius * 0.1, radius * 0.7)
        ctx.stroke()
        break

      case 'crystal':
        ctx.beginPath()
        ctx.moveTo(0, -radius * 0.9)
        ctx.lineTo(radius * 0.55, -radius * 0.55)
        ctx.lineTo(radius * 0.8, -radius * 0.15)
        ctx.lineTo(radius * 0.6, radius * 0.35)
        ctx.lineTo(radius * 0.2, radius * 0.65)
        ctx.lineTo(-radius * 0.2, radius * 0.65)
        ctx.lineTo(-radius * 0.6, radius * 0.35)
        ctx.lineTo(-radius * 0.8, -radius * 0.15)
        ctx.lineTo(-radius * 0.55, -radius * 0.55)
        ctx.closePath()
        const cHeadGrad = ctx.createLinearGradient(-radius, -radius, radius, radius)
        cHeadGrad.addColorStop(0, colors.body)
        cHeadGrad.addColorStop(0.5, 'rgba(255,255,255,0.4)')
        cHeadGrad.addColorStop(1, colors.pattern)
        ctx.fillStyle = cHeadGrad
        ctx.fill()
        ctx.shadowColor = colors.body
        ctx.shadowBlur = 10
        ctx.strokeStyle = 'rgba(255,255,255,0.6)'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(0, -radius * 0.9); ctx.lineTo(0, radius * 0.65); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(-radius * 0.55, -radius * 0.55); ctx.lineTo(radius * 0.55, -radius * 0.55); ctx.stroke()
        ctx.globalAlpha = 1
        const crEyeOffset = radius * 0.35
        const crEyeRadius = radius * 0.13
        ctx.shadowColor = '#a78bfa'
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(-crEyeOffset, -radius * 0.1, crEyeRadius, 0, Math.PI * 2)
        ctx.fillStyle = '#c4b5fd'
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.moveTo(-crEyeOffset - crEyeRadius * 0.2, -radius * 0.1)
        ctx.lineTo(-crEyeOffset, -radius * 0.1 - crEyeRadius * 0.6)
        ctx.lineTo(-crEyeOffset + crEyeRadius * 0.2, -radius * 0.1)
        ctx.closePath()
        ctx.fillStyle = '#7c3aed'
        ctx.fill()
        ctx.shadowColor = '#a78bfa'
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(crEyeOffset, -radius * 0.1, crEyeRadius, 0, Math.PI * 2)
        ctx.fillStyle = '#c4b5fd'
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.moveTo(crEyeOffset - crEyeRadius * 0.2, -radius * 0.1)
        ctx.lineTo(crEyeOffset, -radius * 0.1 - crEyeRadius * 0.6)
        ctx.lineTo(crEyeOffset + crEyeRadius * 0.2, -radius * 0.1)
        ctx.closePath()
        ctx.fillStyle = '#7c3aed'
        ctx.fill()
        ctx.fillStyle = colors.pattern
        ctx.beginPath()
        ctx.arc(-radius * 0.15, -radius * 0.7, radius * 0.04, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(radius * 0.15, -radius * 0.7, radius * 0.04, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-radius * 0.35, radius * 0.3)
        ctx.lineTo(0, radius * 0.5)
        ctx.lineTo(radius * 0.35, radius * 0.3)
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.shadowColor = '#a78bfa'
        ctx.shadowBlur = 4
        ctx.strokeStyle = '#c4b5fd'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.45)
        ctx.lineTo(-radius * 0.1, radius * 0.75)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.45)
        ctx.lineTo(radius * 0.1, radius * 0.75)
        ctx.stroke()
        ctx.shadowBlur = 0
        break

      case 'cyber':
        ctx.beginPath()
        ctx.moveTo(0, -radius * 0.8)
        ctx.bezierCurveTo(radius * 0.5, -radius * 0.85, radius * 0.85, -radius * 0.4, radius * 0.8, -radius * 0.05)
        ctx.lineTo(radius * 0.75, radius * 0.15)
        ctx.lineTo(radius * 0.65, radius * 0.45)
        ctx.lineTo(radius * 0.2, radius * 0.6)
        ctx.lineTo(-radius * 0.2, radius * 0.6)
        ctx.lineTo(-radius * 0.65, radius * 0.45)
        ctx.lineTo(-radius * 0.75, radius * 0.15)
        ctx.lineTo(-radius * 0.8, -radius * 0.05)
        ctx.bezierCurveTo(-radius * 0.85, -radius * 0.4, -radius * 0.5, -radius * 0.85, 0, -radius * 0.8)
        ctx.closePath()
        const cyHeadGrad = ctx.createLinearGradient(-radius, -radius, radius, radius)
        cyHeadGrad.addColorStop(0, colors.pattern)
        cyHeadGrad.addColorStop(0.3, colors.body)
        cyHeadGrad.addColorStop(0.7, colors.body)
        cyHeadGrad.addColorStop(1, colors.pattern)
        ctx.fillStyle = cyHeadGrad
        ctx.fill()
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 1.5
        ctx.shadowColor = colors.pattern
        ctx.shadowBlur = 6
        ctx.beginPath(); ctx.moveTo(-radius * 0.5, -radius * 0.3); ctx.lineTo(radius * 0.5, -radius * 0.3); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(-radius * 0.35, -radius * 0.1); ctx.lineTo(radius * 0.35, -radius * 0.1); ctx.stroke()
        ctx.shadowBlur = 0
        const cyEyeOffset = radius * 0.3
        const cyEyeRadius = radius * 0.13
        ctx.shadowColor = '#22d3ee'
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.ellipse(-cyEyeOffset, -radius * 0.1, cyEyeRadius * 0.4, cyEyeRadius * 0.8, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#22d3ee'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(cyEyeOffset, -radius * 0.1, cyEyeRadius * 0.4, cyEyeRadius * 0.8, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#22d3ee'
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.fillStyle = colors.pattern
        ctx.shadowColor = colors.pattern
        ctx.shadowBlur = 4
        ctx.beginPath()
        ctx.arc(-radius * 0.15, -radius * 0.6, radius * 0.05, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(radius * 0.15, -radius * 0.6, radius * 0.05, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.moveTo(-radius * 0.3, radius * 0.3)
        ctx.lineTo(0, radius * 0.55)
        ctx.lineTo(radius * 0.3, radius * 0.3)
        ctx.fillStyle = colors.pattern
        ctx.globalAlpha = 0.6
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowColor = '#22d3ee'
        ctx.shadowBlur = 6
        ctx.strokeStyle = '#22d3ee'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.45)
        ctx.lineTo(-radius * 0.1, radius * 0.75)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.45)
        ctx.lineTo(radius * 0.1, radius * 0.75)
        ctx.stroke()
        ctx.shadowBlur = 0
        break

      case 'flame':
        ctx.fillStyle = '#1c1917'
        ctx.beginPath()
        ctx.moveTo(0, -radius * 0.8)
        ctx.bezierCurveTo(radius * 0.5, -radius * 0.8, radius * 0.85, -radius * 0.35, radius * 0.75, radius * 0.05)
        ctx.lineTo(radius * 0.7, radius * 0.35)
        ctx.lineTo(radius * 0.45, radius * 0.6)
        ctx.lineTo(0, radius * 0.7)
        ctx.lineTo(-radius * 0.45, radius * 0.6)
        ctx.lineTo(-radius * 0.7, radius * 0.35)
        ctx.lineTo(-radius * 0.75, radius * 0.05)
        ctx.bezierCurveTo(-radius * 0.85, -radius * 0.35, -radius * 0.5, -radius * 0.8, 0, -radius * 0.8)
        ctx.closePath()
        ctx.fill()
        const flLavaGrad = ctx.createLinearGradient(0, -radius, 0, radius)
        flLavaGrad.addColorStop(0, colors.body)
        flLavaGrad.addColorStop(0.5, colors.pattern)
        flLavaGrad.addColorStop(1, '#450a0a')
        ctx.shadowColor = '#f97316'
        ctx.shadowBlur = 10
        ctx.strokeStyle = flLavaGrad
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.strokeStyle = '#fb923c'
        ctx.lineWidth = 1.5
        ctx.globalAlpha = 0.7
        ctx.beginPath(); ctx.moveTo(-radius * 0.1, -radius * 0.6); ctx.lineTo(-radius * 0.3, -radius * 0.3); ctx.lineTo(-radius * 0.1, 0); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(radius * 0.1, -radius * 0.6); ctx.lineTo(radius * 0.3, -radius * 0.3); ctx.lineTo(radius * 0.25, 0); ctx.stroke()
        ctx.globalAlpha = 1
        const flEyeOffset = radius * 0.35
        const flEyeRadius = radius * 0.14
        ctx.shadowColor = '#f97316'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.ellipse(-flEyeOffset, -radius * 0.1, flEyeRadius * 0.9, flEyeRadius * 1.1, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#fef3c7'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(-flEyeOffset, -radius * 0.1, flEyeRadius * 0.2, flEyeRadius * 0.8, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#dc2626'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(flEyeOffset, -radius * 0.1, flEyeRadius * 0.9, flEyeRadius * 1.1, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#fef3c7'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(flEyeOffset, -radius * 0.1, flEyeRadius * 0.2, flEyeRadius * 0.8, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#dc2626'
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.fillStyle = '#292524'
        ctx.beginPath()
        ctx.arc(-radius * 0.15, -radius * 0.65, radius * 0.05, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(radius * 0.15, -radius * 0.65, radius * 0.05, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-radius * 0.35, radius * 0.25)
        ctx.quadraticCurveTo(-radius * 0.1, radius * 0.55, 0, radius * 0.45)
        ctx.quadraticCurveTo(radius * 0.1, radius * 0.55, radius * 0.35, radius * 0.25)
        ctx.strokeStyle = '#f97316'
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.shadowColor = '#f97316'
        ctx.shadowBlur = 6
        ctx.strokeStyle = '#fbbf24'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.4)
        ctx.lineTo(-radius * 0.12, radius * 0.75)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.4)
        ctx.lineTo(radius * 0.12, radius * 0.75)
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.shadowColor = '#f97316'
        ctx.shadowBlur = 8
        ctx.fillStyle = '#fbbf24'
        ctx.beginPath()
        ctx.moveTo(-radius * 0.2, -radius * 0.7)
        ctx.quadraticCurveTo(-radius * 0.1, -radius * 0.85, 0, -radius * 0.75)
        ctx.quadraticCurveTo(radius * 0.1, -radius * 0.85, radius * 0.2, -radius * 0.7)
        ctx.fill()
        ctx.shadowBlur = 0
        break

      case 'ice':
        ctx.beginPath()
        ctx.moveTo(0, -radius * 0.85)
        ctx.bezierCurveTo(radius * 0.45, -radius * 0.85, radius * 0.8, -radius * 0.35, radius * 0.75, radius * 0.05)
        ctx.lineTo(radius * 0.65, radius * 0.4)
        ctx.lineTo(radius * 0.4, radius * 0.6)
        ctx.lineTo(0, radius * 0.68)
        ctx.lineTo(-radius * 0.4, radius * 0.6)
        ctx.lineTo(-radius * 0.65, radius * 0.4)
        ctx.lineTo(-radius * 0.75, radius * 0.05)
        ctx.bezierCurveTo(-radius * 0.8, -radius * 0.35, -radius * 0.45, -radius * 0.85, 0, -radius * 0.85)
        ctx.closePath()
        const icHeadGrad = ctx.createLinearGradient(0, -radius, 0, radius)
        icHeadGrad.addColorStop(0, '#fff')
        icHeadGrad.addColorStop(0.4, colors.body)
        icHeadGrad.addColorStop(1, colors.pattern)
        ctx.fillStyle = icHeadGrad
        ctx.fill()
        ctx.shadowColor = '#60a5fa'
        ctx.shadowBlur = 12
        ctx.strokeStyle = 'rgba(255,255,255,0.7)'
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.strokeStyle = 'rgba(255,255,255,0.35)'
        ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(-radius * 0.2, -radius * 0.7); ctx.lineTo(-radius * 0.35, -radius * 0.5); ctx.lineTo(-radius * 0.2, -radius * 0.3); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(radius * 0.2, -radius * 0.7); ctx.lineTo(radius * 0.35, -radius * 0.5); ctx.lineTo(radius * 0.2, -radius * 0.3); ctx.stroke()
        const icEyeOffset = radius * 0.35
        const icEyeRadius = radius * 0.13
        ctx.shadowColor = '#93c5fd'
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.ellipse(-icEyeOffset, -radius * 0.12, icEyeRadius * 0.85, icEyeRadius * 1.05, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#bfdbfe'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(-icEyeOffset, -radius * 0.12, icEyeRadius * 0.2, icEyeRadius * 0.75, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#1d4ed8'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(icEyeOffset, -radius * 0.12, icEyeRadius * 0.85, icEyeRadius * 1.05, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#bfdbfe'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(icEyeOffset, -radius * 0.12, icEyeRadius * 0.2, icEyeRadius * 0.75, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#1d4ed8'
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.fillStyle = '#eff6ff'
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(-radius * 0.15, -radius * 0.65, radius * 0.04, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(radius * 0.15, -radius * 0.65, radius * 0.04, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.moveTo(-radius * 0.3, radius * 0.25)
        ctx.quadraticCurveTo(0, radius * 0.45, radius * 0.3, radius * 0.25)
        ctx.strokeStyle = '#93c5fd'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.shadowColor = '#93c5fd'
        ctx.shadowBlur = 4
        ctx.strokeStyle = '#bfdbfe'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.4)
        ctx.lineTo(-radius * 0.1, radius * 0.7)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, radius * 0.4)
        ctx.lineTo(radius * 0.1, radius * 0.7)
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.shadowColor = '#93c5fd'
        ctx.shadowBlur = 6
        ctx.fillStyle = '#e0f2fe'
        ctx.globalAlpha = 0.7
        ctx.beginPath()
        ctx.moveTo(-radius * 0.25, -radius * 0.7)
        ctx.lineTo(-radius * 0.35, -radius * 0.95)
        ctx.lineTo(-radius * 0.1, -radius * 0.8)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(radius * 0.25, -radius * 0.7)
        ctx.lineTo(radius * 0.35, -radius * 0.95)
        ctx.lineTo(radius * 0.1, -radius * 0.8)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
        break
    }
  }

  /**
   * 绘制预览身体（同步主渲染六种具象风格）
   */
  drawPreviewBody(ctx, radius, styleId, colors, progress) {
    const alpha = 1 - progress * 0.4
    const taper = 1 - progress * 0.35
    const bw = radius * 0.8 * taper
    const bh = radius * 0.5 * taper
    
    switch (styleId) {
      case 'serpent':
        ctx.beginPath()
        ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
        const sBodyGrad = ctx.createLinearGradient(0, -bh, 0, bh)
        sBodyGrad.addColorStop(0, colors.body)
        sBodyGrad.addColorStop(1, colors.pattern)
        ctx.fillStyle = sBodyGrad
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 1
        ctx.globalAlpha = 0.4
        ctx.stroke()
        ctx.globalAlpha = 1
        const sw = bw * 0.35
        const sh = bh * 0.25
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 0.8
        ctx.globalAlpha = 0.3
        for (let s = -1; s <= 1; s += 2) {
          ctx.beginPath(); ctx.moveTo(s * sw * 0.5, -bh * 0.1); ctx.lineTo(0, -bh * 0.1 - sh); ctx.lineTo(-s * sw * 0.5, -bh * 0.1); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(s * sw * 0.5, bh * 0.1); ctx.lineTo(0, bh * 0.1 + sh); ctx.lineTo(-s * sw * 0.5, bh * 0.1); ctx.stroke()
        }
        ctx.globalAlpha = 1
        break
        
      case 'rainbow':
        const rbColors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
        const rbIndex = Math.floor(progress * rbColors.length * 3) % rbColors.length
        ctx.beginPath()
        ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
        ctx.fillStyle = rbColors[rbIndex]
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.globalAlpha = 0.3
        for (let i = -2; i <= 2; i++) {
          ctx.beginPath()
          ctx.ellipse(i * bw * 0.2, 0, bw * 0.15, bh * 0.4, 0, 0, Math.PI * 2)
          ctx.fillStyle = rbColors[(rbIndex + i + rbColors.length) % rbColors.length]
          ctx.fill()
        }
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
        break
        
      case 'crystal':
        ctx.beginPath()
        ctx.moveTo(0, -bh)
        ctx.lineTo(bw * 0.6, -bh * 0.4)
        ctx.lineTo(bw * 0.8, bh * 0.1)
        ctx.lineTo(bw * 0.4, bh * 0.5)
        ctx.lineTo(0, bh * 0.6)
        ctx.lineTo(-bw * 0.4, bh * 0.5)
        ctx.lineTo(-bw * 0.8, bh * 0.1)
        ctx.lineTo(-bw * 0.6, -bh * 0.4)
        ctx.closePath()
        const cBodyGrad = ctx.createLinearGradient(-bw, -bh, bw, bh)
        cBodyGrad.addColorStop(0, 'rgba(255,255,255,0.3)')
        cBodyGrad.addColorStop(0.4, colors.body)
        cBodyGrad.addColorStop(0.8, colors.pattern)
        cBodyGrad.addColorStop(1, 'rgba(255,255,255,0.2)')
        ctx.fillStyle = cBodyGrad
        ctx.globalAlpha = alpha * 0.8
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowColor = colors.body
        ctx.shadowBlur = 4
        ctx.strokeStyle = 'rgba(255,255,255,0.4)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.strokeStyle = 'rgba(255,255,255,0.2)'
        ctx.lineWidth = 0.5
        ctx.globalAlpha = 0.4
        ctx.beginPath(); ctx.moveTo(0, -bh); ctx.lineTo(0, bh * 0.6); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(-bw * 0.6, -bh * 0.4); ctx.lineTo(bw * 0.6, -bh * 0.4); ctx.stroke()
        ctx.globalAlpha = 1
        break
        
      case 'cyber':
        ctx.beginPath()
        ctx.moveTo(0, -bh)
        ctx.lineTo(bw * 0.7, -bh * 0.35)
        ctx.lineTo(bw * 0.7, bh * 0.35)
        ctx.lineTo(0, bh)
        ctx.lineTo(-bw * 0.7, bh * 0.35)
        ctx.lineTo(-bw * 0.7, -bh * 0.35)
        ctx.closePath()
        const cyBodyGrad = ctx.createLinearGradient(0, -bh, 0, bh)
        cyBodyGrad.addColorStop(0, colors.pattern)
        cyBodyGrad.addColorStop(0.3, colors.body)
        cyBodyGrad.addColorStop(0.7, colors.body)
        cyBodyGrad.addColorStop(1, colors.pattern)
        ctx.fillStyle = cyBodyGrad
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowColor = colors.pattern
        ctx.shadowBlur = 4
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 0.8
        ctx.globalAlpha = 0.5
        ctx.beginPath(); ctx.moveTo(-bw * 0.3, -bh * 0.2); ctx.lineTo(bw * 0.3, -bh * 0.2); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(-bw * 0.3, bh * 0.2); ctx.lineTo(bw * 0.3, bh * 0.2); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(-bw * 0.1, -bh * 0.2); ctx.lineTo(-bw * 0.1, bh * 0.2); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(bw * 0.1, -bh * 0.2); ctx.lineTo(bw * 0.1, bh * 0.2); ctx.stroke()
        ctx.globalAlpha = 1
        ctx.shadowColor = '#22d3ee'
        ctx.shadowBlur = 3
        ctx.fillStyle = '#22d3ee'
        ctx.beginPath(); ctx.arc(-bw * 0.3, 0, radius * 0.04, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath(); ctx.arc(bw * 0.3, 0, radius * 0.04, 0, Math.PI * 2); ctx.fill()
        ctx.shadowBlur = 0
        break
        
      case 'flame':
        ctx.beginPath()
        ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#1c1917'
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.strokeStyle = colors.pattern
        ctx.lineWidth = 1.5
        ctx.globalAlpha = 0.6
        ctx.stroke()
        ctx.globalAlpha = 1
        ctx.strokeStyle = colors.body
        ctx.lineWidth = 1.2
        ctx.globalAlpha = 0.7
        const crack = Math.sin(progress * Math.PI * 6) * bw * 0.2
        ctx.beginPath(); ctx.moveTo(-bw * 0.4, -bh * 0.2); ctx.quadraticCurveTo(-bw * 0.05, -bh * 0.35 + crack * 0.3, bw * 0.4, -bh * 0.2); ctx.stroke()
        ctx.globalAlpha = 1
        ctx.shadowColor = '#f97316'
        ctx.shadowBlur = 5
        ctx.fillStyle = colors.pattern
        ctx.globalAlpha = alpha * 0.3
        ctx.beginPath(); ctx.ellipse(0, 0, bw * 0.4, bh * 0.4, 0, 0, Math.PI * 2); ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
        ctx.shadowColor = '#f97316'
        ctx.shadowBlur = 4
        ctx.fillStyle = '#fbbf24'
        ctx.globalAlpha = alpha * 0.5
        ctx.beginPath()
        ctx.moveTo(-bw * 0.25, -bh * 0.2)
        ctx.lineTo(0, -bh * 0.65)
        ctx.lineTo(bw * 0.25, -bh * 0.2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
        break
        
      case 'ice':
        ctx.beginPath()
        ctx.ellipse(0, 0, bw, bh, 0, 0, Math.PI * 2)
        const iBodyGrad = ctx.createLinearGradient(0, -bh, 0, bh)
        iBodyGrad.addColorStop(0, 'rgba(255,255,255,0.7)')
        iBodyGrad.addColorStop(0.4, colors.body)
        iBodyGrad.addColorStop(1, colors.pattern)
        ctx.fillStyle = iBodyGrad
        ctx.globalAlpha = alpha * 0.8
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowColor = '#60a5fa'
        ctx.shadowBlur = 4
        ctx.strokeStyle = 'rgba(255,255,255,0.5)'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.strokeStyle = 'rgba(255,255,255,0.25)'
        ctx.lineWidth = 0.8
        for (let gi = -1; gi <= 1; gi += 2) {
          ctx.beginPath(); ctx.moveTo(gi * bw * 0.25, -bh * 0.15); ctx.lineTo(0, -bh * 0.45); ctx.lineTo(-gi * bw * 0.25, -bh * 0.15); ctx.stroke()
        }
        if (Math.floor(progress * 12) % 2 === 0) {
          ctx.shadowColor = '#93c5fd'
          ctx.shadowBlur = 4
          ctx.fillStyle = '#e0f2fe'
          ctx.globalAlpha = alpha * 0.4
          ctx.beginPath(); ctx.moveTo(-bw * 0.2, -bh * 0.3); ctx.lineTo(0, -bh * 0.7); ctx.lineTo(bw * 0.2, -bh * 0.3); ctx.fill()
          ctx.globalAlpha = 1
          ctx.shadowBlur = 0
        }
        break
    }
  }

  /**
   * 开始游戏
   */
  startGame() {
    // 初始化音频上下文（需要用户交互）
    this.soundManager.init()
    
    // 初始化音乐管理器（使用相同的音频上下文）
    this.musicManager.init(this.soundManager.audioContext)
    
    // 初始化移动端控制器
    this.mobileController.init(this)
    
    // 恢复音乐播放状态
    if (this.musicManager.isPlaying) {
      this.musicManager.play()
      this.musicPlay.innerHTML = '⏸'
    }
    this.musicTrackName.innerHTML = this.musicManager.getCurrentTrack().name
    this.volumeSlider.value = this.musicManager.volume * 100
    
    // 重置游戏状态
    this.gameState.reset()
    this.gameState.status = 'PLAYING'
    
    // 重置关卡管理器
    this.levelManager.reset()
    this.levelManager.updateLevelDisplay()
    
    // 设置蛇样式
    const style = this.snakeStyleManager.getCurrentStyle()
    const colors = this.snakeStyleManager.getCurrentColors()
    this.gameState.snake.setStyle(style)
    this.gameState.snake.setColors(colors)
    
    // 设置难度速度
    const difficulty = this.difficultyManager.getCurrentDifficulty()
    this.currentTickInterval = difficulty.initialSpeed
    
    // 更新难度显示
    if (this.difficultyElement) {
      this.difficultyElement.textContent = difficulty.icon + ' ' + difficulty.name
    }
    
    // 更新地图配置
    this.updateMapConfig()
    
    // 生成初始食物（使用当前关卡配置）
    const levelConfig = this.levelManager.getCurrentLevel()
    this.gameState.spawnFood(levelConfig)
    
    // 更新UI
    this.updateScore()
    this.menuScreen.style.display = 'none'
    this.gameOverScreen.style.display = 'none'
    this.gameScreen.style.display = 'flex'
    
    // 开始游戏循环
    if (!this.animationFrameId) {
      this.lastTime = performance.now()
      this.fpsLastTime = this.lastTime
      this.gameLoop()
    }
  }

  /**
   * 切换暂停状态
   */
  togglePause() {
    if (this.gameState.status === 'PLAYING') {
      this.gameState.status = 'PAUSED'
      this.pauseBtn.innerHTML = '▶️ 继续'
    } else if (this.gameState.status === 'PAUSED') {
      this.gameState.status = 'PLAYING'
      this.pauseBtn.innerHTML = '⏸️ 暂停'
    }
  }

  /**
   * 游戏结束
   */
  gameOver() {
    this.gameState.status = 'GAME_OVER'
    this.soundManager.playGameOver()
    
    // 更新最高分
    if (this.gameState.score > this.gameState.highScore) {
      this.gameState.highScore = this.gameState.score
      this.saveHighScore()
    }
    
    // 获取当前关卡
    const currentLevel = this.levelManager.getCurrentLevel().level
    
    // 计算获得的积分（1分=1积分）
    const pointsEarned = this.gameState.score
    
    // 添加积分
    this.pointsManager.addPoints(pointsEarned)
    
    // 更新成就统计
    this.achievementManager.updateStats(this.gameState.score, currentLevel)
    
    // 更新UI
    this.finalScoreElement.textContent = '最终得分: ' + this.gameState.score
    this.pointsEarnedElement.textContent = '获得积分: +' + pointsEarned
    this.gameScreen.style.display = 'none'
    this.gameOverScreen.style.display = 'flex'
    
    // 重置暂停按钮文本
    this.pauseBtn.innerHTML = '⏸️ 暂停'
  }

  /**
   * 游戏主循环
   */
  gameLoop() {
    const currentTime = performance.now()
    const deltaTime = currentTime - this.lastTime
    this.lastTime = currentTime
    
    // 计算FPS
    this.fpsAccumulator += deltaTime
    this.fpsFrameCount++
    if (this.fpsAccumulator >= 1000) {
      const fps = Math.round(this.fpsFrameCount * 1000 / this.fpsAccumulator)
      this.fpsElement.textContent = fps + ' FPS'
      this.fpsAccumulator = 0
      this.fpsFrameCount = 0
    }
    
    if (this.gameState.status === 'PLAYING') {
      // 检查是否正在关卡切换过渡
      if (this.levelManager.isTransitioning()) {
        this.levelManager.updateTransition()
      } else {
        // 累积时间用于控制游戏速度
        this.tickAccumulator += deltaTime
        
        // 获取当前难度和关卡配置
        const difficulty = this.difficultyManager.getCurrentDifficulty()
        const levelConfig = this.levelManager.getCurrentLevel()
        
        // 计算目标tick速度（考虑难度和关卡速度修正）
        const baseSpeed = difficulty.initialSpeed
        const speedIncrease = Math.min(this.gameState.score * difficulty.speedIncrement, baseSpeed - difficulty.minSpeed)
        let targetTickInterval = baseSpeed - speedIncrease
        
        // 应用关卡速度修正
        targetTickInterval /= levelConfig.speedModifier
        
        // 平滑速度过渡
        this.currentTickInterval += (targetTickInterval - this.currentTickInterval) * 0.1
        
        // 执行游戏逻辑
        while (this.tickAccumulator >= this.currentTickInterval) {
          this.updateGame()
          this.tickAccumulator -= this.currentTickInterval
          this.moveProgress = 0
        }
        
        // 更新移动进度
        this.moveProgress = this.tickAccumulator / this.currentTickInterval
      }
    }
    
    // 渲染游戏
    this.render()
    
    // 继续循环
    this.animationFrameId = requestAnimationFrame(() => this.gameLoop())
  }

  /**
   * 更新游戏状态
   */
  updateGame() {
    // 更新方向
    const newDirection = this.inputHandler.getDirection()
    if (newDirection) {
      this.gameState.snake.setDirection(newDirection)
    }
    
    // 移动蛇
    this.gameState.snake.move()
    
    // 碰撞检测
    if (this.gameState.checkCollision()) {
      this.gameOver()
      return
    }
    
    // 移动食物（如果食物会移动）
    if (this.gameState.food && this.gameState.food.speed > 0) {
      this.gameState.food.move(this.gameState.gridCols, this.gameState.gridRows)
      
      // 检查食物是否过期
      if (this.gameState.food.isExpired()) {
        const levelConfig = this.levelManager.getCurrentLevel()
        this.gameState.spawnFood(levelConfig)
      }
    }
    
    // 检查是否吃到食物
    if (this.gameState.checkFoodCollision()) {
      const levelConfig = this.levelManager.getCurrentLevel()
      this.gameState.snake.grow()
      this.gameState.score += levelConfig.foodScore
      
      // 检查关卡升级
      const levelUp = this.levelManager.checkLevelUp(this.gameState.score)
      
      // 生成新食物（使用当前关卡配置）
      const currentLevelConfig = this.levelManager.getCurrentLevel()
      this.gameState.spawnFood(currentLevelConfig)
      
      this.updateScore()
      this.soundManager.playEat()
      
      // 创建粒子效果
      const head = this.gameState.snake.segments[0]
      const cellSize = this.renderer.getCellSize()
      const x = head.x * cellSize + cellSize / 2
      const y = head.y * cellSize + cellSize / 2
      const colors = this.gameState.snake.colors
      this.particleSystem.createExplosion(x, y, colors.body)
      
      // 如果升级了关卡，创建额外的庆祝粒子效果
      if (levelUp) {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            this.particleSystem.createExplosion(
              this.canvas.width / 2 + (Math.random() - 0.5) * 100,
              this.canvas.height / 2 + (Math.random() - 0.5) * 100,
              '#ffd700'
            )
          }, i * 200)
        }
      }
    }
    
    // 更新粒子
    this.particleSystem.update()
  }

  /**
   * 渲染游戏
   */
  render() {
    // 将粒子系统传递给渲染器
    this.renderer.setParticleSystem(this.particleSystem)
    this.renderer.render(this.gameState, this.moveProgress)
    
    // 绘制关卡切换动画
    this.renderLevelTransition()
  }

  /**
   * 渲染关卡切换动画
   */
  renderLevelTransition() {
    if (!this.levelManager.isTransitioning()) return
    
    const ctx = this.renderer.ctx
    const levelConfig = this.levelManager.getTransitionLevelConfig()
    const progress = this.levelManager.getTransitionProgress()
    
    if (!levelConfig) return
    
    ctx.save()
    
    // 计算淡入淡出效果
    let alpha = 0
    if (progress < 0.3) {
      alpha = progress / 0.3
    } else if (progress < 0.7) {
      alpha = 1
    } else {
      alpha = 1 - (progress - 0.7) / 0.3
    }
    
    // 绘制背景遮罩
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.7})`
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    // 绘制关卡信息
    ctx.globalAlpha = alpha
    
    const centerX = this.canvas.width / 2
    const centerY = this.canvas.height / 2
    
    // 关卡图标
    ctx.font = `${this.renderer.getCellSize() * 2} Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    
    const iconY = centerY - this.renderer.getCellSize() * 1.5
    ctx.fillText(levelConfig.icon, centerX, iconY)
    
    // 关卡标题
    ctx.font = 'bold 1.5rem Arial'
    ctx.fillStyle = '#fff'
    ctx.fillText('关卡 ' + levelConfig.level, centerX, centerY)
    
    // 关卡名称
    ctx.font = '1rem Arial'
    ctx.fillStyle = '#ffd700'
    ctx.fillText(levelConfig.name, centerX, centerY + this.renderer.getCellSize() * 0.8)
    
    // 分数阈值提示
    ctx.font = '0.9rem Arial'
    ctx.fillStyle = '#aaa'
    ctx.fillText(`目标分数: ${levelConfig.scoreThreshold}`, centerX, centerY + this.renderer.getCellSize() * 1.8)
    
    ctx.restore()
  }

  /**
   * 更新分数显示
   */
  updateScore() {
    this.scoreElement.textContent = this.gameState.score
    this.highScoreElement.textContent = this.gameState.highScore
  }

  /**
   * 更新积分显示
   */
  updatePointsDisplay() {
    const points = this.pointsManager.getPoints()
    if (this.pointsDisplayElement) {
      this.pointsDisplayElement.textContent = points
    }
    if (this.shopPointsElement) {
      this.shopPointsElement.textContent = points
    }
  }

  /**
   * 更新地图配置
   */
  updateMapConfig() {
    const mapId = this.pointsManager.getCurrentMap()
    const mapConfig = MAP_CONFIGS.find(m => m.id === mapId)
    if (mapConfig) {
      this.renderer.setMapConfig(mapConfig)
    }
  }

  /**
   * 打开积分商城
   */
  openShop() {
    this.shopModal.style.display = 'flex'
    this.renderShopMaps()
    this.renderShopHistory()
  }

  /**
   * 关闭积分商城
   */
  closeShop() {
    this.shopModal.style.display = 'none'
  }

  /**
   * 渲染商城地图列表
   */
  renderShopMaps() {
    this.mapsGrid.innerHTML = ''
    
    MAP_CONFIGS.forEach(mapConfig => {
      const isUnlocked = this.pointsManager.isMapUnlocked(mapConfig.id)
      const isCurrent = this.pointsManager.getCurrentMap() === mapConfig.id
      const canAfford = this.pointsManager.getPoints() >= mapConfig.pointsCost
      
      const card = document.createElement('div')
      card.className = `map-card ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''}`
      card.style.position = 'relative'
      
      card.innerHTML = `
        <div class="map-preview" style="background: linear-gradient(135deg, ${mapConfig.background[0]} 0%, ${mapConfig.background[1]} 100%);">
          <span class="map-icon" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">${mapConfig.icon}</span>
        </div>
        <div class="map-name">${mapConfig.name}</div>
        <div class="map-desc">${mapConfig.description}</div>
        <div class="map-cost">
          <span>💰</span>
          <span>${mapConfig.pointsCost}</span>
        </div>
      `
      
      card.addEventListener('click', () => {
        this.handleMapClick(mapConfig.id)
      })
      
      this.mapsGrid.appendChild(card)
    })
  }

  /**
   * 处理地图点击
   */
  handleMapClick(mapId) {
    const mapConfig = MAP_CONFIGS.find(m => m.id === mapId)
    if (!mapConfig) return
    
    const result = this.pointsManager.exchangeMap(mapId)
    
    if (result.success) {
      this.soundManager.playLevelUp()
      this.updateMapConfig()
      this.renderShopMaps()
      this.renderShopHistory()
      this.showNotification(result.message)
    } else {
      this.soundManager.playError()
      this.showNotification(result.message)
    }
  }

  /**
   * 渲染兑换记录
   */
  renderShopHistory() {
    const history = this.pointsManager.getExchangeHistory()
    
    if (history.length === 0) {
      this.historyList.innerHTML = '<p class="no-history">暂无兑换记录</p>'
      return
    }
    
    this.historyList.innerHTML = ''
    
    history.forEach(record => {
      const item = document.createElement('div')
      item.className = 'history-item'
      
      const date = new Date(record.timestamp)
      const timeStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
      
      item.innerHTML = `
        <div>
          <div class="history-name">${record.name}</div>
          <div class="history-time">${timeStr}</div>
        </div>
        <div class="history-cost">-${record.cost}</div>
      `
      
      this.historyList.appendChild(item)
    })
  }

  /**
   * 显示成就弹窗
   */
  showAchievementModal(achievements) {
    this.achievementBody.innerHTML = ''
    
    achievements.forEach(achievement => {
      const item = document.createElement('div')
      item.className = 'achievement-item'
      item.innerHTML = `
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-name">${achievement.name}</div>
        <div class="achievement-desc">${achievement.description}</div>
        <div class="achievement-reward">+${achievement.pointsReward} 积分</div>
      `
      this.achievementBody.appendChild(item)
    })
    
    this.achievementModal.style.display = 'flex'
    this.soundManager.playLevelUp()
  }

  /**
   * 关闭成就弹窗
   */
  closeAchievementModal() {
    this.achievementModal.style.display = 'none'
  }

  /**
   * 显示通知Toast
   */
  showNotification(message) {
    this.toastMessage.textContent = message
    this.notificationToast.style.display = 'block'
    
    setTimeout(() => {
      this.notificationToast.style.display = 'none'
    }, 2000)
  }

  /**
   * 获取游戏根 URL
   */
  getGameUrl() {
    var path = window.location.pathname
    var basePath = path.substring(0, path.lastIndexOf('/') + 1)
    return window.location.origin + basePath
  }

  /**
   * 打开分享弹窗
   */
  openShare() {
    this.shareModal.style.display = 'flex'
    this.shareQrCode.innerHTML = ''
    var url = this.getGameUrl()
    this.shareUrlDisplay.textContent = url
    if (typeof QRCode !== 'undefined') {
      new QRCode(this.shareQrCode, {
        text: url,
        width: 180,
        height: 180,
        colorDark: '#1a1a2e',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    }
  }

  /**
   * 关闭分享弹窗
   */
  closeShare() {
    this.shareModal.style.display = 'none'
  }

  /**
   * 复制游戏链接
   */
  copyGameUrl() {
    var url = this.getGameUrl()
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function() {
        this.showNotification('✅ 链接已复制')
      }.bind(this)).catch(function() {
        this.fallbackCopyUrl(url)
      }.bind(this))
    } else {
      this.fallbackCopyUrl(url)
    }
  }

  fallbackCopyUrl(url) {
    var textarea = document.createElement('textarea')
    textarea.value = url
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
      this.showNotification('✅ 链接已复制')
    } catch (e) {
      this.showNotification('❌ 复制失败，请手动复制')
    }
    document.body.removeChild(textarea)
  }

  /**
   * 保存最高分到本地存储
   */
  saveHighScore() {
    localStorage.setItem('snakeHighScore', this.gameState.highScore.toString())
  }

  /**
   * 加载最高分
   */
  loadHighScore() {
    const saved = localStorage.getItem('snakeHighScore')
    if (saved) {
      this.gameState.highScore = parseInt(saved, 10)
      this.highScoreElement.textContent = this.gameState.highScore
    }
  }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
  window.gameController = new GameController()
})
