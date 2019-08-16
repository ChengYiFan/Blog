/**
 * 如何准确判断JS数据类型？
 *
 * typeof 判断基本数据类型,无法准确判断复杂数据类型
 * instanceof 判断复杂数据类型,无法准确判断基本数据类型
 *
 */


/**
 * isComplex判断是否是复杂数据类型，如果是返回true,否则返回false
 * @param {*} data 需要被判断类型的数据
 */
function isComplex(data) {
  if (data && (typeof data === 'object' || typeof data === 'function')) {
    return true;
  }
  return false;
}
