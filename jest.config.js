module.exports = {
  testMatch: ['**/__tests__/*.test.js'],
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
    // 用vue-jest 处理vue文件
    '.*\\.(vue)$': 'vue-jest',
        // 用babel-jest 处理js
        '.*\\.(js)$': 'babel-jest'
    }
};
