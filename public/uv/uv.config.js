/*global Ultraviolet*/
self.__uv$config = {
    prefix: "/uv/",
    bare: "/b/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "sw.js",
};
