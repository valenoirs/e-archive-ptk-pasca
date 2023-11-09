'use strict';
const a3_0x296231 = a3_0x3b1c;
(function (_0x5a4808, _0x4cd28f) {
    const _0x29f5c0 = a3_0x3b1c, _0x1bc613 = _0x5a4808();
    while (!![]) {
        try {
            const _0x396b99 = -parseInt(_0x29f5c0(0x128)) / 0x1 * (parseInt(_0x29f5c0(0x112)) / 0x2) + -parseInt(_0x29f5c0(0x134)) / 0x3 * (-parseInt(_0x29f5c0(0x114)) / 0x4) + -parseInt(_0x29f5c0(0x11c)) / 0x5 + parseInt(_0x29f5c0(0x13c)) / 0x6 * (-parseInt(_0x29f5c0(0x10f)) / 0x7) + parseInt(_0x29f5c0(0x123)) / 0x8 * (-parseInt(_0x29f5c0(0x133)) / 0x9) + -parseInt(_0x29f5c0(0x138)) / 0xa + parseInt(_0x29f5c0(0x12b)) / 0xb;
            if (_0x396b99 === _0x4cd28f)
                break;
            else
                _0x1bc613['push'](_0x1bc613['shift']());
        } catch (_0x386ffb) {
            _0x1bc613['push'](_0x1bc613['shift']());
        }
    }
}(a3_0x28e8, 0x1e8ad));
var __importDefault = this && this['__importDefault'] || function (_0xa40410) {
    return _0xa40410 && _0xa40410['__esModule'] ? _0xa40410 : { 'default': _0xa40410 };
};
Object[a3_0x296231(0x135)](exports, a3_0x296231(0x113), { 'value': !![] });
function a3_0x3b1c(_0x252338, _0x432be6) {
    const _0x28e858 = a3_0x28e8();
    return a3_0x3b1c = function (_0x3b1c23, _0x3b2209) {
        _0x3b1c23 = _0x3b1c23 - 0x108;
        let _0x561058 = _0x28e858[_0x3b1c23];
        return _0x561058;
    }, a3_0x3b1c(_0x252338, _0x432be6);
}
function a3_0x28e8() {
    const _0x19cad4 = [
        'log',
        '_method',
        '[server]:\x20ERR!\x20failed-connecting-to-mongo-database',
        '1323UpEVwC',
        '9DyWADR',
        'defineProperty',
        'locals',
        'express-ejs-layouts',
        '325480JVCgAO',
        'router',
        'host',
        'join',
        '6ueiPhF',
        './routes/surat',
        'SESSION_LIFETIME',
        'views',
        'get',
        'use',
        'connect-flash',
        'error',
        'urlencoded',
        'MONGO_URI',
        '493157NmjupD',
        'send',
        'express',
        '2klLkYy',
        '__esModule',
        '26192lwWraM',
        'connect',
        'SESSION_SECRET',
        'user',
        './routes/user',
        'status',
        './routes/view',
        '[server]:\x20OK!\x20',
        '846540FbsZJk',
        'NotFound',
        'catch',
        'valenoirs',
        'aGKmy',
        'set',
        'json',
        '8168HjeMCn',
        'mongoose',
        '[server]:\x20OK!\x20server\x20running\x20at\x20port\x20',
        'default',
        'headers',
        '92071HWvSBL',
        'session',
        './config/config',
        '6819142KeWIkF',
        'No\x20API\x20endpoint\x20found.',
        'PORT',
        'listen',
        'static'
    ];
    a3_0x28e8 = function () {
        return _0x19cad4;
    };
    return a3_0x28e8();
}
const config_1 = __importDefault(require(a3_0x296231(0x12a))), express_1 = __importDefault(require(a3_0x296231(0x111))), mongoose_1 = require(a3_0x296231(0x124)), path_1 = __importDefault(require('path')), method_override_1 = __importDefault(require('method-override')), express_ejs_layouts_1 = __importDefault(require(a3_0x296231(0x137))), express_session_1 = __importDefault(require('express-session')), connect_flash_1 = __importDefault(require(a3_0x296231(0x10b))), view_1 = require(a3_0x296231(0x11a)), user_1 = require(a3_0x296231(0x118)), surat_1 = require(a3_0x296231(0x13d)), app = (0x0, express_1['default'])(), port = config_1[a3_0x296231(0x126)][a3_0x296231(0x12d)];
(0x0, mongoose_1[a3_0x296231(0x115)])(config_1[a3_0x296231(0x126)][a3_0x296231(0x10e)])['then'](() => {
    console['log']('[server]:\x20OK!\x20successfully-connected-to-mongodb');
})[a3_0x296231(0x11e)](_0x25a2dc => {
    const _0x45a223 = a3_0x296231;
    console[_0x45a223(0x10c)](_0x45a223(0x132), _0x25a2dc);
}), app['use']((0x0, express_session_1[a3_0x296231(0x126)])({
    'secret': config_1['default'][a3_0x296231(0x116)],
    'resave': ![],
    'saveUninitialized': !![],
    'cookie': { 'maxAge': config_1[a3_0x296231(0x126)][a3_0x296231(0x13e)] }
})), app[a3_0x296231(0x10a)](express_1[a3_0x296231(0x126)][a3_0x296231(0x10d)]({ 'extended': !![] })), app[a3_0x296231(0x10a)](express_1[a3_0x296231(0x126)][a3_0x296231(0x122)]()), app[a3_0x296231(0x10a)](express_1[a3_0x296231(0x126)][a3_0x296231(0x12f)](path_1[a3_0x296231(0x126)]['join'](__dirname, 'public'))), app['use']((0x0, method_override_1[a3_0x296231(0x126)])(a3_0x296231(0x131))), app[a3_0x296231(0x10a)]((0x0, connect_flash_1[a3_0x296231(0x126)])()), app[a3_0x296231(0x10a)]((_0x3a1c2c, _0x1195c1, _0x20d230) => {
    const _0x3ef81a = a3_0x296231;
    _0x3a1c2c['session']['user'] && (_0x3ef81a(0x120) !== _0x3ef81a(0x120) ? (_0x2d29e3[_0x3ef81a(0x129)][_0x3ef81a(0x117)] && (_0x139ea3[_0x3ef81a(0x136)][_0x3ef81a(0x117)] = _0x1698fc[_0x3ef81a(0x129)]['user']), _0x29785d()) : _0x1195c1[_0x3ef81a(0x136)][_0x3ef81a(0x117)] = _0x3a1c2c['session'][_0x3ef81a(0x117)]), _0x20d230();
}), app['use'](express_ejs_layouts_1[a3_0x296231(0x126)]), app[a3_0x296231(0x121)](a3_0x296231(0x108), path_1[a3_0x296231(0x126)][a3_0x296231(0x13b)](__dirname, 'views')), app[a3_0x296231(0x121)]('view\x20engine', 'ejs'), app[a3_0x296231(0x10a)]('/', view_1[a3_0x296231(0x139)]), app['use']('/user', user_1['router']), app[a3_0x296231(0x10a)]('/surat', surat_1[a3_0x296231(0x139)]), app[a3_0x296231(0x109)]('/ping', (_0x58ddf8, _0x106341) => {
    const _0x14a5d9 = a3_0x296231;
    return console[_0x14a5d9(0x130)](_0x14a5d9(0x11b) + _0x58ddf8[_0x14a5d9(0x127)][_0x14a5d9(0x13a)] + '\x20pinging\x20the\x20server'), _0x106341[_0x14a5d9(0x119)](0xc8)[_0x14a5d9(0x110)]({
        'success': !![],
        'status': 0xc8,
        'data': { 'message': _0x14a5d9(0x11f) }
    });
}), app[a3_0x296231(0x10a)]('/', (_0x8a7ffe, _0x278d5e) => {
    const _0x3f274c = a3_0x296231;
    return _0x278d5e[_0x3f274c(0x119)](0x194)['send']({
        'error': !![],
        'status': 0x194,
        'type': _0x3f274c(0x11d),
        'data': { 'message': _0x3f274c(0x12c) }
    });
}), app[a3_0x296231(0x12e)](port, () => {
    const _0x2f1302 = a3_0x296231;
    console[_0x2f1302(0x130)](_0x2f1302(0x125) + port);
});