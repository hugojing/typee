'use strict'

export default function typee(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
