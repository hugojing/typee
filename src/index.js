'use strict'

export default function typee(obj) {
  return Object.prototype.toString.call(obj).split(' ')[1].replace(']', '')
}
