// learn more about http functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
  return {
    headers: { 'content-type': 'text/html; charset=utf8' },
    body: '<b>thanks for submitting the form!</b>'
  }
}