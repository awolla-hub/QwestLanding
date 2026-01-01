// Babel config для Next.js - переопределяет корневой babel.config.js
// Next.js должен использовать только этот файл, а не корневой с react-native-reanimated
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["next/babel"],
    // Явно не используем react-native-reanimated/plugin
    plugins: [],
  };
};

