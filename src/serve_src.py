from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import mimetypes

mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("text/javascript", ".mjs")
mimetypes.add_type("application/wasm", ".wasm")

class Handler(SimpleHTTPRequestHandler):
    pass

if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 8080), Handler).serve_forever()
