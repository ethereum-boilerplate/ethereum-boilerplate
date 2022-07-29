export const getGameWidth = (scene) => scene.game.scale.width;

export const getGameHeight = (scene) => scene.game.scale.height;

/**
 * Get a fixed width/height size relative to the games dimensions
 * @param {number} size - Size of element
 * @param {scene} scene - Current scene
 * @returns {number} Number representing the fixed size relative to the games dimensions
 */
export const getRelative = (size, scene) =>
  (getGameHeight(scene) * size) / 1080;
