export function addClass(el, className) {
  //  if (hasClass(el, className)) {
    //    return
   // }

    let newClass = el.className.split(' ')
    newClass.push(className)
    newClass.splice(0,1) // remove the first space
    el.className = newClass.join(' ')
}

// export function hasClass(el, className) {
//     let reg = ('(^|\\s)') + className + '(\\s|$)'   
//     return false // reg.test(el.className)
// }