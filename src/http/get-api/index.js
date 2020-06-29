// learn more about HTTP functions here: https://arc.codes/primitives/http
let arc = require('@architect/functions')


exports.handler = async function http (req) {
  let env = process.env
  console.log(env.ARC_STATIC_PREFIX)
  
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `praise cage`
  }
}