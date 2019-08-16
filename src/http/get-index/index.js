// learn more about http functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
  return {
    headers: { 'content-type': 'text/html; charset=utf8' },
    body: `<h1>Fill in a name below</h1>
    
    <form action="/form" method="post">
      <label>Name</label>
      <input name="name" value="alex"/>
      <button>Tell me your name</button>
    </form>
    
    `
  }
}